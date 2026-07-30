import { Stethoscope, Scale, Briefcase, Video } from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Medical Interpretation',
    description:
      'Certified medical interpreters help clinicians and patients communicate accurately, protecting outcomes and meeting compliance standards.',
  },
  {
    icon: Scale,
    title: 'Legal Interpretation',
    description:
      'Precise, impartial interpretation for courts, depositions, and law firms, delivered by professionals trained in legal terminology.',
  },
  {
    icon: Briefcase,
    title: 'Business Interpretation',
    description:
      'Support cross-border meetings, negotiations, and conferences with interpreters who understand your industry and objectives.',
  },
  {
    icon: Video,
    title: 'Remote Interpretation',
    description:
      'Connect to qualified interpreters on demand through secure video and phone, anywhere and anytime you need them.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Our Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Professional interpretation for every setting
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Whatever the conversation demands, Creovixa matches you with the
            right qualified interpreter through secure technology.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
