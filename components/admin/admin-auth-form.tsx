'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, Lock } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

type Mode = 'login' | 'register'

const fieldClass =
  'h-11 rounded-lg border border-input bg-background px-3.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30'

export function AdminAuthForm({ initialError }: { initialError?: string }) {
  const router = useRouter()
  const [mode, setMode] = useState<Mode>('login')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(
    initialError === 'not_authorized'
      ? 'That account is not authorized for admin access.'
      : null,
  )
  const [info, setInfo] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError(null)
    setInfo(null)

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '').trim()
    const password = String(formData.get('password') ?? '')
    const supabase = createClient()

    try {
      // Both flows require the email to be on the admin allowlist.
      const { data: allowed, error: allowErr } = await supabase.rpc(
        'email_is_allowlisted',
        { check_email: email },
      )
      if (allowErr) throw new Error('Something went wrong. Please try again.')
      if (!allowed) {
        setError('That email is not authorized for admin access.')
        return
      }

      if (mode === 'login') {
        const { error: signInErr } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (signInErr) {
          setError('Invalid email or password.')
          return
        }
        router.push('/admin')
        router.refresh()
      } else {
        const { data, error: signUpErr } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo:
              process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ??
              `${window.location.origin}/auth/callback`,
          },
        })
        if (signUpErr) {
          setError(signUpErr.message)
          return
        }
        // If email confirmation is required there is no session yet.
        if (data.session) {
          router.push('/admin')
          router.refresh()
        } else {
          setInfo(
            'Account created. Check your email to confirm your address, then sign in.',
          )
          setMode('login')
        }
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex flex-col items-center gap-3 text-center">
        <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Lock className="size-5" aria-hidden="true" />
        </div>
        <div>
          <h1 className="font-serif text-xl font-semibold text-foreground">
            Admin {mode === 'login' ? 'sign in' : 'account setup'}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground text-pretty">
            {mode === 'login'
              ? 'Restricted to authorized Creovixa staff.'
              : 'First time here? Set a password for your authorized email.'}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          <label
            htmlFor="password"
            className="text-sm font-medium text-foreground"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={8}
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            placeholder={mode === 'login' ? 'Your password' : 'At least 8 characters'}
            className={fieldClass}
          />
        </div>

        {error ? (
          <p
            role="alert"
            className="rounded-lg border border-destructive/30 bg-destructive/10 px-3.5 py-2.5 text-sm text-destructive"
          >
            {error}
          </p>
        ) : null}

        {info ? (
          <p className="rounded-lg border border-primary/30 bg-primary/10 px-3.5 py-2.5 text-sm text-primary">
            {info}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={submitting}
          className={cn(
            buttonVariants({ variant: 'default' }),
            'h-11 w-full disabled:cursor-not-allowed disabled:opacity-70',
          )}
        >
          {submitting ? (
            <>
              Please wait
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            </>
          ) : mode === 'login' ? (
            'Sign in'
          ) : (
            'Create account'
          )}
        </button>
      </form>

      <div className="mt-5 text-center text-sm text-muted-foreground">
        {mode === 'login' ? (
          <button
            type="button"
            onClick={() => {
              setMode('register')
              setError(null)
              setInfo(null)
            }}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            First time? Set up your account
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setMode('login')
              setError(null)
              setInfo(null)
            }}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Already have an account? Sign in
          </button>
        )}
      </div>
    </div>
  )
}
