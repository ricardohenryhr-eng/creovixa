import type { Metadata } from 'next'
import {
  Stethoscope,
  Scale,
  Briefcase,
  Landmark,
  GraduationCap,
  HeartHandshake,
  Globe2,
  Clock,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { ServicePage } from '@/components/service-page'

export const metadata: Metadata = {
  title: 'French Interpreter Services | Professional French Interpretation',
  description:
    'Creovixa Language Services provides professional French interpreter services for healthcare, legal, and business settings. On-demand phone, video, and on-site French interpretation in the U.S. and worldwide.',
  alternates: { canonical: '/french-interpretation-services' },
}

export default function FrenchInterpretationPage() {
  return (
    <ServicePage
      eyebrow="French Interpretation Services"
      title="Professional French interpreter services you can trust"
      intro="Creovixa Language Services connects your organization with qualified French interpreters for medical, legal, government, and business communication, delivered on demand through secure technology or in person."
      descriptionHeading="Accurate French interpretation for high-stakes conversations"
      description={[
        'French is one of the most widely spoken languages in the world, and clear communication with French-speaking clients, patients, and partners is essential. Creovixa Language Services provides professional French interpreter services that bridge language gaps with accuracy, cultural understanding, and complete confidentiality.',
        'Our French interpreters are experienced professionals trained in specialized terminology across healthcare, law, government, and enterprise settings. Whether you need over-the-phone interpretation in seconds, scheduled video remote interpretation, or an on-site interpreter for a sensitive appointment, we match you with the right linguist for the conversation.',
        'From Parisian French to regional and African French dialects, our interpreters understand the nuances that make communication truly effective, helping you serve French-speaking communities with professionalism and care.',
      ]}
      benefits={[
        {
          title: 'Certified French linguists',
          description:
            'Work with vetted, experienced French interpreters trained in industry-specific terminology and professional ethics.',
        },
        {
          title: 'On-demand availability',
          description:
            'Connect with a French interpreter in seconds by phone or video, 24 hours a day, 7 days a week.',
        },
        {
          title: 'Cultural accuracy',
          description:
            'Our interpreters convey meaning, tone, and cultural nuance, not just words, for truly effective communication.',
        },
        {
          title: 'Confidential and compliant',
          description:
            'Every session is private and secure, with support for HIPAA-sensitive healthcare and legal requirements.',
        },
        {
          title: 'Flexible delivery',
          description:
            'Choose over-the-phone, video remote, or on-site French interpretation to fit any setting or budget.',
        },
        {
          title: 'Global reach',
          description:
            'Serve French-speaking communities across the U.S., Canada, Europe, Africa, and the Caribbean.',
        },
      ]}
      industries={[
        { icon: Stethoscope, label: 'Healthcare & Hospitals' },
        { icon: Scale, label: 'Legal & Courts' },
        { icon: Briefcase, label: 'Business & Enterprise' },
        { icon: Landmark, label: 'Government Agencies' },
        { icon: GraduationCap, label: 'Education' },
        { icon: HeartHandshake, label: 'Nonprofit Organizations' },
      ]}
      whyChoose={[
        {
          icon: Users,
          title: 'Professional interpreters',
          description:
            'Our French interpreters are qualified professionals held to rigorous standards of accuracy and impartiality.',
        },
        {
          icon: ShieldCheck,
          title: 'Confidential communication',
          description:
            'Secure, private interpretation that protects your clients, patients, and sensitive information.',
        },
        {
          icon: Clock,
          title: 'Fast response time',
          description:
            'On-demand access means you are never left waiting when a French speaker needs support.',
        },
        {
          icon: Globe2,
          title: 'Technology-driven solutions',
          description:
            'Secure phone and video platforms deliver reliable French interpretation wherever you are.',
        },
      ]}
      related={[
        {
          title: 'Haitian Creole Interpreter Services',
          href: '/haitian-creole-interpretation-services',
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
          title: 'Video Remote Interpretation',
          href: '/video-remote-interpretation',
        },
        {
          title: 'Over-the-Phone Interpretation',
          href: '/over-the-phone-interpretation',
        },
      ]}
    />
  )
}
