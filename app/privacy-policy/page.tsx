import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Creovixa Language Services collects, uses, and protects your personal information, including your rights, cookies, and third-party services.',
}

const lastUpdated = 'August 14, 2026'

const sections = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    body: [
      'We collect information you provide directly to us, such as when you request an interpreter, submit a contact form, apply to join our interpreter network, or communicate with our team. This may include your name, email address, phone number, organization, preferred languages, and any details you include in your message or application.',
      'We also automatically collect certain technical information when you visit https://www.creovixa.com, including your IP address, browser type, device information, pages viewed, and the dates and times of your visits. This helps us operate, secure, and improve our website and services.',
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Information',
    body: [
      'We use the information we collect to deliver and improve our interpretation and translation services, respond to your inquiries, match you with qualified interpreters, process interpreter applications, and communicate with you about your requests.',
      'We may also use your information to maintain the security of our platform, comply with legal obligations, prevent fraud or misuse, and, where permitted, send you relevant service updates. We do not sell your personal information.',
    ],
  },
  {
    id: 'data-protection-and-security',
    title: 'Data Protection and Security',
    body: [
      'We implement appropriate technical and organizational measures designed to protect your personal information against unauthorized access, disclosure, alteration, or destruction. Our platform uses encryption in transit and compliance-ready workflows suited to sensitive healthcare, legal, and government contexts.',
      'While we work hard to safeguard your data, no method of transmission or storage is completely secure. We continuously review and strengthen our security practices to reduce risk.',
    ],
  },
  {
    id: 'cookies-and-tracking-technologies',
    title: 'Cookies and Tracking Technologies',
    body: [
      'We use cookies and similar tracking technologies to operate our website, remember your preferences, analyze traffic, and understand how our services are used. Cookies are small data files stored on your device.',
      'You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality and performance of our website.',
    ],
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    body: [
      'We may use trusted third-party providers to support our operations, such as analytics, hosting, communication, and security services (including reCAPTCHA to protect our forms from abuse). These providers may process limited information on our behalf and are expected to safeguard it appropriately.',
      'Our website may contain links to third-party sites that we do not control. We are not responsible for the privacy practices of those sites, and we encourage you to review their privacy policies.',
    ],
  },
  {
    id: 'user-rights',
    title: 'User Rights',
    body: [
      'Depending on your location, you may have rights to access, correct, update, or delete the personal information we hold about you, as well as to object to or restrict certain processing and to withdraw consent where applicable.',
      'To exercise any of these rights, please contact us using the details below. We will respond in accordance with applicable data protection laws.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This Privacy Policy explains how Creovixa Language Services collects, uses, and protects your information when you use our website and services."
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
                If you have any questions about this Privacy Policy or how we
                handle your information, please contact us:
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
                  href="/terms-of-service"
                  className="font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Terms of Service
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
