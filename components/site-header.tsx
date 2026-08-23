'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex shrink-0 items-center gap-2">
          <img
            src="/creovixa-logo.png"
            alt="Creovixa Language Services"
            className="h-14 w-auto md:h-16"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/join-network"
            className={cn(buttonVariants({ variant: 'ghost' }), 'h-10 px-4')}
          >
            Join Network
          </a>
          <a
            href="/#contact"
            className={cn(buttonVariants({ variant: 'default' }), 'h-10 px-5')}
          >
            Request an Interpreter
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-background md:hidden">
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ variant: 'default' }),
                'mt-2 h-11 w-full',
              )}
            >
              Request an Interpreter
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
