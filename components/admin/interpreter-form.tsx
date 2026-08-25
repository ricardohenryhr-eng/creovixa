'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import {
  INTERPRETER_STATUSES,
  US_STATES,
  type Interpreter,
} from '@/lib/interpreters'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import {
  createInterpreterAction,
  updateInterpreterAction,
} from '@/app/admin/actions'

const fieldClass =
  'h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30'
const labelClass = 'text-sm font-medium text-foreground'

export function InterpreterForm({
  interpreter,
}: {
  interpreter?: Interpreter
}) {
  const router = useRouter()
  const isEdit = Boolean(interpreter)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const result = isEdit
      ? await updateInterpreterAction(interpreter!.id, formData)
      : await createInterpreterAction(formData)

    setSubmitting(false)

    if (!result.ok) {
      setError(result.error ?? 'Something went wrong.')
      return
    }

    if (isEdit) {
      router.refresh()
    } else {
      router.push('/admin/interpreters')
      router.refresh()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="full_name" className={labelClass}>
            Full name *
          </label>
          <input
            id="full_name"
            name="full_name"
            required
            defaultValue={interpreter?.full_name ?? ''}
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            defaultValue={interpreter?.email ?? ''}
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            defaultValue={interpreter?.phone ?? ''}
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="language_pairs" className={labelClass}>
            Language pairs
          </label>
          <input
            id="language_pairs"
            name="language_pairs"
            placeholder="e.g. English ⇄ Spanish"
            defaultValue={interpreter?.language_pairs ?? ''}
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="state" className={labelClass}>
            State
          </label>
          <select
            id="state"
            name="state"
            defaultValue={interpreter?.state ?? ''}
            className={fieldClass}
          >
            <option value="">Select a state</option>
            {US_STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="availability" className={labelClass}>
            Availability
          </label>
          <select
            id="availability"
            name="availability"
            defaultValue={interpreter?.availability ?? ''}
            className={fieldClass}
          >
            <option value="">Select availability</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>On-call / as needed</option>
            <option>Weekends only</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="modality" className={labelClass}>
            Modality
          </label>
          <select
            id="modality"
            name="modality"
            defaultValue={interpreter?.modality ?? ''}
            className={fieldClass}
          >
            <option value="">Select modality</option>
            <option>On-site</option>
            <option>Over-the-Phone (OPI)</option>
            <option>Video Remote (VRI)</option>
            <option>Any</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="experience" className={labelClass}>
            Experience
          </label>
          <input
            id="experience"
            name="experience"
            placeholder="e.g. 5 years"
            defaultValue={interpreter?.experience ?? ''}
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="location" className={labelClass}>
            Location / time zone
          </label>
          <input
            id="location"
            name="location"
            placeholder="e.g. Miami, FL (EST)"
            defaultValue={interpreter?.location ?? ''}
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="status" className={labelClass}>
            Status
          </label>
          <select
            id="status"
            name="status"
            defaultValue={interpreter?.status ?? 'New Applicant'}
            className={fieldClass}
          >
            {INTERPRETER_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="certifications" className={labelClass}>
          Certifications & specializations
        </label>
        <textarea
          id="certifications"
          name="certifications"
          rows={3}
          defaultValue={interpreter?.certifications ?? ''}
          className={cn(fieldClass, 'h-auto resize-none py-2')}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="notes" className={labelClass}>
          Recruiter notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          defaultValue={interpreter?.notes ?? ''}
          className={cn(fieldClass, 'h-auto resize-none py-2')}
        />
      </div>

      {error ? (
        <p
          role="alert"
          className="rounded-lg border border-destructive/30 bg-destructive/10 px-3.5 py-2.5 text-sm text-destructive"
        >
          {error}
        </p>
      ) : null}

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className={cn(
            buttonVariants({ variant: 'default' }),
            'disabled:cursor-not-allowed disabled:opacity-70',
          )}
        >
          {submitting ? (
            <>
              Saving
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            </>
          ) : isEdit ? (
            'Save changes'
          ) : (
            'Create interpreter'
          )}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
