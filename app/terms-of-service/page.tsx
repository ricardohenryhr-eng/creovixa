import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the Terms of Service governing your use of Creovixa Language Services, including user responsibilities, interpreter network terms, liability, and governing law.',
}

const lastUpdated = 'August 14, 2026'

const sections = [
  {
    id: 'acceptance-of-terms',
    title: 'Acceptance of Terms',
    body: [
      'By accessing or using the website https://www.creovixa.com or any services provided by Creovixa Language Services ("Creovixa," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our website or services.',
      'These terms apply to all visitors, clients, and interpreters who access or use our services.',
    ],
  },
  {
    id: 'description-of-services',
    title: 'Description of Services',
    body: [
      'Creovixa Language Services provides professional interpretation and translation services, including over-the-phone interpretation, video remote interpretation, on-site interpretation, and document translation, delivered through secure technology.',
      'We reserve the right to modify, suspend, or discontinue any part of our services at any time, with or without notice, and we are not liable for any resulting changes to availability.',
    ],
  },
  {
    id: 'user-responsibilities',
    title: 'User Responsibilities',
    body: [
      'You agree to provide accurate and complete information when requesting services, communicating with us, or submitting forms. You are responsible for maintaining the confidentiality of any account credentials and for all activity conducted through your account.',
      'You agree not to misuse our website or services, including by attempting to gain unauthorized access, interfering with normal operation, or using our services for any unlawful or prohibited purpose.',
    ],
  },
  {
    id: 'interpreter-network-terms',
    title: 'Interpreter Network Terms',
    body: [
      'Interpreters who apply to or participate in the Creovixa network agree to provide services professionally, maintain strict confidentiality, and adhere to the applicable interpreter code of ethics and any relevant certification standards.',
      'Acceptance into the interpreter network is at our discretion and may require verification of qualifications. Participation does not guarantee any specific volume of assignments, and either party may end the relationship in accordance with any applicable agreement.',
    ],
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    body: [
      'To the fullest extent permitted by law, Creovixa Language Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of, or inability to use, our website or services.',
      'Our services are provided on an "as available" basis. We do not warrant that our services will be uninterrupted, error-free, or entirely free from inaccuracies inherent in language interpretation.',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    body: [
      'All content on our website, including text, graphics, logos, the Creovixa name, and software, is the property of Creovixa Language Services or its licensors and is protected by intellectual property laws.',
      'You may not copy, reproduce, distribute, or create derivative works from our content without our prior written permission.',
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy',
    body: [
      'Your use of our website and services is also governed by our Privacy Policy, which explains how we collect, use, and protect your information. By using our services, you consent to the practices described in that policy.',
    ],
    link: { href: '/privacy-policy', label: 'Read our Privacy Policy' },
  },
  {
    id: 'changes-to-terms',
    title: 'Changes to Terms',
    body: [
      'We may update these Terms of Service from time to time. When we make changes, we will revise the "Last updated" date above. Your continued use of our website or services after any changes take effect constitutes acceptance of the updated terms.',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    body: [
      'These Terms of Service are governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these terms or your use of our services shall be subject to the jurisdiction of the appropriate courts.',
    ],
  },
]

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="These Terms of Service govern your access to and use of the Creovixa Language Services website and interpretation and translation services."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>

          <div className="mt-10 flex flex-col gap-12">
            {sections.map((section, index) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                  <span className="text-primary">{index + 1}.</span>{' '}
                  {section.title}
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  {section.body.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed text-pretty text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.link ? (
                    <p className="text-base leading-relaxed text-muted-foreground">
                      <Link
                        href={section.link.href}
                        className="font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        {section.link.label}
                      </Link>
                    </p>
                  ) : null}
                </div>
              </div>
            ))}

            {/* Contact Information */}
            <div id="contact-information" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                <span className="text-primary">{sections.length + 1}.</span>{' '}
                Contact Information
              </h2>
              <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="mt-5 rounded-2xl border border-border bg-card p-6">
                <dl className="flex flex-col gap-3 text-sm">
                  <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
                    <dt className="font-semibold text-foreground">Company:</dt>
                    <dd className="text-muted-foreground">
                      Creovixa Language Services
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
                    <dt className="font-semibold text-foreground">Website:</dt>
                    <dd>
                      <a
                        href="https://www.creovixa.com"
                        className="text-primary transition-colors hover:text-primary/80"
                      >
                        https://www.creovixa.com
                      </a>
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
                    <dt className="font-semibold text-foreground">Email:</dt>
                    <dd>
                      <a
                        href="mailto:info@creovixa.com"
                        className="text-primary transition-colors hover:text-primary/80"
                      >
                        info@creovixa.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                See also our{' '}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
