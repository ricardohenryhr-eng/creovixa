import "server-only"
import { createClient } from "@supabase/supabase-js"

/**
 * Service-role Supabase client. SERVER-ONLY.
 * Bypasses RLS — never import this into client components or expose it.
 * Used only for privileged admin-onboarding operations that must run
 * before a session exists (e.g. creating a confirmed admin user).
 */
export function createAdminClient() {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceRoleKey) {
    throw new Error("Supabase service role environment variables are not configured.")
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
