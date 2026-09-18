import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createServiceClient } from '@/lib/supabase/service'

export const runtime = 'nodejs'

const MAX_RESUME_BYTES = 5 * 1024 * 1024 // 5MB
const TO_EMAIL = ['info@creovixa.com', 'recruitement@creovixa.com']
const FROM_EMAIL = 'Creovixa Applications <no-reply@creovixa.com>'
const FROM_RECRUITMENT = 'Creovixa Recruitment Team <recruitement@creovixa.com>'
const SITE_URL = 'https://www.creovixa.com'
const LOGO_URL = `${SITE_URL}/creovixa-logo.png`

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[v0] RESEND_API_KEY is not configured')
    return NextResponse.json(
      { error: 'Email delivery is not configured.' },
      { status: 500 },
    )
  }

  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return NextResponse.json(
      { error: 'Invalid form submission.' },
      { status: 400 },
    )
  }

  const fields = {
    fullName: (formData.get('fullName') as string | null)?.trim() ?? '',
    email: (formData.get('email') as string | null)?.trim() ?? '',
    phone: (formData.get('phone') as string | null)?.trim() ?? '',
    languages: (formData.get('languages') as string | null)?.trim() ?? '',
    experience: (formData.get('experience') as string | null)?.trim() ?? '',
    modality: (formData.get('modality') as string | null)?.trim() ?? '',
    location: (formData.get('location') as string | null)?.trim() ?? '',
    availability: (formData.get('availability') as string | null)?.trim() ?? '',
    certifications:
      (formData.get('certifications') as string | null)?.trim() ?? '',
  }

  if (!fields.fullName || !fields.email || !fields.languages) {
    return NextResponse.json(
      { error: 'Please complete the required fields.' },
      { status: 400 },
    )
  }

  // Optional résumé attachment
  const attachments: { filename: string; content: Buffer }[] = []
  let resumeFile: File | null = null
  let resumeBuffer: Buffer | null = null
  const resume = formData.get('resume')
  if (resume && resume instanceof File && resume.size > 0) {
    if (resume.size > MAX_RESUME_BYTES) {
      return NextResponse.json(
        { error: 'Résumé exceeds the 5MB limit.' },
        { status: 400 },
      )
    }
    const buffer = Buffer.from(await resume.arrayBuffer())
    resumeFile = resume
    resumeBuffer = buffer
    attachments.push({ filename: resume.name || 'resume', content: buffer })
  }

  const rows: { label: string; value: string }[] = [
    { label: 'Full name', value: fields.fullName },
    { label: 'Email', value: fields.email },
    { label: 'Phone', value: fields.phone || '—' },
    { label: 'Language pairs', value: fields.languages },
    { label: 'Years of experience', value: fields.experience || '—' },
    { label: 'Preferred modality', value: fields.modality || '—' },
    { label: 'Location & time zone', value: fields.location || '—' },
    { label: 'Availability', value: fields.availability || '—' },
    {
      label: 'Certifications & specializations',
      value: fields.certifications || '—',
    },
    {
      label: 'Résumé attached',
      value: attachments.length > 0 ? 'Yes' : 'No file uploaded',
    },
  ]

  const html = `
    <div style="font-family: system-ui, -apple-system, sans-serif; color: #1a1a1a;">
      <h2 style="margin:0 0 16px;">New interpreter application</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        ${rows
          .map(
            (row) => `
          <tr>
            <td style="padding:8px 12px; border:1px solid #e5e5e5; background:#f7f7f7; font-weight:600; vertical-align:top; width:40%;">${escapeHtml(
              row.label,
            )}</td>
            <td style="padding:8px 12px; border:1px solid #e5e5e5; white-space:pre-wrap;">${escapeHtml(
              row.value,
            )}</td>
          </tr>`,
          )
          .join('')}
      </table>
    </div>
  `

  const text = rows.map((row) => `${row.label}: ${row.value}`).join('\n')

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: fields.email,
    subject: `New interpreter application — ${fields.fullName}`,
    html,
    text,
    attachments: attachments.length > 0 ? attachments : undefined,
  })

  if (error) {
    console.log('[v0] Resend error:', error)
    return NextResponse.json(
      { error: 'Failed to send application. Please try again.' },
      { status: 502 },
    )
  }

  // Best-effort: send the applicant a branded confirmation email. A failure
  // here must never fail the submission, since the notification above (the
  // primary delivery path) already succeeded.
  try {
    const { error: confirmError } = await resend.emails.send({
      from: FROM_RECRUITMENT,
      to: fields.email,
      replyTo: 'recruitement@creovixa.com',
      subject: 'Application Received – Creovixa Language Services',
      html: buildApplicantConfirmationHtml(),
      text: buildApplicantConfirmationText(),
    })
    if (confirmError) {
      console.log('[v0] Applicant confirmation email error:', confirmError)
    }
  } catch (err) {
    console.log(
      '[v0] Applicant confirmation unexpected error:',
      err instanceof Error ? err.message : String(err),
    )
  }

  // Best-effort: also record the applicant in the admin interpreter database.
  // The email above is the primary delivery path, so DB/storage issues here
  // must never fail the applicant's submission.
  await saveApplicantRecord(fields, resumeFile, resumeBuffer)

  return NextResponse.json({ ok: true })
}

