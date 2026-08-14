import type { Metadata } from 'next'
import {
  GraduationCap,
  BadgeCheck,
  ShieldCheck,
  Clock,
  Wallet,
  TrendingUp,
  Globe2,
  Headphones,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { InterpreterApplicationForm } from '@/components/interpreter-application-form'

export const metadata: Metadata = {
  title: 'Become an Interpreter',
  description:
    'Join the Creovixa Language Services interpreter network. See qualifications, languages in demand, and the benefits of working with us, then apply online.',
}

const qualifications = [
  {
    icon: GraduationCap,
    title: 'Professional fluency',
    description:
      'Native or near-native fluency in at least two languages, with strong interpreting skills.',
  },
  {
    icon: BadgeCheck,
    title: 'Certification',
    description:
      'Relevant certification (e.g. CMI, CHI, court certification) is preferred for specialized fields.',
  },
  {
    icon: ShieldCheck,
    title: 'Ethics & confidentiality',
    description:
      'Commitment to the interpreter code of ethics, impartiality, and strict confidentiality.',
  },
  {
    icon: Headphones,
    title: 'Reliable setup',
    description:
      'For remote work, a quiet environment, stable internet, and a professional headset.',
  },
]

const languages = [
  'Spanish',
  'Haitian Creole',
  'French',
  'Portuguese',
  'Mandarin',
  'Arabic',
  'Vietnamese',
  'Russian',
  'Korean',
  'ASL',
]

const benefits = [
  {
    icon: Clock,
    title: 'Flexible schedule',
    description:
      'Choose the assignments and hours that fit your life, on-site or remote.',
  },
  {
    icon: Wallet,
    title: 'Competitive pay',
    description:
      'Reliable, transparent compensation with prompt payment for every assignment.',
  },
  {
    icon: TrendingUp,
    title: 'Steady demand',
    description:
      'Consistent work across healthcare, legal, business, and government sectors.',
  },
  {
    icon: Globe2,
    title: 'Meaningful impact',
    description:
      'Help patients, clients, and communities be understood when it matters most.',
  },
]

export default function BecomeAnInterpreterPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Become a Creovixa Interpreter"
        description="Put your language skills to work with a company that values professionalism, flexibility, and human connection. Join a growing network of qualified interpreters and translators."
      />

      {/* Qualifications */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Qualifications
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              What we look for
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualifications.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages in demand */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Languages in demand
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              We&apos;re actively recruiting these languages
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
              Don&apos;t see your language? We support 200+ languages and welcome
              applications for all of them.
            </p>
          </div>
          <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {languages.map((language) => (
              <li
                key={language}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Why join Creovixa
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Benefits of joining our network
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <benefit.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
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

      {/* Application */}
      <section id="apply" className="scroll-mt-16 bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Apply now
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Start your application
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
              Fill out the form below and our recruitment team will get back to
              you shortly.
            </p>
          </div>
          <div className="mt-12">
            <InterpreterApplicationForm />
          </div>
        </div>
      </section>
    </>
  )
}
