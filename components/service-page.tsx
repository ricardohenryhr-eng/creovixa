import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Phone as PhoneIcon,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { PageHero } from '@/components/page-hero'

export type RelatedService = {
  title: string
  href: string
}

export type ServicePageProps = {
  eyebrow: string
  title: string
  intro: string
  /** Section headline for the detailed description */
  descriptionHeading: string
  /** One or more paragraphs describing the service in detail */
  description: string[]
  benefits: { title: string; description: string }[]
  industries: { icon: LucideIcon; label: string }[]
  whyChoose: { icon: LucideIcon; title: string; description: string }[]
  related: RelatedService[]
}

export function ServicePage({
  eyebrow,
  title,
  intro,
  descriptionHeading,
  description,
  benefits,
  industries,
  whyChoose,
  related,
}: ServicePageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={intro} />

      {/* Primary CTAs directly under the hero */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: 'default' }), 'h-11 px-6')}
          >
            Request an Interpreter
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: 'outline' }), 'h-11 px-6')}
          >
            <PhoneIcon className="size-4" aria-hidden="true" />
            Contact Our Team
          </Link>
        </div>
      </section>

      {/* Detailed description */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              {descriptionHeading}
            </h2>
            <div className="mt-6 space-y-4">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-pretty text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Benefits
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Why organizations rely on this service
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Check className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-card-foreground text-balance">
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

      {/* Industries served */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Industries Served
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Trusted across every sector that depends on clear communication
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.label}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <industry.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-medium text-card-foreground">
                  {industry.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose Creovixa */}
      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Why Choose Creovixa
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              A language partner built for accuracy, speed, and trust
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-card-foreground text-balance">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related service pages (internal links) */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl">
            Explore related language services
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <span className="font-medium text-card-foreground">
                    {service.title}
                  </span>
                  <ArrowRight
                    className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-background pb-20 lg:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center sm:px-12 lg:px-16 lg:py-16">
            <div
              className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary-foreground/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-primary-foreground sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pretty text-primary-foreground/85">
                Connect with Creovixa Language Services today and communicate
                with confidence in any language.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: 'secondary' }),
                    'h-12 bg-background px-6 text-base text-foreground hover:bg-background/90',
                  )}
                >
                  Request an Interpreter
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: 'outline' }),
                    'h-12 border-primary-foreground/40 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground',
                  )}
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
