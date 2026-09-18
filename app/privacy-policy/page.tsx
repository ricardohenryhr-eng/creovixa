import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LegalPage, type LegalSection } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy | Creovixa Language Services',
  description:
    'How Creovixa Language Services collects, uses, protects, and shares personal information, and the privacy rights available to you under GDPR and CCPA.',
  alternates: { canonical: '/privacy-policy' },
}

const sections: LegalSection[] = [
  {
    heading: 'Overview',
    body: [
      'Creovixa Language Services ("Creovixa", "we", "us", or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and the rights you have over it.',
      'This policy applies to www.creovixa.com and the interpretation services we provide. By using our website or services, you agree to the practices described here.',
    ],
  },
  {
    heading: 'Information We Collect',
    body: [
      'We collect information you provide directly to us and information collected automatically when you use our website.',
    ],
    list: [
      'Contact details you submit through our forms, such as your name, email address, phone number, organization, and message.',
      'Service information needed to fulfill interpretation requests, including language pair, industry, and appointment details.',
      'Technical data such as IP address, browser type, device information, and pages visited, collected only where permitted by your cookie choices.',
    ],
  },
  {
    heading: 'How We Use Your Information',
    body: ['We use personal information for the following purposes:'],
    list: [
      'To respond to inquiries and provide the interpretation services you request.',
      'To operate, maintain, and improve our website and services.',
      'To analyze aggregated, consent-based traffic data to enhance performance and content.',
      'To comply with legal obligations and protect the security of our services.',
    ],
  },
  {
    heading: 'Legal Bases for Processing (GDPR)',
    body: [
      'If you are located in the European Economic Area or the United Kingdom, we process your personal data on the following legal bases: your consent, the performance of a contract with you, compliance with legal obligations, and our legitimate interests in operating and improving our services.',
    ],
  },
  {
    heading: 'Cookies and Tracking',
    body: [
      'We use cookies and similar technologies as described in our Cookie Policy. Analytics and other non-essential cookies are only set after you grant consent through our cookie banner. You can change your choices at any time using the "Cookie Preferences" link in the footer.',
    ],
  },
  {
    heading: 'How We Share Information',
    body: [
      'We do not sell your personal information. We share information only with trusted service providers who help us operate our website and deliver services, and only to the extent necessary. We may also disclose information when required by law or to protect our rights.',
    ],
  },
  {
    heading: 'Data Retention',
    body: [
      'We retain personal information only for as long as necessary to fulfill the purposes described in this policy, to comply with legal obligations, resolve disputes, and enforce our agreements.',
    ],
  },
  {
    heading: 'Your Privacy Rights',
    body: [
      'Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information, to object to processing, and to data portability.',
      'Under the California Consumer Privacy Act (CCPA), California residents have the right to know what personal information we collect, to request deletion, and to opt out of the sale of personal information. We do not sell personal information.',
      'To exercise any of these rights, contact us at info@creovixa.com. We will respond in accordance with applicable law.',
    ],
  },
  {
    heading: 'Data Security',
    body: [
      'We implement appropriate technical and organizational measures to protect personal information against unauthorized access, loss, or misuse. No method of transmission over the internet is completely secure, but we work to safeguard your data.',
    ],
  },
  {
    heading: "Children's Privacy",
    body: [
      'Our website and services are not directed to children under 16, and we do not knowingly collect personal information from children.',
    ],
  },
  {
    heading: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. Material changes will be reflected by updating the "Last updated" date above and, where appropriate, by re-requesting your cookie consent.',
    ],
  },
  {
    heading: 'Contact Us',
    body: [
      'If you have questions about this Privacy Policy or your personal information, contact us at info@creovixa.com.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <LegalPage
          title="Privacy Policy"
          intro="Your privacy matters to us. This policy explains how Creovixa Language Services handles personal information and the rights you have under GDPR and CCPA."
          lastUpdated="August 15, 2026"
          sections={sections}
        />
      </main>
      <SiteFooter />
    </>
  )
}
