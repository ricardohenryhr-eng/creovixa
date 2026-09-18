'use client'

import { useRef, useState, type FormEvent } from 'react'
import { CheckCircle2, Send, UploadCloud } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { verifyCaptcha } from '@/app/actions/verify-captcha'

// Google's public test key — only used as a last-resort fallback so the
// widget still renders in preview/dev before a real key is configured.
const RECAPTCHA_TEST_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
const PUBLIC_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

const interpretationTypes = [
  { value: 'opi', label: 'Over-the-Phone (OPI)' },
  { value: 'vri', label: 'Video Remote (VRI)' },
  { value: 'onsite', label: 'Onsite' },
]

const availabilityOptions = [
  'Full-time',
  'Part-time',
  'Weekdays',
  'Weekends',
  'Evenings',
  'On-call / As needed',
]

const fieldClass =
  'w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30'

const labelClass = 'text-sm font-medium text-foreground'

export function InterpreterApplicationForm({ siteKey }: { siteKey?: string }) {
  const recaptchaSiteKey = PUBLIC_SITE_KEY ?? siteKey ?? RECAPTCHA_TEST_KEY

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [captchaError, setCaptchaError] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  function toggleType(value: string) {
    setSelectedTypes((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value],
    )
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!captchaToken) {
      setCaptchaError('Please complete the CAPTCHA to verify you\u2019re not a robot.')
      return
    }

    setSubmitting(true)
    const result = await verifyCaptcha(captchaToken)
    setSubmitting(false)

    if (!result.success) {
      setCaptchaError(result.error ?? 'CAPTCHA verification failed. Please try again.')
      setCaptchaToken(null)
      recaptchaRef.current?.reset()
      return
    }

    setCaptchaError(null)
    setSubmitted(true)
  }

  function handleReset() {
    setSubmitted(false)
    setFileName(null)
    setSelectedTypes([])
    setCaptchaToken(null)
    setCaptchaError(null)
    recaptchaRef.current?.reset()
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-primary/5 sm:p-8">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="size-7" aria-hidden="true" />
          </span>
          <h3 className="mt-5 font-display text-xl font-semibold text-card-foreground">
            Application received
          </h3>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Thank you for your interest in joining the Creovixa interpreter
            network. Our recruitment team will review your application and be in
            touch soon.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'mt-6 h-10 px-5',
            )}
          >
            Submit another application
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-primary/5 sm:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Personal details */}
        <fieldset className="flex flex-col gap-5">
          <legend className="font-display text-base font-semibold text-card-foreground">
            Personal details
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="firstName" className={labelClass}>
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
                placeholder="Jane"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="lastName" className={labelClass}>
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                autoComplete="family-name"
                placeholder="Doe"
                className={fieldClass}
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className={labelClass}>
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jane@example.com"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className={labelClass}>
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="+1 (849) 534-8654"
                className={fieldClass}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="country" className={labelClass}>
              Country of residence
            </label>
            <input
              id="country"
              name="country"
              type="text"
              required
              autoComplete="country-name"
              placeholder="United States"
              className={fieldClass}
            />
          </div>
        </fieldset>

        {/* Languages */}
        <fieldset className="flex flex-col gap-5 border-t border-border pt-6">
          <legend className="font-display text-base font-semibold text-card-foreground">
            Languages
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nativeLanguage" className={labelClass}>
                Native language
              </label>
              <input
                id="nativeLanguage"
                name="nativeLanguage"
                type="text"
                required
                placeholder="e.g. Haitian Creole"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="otherLanguages" className={labelClass}>
                Other languages
              </label>
              <input
                id="otherLanguages"
                name="otherLanguages"
                type="text"
                placeholder="e.g. French, Spanish"
                className={fieldClass}
              />
            </div>
          </div>
        </fieldset>

        {/* Experience */}
        <fieldset className="flex flex-col gap-5 border-t border-border pt-6">
          <legend className="font-display text-base font-semibold text-card-foreground">
            Experience &amp; skills
          </legend>

          <div className="flex flex-col gap-2">
            <span className={labelClass}>Interpretation type</span>
            <div className="flex flex-wrap gap-2.5">
              {interpretationTypes.map((type) => {
                const active = selectedTypes.includes(type.value)
                return (
                  <label
                    key={type.value}
                    className={cn(
                      'flex cursor-pointer items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors',
                      active
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-input bg-background text-foreground hover:border-ring',
                    )}
                  >
                    <input
                      type="checkbox"
                      name="interpretationType"
                      value={type.value}
                      checked={active}
                      onChange={() => toggleType(type.value)}
                      className="sr-only"
                    />
                    <span
                      className={cn(
                        'flex size-4 items-center justify-center rounded border',
                        active
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-input',
                      )}
                      aria-hidden="true"
                    >
                      {active ? <CheckCircle2 className="size-3" /> : null}
                    </span>
                    {type.label}
                  </label>
                )
              })}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="experience" className={labelClass}>
                Years of experience
              </label>
              <input
                id="experience"
                name="experience"
                type="number"
                min={0}
                required
                placeholder="5"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="medicalExperience" className={labelClass}>
                Medical experience
              </label>
              <select
                id="medicalExperience"
                name="medicalExperience"
                required
                defaultValue=""
                className={fieldClass}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="legalExperience" className={labelClass}>
                Legal experience
              </label>
              <select
                id="legalExperience"
                name="legalExperience"
                required
                defaultValue=""
                className={fieldClass}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="certifications" className={labelClass}>
              Certifications
            </label>
            <input
              id="certifications"
              name="certifications"
              type="text"
              placeholder="e.g. CCHI, CMI, court-certified"
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="availability" className={labelClass}>
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              required
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Select your availability
              </option>
              {availabilityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </fieldset>

        {/* Resume + comments */}
        <fieldset className="flex flex-col gap-5 border-t border-border pt-6">
          <legend className="font-display text-base font-semibold text-card-foreground">
            Resume &amp; additional details
          </legend>

          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>Resume upload</span>
            <label
              htmlFor="resume"
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-input bg-background px-4 py-8 text-center transition-colors hover:border-ring"
            >
              <UploadCloud
                className="size-6 text-muted-foreground"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-foreground">
                {fileName ?? 'Click to upload your resume'}
              </span>
              <span className="text-xs text-muted-foreground">
                PDF, DOC, or DOCX up to 5MB
              </span>
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="sr-only"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
            </label>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="comments" className={labelClass}>
              Additional comments
            </label>
            <textarea
              id="comments"
              name="comments"
              rows={4}
              placeholder="Tell us anything else you'd like us to know."
              className={cn(fieldClass, 'resize-none')}
            />
          </div>
        </fieldset>

        <div className="flex flex-col gap-1.5">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaSiteKey}
            onChange={(token) => {
              setCaptchaToken(token)
              if (token) setCaptchaError(null)
            }}
            onExpired={() => setCaptchaToken(null)}
          />
          {captchaError ? (
            <p role="alert" className="text-sm font-medium text-destructive">
              {captchaError}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className={cn(
            buttonVariants({ variant: 'default' }),
            'h-12 px-6 text-base',
          )}
        >
          {submitting ? 'Verifying\u2026' : 'Apply Now'}
          <Send className="size-4" aria-hidden="true" />
        </button>
        <p className="text-xs text-muted-foreground">
          By submitting, you agree to our Privacy Policy. We&apos;ll only use
          your details to review your application to the interpreter network.
        </p>
      </form>
    </div>
  )
}
