'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { FileText, Loader2, Upload } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { getResumeUrlAction, uploadResumeAction } from '@/app/admin/actions'

export function ResumeManager({
  interpreterId,
  resumePath,
}: {
  interpreterId: string
  resumePath: string | null
}) {
  const router = useRouter()
  const [uploading, setUploading] = useState(false)
  const [opening, setOpening] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleUpload(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setUploading(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const result = await uploadResumeAction(interpreterId, formData)
    setUploading(false)

    if (!result.ok) {
      setError(result.error ?? 'Upload failed.')
      return
    }
    event.currentTarget.reset()
    router.refresh()
  }

  async function handleView() {
    if (!resumePath) return
    setOpening(true)
    setError(null)
    const { url, error: urlError } = await getResumeUrlAction(resumePath)
    setOpening(false)
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      setError(urlError ?? 'Could not open the resume.')
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {resumePath ? (
        <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-muted/40 px-3 py-2.5">
          <span className="flex items-center gap-2 text-sm text-foreground">
            <FileText className="size-4 text-primary" aria-hidden="true" />
            Resume on file
          </span>
          <button
            type="button"
            onClick={handleView}
            disabled={opening}
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'h-8 text-xs disabled:opacity-70',
            )}
          >
            {opening ? (
              <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
            ) : (
              'View'
            )}
          </button>
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">No resume uploaded yet.</p>
      )}

      <form onSubmit={handleUpload} className="flex flex-col gap-2">
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          required
          className="text-sm text-foreground file:mr-3 file:rounded-md file:border-0 file:bg-primary/10 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-primary hover:file:bg-primary/15"
        />
        <button
          type="submit"
          disabled={uploading}
          className={cn(
            buttonVariants({ variant: 'default' }),
            'h-9 w-fit text-sm disabled:cursor-not-allowed disabled:opacity-70',
          )}
        >
          {uploading ? (
            <>
              Uploading
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            </>
          ) : (
            <>
              <Upload className="size-4" aria-hidden="true" />
              {resumePath ? 'Replace resume' : 'Upload resume'}
            </>
          )}
        </button>
        {error ? (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        ) : null}
        <p className="text-xs text-muted-foreground">PDF, DOC, or DOCX. Max 5MB.</p>
      </form>
    </div>
  )
}
