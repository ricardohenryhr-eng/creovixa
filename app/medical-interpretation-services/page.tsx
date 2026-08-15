import type { Metadata } from 'next'
import {
  Stethoscope,
  Hospital,
  Pill,
  Ambulance,
  HeartPulse,
  Brain,
  Globe2,
  Clock,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { ServicePage } from '@/components/service-page'

export const metadata: Metadata = {
  title: 'Medical Interpretation Services | Certified Medical Interpreters',
  description:
    'Creovixa Language Services provides certified medical interpretation services for hospitals and clinics. HIPAA-conscious phone, video, and on-site medical interpreters in 200+ languages, available 24/7.',
  alternates: { canonical: '/medical-interpretation-services' },
}

export default function MedicalInterpretationPage() {
  return (
    <ServicePage
      eyebrow="Medical Interpretation Services"
      title="Certified medical interpretation services for better patient care"
      intro="Creovixa Language Services helps clinicians and patients communicate accurately with certified medical interpreters, available on demand by phone and video or in person, in more than 200 languages."
      descriptionHeading="Accurate medical interpretation that protects patient outcomes"
      description={[
        'In healthcare, every word matters. Miscommunication can lead to misdiagnosis, medication errors, and poor outcomes. Creovixa Language Services provides professional medical interpretation services that help hospitals, clinics, and providers deliver safe, equitable, and compliant care to patients with limited English proficiency.',
        'Our medical interpreters are trained in clinical terminology, patient privacy, and healthcare protocols. They accurately convey symptoms, diagnoses, treatment plans, and consent discussions, giving providers and patients the confidence that nothing is lost in translation.',
        'With on-demand over-the-phone and video remote interpretation plus scheduled on-site support, Creovixa integrates seamlessly into your clinical workflow, helping you meet language-access requirements and improve the patient experience across every department.',
      ]}
      benefits={[
        {
          title: 'Certified medical interpreters',
          description:
            'Linguists trained in clinical terminology and healthcare ethics for accurate, safe communication.',
        },
        {
          title: 'HIPAA-conscious and secure',
          description:
            'Every session protects patient privacy and supports your compliance and language-access obligations.',
        },
        {
          title: '24/7 on-demand access',
          description:
            'Connect with a medical interpreter in seconds for emergencies, admissions, and unscheduled needs.',
        },
        {
          title: 'Improved patient outcomes',
          description:
            'Clear communication reduces errors and helps patients understand diagnoses and treatment plans.',
        },
        {
          title: '200+ languages',
          description:
            'From common to rare languages, we connect your team with the right interpreter every time.',
        },
        {
          title: 'Flexible delivery',
          description:
            'Choose phone, video, or on-site medical interpretation to fit any clinical setting.',
        },
      ]}
      industries={[
        { icon: Hospital, label: 'Hospitals & Health Systems' },
        { icon: Stethoscope, label: 'Clinics & Physician Offices' },
        { icon: Ambulance, label: 'Emergency & Urgent Care' },
        { icon: Pill, label: 'Pharmacies' },
        { icon: HeartPulse, label: 'Public Health' },
        { icon: Brain, label: 'Behavioral & Mental Health' },
      ]}
      whyChoose={[
        {
          icon: Users,
          title: 'Professional interpreters',
          description:
            'Qualified medical interpreters held to rigorous standards of accuracy, impartiality, and ethics.',
        },
        {
          icon: ShieldCheck,
          title: 'Confidential communication',
          description:
            'HIPAA-conscious, secure interpretation that safeguards protected health information.',
        },
        {
          icon: Clock,
          title: 'Fast response time',
          description:
            'On-demand access ensures patients and providers are never left waiting in critical moments.',
        },
        {
          icon: Globe2,
          title: 'Technology-driven solutions',
          description:
            'Secure phone and video platforms deliver reliable interpretation at the point of care.',
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
