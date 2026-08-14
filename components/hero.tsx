import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Globe2, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const stats = [
  { value: '200+', label: 'Languages supported' },
  { value: '24/7', label: 'On-demand access' },
  { value: '10k+', label: 'Certified interpreters' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="flex flex-col">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Secure, technology-driven interpretation
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Connecting People Through Language
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Creovixa connects organizations and individuals with qualified
            professional interpreters through secure technology, so every
            conversation is clear, compliant, and human.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: 'default' }),
                'h-12 px-6 text-base',
              )}
            >
              Request an Interpreter
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/become-an-interpreter"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'h-12 px-6 text-base',
              )}
            >
              Join Our Interpreter Network
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl shadow-primary/5">
            <Image
              src="/hero-interpreters.png"
              alt="A professional interpreter assisting a client through a secure video call"
              width={720}
              height={840}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-lg sm:left-6">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-card-foreground">
                HIPAA-ready
              </p>
              <p className="text-xs text-muted-foreground">Secure by design</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-border bg-secondary/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-x-10 gap-y-3 px-4 py-5 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2">
            <Globe2 className="size-4 text-primary" aria-hidden="true" />
            Trusted by healthcare, legal & government teams
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="size-4 text-primary" aria-hidden="true" />
            On-site, phone & video interpretation
          </span>
        </div>
      </div>
    </section>
  )
}
