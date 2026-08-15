import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Clock,
  Cpu,
  Plus,
  ShieldCheck,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { services, type ServiceData } from '@/lib/services-data'

const whyChoose = [
  {
    icon: BadgeCheck,
    title: 'Professional Interpreters',
    description:
      'Every interpreter is vetted, certified, and trained for the settings they serve, so you get accuracy you can trust.',
  },
  {
    icon: ShieldCheck,
    title: 'Confidential Communication',
    description:
      'Secure, encrypted sessions and strict confidentiality standards keep every conversation private and compliant.',
  },
  {
    icon: Clock,
    title: 'Fast Response Time',
    description:
      'Connect with a qualified interpreter on demand in seconds, or schedule sessions in advance with ease.',
  },
  {
    icon: Cpu,
    title: 'Technology-Driven Solutions',
    description:
      'Smart matching and a modern platform make requesting, managing, and delivering language access effortless.',
  },
]

const SITE_URL = 'https://creovixa.com'

export function ServicePage({ data }: { data: ServiceData }) {
  const related = services.filter((service) => service.slug !== data.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: data.title,
        serviceType: data.eyebrow,
        description: data.metaDescription,
        provider: {
          '@type': 'Organization',
          name: 'Creovixa Language Services',
          url: SITE_URL,
        },
        areaServed: 'US',
        url: `${SITE_URL}/${data.slug}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: data.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-12">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
            >
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="size-3.5" aria-hidden="true" />
              <Link
                href="/#services"
                className="transition-colors hover:text-foreground"
              >
                Services
              </Link>
              <ChevronRight className="size-3.5" aria-hidden="true" />
              <span className="font-medium text-foreground">{data.eyebrow}</span>
            </nav>

            <div className="mt-8 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                {data.eyebrow}
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
                {data.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
                {data.heroSubhead}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'h-12 px-6 text-base',
                  )}
                >
                  Request an Interpreter
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/#contact"
                  className={cn(
                    buttonVariants({ variant: 'outline' }),
                    'h-12 px-6 text-base',
                  )}
                >
                  Contact Us
                </Link>
              </div>

              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
                {data.heroHighlights.map((highlight) => (
                  <li
                    key={highlight.label}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <highlight.icon className="size-4" aria-hidden="true" />
                    </span>
                    {highlight.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Service Overview
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
                  What our {data.eyebrow.toLowerCase()} deliver
                </h2>
                <div className="mt-6 space-y-4">
                  {data.overview.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="text-lg leading-relaxed text-pretty text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Use cases */}
              <div className="rounded-2xl border border-border bg-card p-7">
                <h3 className="font-display text-lg font-semibold text-card-foreground">
                  Common Use Cases
                </h3>
                <ul className="mt-5 space-y-4">
                  {data.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {useCase}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-y border-border bg-secondary/40 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Key Benefits
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
                Why this service works for you
              </h2>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <benefit.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Industries We Serve
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
                Trusted where communication is mission-critical
              </h2>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {data.industries.map((industry) => (
                <div
                  key={industry.title}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <industry.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-card-foreground">
                      {industry.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Creovixa */}
        <section className="border-y border-border bg-secondary/40 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Why Choose Creovixa
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
                A partner you can rely on
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
                Trusted by healthcare, legal, government, and enterprise teams to
                deliver dependable language access.
              </p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyChoose.map((reason) => (
                <div
                  key={reason.title}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                    <reason.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-card-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                FAQs
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
                Frequently asked questions
              </h2>
            </div>
            <div className="mt-12 divide-y divide-border border-y border-border">
              {data.faqs.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-lg font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-transform group-open:rotate-45">
                      <Plus className="size-4" aria-hidden="true" />
                    </span>
                  </summary>
                  <p className="mt-3 text-base leading-relaxed text-pretty text-muted-foreground">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="border-t border-border bg-secondary/40 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Explore related services
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <span className="font-display text-base font-semibold text-card-foreground">
                    {service.eyebrow}
                  </span>
                  <ChevronRight
                    className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center sm:px-12 lg:px-16 lg:py-20">
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary-foreground/10 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-16 size-64 rounded-full bg-primary-foreground/10 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-primary-foreground sm:text-4xl">
                  Need a qualified interpreter?
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-pretty text-primary-foreground/85">
                  Request an interpreter today or reach out to our team to learn
                  how Creovixa can support your language access needs.
                </p>
                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/#contact"
                    className={cn(
                      buttonVariants({ variant: 'secondary' }),
                      'h-12 bg-background px-6 text-base text-foreground hover:bg-background/90',
                    )}
                  >
                    Request an Interpreter
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/#contact"
                    className={cn(
                      buttonVariants({ variant: 'outline' }),
                      'h-12 border-primary-foreground/40 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground',
                    )}
                  >
                    Become an Interpreter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
