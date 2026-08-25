import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { AdminAuthForm } from '@/components/admin/admin-auth-form'

export const metadata: Metadata = {
  title: 'Admin Sign In | Creovixa Language Services',
  robots: { index: false, follow: false },
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams

  // If already signed in as an admin, skip the login page.
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (user) {
    const { data: isAdmin } = await supabase.rpc('is_admin')
    if (isAdmin) redirect('/admin')
  }

  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-muted/40 px-4 py-12">
      <Link
        href="/"
        className="mb-8 font-serif text-lg font-semibold text-foreground"
      >
        Creovixa <span className="text-primary">Language Services</span>
      </Link>
      <AdminAuthForm initialError={error} />
      <p className="mt-8 text-center text-xs text-muted-foreground">
        Authorized personnel only. All activity may be monitored.
      </p>
    </main>
  )
}
