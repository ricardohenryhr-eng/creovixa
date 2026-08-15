import type { ReactNode } from 'react'

export type LegalSection = {
  heading: string
  body?: string[]
  list?: string[]
  footer?: ReactNode
}

type LegalPageProps = {
  title: string
  intro: string
  lastUpdated: string
  sections: LegalSection[]
}

export function LegalPage({ title, intro, lastUpdated, sections }: LegalPageProps) {
  return (
    <article className="border-b border-border bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <header className="border-b border-border pb-8">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
            <a href="/" className="transition-colors hover:text-foreground">
              Home
            </a>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-foreground">{title}</span>
          </nav>
          <h1 className="font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground">
            {intro}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </header>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                {section.heading}
              </h2>
              {section.body?.map((paragraph, index) => (
                <p
                  key={index}
                  className="mt-3 text-base leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
              {section.list ? (
                <ul className="mt-4 space-y-2">
                  {section.list.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                    >
                      <span
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.footer ? <div className="mt-4">{section.footer}</div> : null}
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}
