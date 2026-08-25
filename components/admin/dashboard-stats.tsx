import { INTERPRETER_STATUSES, type Interpreter } from '@/lib/interpreters'
import { StatusBadge } from '@/components/admin/status-badge'

export function DashboardStats({
  interpreters,
}: {
  interpreters: Interpreter[]
}) {
  const total = interpreters.length
  const counts = Object.fromEntries(
    INTERPRETER_STATUSES.map((s) => [
      s,
      interpreters.filter((i) => i.status === s).length,
    ]),
  ) as Record<(typeof INTERPRETER_STATUSES)[number], number>

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      <div className="flex flex-col gap-1 rounded-xl border border-border bg-card p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Total
        </span>
        <span className="font-serif text-2xl font-semibold text-foreground">
          {total}
        </span>
      </div>
      {INTERPRETER_STATUSES.map((s) => (
        <div
          key={s}
          className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4"
        >
          <StatusBadge status={s} />
          <span className="font-serif text-2xl font-semibold text-foreground">
            {counts[s]}
          </span>
        </div>
      ))}
    </div>
  )
}
