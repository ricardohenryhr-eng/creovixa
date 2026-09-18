import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Mail, Phone } from 'lucide-react'
import { requireAdmin } from '@/lib/supabase/admin-guard'
import type { Interpreter } from '@/lib/interpreters'
import { InterpreterForm } from '@/components/admin/interpreter-form'
import { ResumeManager } from '@/components/admin/resume-manager'
import { StatusControl } from '@/components/admin/status-control'
import { StatusBadge } from '@/components/admin/status-badge'
import { DeleteInterpreterButton } from '@/components/admin/delete-interpreter-button'

export default async function InterpreterDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const { supabase } = await requireAdmin()

  const { data } = await supabase
    .from('interpreters')
    .select('*')
    .eq('id', id)
    .single()

  if (!data) notFound()
  const interpreter = data as Interpreter

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
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-serif text-2xl font-semibold text-foreground">
                {interpreter.full_name}
              </h1>
              <StatusBadge status={interpreter.status} />
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <a
                href={`mailto:${interpreter.email}`}
                className="inline-flex items-center gap-1.5 hover:text-foreground"
              >
                <Mail className="size-4" aria-hidden="true" />
                {interpreter.email}
              </a>
              {interpreter.phone ? (
                <a
                  href={`tel:${interpreter.phone}`}
                  className="inline-flex items-center gap-1.5 hover:text-foreground"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {interpreter.phone}
                </a>
              ) : null}
            </div>
          </div>
          <DeleteInterpreterButton
            interpreterId={interpreter.id}
            name={interpreter.full_name}
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
            <h2 className="mb-4 font-serif text-lg font-semibold text-foreground">
              Interpreter details
            </h2>
            <InterpreterForm interpreter={interpreter} />
          </section>
        </div>

        <div className="flex flex-col gap-6">
          <section className="rounded-xl border border-border bg-card p-5">
            <h2 className="mb-3 font-serif text-base font-semibold text-foreground">
              Status
            </h2>
            <StatusControl
              interpreterId={interpreter.id}
              status={interpreter.status}
            />
          </section>

          <section className="rounded-xl border border-border bg-card p-5">
            <h2 className="mb-3 font-serif text-base font-semibold text-foreground">
              Resume
            </h2>
            <ResumeManager
              interpreterId={interpreter.id}
              resumePath={interpreter.resume_path}
            />
          </section>

          <section className="rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground">
            <h2 className="mb-3 font-serif text-base font-semibold text-foreground">
              Record
            </h2>
            <dl className="flex flex-col gap-2">
              <div className="flex justify-between gap-3">
                <dt>Source</dt>
                <dd className="text-foreground">
                  {interpreter.source === 'application_form'
                    ? 'Application form'
                    : 'Manual entry'}
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>Added</dt>
                <dd className="text-foreground">
                  {new Date(interpreter.created_at).toLocaleDateString()}
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>Updated</dt>
                <dd className="text-foreground">
                  {new Date(interpreter.updated_at).toLocaleDateString()}
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
    </div>
  )
}
