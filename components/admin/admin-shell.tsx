"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, LogOut, Menu, X, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { signOutAction } from "@/app/admin/actions"

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/interpreters", label: "Interpreters", icon: Users, exact: false },
]

function NavLinks({
  pathname,
  onNavigate,
}: {
  pathname: string
  onNavigate?: () => void
}) {
  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => {
        const active = item.exact
          ? pathname === item.href
          : pathname.startsWith(item.href)
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Icon className="size-4" aria-hidden="true" />
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

function Brand() {
  return (
    <Link href="/admin" className="flex items-center gap-2">
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Globe className="size-4" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-sm font-semibold text-foreground">Creovixa</span>
        <span className="text-xs text-muted-foreground">Admin</span>
      </span>
    </Link>
  )
}

function SignOutButton({ className }: { className?: string }) {
  return (
    <form action={signOutAction}>
      <button
        type="submit"
        className={cn(
          "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive",
          className,
        )}
      >
        <LogOut className="size-4" aria-hidden="true" />
        Sign out
      </button>
    </form>
  )
}

export function AdminShell({
  email,
  children,
}: {
  email: string
  children: React.ReactNode
}) {
  const pathname = usePathname() ?? "/admin"
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-svh bg-muted/30">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col border-r border-border bg-card lg:flex">
        <div className="flex h-16 items-center border-b border-border px-6">
          <Brand />
        </div>
        <div className="flex flex-1 flex-col justify-between p-4">
          <NavLinks pathname={pathname} />
          <div className="flex flex-col gap-2 border-t border-border pt-4">
            <p className="truncate px-3 text-xs text-muted-foreground" title={email}>
              {email}
            </p>
            <SignOutButton />
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card px-4 lg:hidden">
        <Brand />
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex size-9 items-center justify-center rounded-lg border border-border text-foreground"
          aria-label="Open menu"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </header>

      {/* Mobile drawer */}
      {mobileOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 left-0 flex w-72 max-w-[80%] flex-col bg-card p-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <Brand />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex size-9 items-center justify-center rounded-lg border border-border text-foreground"
                aria-label="Close menu"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-between pt-4">
              <NavLinks pathname={pathname} onNavigate={() => setMobileOpen(false)} />
              <div className="flex flex-col gap-2 border-t border-border pt-4">
                <p className="truncate px-3 text-xs text-muted-foreground" title={email}>
                  {email}
                </p>
                <SignOutButton />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">{children}</div>
      </div>
    </div>
  )
}
