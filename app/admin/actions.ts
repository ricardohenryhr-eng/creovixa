'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { requireAdmin } from '@/lib/supabase/admin-guard'
import { INTERPRETER_STATUSES, type InterpreterStatus } from '@/lib/interpreters'

export async function signOutAction() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/admin/login')
}

type ActionResult = { ok: boolean; error?: string }

export async function createInterpreterAction(
  formData: FormData,
): Promise<ActionResult> {
  const { supabase } = await requireAdmin()

  const fullName = String(formData.get('full_name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  if (!fullName || !email) {
    return { ok: false, error: 'Name and email are required.' }
  }

  const status = String(formData.get('status') ?? 'New Applicant')
  const safeStatus = INTERPRETER_STATUSES.includes(status as InterpreterStatus)
    ? status
    : 'New Applicant'

  const { error } = await supabase.from('interpreters').insert({
    full_name: fullName,
    email,
    phone: emptyToNull(formData.get('phone')),
    language_pairs: emptyToNull(formData.get('language_pairs')),
    state: emptyToNull(formData.get('state')),
    availability: emptyToNull(formData.get('availability')),
    experience: emptyToNull(formData.get('experience')),
    modality: emptyToNull(formData.get('modality')),
    location: emptyToNull(formData.get('location')),
    certifications: emptyToNull(formData.get('certifications')),
    notes: emptyToNull(formData.get('notes')),
    status: safeStatus,
    source: 'manual',
  })

  if (error) {
    console.log('[v0] createInterpreter error:', error.message)
    return { ok: false, error: 'Could not create the interpreter record.' }
  }

  revalidatePath('/admin')
  return { ok: true }
}

export async function updateInterpreterAction(
  id: string,
  formData: FormData,
): Promise<ActionResult> {
  const { supabase } = await requireAdmin()

  const fullName = String(formData.get('full_name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  if (!fullName || !email) {
    return { ok: false, error: 'Name and email are required.' }
  }

  const status = String(formData.get('status') ?? 'New Applicant')
  const safeStatus = INTERPRETER_STATUSES.includes(status as InterpreterStatus)
    ? status
    : 'New Applicant'

  const { error } = await supabase
    .from('interpreters')
    .update({
      full_name: fullName,
      email,
      phone: emptyToNull(formData.get('phone')),
      language_pairs: emptyToNull(formData.get('language_pairs')),
      state: emptyToNull(formData.get('state')),
      availability: emptyToNull(formData.get('availability')),
      experience: emptyToNull(formData.get('experience')),
      modality: emptyToNull(formData.get('modality')),
      location: emptyToNull(formData.get('location')),
      certifications: emptyToNull(formData.get('certifications')),
      notes: emptyToNull(formData.get('notes')),
      status: safeStatus,
    })
    .eq('id', id)

  if (error) {
    console.log('[v0] updateInterpreter error:', error.message)
    return { ok: false, error: 'Could not update the interpreter record.' }
  }

  revalidatePath('/admin')
  revalidatePath(`/admin/interpreters/${id}`)
  return { ok: true }
}

export async function updateStatusAction(
  id: string,
  status: string,
): Promise<ActionResult> {
  const { supabase } = await requireAdmin()
  if (!INTERPRETER_STATUSES.includes(status as InterpreterStatus)) {
    return { ok: false, error: 'Invalid status.' }
  }
  const { error } = await supabase
    .from('interpreters')
    .update({ status })
    .eq('id', id)
  if (error) return { ok: false, error: 'Could not update status.' }
  revalidatePath('/admin')
  revalidatePath(`/admin/interpreters/${id}`)
  return { ok: true }
}

export async function updateNotesAction(
  id: string,
  notes: string,
): Promise<ActionResult> {
  const { supabase } = await requireAdmin()
  const { error } = await supabase
    .from('interpreters')
    .update({ notes: notes.trim() || null })
    .eq('id', id)
  if (error) return { ok: false, error: 'Could not save notes.' }
  revalidatePath(`/admin/interpreters/${id}`)
  return { ok: true }
}

export async function deleteInterpreterAction(id: string): Promise<void> {
  const { supabase } = await requireAdmin()

  // Remove the resume file first (if any) so we don't orphan storage objects.
  const { data: record } = await supabase
    .from('interpreters')
    .select('resume_path')
    .eq('id', id)
    .single()

  if (record?.resume_path) {
    await supabase.storage.from('resumes').remove([record.resume_path])
  }

  await supabase.from('interpreters').delete().eq('id', id)
  revalidatePath('/admin')
  redirect('/admin')
}

export async function uploadResumeAction(
  id: string,
  formData: FormData,
): Promise<ActionResult> {
  const { supabase } = await requireAdmin()
  const file = formData.get('resume')

  if (!(file instanceof File) || file.size === 0) {
    return { ok: false, error: 'Please choose a file to upload.' }
  }
  if (file.size > 5 * 1024 * 1024) {
    return { ok: false, error: 'File must be 5MB or smaller.' }
  }

  const ext = file.name.split('.').pop()?.toLowerCase() ?? 'pdf'
  const path = `${id}/${Date.now()}.${ext}`

  const { error: uploadErr } = await supabase.storage
    .from('resumes')
    .upload(path, file, {
      contentType: file.type || 'application/octet-stream',
      upsert: false,
    })

  if (uploadErr) {
    console.log('[v0] resume upload error:', uploadErr.message)
    return { ok: false, error: 'Could not upload the resume.' }
  }

  // Replace any previous resume reference.
  const { data: prev } = await supabase
    .from('interpreters')
    .select('resume_path')
    .eq('id', id)
    .single()

  if (prev?.resume_path && prev.resume_path !== path) {
    await supabase.storage.from('resumes').remove([prev.resume_path])
  }

  await supabase
    .from('interpreters')
    .update({ resume_path: path })
    .eq('id', id)

  revalidatePath(`/admin/interpreters/${id}`)
  return { ok: true }
}

/** Creates a short-lived signed URL for a stored resume. */
export async function getResumeUrlAction(
  path: string,
): Promise<{ url?: string; error?: string }> {
  const { supabase } = await requireAdmin()
  const { data, error } = await supabase.storage
    .from('resumes')
    .createSignedUrl(path, 60)
  if (error || !data) return { error: 'Could not open the resume.' }
  return { url: data.signedUrl }
}

function emptyToNull(value: FormDataEntryValue | null): string | null {
  const str = String(value ?? '').trim()
  return str.length > 0 ? str : null
}
