import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { requireAdmin } from '@/lib/supabase/admin-guard'
import { InterpreterForm } from '@/components/admin/interpreter-form'

export default async function NewInterpreterPage() {
  await requireAdmin()

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link
          href="/admin/interpreters"
          className="mb-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to interpreters
        </Link>
        <h1 className="font-serif text-2xl font-semibold text-foreground">
          Add interpreter
        </h1>
      </div>

      <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <InterpreterForm />
      </div>
    </div>
  )
}
