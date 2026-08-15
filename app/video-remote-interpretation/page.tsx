import type { Metadata } from 'next'
import {
  Stethoscope,
  Scale,
  Briefcase,
  Landmark,
  GraduationCap,
  Accessibility,
  Globe2,
  Clock,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { ServicePage } from '@/components/service-page'

export const metadata: Metadata = {
  title: 'Video Remote Interpretation (VRI) | On-Demand Video Interpreters',
  description:
    'Creovixa Language Services offers secure video remote interpretation (VRI) on demand. Connect with professional interpreters and sign language experts by HD video in 200+ languages, 24/7.',
  alternates: { canonical: '/video-remote-interpretation' },
}

export default function VideoRemoteInterpretationPage() {
  return (
    <ServicePage
      eyebrow="Video Remote Interpretation"
      title="Secure video remote interpretation (VRI) on demand"
      intro="Creovixa Language Services delivers on-demand video remote interpretation that adds visual context and sign language support, combining the speed of remote access with the clarity of face-to-face communication."
      descriptionHeading="Face-to-face clarity with the speed of remote access"
      description={[
        'Video remote interpretation (VRI) brings the benefits of in-person communication to any location with an internet connection. By adding visual context, facial expressions, and body language, VRI improves understanding in situations where tone and nuance matter, all without the wait or cost of scheduling an on-site interpreter.',
        'Creovixa Language Services provides secure, HD video remote interpretation for healthcare, legal, business, and government settings. Our platform connects you with a professional interpreter in seconds, including American Sign Language (ASL) support for Deaf and hard-of-hearing individuals.',
        'VRI is ideal when visual cues are important but an on-site interpreter is not available or practical. With reliable technology and qualified interpreters in 200+ languages, Creovixa helps you deliver responsive, inclusive service every time.',
      ]}
      benefits={[
        {
          title: 'HD secure video',
          description:
            'Reliable, encrypted video connections deliver clear communication that protects privacy.',
        },
        {
          title: 'Sign language support',
          description:
            'Built-in access to American Sign Language interpreters for Deaf and hard-of-hearing individuals.',
        },
        {
          title: 'Instant connection',
          description:
            'Connect with a professional video interpreter in seconds, 24 hours a day, 7 days a week.',
        },
        {
          title: 'Visual context',
          description:
            'Facial expressions and body language improve accuracy in sensitive conversations.',
        },
        {
          title: 'Cost-effective',
          description:
            'Get face-to-face quality without the travel time and cost of on-site interpretation.',
        },
        {
          title: '200+ languages',
          description:
            'From common to rare languages, the right interpreter is only a video call away.',
        },
      ]}
      industries={[
        { icon: Stethoscope, label: 'Healthcare & Hospitals' },
        { icon: Scale, label: 'Legal & Courts' },
        { icon: Briefcase, label: 'Business & Enterprise' },
        { icon: Landmark, label: 'Government Agencies' },
        { icon: GraduationCap, label: 'Education' },
        { icon: Accessibility, label: 'Deaf & Hard of Hearing Services' },
      ]}
      whyChoose={[
        {
          icon: Users,
          title: 'Professional interpreters',
          description:
            'Qualified video interpreters held to rigorous standards of accuracy, ethics, and impartiality.',
        },
        {
          icon: ShieldCheck,
          title: 'Confidential communication',
          description:
            'Secure, encrypted video sessions that protect the people and information you serve.',
        },
        {
          icon: Clock,
          title: 'Fast response time',
          description:
            'On-demand connection means visual interpretation is available the moment you need it.',
        },
        {
          icon: Globe2,
          title: 'Technology-driven solutions',
          description:
            'A reliable, easy-to-use video platform brings interpretation to any device, anywhere.',
        },
      ]}
      related={[
        {
          title: 'Over-the-Phone Interpretation',
          href: '/over-the-phone-interpretation',
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
