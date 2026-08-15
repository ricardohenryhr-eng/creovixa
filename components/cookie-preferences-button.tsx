'use client'

import { openCookiePreferences } from '@/lib/cookie-consent'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

type CookiePreferencesButtonProps = {
  className?: string
  variant?: 'link' | 'button'
}

export function CookiePreferencesButton({
  className,
  variant = 'link',
}: CookiePreferencesButtonProps) {
  if (variant === 'button') {
    return (
      <button
        type="button"
        onClick={openCookiePreferences}
        className={cn(buttonVariants({ variant: 'outline' }), 'h-10 px-4', className)}
      >
        Cookie Preferences
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className={cn(
        'text-left text-sm text-muted-foreground transition-colors hover:text-foreground',
        className,
      )}
    >
      Cookie Preferences
    </button>
  )
}
