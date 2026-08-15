import type { Metadata } from 'next'
import {
  Scale,
  Gavel,
  Building2,
  Landmark,
  FileText,
  ShieldCheck,
  Globe2,
  Clock,
  Users,
  Lock,
} from 'lucide-react'
import { ServicePage } from '@/components/service-page'

export const metadata: Metadata = {
  title: 'Legal Interpretation Services | Certified Court Interpreters',
  description:
    'Creovixa Language Services provides professional legal interpretation services for courts, law firms, and depositions. Accurate, impartial, and confidential legal interpreters by phone, video, or on-site.',
  alternates: { canonical: '/legal-interpretation-services' },
}

export default function LegalInterpretationPage() {
  return (
    <ServicePage
      eyebrow="Legal Interpretation Services"
      title="Professional legal interpretation services for courts and law firms"
      intro="Creovixa Language Services delivers precise, impartial legal interpretation for courts, depositions, and law firms, provided by interpreters trained in legal terminology and courtroom protocol."
      descriptionHeading="Precise, impartial legal interpretation you can rely on"
      description={[
        'In legal settings, accuracy and impartiality are non-negotiable. A single misinterpreted word can affect the outcome of a case. Creovixa Language Services provides professional legal interpretation services that give attorneys, courts, and clients confidence that every statement is conveyed faithfully and neutrally.',
        'Our legal interpreters are experienced professionals trained in legal terminology, procedure, and ethics. They support courtroom hearings, depositions, client consultations, arbitrations, and immigration proceedings with the precision and discretion the legal field demands.',
        'Available on demand by phone or video and scheduled for on-site appearances, Creovixa helps law firms, courts, and government agencies meet language-access requirements while protecting due process and client confidentiality.',
      ]}
      benefits={[
        {
          title: 'Court-experienced interpreters',
          description:
            'Linguists trained in legal terminology and courtroom protocol for hearings, depositions, and more.',
        },
        {
          title: 'Impartial and accurate',
          description:
            'Interpreters convey every statement faithfully and neutrally to protect the integrity of proceedings.',
        },
        {
          title: 'Strict confidentiality',
          description:
            'Privileged and sensitive information is protected with the highest standards of discretion.',
        },
        {
          title: 'Flexible delivery',
          description:
            'Choose phone, video, or on-site legal interpretation to fit courtrooms, offices, and remote hearings.',
        },
        {
          title: 'On-demand availability',
          description:
            'Connect with a legal interpreter quickly for time-sensitive consultations and unscheduled needs.',
        },
        {
          title: 'Broad language coverage',
          description:
            'Serve diverse clients and defendants with qualified interpreters across 200+ languages.',
        },
      ]}
      industries={[
        { icon: Gavel, label: 'Courts & Tribunals' },
        { icon: Scale, label: 'Law Firms' },
        { icon: Building2, label: 'Corporate Legal' },
        { icon: Landmark, label: 'Government & Immigration' },
        { icon: FileText, label: 'Depositions & Arbitration' },
        { icon: Lock, label: 'Insurance & Compliance' },
      ]}
      whyChoose={[
        {
          icon: Users,
          title: 'Professional interpreters',
          description:
            'Qualified legal interpreters held to rigorous standards of accuracy, ethics, and impartiality.',
        },
        {
          icon: ShieldCheck,
          title: 'Confidential communication',
          description:
            'Secure, privileged interpretation that protects clients and sensitive case information.',
        },
        {
          icon: Clock,
          title: 'Fast response time',
          description:
            'On-demand access keeps proceedings and consultations moving without language delays.',
        },
        {
          icon: Globe2,
          title: 'Technology-driven solutions',
          description:
            'Secure phone and video platforms deliver reliable interpretation for remote and in-person hearings.',
        },
      ]}
      related={[
        {
          title: 'French Interpreter Services',
          href: '/french-interpretation-services',
        },
        {
          title: 'Haitian Creole Interpreter Services',
          href: '/haitian-creole-interpretation-services',
        },
        {
          title: 'Medical Interpretation Services',
          href: '/medical-interpretation-services',
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
