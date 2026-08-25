import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AdminShell } from "@/components/admin/admin-shell"

export const metadata: Metadata = {
  title: "Admin Dashboard | Creovixa Language Services",
  robots: { index: false, follow: false },
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  // Verify the signed-in user is actually an allowlisted admin.
  const { data: isAdmin } = await supabase.rpc("is_admin")
  if (!isAdmin) {
    await supabase.auth.signOut()
    redirect("/admin/login")
  }

  return <AdminShell email={user.email ?? ""}>{children}</AdminShell>
}
