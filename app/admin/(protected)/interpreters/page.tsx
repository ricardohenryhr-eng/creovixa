import { requireAdmin } from '@/lib/supabase/admin-guard'
import type { Interpreter } from '@/lib/interpreters'
import { InterpretersExplorer } from '@/components/admin/interpreters-explorer'

export default async function InterpretersPage() {
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
          Interpreters
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Search, filter, and manage your full interpreter database.
        </p>
      </div>
      <InterpretersExplorer interpreters={interpreters} />
    </div>
  )
}
