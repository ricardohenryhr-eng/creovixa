import { Globe, Mail, Phone } from 'lucide-react'
import { CookiePreferencesButton } from '@/components/cookie-preferences-button'

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
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
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
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="mailto:info@creovixa.com"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 text-primary" aria-hidden="true" />
                  info@creovixa.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18495348654"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  +1 849-534-8654
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/creovixa-language-services/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Creovixa Language Services on LinkedIn"
                className="flex size-9 items-center justify-center rounded-lg border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61593928104466"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Creovixa Language Services on Facebook"
                className="flex size-9 items-center justify-center rounded-lg border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
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
                {group.heading === 'Legal' ? (
                  <li>
                    <CookiePreferencesButton />
                  </li>
                ) : null}
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
