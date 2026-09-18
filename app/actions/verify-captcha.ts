'use server'

type VerifyResult = { success: boolean; error?: string }

/**
 * Verifies a Google reCAPTCHA v2 token server-side.
 * Requires RECAPTCHA_SECRET_KEY to be set in the project environment.
 */
export async function verifyCaptcha(token: string | null): Promise<VerifyResult> {
  if (!token) {
    return { success: false, error: 'Missing CAPTCHA token.' }
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY

  if (!secret) {
    // Keys not configured yet — fail closed so bots can't slip through,
    // but surface a clear message for the site owner.
    return {
      success: false,
      error: 'CAPTCHA is not configured. Add RECAPTCHA_SECRET_KEY.',
    }
  }

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
    })

    const data = (await res.json()) as { success: boolean }

    return data.success
      ? { success: true }
      : { success: false, error: 'CAPTCHA verification failed. Please try again.' }
  } catch {
    return { success: false, error: 'Could not reach the CAPTCHA service. Please try again.' }
  }
}
