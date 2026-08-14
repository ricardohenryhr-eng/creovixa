import type { Metadata } from 'next'
import Link from 'next/link'
import { Plus, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Creovixa Language Services — interpretation services, languages supported, pricing, and how to apply as an interpreter.',
}

const faqGroups = [
  {
    category: 'Interpretation services',
    items: [
      {
        question: 'What types of interpretation do you offer?',
        answer:
          'We provide over-the-phone interpretation (OPI), video remote interpretation (VRI), and on-site interpretation, along with specialized medical, legal, and business interpretation and document translation.',
      },
      {
        question: 'How quickly can I connect with an interpreter?',
        answer:
          'Over-the-phone and video remote interpreters are available on demand, 24/7, and typically connect within seconds. On-site interpretation is scheduled in advance based on your location and language needs.',
      },
      {
        question: 'Are your interpreters qualified and certified?',
        answer:
          'Yes. Every interpreter is vetted and trained, and we match certified professionals (such as medically or court-certified interpreters) to assignments that require specialized expertise.',
      },
      {
        question: 'Is my information kept confidential?',
        answer:
          'Absolutely. We use a privacy-first, secure platform with compliance-ready workflows, and all interpreters adhere to strict confidentiality and a professional code of ethics.',
      },
    ],
  },
  {
    category: 'Languages supported',
    items: [
      {
        question: 'Which languages do you support?',
        answer:
          'We support 200+ languages and dialects, including Spanish, Haitian Creole, French, Portuguese, Mandarin, Arabic, Vietnamese, Russian, Korean, and American Sign Language (ASL).',
      },
      {
        question: 'Do you support sign language interpretation?',
        answer:
          'Yes. American Sign Language (ASL) interpretation is available through our video remote interpretation (VRI) service and on-site upon request.',
      },
      {
        question: 'What if I need a rare or less common language?',
        answer:
          'Our network spans hundreds of languages, including many rare pairs. If you have a specialized request, contact us and we will source the right interpreter for you.',
      },
    ],
  },
  {
    category: 'Pricing & inquiries',
    items: [
      {
        question: 'How does pricing work?',
        answer:
          'Pricing depends on the service type (OPI, VRI, or on-site), language, and duration. We offer flexible options for one-time needs and ongoing enterprise language access programs. Contact us for a tailored quote.',
      },
      {
        question: 'Do you offer plans for organizations?',
        answer:
          'Yes. We work with healthcare systems, law firms, businesses, government agencies, and nonprofits to build language access programs that fit their volume and compliance requirements.',
      },
      {
        question: 'How do I request a quote?',
        answer:
          'Reach out through our Contact Us page, email info@creovixa.com, or call +1 849-534-8654, and our team will follow up with pricing tailored to your needs.',
      },
    ],
  },
  {
    category: 'Interpreter applications',
    items: [
      {
        question: 'How do I apply to become an interpreter?',
        answer:
          'Visit our Become an Interpreter page and complete the online application. Our recruitment team will review your qualifications and reach out about next steps.',
      },
      {
        question: 'What qualifications do I need?',
        answer:
          'We look for native or near-native fluency in at least two languages, strong interpreting skills, adherence to the interpreter code of ethics, and relevant certification for specialized fields.',
      },
      {
        question: 'Can I work remotely?',
        answer:
          'Yes. Many of our interpreters work remotely via phone and video. For remote assignments you will need a quiet environment, stable internet, and a professional headset.',
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Answers to common questions about our interpretation services, supported languages, pricing, and how to join our interpreter network."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {faqGroups.map((group) => (
              <div key={group.category}>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                  {group.category}
                </h2>
                <div className="mt-5 flex flex-col gap-3">
                  {group.items.map((item) => (
                    <details
                      key={item.question}
                      className="group rounded-xl border border-border bg-card px-5 shadow-sm [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium text-card-foreground">
                        <span className="text-pretty">{item.question}</span>
                        <Plus
                          className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
                          aria-hidden="true"
                        />
                      </summary>
                      <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-14 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
            <h2 className="font-display text-xl font-semibold text-foreground">
              Still have questions?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Our team is happy to help. Reach out and we&apos;ll get back to you
              within one business day.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: 'default' }),
                'mt-6 h-11 px-5',
              )}
            >
              Contact Us
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
