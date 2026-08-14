import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

const footerGroups = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Become an Interpreter', href: '/become-an-interpreter' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/creovixa-logo.png"
                alt="Creovixa Language Services"
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Bridging languages, connecting people. Qualified professional
              interpreters and translators, delivered through secure technology
              for healthcare, legal, government, and business.
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
          </div>

          {footerGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold text-foreground">
                {group.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Creovixa Language Services. All
            rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Bridging Languages, Connecting People.
          </p>
        </div>
      </div>
    </footer>
  )
}
