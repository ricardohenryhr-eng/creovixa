import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LegalPage, type LegalSection } from '@/components/legal-page'
import { CookiePreferencesButton } from '@/components/cookie-preferences-button'

export const metadata: Metadata = {
  title: 'Cookie Policy | Creovixa Language Services',
  description:
    'Learn how Creovixa Language Services uses cookies, the categories of cookies we use, and how to manage your consent under GDPR and CCPA.',
  alternates: { canonical: '/cookie-policy' },
}

const sections: LegalSection[] = [
  {
    heading: 'What Are Cookies?',
    body: [
      'Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember your preferences, and understand how the site is used. Similar technologies such as local storage serve comparable purposes.',
    ],
  },
  {
    heading: 'How We Use Cookies',
    body: [
      'We use cookies to provide core functionality and, with your consent, to analyze traffic and improve our services. We do not set analytics or other non-essential cookies until you have granted consent through our cookie banner.',
    ],
  },
  {
    heading: 'Categories of Cookies We Use',
    body: ['We group cookies into the following categories:'],
    list: [
      'Essential cookies: Required for the website to function, including security and basic navigation. These are always active and cannot be disabled.',
      'Analytics cookies: Help us understand how visitors interact with the site so we can improve performance and content. These are only used after you opt in.',
    ],
  },
  {
    heading: 'Managing Your Consent',
    body: [
      'When you first visit our website, a banner lets you Accept All, Reject Non-Essential, or open Cookie Preferences to make a granular choice. Your selection is stored on your device so we can honor it on future visits.',
      'You can change your choice at any time using the button below or the "Cookie Preferences" link in the footer.',
    ],
    footer: <CookiePreferencesButton variant="button" />,
  },
  {
    heading: 'How to Control Cookies in Your Browser',
    body: [
      'In addition to our consent tools, most browsers let you block or delete cookies through their settings. Please note that disabling essential cookies may affect how the website functions.',
    ],
  },
  {
    heading: 'Your Rights',
    body: [
      'Under the GDPR, CCPA, and similar privacy laws, you have the right to control how non-essential cookies are used and to withdraw consent at any time. For more detail on how we handle personal information, see our Privacy Policy.',
    ],
  },
  {
    heading: 'Updates to This Policy',
    body: [
      'We may update this Cookie Policy as our practices or legal requirements change. When we make material changes, we will update the "Last updated" date and, where appropriate, request your consent again.',
    ],
  },
  {
    heading: 'Contact Us',
    body: [
      'If you have questions about our use of cookies, contact us at info@creovixa.com.',
    ],
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <LegalPage
          title="Cookie Policy"
          intro="This policy explains how Creovixa Language Services uses cookies and similar technologies, and how you can manage your consent at any time."
          lastUpdated="August 15, 2026"
          sections={sections}
        />
      </main>
      <SiteFooter />
    </>
  )
}
