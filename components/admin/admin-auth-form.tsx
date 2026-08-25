"use client"

import { useActionState } from "react"
import Link from "next/link"
import { Loader2, LockKeyhole } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const fieldClass =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"

type AuthAction = (
  prevState: { error: string | null } | undefined,
  formData: FormData,
) => Promise<{ error: string | null }>

interface AdminAuthFormProps {
  mode: "login" | "register"
  action: AuthAction
  notice?: string | null
}

export function AdminAuthForm({ mode, action, notice }: AdminAuthFormProps) {
  const [state, formAction, pending] = useActionState(action, { error: null })
  const isRegister = mode === "register"

  return (
    <div className="w-full max-w-md">
      <div className="flex flex-col items-center text-center">
        <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <LockKeyhole className="size-6" aria-hidden="true" />
        </span>
        <h1 className="mt-5 font-display text-2xl font-semibold text-foreground">
          {isRegister ? "Create admin account" : "Admin sign in"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {isRegister
            ? "Set up access for an authorized Creovixa recruiter."
            : "Sign in to the Creovixa interpreter management dashboard."}
        </p>
      </div>

      <form
        action={formAction}
        className="mt-8 flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-lg shadow-primary/5 sm:p-8"
      >
        {notice ? (
          <p className="rounded-lg border border-primary/30 bg-primary/10 px-3.5 py-2.5 text-sm text-primary">
            {notice}
          </p>
        ) : null}

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@creovixa.com"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="text-sm font-medium text-foreground">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete={isRegister ? "new-password" : "current-password"}
            placeholder={isRegister ? "At least 8 characters" : "Your password"}
            className={fieldClass}
          />
        </div>

        {isRegister ? (
          <div className="flex flex-col gap-1.5">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
              Confirm password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              autoComplete="new-password"
              placeholder="Re-enter your password"
              className={fieldClass}
            />
          </div>
        ) : null}

        {state?.error ? (
          <p
            role="alert"
            className="rounded-lg border border-destructive/30 bg-destructive/10 px-3.5 py-2.5 text-sm text-destructive"
          >
            {state.error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={pending}
          className={cn(
            buttonVariants({ variant: "default" }),
            "h-11 px-6 text-base disabled:cursor-not-allowed disabled:opacity-70",
          )}
        >
          {pending ? (
            <>
              {isRegister ? "Creating account…" : "Signing in…"}
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            </>
          ) : isRegister ? (
            "Create account"
          ) : (
            "Sign in"
          )}
        </button>

        <p className="text-center text-sm text-muted-foreground">
          {isRegister ? (
            <>
              Already have an account?{" "}
              <Link href="/admin/login" className="font-medium text-primary hover:underline">
                Sign in
              </Link>
            </>
          ) : (
            <>
              Need to set up access?{" "}
              <Link href="/admin/sign-up" className="font-medium text-primary hover:underline">
                Create account
              </Link>
            </>
          )}
        </p>
      </form>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Access is restricted to authorized Creovixa Language Services staff.
      </p>
    </div>
  )
}
