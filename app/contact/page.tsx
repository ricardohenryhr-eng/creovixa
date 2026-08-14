import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Creovixa Language Services to request an interpreter or ask a question. Email info@creovixa.com, call +1 849-534-8654, or send us a message.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We're here to help you connect"
        description="Request an interpreter, ask about our services, or explore a partnership. Our team typically responds within one business day."
      />
      <ContactForm />
    </>
  )
}
