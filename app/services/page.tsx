import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  Video,
  Users,
  Stethoscope,
  Scale,
  Briefcase,
  FileText,
  ArrowRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { PageHero } from '@/components/page-hero'
import { CallToAction } from '@/components/cta'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Creovixa Language Services: over-the-phone (OPI) and video remote (VRI) interpretation, on-site interpretation, medical, legal, and business interpretation, and document translation.',
}

const services = [
  {
    icon: Phone,
    title: 'Over-the-Phone Interpretation (OPI)',
    description:
      'Connect with a qualified interpreter by phone in seconds, 24/7. Ideal for quick calls, unscheduled needs, and rare language pairs, with no equipment required.',
    points: ['On-demand, 24/7 access', '200+ languages', 'No scheduling needed'],
  },
  {
    icon: Video,
    title: 'Video Remote Interpretation (VRI)',
    description:
      'Secure, on-demand video interpretation that adds visual context and support for sign language, combining the speed of remote access with face-to-face clarity.',
    points: ['HD secure video', 'Sign language support', 'Instant connection'],
  },
  {
    icon: Users,
    title: 'On-Site Interpretation',
    description:
      'Professional interpreters in person for sensitive, complex, or high-stakes appointments where physical presence makes the difference.',
    points: ['In-person presence', 'Scheduled appointments', 'Nationwide coverage'],
  },
  {
    icon: Stethoscope,
    title: 'Medical Interpretation',
    description:
      'Certified medical interpreters help clinicians and patients communicate accurately, protecting outcomes and meeting compliance standards.',
    points: ['HIPAA-ready', 'Certified interpreters', 'Clinical terminology'],
  },
  {
    icon: Scale,
    title: 'Legal Interpretation',
    description:
      'Precise, impartial interpretation for courts, depositions, and law firms, delivered by professionals trained in legal terminology and protocol.',
    points: ['Court-experienced', 'Impartial & accurate', 'Confidential'],
  },
  {
    icon: Briefcase,
    title: 'Business Interpretation',
    description:
      'Support cross-border meetings, negotiations, and conferences with interpreters who understand your industry and objectives.',
    points: ['Industry expertise', 'Meetings & conferences', 'Global reach'],
  },
  {
    icon: FileText,
    title: 'Document Translation',
    description:
      'Accurate written translation of records, contracts, forms, and materials, reviewed for quality, accuracy, and cultural nuance.',
    points: ['Certified translations', 'Quality reviewed', 'Fast turnaround'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Professional interpretation and translation for every setting"
        description="Whatever the conversation demands, Creovixa Language Services matches you with the right qualified interpreter or translator through secure technology."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-display text-lg font-semibold text-card-foreground text-balance">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Inline CTA card to balance the 8th grid cell */}
            <div className="flex flex-col justify-center rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <h2 className="font-display text-lg font-semibold text-foreground text-balance">
                Not sure which service fits?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Tell us about your setting and languages, and our team will
                recommend the right solution.
              </p>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'mt-5 h-11 w-fit px-5',
                )}
              >
                Request an Interpreter
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
