'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, Loader2 } from 'lucide-react'
import { INTERPRETER_STATUSES } from '@/lib/interpreters'
import { cn } from '@/lib/utils'
import { updateStatusAction } from '@/app/admin/actions'

export function StatusControl({
  interpreterId,
  status,
}: {
  interpreterId: string
  status: string
}) {
  const router = useRouter()
  const [pending, setPending] = useState<string | null>(null)
  const [current, setCurrent] = useState(status)

  async function handleChange(next: string) {
    if (next === current || pending) return
    setPending(next)
    const result = await updateStatusAction(interpreterId, next)
    setPending(null)
    if (result.ok) {
      setCurrent(next)
      router.refresh()
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {INTERPRETER_STATUSES.map((s) => {
        const active = s === current
        return (
          <button
            key={s}
            type="button"
            onClick={() => handleChange(s)}
            disabled={Boolean(pending)}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors disabled:opacity-60',
              active
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground',
            )}
          >
            {pending === s ? (
              <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
            ) : active ? (
              <Check className="size-3.5" aria-hidden="true" />
            ) : null}
            {s}
          </button>
        )
      })}
    </div>
  )
}
