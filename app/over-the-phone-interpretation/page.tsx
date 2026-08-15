import type { Metadata } from 'next'
import {
  Stethoscope,
  Scale,
  Briefcase,
  Landmark,
  Headphones,
  PhoneCall,
  Globe2,
  Clock,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { ServicePage } from '@/components/service-page'

export const metadata: Metadata = {
  title: 'Over-the-Phone Interpretation (OPI) | 24/7 Phone Interpreters',
  description:
    'Creovixa Language Services provides on-demand over-the-phone interpretation (OPI) in 200+ languages, 24/7. Connect with a professional phone interpreter in seconds, no scheduling or equipment required.',
  alternates: { canonical: '/over-the-phone-interpretation' },
}

export default function OverThePhoneInterpretationPage() {
  return (
    <ServicePage
      eyebrow="Over-the-Phone Interpretation"
      title="On-demand over-the-phone interpretation (OPI), 24/7"
      intro="Creovixa Language Services connects you with a qualified phone interpreter in seconds, any time of day, in more than 200 languages, with no scheduling or special equipment required."
      descriptionHeading="Instant access to professional phone interpreters"
      description={[
        'When a language barrier appears without warning, you need help immediately. Over-the-phone interpretation (OPI) from Creovixa Language Services gives your team instant access to qualified interpreters in seconds, 24 hours a day, 7 days a week, making it the fastest way to communicate across languages.',
        'OPI is ideal for quick calls, unscheduled needs, and rare language pairs. There is no equipment to install and no appointment to book, just dial in and connect with a professional interpreter who accurately relays the conversation in real time.',
        'From hospital admissions and emergency calls to customer service and government hotlines, Creovixa helps organizations serve limited-English-proficiency speakers instantly, improving access, satisfaction, and compliance across every interaction.',
      ]}
      benefits={[
        {
          title: 'On-demand, 24/7 access',
          description:
            'Reach a professional interpreter any time, day or night, for planned and unexpected needs alike.',
        },
        {
          title: '200+ languages',
          description:
            'Connect with interpreters for common and rare languages whenever a caller needs support.',
        },
        {
          title: 'No scheduling needed',
          description:
            'Skip appointments and equipment, just dial in and connect within seconds.',
        },
        {
          title: 'Fast and reliable',
          description:
            'Ideal for emergencies, hotlines, and high call volumes where every second counts.',
        },
        {
          title: 'Cost-effective',
          description:
            'Pay for interpretation only when you use it, with no travel or equipment costs.',
        },
        {
          title: 'Confidential and compliant',
          description:
            'Secure calls support HIPAA-sensitive healthcare and other privacy requirements.',
        },
      ]}
      industries={[
        { icon: Stethoscope, label: 'Healthcare & Hospitals' },
        { icon: Scale, label: 'Legal & Courts' },
        { icon: Briefcase, label: 'Business & Customer Service' },
        { icon: Landmark, label: 'Government & Hotlines' },
        { icon: Headphones, label: 'Call Centers' },
        { icon: PhoneCall, label: 'Emergency Services' },
      ]}
      whyChoose={[
        {
          icon: Users,
          title: 'Professional interpreters',
          description:
            'Qualified phone interpreters held to rigorous standards of accuracy, ethics, and impartiality.',
        },
        {
          icon: ShieldCheck,
          title: 'Confidential communication',
          description:
            'Secure phone interpretation that protects the people and information you are responsible for.',
        },
        {
          icon: Clock,
          title: 'Fast response time',
          description:
            'Connect in seconds so callers never wait when they need language support most.',
        },
        {
          icon: Globe2,
          title: 'Technology-driven solutions',
          description:
            'A reliable phone platform delivers interpretation from any location on any device.',
        },
      ]}
      related={[
        {
          title: 'Video Remote Interpretation',
          href: '/video-remote-interpretation',
        },
        {
          title: 'Medical Interpretation Services',
          href: '/medical-interpretation-services',
        },
        {
          title: 'Legal Interpretation Services',
          href: '/legal-interpretation-services',
        },
        {
          title: 'French Interpreter Services',
          href: '/french-interpretation-services',
        },
        {
          title: 'Haitian Creole Interpreter Services',
          href: '/haitian-creole-interpretation-services',
        },
      ]}
    />
  )
}