function buildApplicantConfirmationHtml() {
  return `
  <div style="margin:0; padding:0; background-color:#f4f5f7;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background-color:#ffffff; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden;">
            <!-- Header with logo top right -->
            <tr>
              <td style="padding:24px 32px; border-bottom:1px solid #eef0f3;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="right" style="vertical-align:middle;">
                      <img src="${LOGO_URL}" alt="Creovixa Language Services" width="180" style="display:inline-block; width:180px; max-width:60%; height:auto;" />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Body -->
            <tr>
              <td style="padding:32px; font-family:'Segoe UI', system-ui, -apple-system, Arial, sans-serif; color:#1f2937; font-size:15px; line-height:1.65;">
                <h1 style="margin:0 0 20px; font-size:20px; font-weight:700; color:#0f172a;">Application Received</h1>
                <p style="margin:0 0 16px;">Dear Applicant,</p>
                <p style="margin:0 0 16px;">Thank you for your interest in joining Creovixa Language Services.</p>
                <p style="margin:0 0 16px;">We have successfully received your application and supporting documents. Our recruitment team will carefully review your qualifications.</p>
                <p style="margin:0 0 16px;">If your profile matches our current opportunities, we will contact you regarding the next steps.</p>
                <p style="margin:24px 0 4px;">Best regards,</p>
                <p style="margin:0; font-weight:600; color:#0f172a;">Creovixa Recruitment Team</p>
                <p style="margin:4px 0 0;">
                  <a href="mailto:recruitement@creovixa.com" style="color:#2563eb; text-decoration:none;">recruitement@creovixa.com</a>
                </p>
                <p style="margin:2px 0 0;">
                  <a href="${SITE_URL}" style="color:#2563eb; text-decoration:none;">www.creovixa.com</a>
                </p>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="padding:18px 32px; background-color:#0f172a; font-family:'Segoe UI', system-ui, -apple-system, Arial, sans-serif;">
                <p style="margin:0; font-size:12px; color:#cbd5e1;">© ${new Date().getFullYear()} Creovixa Language Services. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
  `
}

function buildApplicantConfirmationText() {
  return [
    'Dear Applicant,',
    '',
    'Thank you for your interest in joining Creovixa Language Services.',
    '',
    'We have successfully received your application and supporting documents. Our recruitment team will carefully review your qualifications.',
    '',
    'If your profile matches our current opportunities, we will contact you regarding the next steps.',
    '',
    'Best regards,',
    '',
    'Creovixa Recruitment Team',
    'recruitement@creovixa.com',
    'www.creovixa.com',
  ].join('\n')
}

async function saveApplicantRecord(
  fields: {
    fullName: string
    email: string
    phone: string
    languages: string
    experience: string
    modality: string
    location: string
    availability: string
    certifications: string
  },
  resumeFile: File | null,
  resumeBuffer: Buffer | null,
) {
  try {
    const supabase = createServiceClient()
    if (!supabase) {
      console.log('[v0] Service client unavailable; skipping applicant record')
      return
    }

    const { data: inserted, error: insertError } = await supabase
      .from('interpreters')
      .insert({
        full_name: fields.fullName,
        email: fields.email,
        phone: fields.phone || null,
        language_pairs: fields.languages || null,
        availability: fields.availability || null,
        experience: fields.experience || null,
        modality: fields.modality || null,
        location: fields.location || null,
        certifications: fields.certifications || null,
        status: 'New Applicant',
        source: 'application_form',
      })
      .select('id')
      .single()

    if (insertError || !inserted) {
      console.log('[v0] Applicant record insert error:', insertError?.message)
      return
    }

    if (resumeFile && resumeBuffer) {
      const ext = resumeFile.name.split('.').pop()?.toLowerCase() ?? 'pdf'
      const path = `${inserted.id}/${Date.now()}.${ext}`
      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(path, resumeBuffer, {
          contentType: resumeFile.type || 'application/octet-stream',
          upsert: false,
        })

      if (uploadError) {
        console.log('[v0] Applicant resume upload error:', uploadError.message)
      } else {
        await supabase
          .from('interpreters')
          .update({ resume_path: path })
          .eq('id', inserted.id)
      }
    }
  } catch (err) {
    console.log(
      '[v0] saveApplicantRecord unexpected error:',
      err instanceof Error ? err.message : String(err),
    )
  }
}
