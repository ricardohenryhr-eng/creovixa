import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Target,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Users,
  Globe2,
  Languages as LanguagesIcon,
  FileText,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CallToAction } from '@/components/cta'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Creovixa Language Services — our mission, vision, and values, and how we deliver professional interpretation and translation through secure technology.',
}

const values = [
  {
    icon: ShieldCheck,
    title: 'Confidentiality',
    description:
      'Privacy-first, compliance-ready workflows protect every conversation and document we handle.',
  },
  {
    icon: Users,
    title: 'Professionalism',
    description:
      'Vetted, certified interpreters and translators held to the highest ethical standards.',
  },
  {
    icon: HeartHandshake,
    title: 'Human connection',
    description:
      'We believe understanding is a right, not a privilege, for every patient, client, and community.',
  },
  {
    icon: Globe2,
    title: 'Accessibility',
    description:
      'Coverage across 200+ languages and dialects, available on-site, by phone, and on video.',
  },
]

const offerings = [
  {
    icon: LanguagesIcon,
    title: 'Interpretation',
    description:
      'Real-time spoken language support through over-the-phone, video remote, and on-site interpreters for medical, legal, business, and government settings.',
  },
  {
    icon: FileText,
    title: 'Translation',
    description:
      'Accurate written translation of documents, records, and materials, reviewed for quality and cultural nuance across industries.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Creovixa Language Services"
        title="Bridging Languages, Connecting People"
        description="Creovixa Language Services connects organizations and individuals with qualified professional interpreters and translators through secure technology, so every conversation is clear, compliant, and human."
      />

      {/* Story + image */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative order-last lg:order-first">
            <div className="overflow-hidden rounded-2xl border border-border shadow-xl shadow-primary/5">
              <Image
                src="/about-team.png"
                alt="The Creovixa Language Services team collaborating in a modern office"
                width={720}
                height={640}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Who we are
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Language experts, powered by secure technology
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
              We remove language barriers so that patients, clients, and
              communities are understood, without compromising on privacy or
              quality. Our network of qualified interpreters and translators
              spans hundreds of languages and specialized fields.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From a single appointment to enterprise-wide language access
              programs, Creovixa delivers dependable, professional support
              whenever and wherever you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-card-foreground">
                Our Mission
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To break down language barriers by connecting people with
                qualified professional interpreters and translators through
                secure, accessible technology — ensuring every voice is heard
                and understood.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Eye className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-card-foreground">
                Our Vision
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                A world where language is never an obstacle to care, justice,
                opportunity, or connection — where anyone can communicate with
                confidence in any setting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Our Values
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              What guides everything we do
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-card-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              What we offer
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Interpretation and translation services
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="flex gap-5 rounded-2xl border border-border bg-card p-8"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <offering.icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-card-foreground">
                    {offering.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {offering.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
