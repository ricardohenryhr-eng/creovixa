import { Globe } from 'lucide-react'

const footerGroups = [
  {
    heading: 'Services',
    links: [
      { label: 'French Interpretation', href: '/french-interpretation-services' },
      {
        label: 'Haitian Creole Interpretation',
        href: '/haitian-creole-interpretation-services',
      },
      { label: 'Medical Interpretation', href: '/medical-interpretation-services' },
      { label: 'Legal Interpretation', href: '/legal-interpretation-services' },
      { label: 'Video Remote Interpretation', href: '/video-remote-interpretation' },
      {
        label: 'Over-the-Phone Interpretation',
        href: '/over-the-phone-interpretation',
      },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/#about' },
      { label: 'Services', href: '/#services' },
      { label: 'Contact', href: '/#contact' },
      { label: 'Become an Interpreter', href: '/#contact' },
      { label: 'info@creovixa.com', href: 'mailto:info@creovixa.com' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Globe className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                Creovixa
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Connecting people through language. Qualified professional
              interpreters, delivered through secure technology for healthcare,
              legal, government, and business.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold text-foreground">
                {group.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Creovixa. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Connecting People Through Language
          </p>
        </div>
      </div>
    </footer>
  )
}
