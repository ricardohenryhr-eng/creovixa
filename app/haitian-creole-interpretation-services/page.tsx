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
  title: 'Haitian Creole Interpreter | Professional Kreyòl Interpretation',
  description:
    'Creovixa Language Services offers professional Haitian Creole interpreter services for hospitals, courts, and agencies. On-demand phone, video, and on-site Haitian Creole (Kreyòl) interpretation.',
  alternates: { canonical: '/haitian-creole-interpretation-services' },
}

export default function HaitianCreoleInterpretationPage() {
  return (
    <ServicePage
      eyebrow="Haitian Creole Interpretation Services"
      title="Professional Haitian Creole interpreter services"
      intro="Creovixa Language Services provides qualified Haitian Creole (Kreyòl) interpreters for healthcare, legal, government, and community settings, helping you communicate clearly with Haitian Creole speakers on demand."
      descriptionHeading="Trusted Haitian Creole interpretation for the communities you serve"
      description={[
        'Haitian Creole is spoken by millions of people across the United States, the Caribbean, and beyond. For hospitals, courts, schools, and agencies serving Haitian communities, access to a qualified Haitian Creole interpreter is essential to providing equitable, effective service.',
        'Creovixa Language Services delivers professional Haitian Creole interpreter services with linguists who are native or near-native speakers trained in medical, legal, and social-services terminology. We help you eliminate language barriers so every client and patient is understood and every message is conveyed accurately.',
        'Whether you need immediate over-the-phone interpretation, secure video remote interpretation, or an on-site Haitian Creole interpreter, Creovixa connects you with the right professional quickly, with the cultural sensitivity these conversations require.',
      ]}
      benefits={[
        {
          title: 'Native-level Kreyòl interpreters',
          description:
            'Our Haitian Creole interpreters bring authentic fluency and deep cultural understanding to every session.',
        },
        {
          title: 'On-demand access',
          description:
            'Reach a Haitian Creole interpreter within seconds by phone or video, available around the clock.',
        },
        {
          title: 'Community-focused',
          description:
            'We help hospitals, courts, and agencies serve Haitian Creole–speaking populations with dignity and clarity.',
        },
        {
          title: 'Confidential and compliant',
          description:
            'Every conversation is private and secure, with support for HIPAA-sensitive and legal settings.',
        },
        {
          title: 'Flexible delivery options',
          description:
            'Choose phone, video, or on-site Haitian Creole interpretation to match your setting and needs.',
        },
        {
          title: 'Accurate and impartial',
          description:
            'Interpreters convey meaning faithfully and neutrally, protecting the integrity of every exchange.',
        },
      ]}
      industries={[
        { icon: Stethoscope, label: 'Healthcare & Hospitals' },
        { icon: Scale, label: 'Legal & Courts' },
        { icon: Landmark, label: 'Government & Social Services' },
        { icon: GraduationCap, label: 'Education' },
        { icon: HeartHandshake, label: 'Nonprofit Organizations' },
        { icon: Briefcase, label: 'Business & Enterprise' },
      ]}
      whyChoose={[
        {
          icon: Users,
          title: 'Professional interpreters',
          description:
            'Qualified Haitian Creole interpreters held to strict standards of accuracy, ethics, and impartiality.',
        },
        {
          icon: ShieldCheck,
          title: 'Confidential communication',
          description:
            'Private, secure interpretation that protects the people and information you are responsible for.',
        },
        {
          icon: Clock,
          title: 'Fast response time',
          description:
            'On-demand connection means Haitian Creole speakers get the support they need without delay.',
        },
        {
          icon: Globe2,
          title: 'Technology-driven solutions',
          description:
            'Reliable, secure phone and video platforms bring Haitian Creole interpretation anywhere.',
        },
      ]}
      related={[
        {
          title: 'French Interpreter Services',
          href: '/french-interpretation-services',
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
