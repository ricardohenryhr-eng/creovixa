import type { Metadata } from 'next'
import { Globe2, Clock, Wallet, GraduationCap } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { InterpreterApplicationForm } from '@/components/interpreter-application-form'

export const metadata: Metadata = {
  title: 'Join the Creovixa Interpreter Network | Freelance Opportunities',
  description:
    'Apply to join the Creovixa interpreter network. Freelance OPI, VRI, and onsite interpretation opportunities for certified professionals in 200+ languages.',
  keywords: [
    'freelance interpreter jobs',
    'become an interpreter',
    'remote interpreter opportunities',
    'OPI VRI onsite interpreter',
    'interpreter network',
  ],
  alternates: { canonical: '/join-network' },
  openGraph: {
    title: 'Join the Creovixa Interpreter Network',
    description:
      'Freelance OPI, VRI, and onsite interpretation opportunities for certified professionals.',
    url: '/join-network',
    type: 'website',
  },
}

const perks = [
  {
    icon: Globe2,
    title: 'Global demand',
    description:
      'Work with clients across healthcare, legal, government, and business in 200+ languages.',
  },
  {
    icon: Clock,
    title: 'Flexible schedule',
    description:
      'Choose OPI, VRI, or onsite assignments that fit your availability, full-time or part-time.',
  },
  {
    icon: Wallet,
    title: 'Competitive pay',
    description:
      'Earn reliable, competitive rates with prompt payment for every completed assignment.',
  },
  {
    icon: GraduationCap,
    title: 'Ongoing support',
    description:
      'Access training, a modern platform, and a team that helps you grow your practice.',
  },
]

export default function JoinNetworkPage() {
  const recaptchaSiteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? process.env.RECAPTCHA_SITE_KEY

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Careers · Interpreter Network
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
                Join the Creovixa Interpreter Network
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
                Are you a skilled interpreter looking for flexible, rewarding
                freelance work? Creovixa connects certified language
                professionals with organizations that need dependable
                interpretation, over the phone, by video, or onsite. Apply below
                to become part of a trusted global network.
              </p>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {perks.map((perk) => (
                <li
                  key={perk.title}
                  className="flex flex-col rounded-2xl border border-border bg-card p-5"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <perk.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 font-display text-base font-semibold text-card-foreground">
                    {perk.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {perk.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Application form */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Application
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
                Apply to become a Creovixa interpreter
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
                Complete the form below. Fields marked as required help us match
                you with the right assignments.
              </p>
            </div>
            <div className="mt-12">
              <InterpreterApplicationForm siteKey={recaptchaSiteKey} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
