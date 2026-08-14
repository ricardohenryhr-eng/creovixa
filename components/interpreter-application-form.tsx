'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const modalities = [
  'Over-the-Phone (OPI)',
  'Video Remote (VRI)',
  'On-Site',
  'Document Translation',
]

const fieldClass =
  'w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30'

export function InterpreterApplicationForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center shadow-lg shadow-primary/5">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold text-card-foreground">
          Application received
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thank you for your interest in joining Creovixa Language Services. Our
          recruitment team will review your details and be in touch soon.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'mt-6 h-10 px-5',
          )}
        >
          Submit another application
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-lg shadow-primary/5 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="fullName" className="text-sm font-medium text-foreground">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
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
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (555) 000-0000"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="languages" className="text-sm font-medium text-foreground">
            Language pairs
          </label>
          <input
            id="languages"
            name="languages"
            type="text"
            required
            placeholder="e.g. English ⇄ Spanish"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="experience" className="text-sm font-medium text-foreground">
            Years of experience
          </label>
          <select
            id="experience"
            name="experience"
            required
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Select experience
            </option>
            <option>Less than 1 year</option>
            <option>1–3 years</option>
            <option>3–5 years</option>
            <option>5+ years</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="modality" className="text-sm font-medium text-foreground">
            Preferred modality
          </label>
          <select
            id="modality"
            name="modality"
            required
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Select a modality
            </option>
            {modalities.map((modality) => (
              <option key={modality}>{modality}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="certifications" className="text-sm font-medium text-foreground">
          Certifications & specializations
        </label>
        <textarea
          id="certifications"
          name="certifications"
          rows={4}
          placeholder="Tell us about your certifications (e.g. CMI, CHI, court certification) and areas of expertise."
          className={cn(fieldClass, 'resize-none')}
        />
      </div>

      <button
        type="submit"
        className={cn(
          buttonVariants({ variant: 'default' }),
          'h-12 px-6 text-base',
        )}
      >
        Submit application
        <Send className="size-4" aria-hidden="true" />
      </button>
      <p className="text-xs text-muted-foreground">
        By submitting, you agree to our Privacy Policy. We&apos;ll only use your
        details to review your application.
      </p>
    </form>
  )
}
