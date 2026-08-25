"use client"

import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

/**
 * Renders the public site header/footer on all routes except the admin
 * dashboard, which supplies its own full-screen chrome. Header and footer
 * are passed in as server-rendered nodes.
 */
export function AppChrome({
  header,
  footer,
  children,
}: {
  header: ReactNode
  footer: ReactNode
  children: ReactNode
}) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith("/admin")

  if (isAdmin) {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen flex-col">
      {header}
      <main className="flex-1">{children}</main>
      {footer}
    </div>
  )
}
