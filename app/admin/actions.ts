"use server"

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { createAdminClient } from "@/lib/supabase/admin"

function isAllowlistError(message: string) {
  return message === "not_allowlisted"
}

export async function signInAction(
  _prevState: { error: string | null } | undefined,
  formData: FormData,
): Promise<{ error: string | null }> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase()
  const password = String(formData.get("password") ?? "")

  if (!email || !password) {
    return { error: "Enter your email and password." }
  }

  const supabase = await createClient()

  // Verify the email is on the admin allowlist before attempting sign-in.
  const { data: allowed, error: rpcError } = await supabase.rpc("email_is_allowlisted", {
    check_email: email,
  })
  if (rpcError) {
    return { error: "Something went wrong. Please try again." }
  }
  if (!allowed) {
    return { error: "This email is not authorized to access the admin dashboard." }
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) {
    return { error: "Invalid email or password." }
  }

  redirect("/admin")
}

export async function registerAdminAction(
  _prevState: { error: string | null } | undefined,
  formData: FormData,
): Promise<{ error: string | null }> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase()
  const password = String(formData.get("password") ?? "")
  const confirmPassword = String(formData.get("confirmPassword") ?? "")

  if (!email || !password) {
    return { error: "Enter your email and a password." }
  }
  if (password.length < 8) {
    return { error: "Password must be at least 8 characters." }
  }
  if (password !== confirmPassword) {
    return { error: "Passwords do not match." }
  }

  const supabase = await createClient()

  // Only allowlisted emails may create an admin account.
  const { data: allowed, error: rpcError } = await supabase.rpc("email_is_allowlisted", {
    check_email: email,
  })
  if (rpcError) {
    return { error: "Something went wrong. Please try again." }
  }
  if (!allowed) {
    return { error: "This email is not authorized to access the admin dashboard." }
  }

  // Create a confirmed admin user via the service role, then sign in.
  const admin = createAdminClient()
  const { error: createError } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  })

  if (createError) {
    const message = createError.message.toLowerCase()
    if (message.includes("already been registered") || message.includes("already registered")) {
      return { error: "An account with this email already exists. Please sign in instead." }
    }
    return { error: "Could not create the account. Please try again." }
  }

  const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
  if (signInError) {
    // Account created but sign-in failed — send them to login.
    redirect("/admin/login?registered=1")
  }

  redirect("/admin")
}

export async function signOutAction() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/admin/login")
}
