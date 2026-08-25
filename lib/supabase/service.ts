import { createClient } from '@supabase/supabase-js'

/**
 * Server-only Supabase client using the service-role key.
 * Bypasses RLS — NEVER import this into client components or expose the key.
 * Only use in trusted server code (route handlers, server actions) after
 * validating input.
 */
export function createServiceClient() {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceKey) {
    return null
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}
