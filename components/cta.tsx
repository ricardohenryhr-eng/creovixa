import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export function CallToAction() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center sm:px-12 lg:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary-foreground/10 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-16 size-64 rounded-full bg-primary-foreground/10 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-primary-foreground sm:text-4xl">
              Ready to connect people through language?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-primary-foreground/85">
              Whether you need an interpreter today or want to join our network
              of professionals, Creovixa is here to help you communicate without
              barriers.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: 'secondary' }),
                  'h-12 bg-background px-6 text-base text-foreground hover:bg-background/90',
                )}
              >
                Request an Interpreter
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/become-an-interpreter"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'h-12 border-primary-foreground/40 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground',
                )}
              >
                Join Our Interpreter Network
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
