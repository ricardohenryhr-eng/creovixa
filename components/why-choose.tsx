import { BadgeCheck, ShieldCheck, Clock, Cpu } from 'lucide-react'

const reasons = [
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

export function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="scroll-mt-16 bg-secondary/40 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Why organizations choose Creovixa
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Trusted by healthcare, legal, government, and enterprise teams to
            deliver dependable language access.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
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
  )
}
