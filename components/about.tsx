import Image from 'next/image'
import { ShieldCheck, Users, Zap, CheckCircle2 } from 'lucide-react'

const highlights = [
  {
    icon: Users,
    title: 'Qualified professionals',
    description:
      'Every interpreter is vetted, trained, and matched to your subject matter.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure technology',
    description:
      'Encrypted, privacy-first platform built for regulated industries.',
  },
  {
    icon: Zap,
    title: 'On-demand & scheduled',
    description:
      'Connect in seconds or plan ahead, on-site, by phone, or on video.',
  },
]

const points = [
  'Rigorous interpreter vetting and certification',
  'Coverage across 200+ languages and dialects',
  'Compliance-ready workflows for sensitive settings',
]

export function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-last lg:order-first">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl shadow-primary/5">
            <Image
              src="/about-team.png"
              alt="The Creovixa team collaborating in a modern office"
              width={720}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            About Creovixa
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Human connection, powered by secure technology
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Creovixa connects organizations and individuals with qualified
            professional interpreters through secure technology. We remove
            language barriers so that patients, clients, and communities are
            understood, without compromising on privacy or quality.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-sm text-foreground">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title}>
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
