import {
  HeartPulse,
  Landmark,
  Building2,
  HandHeart,
  Scale,
} from 'lucide-react'

const industries = [
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description:
      'Hospitals and clinics deliver equitable, compliant care with interpreters trained for clinical settings.',
  },
  {
    icon: Scale,
    title: 'Legal Services',
    description:
      'Law firms and courts rely on accurate, impartial interpretation for high-stakes proceedings.',
  },
  {
    icon: Landmark,
    title: 'Government',
    description:
      'Public agencies serve multilingual communities with dependable, secure language access.',
  },
  {
    icon: Building2,
    title: 'Business',
    description:
      'Enterprises expand globally with interpreters who bridge language and cultural gaps.',
  },
  {
    icon: HandHeart,
    title: 'Nonprofit Organizations',
    description:
      'Mission-driven teams reach the people they serve, no matter what language they speak.',
  },
]

export function Industries() {
  return (
    <section
      id="industries"
      className="scroll-mt-16 bg-secondary/40 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Industries We Serve
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Language access, tailored to your field
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Creovixa supports organizations where clear communication is
            mission-critical.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
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
  )
}
