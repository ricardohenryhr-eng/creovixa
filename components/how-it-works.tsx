import { ClipboardList, Users, PhoneCall } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Request',
    description:
      'Tell us the language, setting, and timing you need. Submit a request in seconds through our secure platform, on-demand or scheduled in advance.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Match',
    description:
      'Our technology instantly matches your request with a qualified, vetted interpreter who specializes in your industry and language pair.',
  },
  {
    number: '03',
    icon: PhoneCall,
    title: 'Connect',
    description:
      'Connect by phone, video, or on-site and communicate with confidence. Every session is secure, professional, and fully supported.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Language access in three simple steps
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            From request to conversation, Creovixa makes connecting with a
            professional interpreter effortless.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />
          <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map((step) => (
              <li key={step.title} className="relative flex flex-col">
                <div className="flex items-center gap-4">
                  <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                    <step.icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="font-display text-4xl font-bold text-border">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
