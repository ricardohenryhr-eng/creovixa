import { cn } from '@/lib/utils'

type SiteLogoProps = {
  className?: string
  markClassName?: string
  nameClassName?: string
  taglineClassName?: string
}

export function SiteLogo({
  className,
  markClassName,
  nameClassName,
  taglineClassName,
}: SiteLogoProps) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <img
        src="/creovixa-mark.png"
        alt=""
        aria-hidden="true"
        className={cn('h-9 w-auto', markClassName)}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-xl font-bold tracking-tight text-primary',
            nameClassName,
          )}
        >
          Creovixa
        </span>
        <span
          className={cn(
            'mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary/70',
            taglineClassName,
          )}
        >
          Language Services
        </span>
      </span>
      <span className="sr-only">Creovixa Language Services</span>
    </span>
  )
}
