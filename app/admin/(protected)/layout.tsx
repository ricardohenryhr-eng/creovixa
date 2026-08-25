import { requireAdmin } from '@/lib/supabase/admin-guard'
import { AdminShell } from '@/components/admin/admin-shell'

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { email } = await requireAdmin()
  return <AdminShell email={email}>{children}</AdminShell>
}
