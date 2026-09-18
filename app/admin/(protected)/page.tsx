import { requireAdmin } from '@/lib/supabase/admin-guard'
import type { Interpreter } from '@/lib/interpreters'
import { DashboardStats } from '@/components/admin/dashboard-stats'
import { InterpretersExplorer } from '@/components/admin/interpreters-explorer'

export default async function AdminDashboardPage() {
  const { supabase } = await requireAdmin()

  const { data } = await supabase
    .from('interpreters')
    .select('*')
    .order('created_at', { ascending: false })

  const interpreters = (data ?? []) as Interpreter[]

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-serif text-2xl font-semibold text-foreground">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Overview of your interpreter pipeline.
        </p>
      </div>

      <DashboardStats interpreters={interpreters} />

      <div className="flex flex-col gap-4">
        <h2 className="font-serif text-lg font-semibold text-foreground">
          Interpreter database
        </h2>
        <InterpretersExplorer interpreters={interpreters} />
      </div>
    </div>
  )
}
