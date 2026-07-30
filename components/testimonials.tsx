import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Creovixa transformed how we deliver care to our multilingual patients. We connect with a qualified medical interpreter in under a minute, day or night.',
    name: 'Dr. Elena Marquez',
    role: 'Director of Patient Services, Riverside Health',
    initials: 'EM',
  },
  {
    quote:
      'Accuracy and confidentiality are non-negotiable in our practice. The interpreters are professional, precise, and trained for legal proceedings.',
    name: 'James Whitfield',
    role: 'Managing Partner, Whitfield & Associates',
    initials: 'JW',
  },
  {
    quote:
      'As we expanded into new markets, Creovixa helped us communicate clearly with partners worldwide. The platform is seamless and dependable.',
    name: 'Priya Nair',
    role: 'VP of Global Operations, Northbridge Group',
    initials: 'PN',
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-16 bg-secondary/40 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Trusted by organizations that can&apos;t compromise on communication
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Hear from the teams who rely on Creovixa to connect with the people
            they serve.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <Quote className="size-8 text-primary/25" aria-hidden="true" />
              <div className="mt-4 flex gap-0.5" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-primary text-primary"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-pretty text-card-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-semibold text-primary">
                  {t.initials}
                </span>
                <div>
                  <p className="font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
