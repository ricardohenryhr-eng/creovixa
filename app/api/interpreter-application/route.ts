import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const MAX_RESUME_BYTES = 5 * 1024 * 1024 // 5MB
const TO_EMAIL = process.env.TO_EMAIL || 'info@creovixa.com'
const FROM_EMAIL = 'Creovixa Applications <no-reply@creovixa.com>'

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
  const resume = formData.get('resume')
  if (resume && resume instanceof File && resume.size > 0) {
    if (resume.size > MAX_RESUME_BYTES) {
      return NextResponse.json(
        { error: 'Résumé exceeds the 5MB limit.' },
        { status: 400 },
      )
    }
    const buffer = Buffer.from(await resume.arrayBuffer())
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

  return NextResponse.json({ ok: true })
}
