'use client'

import { Analytics } from '@vercel/analytics/next'
import { Cookie, ShieldCheck, BarChart3, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import {
  getStoredConsent,
  storeConsent,
  OPEN_PREFERENCES_EVENT,
  type ConsentRecord,
} from '@/lib/cookie-consent'

export function CookieConsent() {
  // `null` until we have read localStorage, so we never flash the banner
  // for users who already made a choice.
  const [consent, setConsent] = useState<ConsentRecord | null>(null)
  const [ready, setReady] = useState(false)
  const [bannerOpen, setBannerOpen] = useState(false)
  const [prefsOpen, setPrefsOpen] = useState(false)
  const [analyticsChoice, setAnalyticsChoice] = useState(false)

  useEffect(() => {
    const stored = getStoredConsent()
    setConsent(stored)
    setAnalyticsChoice(stored?.categories.analytics ?? false)
    // Show the banner only on first visit (no stored consent).
    setBannerOpen(!stored)
    setReady(true)
  }, [])

  useEffect(() => {
    function handleOpen() {
      setAnalyticsChoice(getStoredConsent()?.categories.analytics ?? false)
      setPrefsOpen(true)
    }
    window.addEventListener(OPEN_PREFERENCES_EVENT, handleOpen)
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, handleOpen)
  }, [])

  // Lock body scroll while the preferences dialog is open.
  useEffect(() => {
    if (!prefsOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [prefsOpen])

  const persist = useCallback((analytics: boolean) => {
    const record = storeConsent({ essential: true, analytics })
    setConsent(record)
    setBannerOpen(false)
    setPrefsOpen(false)
  }, [])

  const acceptAll = useCallback(() => persist(true), [persist])
  const rejectNonEssential = useCallback(() => persist(false), [persist])
  const savePreferences = useCallback(
    () => persist(analyticsChoice),
    [persist, analyticsChoice],
  )

  const analyticsEnabled = consent?.categories.analytics === true

  return (
    <>
      {/* Analytics only loads once the user has granted analytics consent. */}
      {analyticsEnabled ? <Analytics /> : null}

      {ready && bannerOpen && !prefsOpen ? (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.15)] backdrop-blur supports-[backdrop-filter]:bg-card/85"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:gap-6 lg:px-8">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Cookie className="size-5" aria-hidden="true" />
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We use cookies to improve your browsing experience, analyze
                traffic, and enhance our services. Read our{' '}
                <a
                  href="/cookie-policy"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Cookie Policy
                </a>{' '}
                and{' '}
                <a
                  href="/privacy-policy"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:shrink-0 lg:flex-nowrap">
              <button
                type="button"
                onClick={() => setPrefsOpen(true)}
                className={cn(buttonVariants({ variant: 'ghost' }), 'h-10 px-4')}
              >
                Cookie Preferences
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className={cn(buttonVariants({ variant: 'outline' }), 'h-10 px-4')}
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className={cn(buttonVariants({ variant: 'default' }), 'h-10 px-5')}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {prefsOpen ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setPrefsOpen(false)}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-prefs-title"
            className="relative z-10 flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-border bg-card shadow-2xl sm:rounded-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-5">
              <div>
                <h2
                  id="cookie-prefs-title"
                  className="font-display text-lg font-bold tracking-tight text-foreground"
                >
                  Cookie Preferences
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Manage how Creovixa uses cookies. Essential cookies are always
                  active; you control everything else.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPrefsOpen(false)}
                aria-label="Close cookie preferences"
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'size-9 shrink-0',
                )}
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
              <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/40 p-4">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="size-5" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-foreground">
                      Essential Cookies
                    </h3>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Always On
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Required for core site functionality such as security,
                    navigation, and form submission. These cannot be turned off.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-border p-4">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BarChart3 className="size-5" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-foreground">
                      Analytics Cookies
                    </h3>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={analyticsChoice}
                      aria-label="Toggle analytics cookies"
                      onClick={() => setAnalyticsChoice((v) => !v)}
                      className={cn(
                        'relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50',
                        analyticsChoice ? 'bg-primary' : 'bg-input',
                      )}
                    >
                      <span
                        className={cn(
                          'inline-block size-5 transform rounded-full bg-background shadow transition-transform',
                          analyticsChoice ? 'translate-x-5' : 'translate-x-0.5',
                        )}
                      />
                    </button>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Help us understand how visitors use the site so we can
                    improve performance and content. No analytics run until you
                    enable them.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-t border-border px-6 py-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={rejectNonEssential}
                className={cn(buttonVariants({ variant: 'outline' }), 'h-10 px-4')}
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={savePreferences}
                className={cn(buttonVariants({ variant: 'default' }), 'h-10 px-5')}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
