'use client'

import { useState } from 'react'
import { Loader2, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { deleteInterpreterAction } from '@/app/admin/actions'

export function DeleteInterpreterButton({
  interpreterId,
  name,
}: {
  interpreterId: string
  name: string
}) {
  const [confirming, setConfirming] = useState(false)
  const [deleting, setDeleting] = useState(false)

  if (confirming) {
    return (
      <div className="flex flex-col gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3">
        <p className="text-sm text-foreground">
          Delete <span className="font-medium">{name}</span> and their resume? This
          cannot be undone.
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={deleting}
            onClick={async () => {
              setDeleting(true)
              await deleteInterpreterAction(interpreterId)
            }}
            className={cn(
              buttonVariants({ variant: 'destructive' }),
              'h-9 text-sm disabled:opacity-70',
            )}
          >
            {deleting ? (
              <>
                Deleting
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              </>
            ) : (
              'Yes, delete'
            )}
          </button>
          <button
            type="button"
            disabled={deleting}
            onClick={() => setConfirming(false)}
            className={cn(buttonVariants({ variant: 'outline' }), 'h-9 text-sm')}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setConfirming(true)}
      className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10"
    >
      <Trash2 className="size-4" aria-hidden="true" />
      Delete
    </button>
  )
}
