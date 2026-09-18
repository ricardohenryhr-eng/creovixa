import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

/**
 * Ensures the current request is from an authenticated, allowlisted admin.
 * Redirects to the login page otherwise. Returns the admin's email + supabase client.
 */
export async function requireAdmin() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  // Confirm the user is on the server-side allowlist (defense-in-depth on top of RLS).
  const { data: isAdmin, error } = await supabase.rpc('is_admin')

  if (error || !isAdmin) {
    // Authenticated but not an admin — sign out and bounce to login.
    await supabase.auth.signOut()
    redirect('/admin/login?error=not_authorized')
  }

  return { supabase, user, email: user.email ?? '' }
}
