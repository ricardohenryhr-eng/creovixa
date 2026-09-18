import { cn } from '@/lib/utils'
import type { InterpreterStatus } from '@/lib/interpreters'

const styles: Record<InterpreterStatus, string> = {
  'New Applicant': 'bg-blue-50 text-blue-700 ring-blue-600/20',
  'Interview Scheduled': 'bg-amber-50 text-amber-700 ring-amber-600/20',
  Approved: 'bg-violet-50 text-violet-700 ring-violet-600/20',
  Active: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  Inactive: 'bg-gray-100 text-gray-600 ring-gray-500/20',
}

export function StatusBadge({ status }: { status: string }) {
  const style = styles[status as InterpreterStatus] ?? styles['New Applicant']
  return (
    <span
      className={cn(
        'inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset',
        style,
      )}
    >
      {status}
    </span>
  )
}
