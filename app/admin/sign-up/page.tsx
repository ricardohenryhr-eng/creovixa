import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AdminAuthForm } from "@/components/admin/admin-auth-form"
import { registerAdminAction } from "@/app/admin/actions"

export const metadata: Metadata = {
  title: "Create Admin Account | Creovixa Language Services",
  robots: { index: false, follow: false },
}

export default async function AdminSignUpPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect("/admin")
  }

  return (
    <main className="flex min-h-svh items-center justify-center bg-muted/30 px-4 py-12">
      <AdminAuthForm mode="register" action={registerAdminAction} />
    </main>
  )
}
