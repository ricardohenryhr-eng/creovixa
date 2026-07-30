import { Globe } from 'lucide-react'

const languages = [
  { name: 'English', native: 'English' },
  { name: 'French', native: 'Français' },
  { name: 'Haitian Creole', native: 'Kreyòl Ayisyen' },
  { name: 'Spanish', native: 'Español' },
  { name: 'Portuguese', native: 'Português' },
]

export function Languages() {
  return (
    <section
      id="languages"
      className="scroll-mt-16 bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Languages We Support
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Communicate across languages and cultures
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Our growing network of professional interpreters connects your
            organization with the communities you serve.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {languages.map((language) => (
            <li
              key={language.name}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Globe className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-card-foreground">
                  {language.name}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {language.native}
                </p>
              </div>
            </li>
          ))}

          <li className="flex items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-5 text-center">
            <p className="font-display text-base font-semibold text-primary">
              More languages coming soon
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
