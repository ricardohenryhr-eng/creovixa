import {
  Building2,
  CalendarClock,
  ClipboardCheck,
  Clock,
  Gavel,
  Globe2,
  HandHeart,
  HeartPulse,
  Landmark,
  Languages,
  MessagesSquare,
  MonitorSmartphone,
  PhoneCall,
  Scale,
  ShieldCheck,
  Stethoscope,
  UsersRound,
  Video,
  Wallet,
  type LucideIcon,
} from 'lucide-react'

export type IconItem = {
  icon: LucideIcon
  title: string
  description: string
}

export type Faq = {
  q: string
  a: string
}

export type ServiceData = {
  slug: string
  eyebrow: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  heroSubhead: string
  heroHighlights: { icon: LucideIcon; label: string }[]
  overview: string[]
  benefits: IconItem[]
  useCases: string[]
  industries: IconItem[]
  faqs: Faq[]
}

export const services: ServiceData[] = [
  {
    slug: 'french-interpretation-services',
    eyebrow: 'French Interpreter Services',
    title: 'Professional French Interpretation Services',
    metaTitle:
      'French Interpreter Services | Creovixa Language Services',
    metaDescription:
      'Certified French interpreters for healthcare, legal, business, and government. On-site, video, and over-the-phone French interpretation services from Creovixa.',
    keywords: [
      'French interpreter services',
      'French interpretation services',
      'certified French interpreter',
      'professional language services',
    ],
    heroSubhead:
      'Connect with qualified French interpreters who deliver accurate, culturally aware communication for every conversation, in person or through secure technology.',
    heroHighlights: [
      { icon: Globe2, label: 'French, Canadian & African dialects' },
      { icon: Clock, label: 'On-demand & scheduled sessions' },
      { icon: ShieldCheck, label: 'Confidential & compliant' },
    ],
    overview: [
      'Creovixa provides professional French interpretation services that help organizations and individuals communicate clearly across language barriers. Our interpreters are fluent in French and English, trained in specialized terminology, and experienced in the settings they serve, from hospital bedsides to courtrooms and boardrooms.',
      'Whether you need continuous interpretation for a live meeting or quick, on-demand support for an unexpected conversation, we match you with a qualified French interpreter through on-site visits, video remote interpretation, or over-the-phone interpretation. Every session is handled with precision, impartiality, and strict confidentiality.',
    ],
    benefits: [
      {
        icon: ClipboardCheck,
        title: 'Accuracy You Can Trust',
        description:
          'Certified French interpreters convey meaning precisely, including nuance, tone, and regional dialect, so nothing is lost in translation.',
      },
      {
        icon: ShieldCheck,
        title: 'Confidential & Compliant',
        description:
          'Encrypted sessions and rigorous confidentiality standards protect sensitive medical, legal, and business information.',
      },
      {
        icon: Clock,
        title: 'Available When You Need It',
        description:
          'Reach a French interpreter on demand in seconds, or schedule sessions in advance to fit your calendar.',
      },
      {
        icon: Globe2,
        title: 'Cultural Fluency',
        description:
          'Interpreters understand cultural context across France, Canada, and Francophone Africa to keep communication respectful and clear.',
      },
    ],
    useCases: [
      'Medical appointments, consultations, and hospital admissions for French-speaking patients',
      'Court hearings, depositions, and attorney-client meetings requiring impartial French interpretation',
      'International business negotiations, conferences, and client presentations',
      'Government services, immigration interviews, and community programs',
      'Insurance claims, financial reviews, and customer support calls',
    ],
    industries: [
      {
        icon: HeartPulse,
        title: 'Healthcare',
        description:
          'Help French-speaking patients understand diagnoses, treatment, and consent with clinically trained interpreters.',
      },
      {
        icon: Scale,
        title: 'Legal Services',
        description:
          'Deliver accurate, neutral French interpretation for high-stakes legal proceedings.',
      },
      {
        icon: Building2,
        title: 'Business',
        description:
          'Support cross-border deals and Francophone markets with industry-aware interpreters.',
      },
    ],
    faqs: [
      {
        q: 'Are your French interpreters certified?',
        a: 'Yes. Every French interpreter is vetted, credentialed, and trained for the settings they serve, including medical and legal environments that require specialized certification.',
      },
      {
        q: 'Do you support Canadian and African French dialects?',
        a: 'We do. Creovixa matches you with interpreters familiar with the specific dialect and cultural context you need, including European French, Canadian French, and Francophone African varieties.',
      },
      {
        q: 'Can I request a French interpreter on short notice?',
        a: 'Absolutely. You can connect with a qualified French interpreter on demand through video or phone, or schedule on-site and remote sessions in advance.',
      },
      {
        q: 'How quickly can you provide a French interpreter?',
        a: 'On-demand video and over-the-phone interpretation can connect you in seconds. Scheduled on-site sessions are arranged based on your location and timing.',
      },
    ],
  },
  {
    slug: 'haitian-creole-interpretation-services',
    eyebrow: 'Haitian Creole Interpreter Services',
    title: 'Professional Haitian Creole Interpretation Services',
    metaTitle:
      'Haitian Creole Interpreter Services | Creovixa Language Services',
    metaDescription:
      'Certified Haitian Creole interpreters for medical, legal, and community services. On-site, video, and over-the-phone Haitian Creole interpretation from Creovixa.',
    keywords: [
      'Haitian Creole interpreter services',
      'Haitian Creole interpretation services',
      'certified Haitian Creole interpreter',
      'professional language services',
    ],
    heroSubhead:
      'Give Haitian Creole speakers a clear voice with qualified interpreters who bring accuracy, empathy, and cultural understanding to every conversation.',
    heroHighlights: [
      { icon: HeartPulse, label: 'Healthcare-trained interpreters' },
      { icon: Clock, label: 'On-demand & scheduled sessions' },
      { icon: ShieldCheck, label: 'Confidential & compliant' },
    ],
    overview: [
      'Creovixa delivers professional Haitian Creole interpretation services that connect organizations with the growing Haitian Creole-speaking community. Our interpreters are fluent in Haitian Creole and English, culturally grounded, and trained to handle sensitive conversations with care and precision.',
      'From medical visits and legal proceedings to school meetings and social services, we provide on-site, video remote, and over-the-phone Haitian Creole interpretation. Every interpreter is committed to accuracy, impartiality, and confidentiality so your clients and patients feel understood.',
    ],
    benefits: [
      {
        icon: HeartPulse,
        title: 'Compassionate Communication',
        description:
          'Interpreters trained for healthcare and social services help Haitian Creole speakers feel heard, respected, and informed.',
      },
      {
        icon: ClipboardCheck,
        title: 'Accurate & Impartial',
        description:
          'Meaning, tone, and intent are conveyed faithfully, with no editing, advice, or bias.',
      },
      {
        icon: ShieldCheck,
        title: 'Confidential & Compliant',
        description:
          'Secure, encrypted sessions safeguard protected health information and sensitive legal details.',
      },
      {
        icon: Clock,
        title: 'Rapid Access',
        description:
          'Connect with a Haitian Creole interpreter on demand, or schedule sessions to match your workflow.',
      },
    ],
    useCases: [
      'Hospital visits, clinics, and behavioral health appointments',
      'Immigration interviews, legal aid, and court proceedings',
      'School enrollment, parent-teacher conferences, and IEP meetings',
      'Social services, housing assistance, and community outreach',
      'Emergency response and disaster relief communication',
    ],
    industries: [
      {
        icon: HeartPulse,
        title: 'Healthcare',
        description:
          'Ensure Haitian Creole-speaking patients understand care instructions and provide informed consent.',
      },
      {
        icon: Landmark,
        title: 'Government',
        description:
          'Serve multilingual communities with dependable, secure language access.',
      },
      {
        icon: HandHeart,
        title: 'Nonprofit',
        description:
          'Reach the people you serve with interpreters who understand the community.',
      },
    ],
    faqs: [
      {
        q: 'Are your Haitian Creole interpreters certified?',
        a: 'Yes. Our Haitian Creole interpreters are vetted, trained, and credentialed for the settings they serve, including certified medical and legal interpretation.',
      },
      {
        q: 'Do interpreters understand Haitian cultural context?',
        a: 'They do. Cultural fluency is central to our service, helping ensure conversations are respectful, clear, and appropriate for the Haitian Creole-speaking community.',
      },
      {
        q: 'What formats do you offer for Haitian Creole interpretation?',
        a: 'We provide on-site interpretation, video remote interpretation, and over-the-phone interpretation so you can choose the format that fits each situation.',
      },
      {
        q: 'Can you support emergency or after-hours requests?',
        a: 'Yes. On-demand phone and video interpretation is available around the clock to support urgent and after-hours needs.',
      },
    ],
  },
  {
    slug: 'medical-interpretation-services',
    eyebrow: 'Medical Interpretation Services',
    title: 'Certified Medical Interpretation Services',
    metaTitle:
      'Medical Interpretation Services | Creovixa Language Services',
    metaDescription:
      'HIPAA-ready medical interpretation services with certified healthcare interpreters. On-site, video, and phone interpretation for hospitals and clinics from Creovixa.',
    keywords: [
      'medical interpretation services',
      'medical interpreter',
      'certified healthcare interpreter',
      'professional language services',
    ],
    heroSubhead:
      'Protect patient safety and meet compliance standards with certified medical interpreters who communicate accurately in more than 200 languages.',
    heroHighlights: [
      { icon: ShieldCheck, label: 'HIPAA-ready & compliant' },
      { icon: Stethoscope, label: 'Clinically trained interpreters' },
      { icon: Clock, label: '24/7 on-demand access' },
    ],
    overview: [
      'Creovixa provides certified medical interpretation services that help clinicians and patients communicate accurately, protecting outcomes and meeting regulatory requirements. Our interpreters are trained in medical terminology, clinical protocols, and the ethics of healthcare interpreting.',
      'We support hospitals, clinics, and private practices with on-site, video remote, and over-the-phone interpretation. Every session is HIPAA-ready and handled with the confidentiality and precision that patient care demands, so language never stands between a patient and quality care.',
    ],
    benefits: [
      {
        icon: ShieldCheck,
        title: 'HIPAA-Ready Security',
        description:
          'Encrypted, compliant sessions protect patient privacy and protected health information at every step.',
      },
      {
        icon: Stethoscope,
        title: 'Clinical Expertise',
        description:
          'Interpreters trained in medical terminology accurately convey symptoms, diagnoses, and treatment plans.',
      },
      {
        icon: ClipboardCheck,
        title: 'Improved Patient Outcomes',
        description:
          'Clear communication supports informed consent, medication adherence, and safer, more equitable care.',
      },
      {
        icon: Clock,
        title: 'Around-the-Clock Access',
        description:
          'Connect to a medical interpreter on demand for emergencies, or schedule interpreters for planned appointments.',
      },
    ],
    useCases: [
      'Emergency department and urgent care visits',
      'Physician consultations, diagnoses, and treatment planning',
      'Informed consent and pre-operative discussions',
      'Behavioral health and telehealth appointments',
      'Discharge instructions, pharmacy, and follow-up care',
    ],
    industries: [
      {
        icon: HeartPulse,
        title: 'Hospitals & Clinics',
        description:
          'Deliver equitable, compliant care with interpreters trained for clinical settings.',
      },
      {
        icon: UsersRound,
        title: 'Behavioral Health',
        description:
          'Support sensitive mental health conversations with trained, compassionate interpreters.',
      },
      {
        icon: Building2,
        title: 'Health Systems',
        description:
          'Scale language access across facilities with secure technology and reliable coverage.',
      },
    ],
    faqs: [
      {
        q: 'Are your medical interpreters certified?',
        a: 'Yes. Our medical interpreters hold recognized healthcare interpreting credentials and are trained in medical terminology, ethics, and HIPAA compliance.',
      },
      {
        q: 'Is your medical interpretation service HIPAA compliant?',
        a: 'Our sessions are HIPAA-ready, using encrypted technology and strict confidentiality protocols to protect patient information.',
      },
      {
        q: 'Can you provide interpreters for emergencies?',
        a: 'Yes. On-demand video and over-the-phone medical interpretation is available 24/7 to support emergency and urgent care situations.',
      },
      {
        q: 'How many languages do you support for medical interpretation?',
        a: 'Creovixa supports more than 200 languages, matching you with qualified medical interpreters for both common and rare language needs.',
      },
    ],
  },
  {
    slug: 'legal-interpretation-services',
    eyebrow: 'Legal Interpretation Services',
    title: 'Certified Legal Interpretation Services',
    metaTitle:
      'Legal Interpretation Services | Creovixa Language Services',
    metaDescription:
      'Certified legal interpreters for courts, depositions, and law firms. Accurate, impartial on-site, video, and phone legal interpretation services from Creovixa.',
    keywords: [
      'legal interpretation services',
      'legal interpreter',
      'court interpreter',
      'professional language services',
    ],
    heroSubhead:
      'Protect due process with certified legal interpreters who deliver precise, impartial interpretation for courts, depositions, and law firms.',
    heroHighlights: [
      { icon: Gavel, label: 'Court-experienced interpreters' },
      { icon: ClipboardCheck, label: 'Precise legal terminology' },
      { icon: ShieldCheck, label: 'Impartial & confidential' },
    ],
    overview: [
      'Creovixa provides certified legal interpretation services that safeguard accuracy and impartiality in high-stakes proceedings. Our interpreters are trained in legal terminology and courtroom protocol, and they adhere to strict standards of neutrality and confidentiality.',
      'From courtrooms and depositions to attorney-client meetings and immigration hearings, we deliver on-site, video remote, and over-the-phone legal interpretation. Every word is conveyed faithfully so all parties can participate fully and fairly.',
    ],
    benefits: [
      {
        icon: Gavel,
        title: 'Courtroom Expertise',
        description:
          'Interpreters understand legal procedure and terminology, ensuring precise interpretation for every proceeding.',
      },
      {
        icon: ClipboardCheck,
        title: 'Complete Accuracy',
        description:
          'Testimony and legal language are conveyed word for word, preserving meaning and protecting the record.',
      },
      {
        icon: ShieldCheck,
        title: 'Strict Impartiality',
        description:
          'Interpreters remain neutral and confidential, upholding the integrity of due process.',
      },
      {
        icon: Clock,
        title: 'Flexible Scheduling',
        description:
          'Book interpreters in advance for hearings and depositions, or connect on demand for urgent matters.',
      },
    ],
    useCases: [
      'Court hearings, trials, and arraignments',
      'Depositions, sworn statements, and witness testimony',
      'Attorney-client consultations and case preparation',
      'Immigration interviews and asylum hearings',
      'Mediations, arbitrations, and administrative proceedings',
    ],
    industries: [
      {
        icon: Scale,
        title: 'Law Firms',
        description:
          'Rely on accurate, impartial interpretation for client meetings and litigation.',
      },
      {
        icon: Landmark,
        title: 'Courts & Government',
        description:
          'Ensure fair proceedings with credentialed interpreters trained in courtroom protocol.',
      },
      {
        icon: Building2,
        title: 'Corporate Legal',
        description:
          'Support compliance, contracts, and cross-border legal matters with qualified interpreters.',
      },
    ],
    faqs: [
      {
        q: 'Are your legal interpreters court certified?',
        a: 'Yes. Our legal interpreters are credentialed and experienced in courtroom procedure, legal terminology, and the ethical standards required for legal settings.',
      },
      {
        q: 'Do your interpreters maintain impartiality?',
        a: 'Absolutely. Legal interpreters remain strictly neutral and confidential, conveying everything that is said without adding, omitting, or advising.',
      },
      {
        q: 'Can you interpret for depositions and remote hearings?',
        a: 'Yes. We provide on-site interpretation as well as video remote and over-the-phone interpretation for depositions, remote hearings, and virtual proceedings.',
      },
      {
        q: 'How far in advance should I book a legal interpreter?',
        a: 'For scheduled hearings and depositions we recommend booking as early as possible, though on-demand interpreters are available for urgent legal matters.',
      },
    ],
  },
  {
    slug: 'video-remote-interpretation',
    eyebrow: 'Video Remote Interpretation',
    title: 'Video Remote Interpretation (VRI) Services',
    metaTitle:
      'Video Remote Interpretation (VRI) | Creovixa Language Services',
    metaDescription:
      'On-demand video remote interpretation (VRI) in 200+ languages. Secure, HIPAA-ready VRI for healthcare, legal, and business from Creovixa Language Services.',
    keywords: [
      'video remote interpretation',
      'VRI services',
      'remote interpretation',
      'professional language services',
    ],
    heroSubhead:
      'See and hear a qualified interpreter in seconds with secure video remote interpretation, combining the clarity of face-to-face communication with on-demand convenience.',
    heroHighlights: [
      { icon: Video, label: 'On-screen interpreters in seconds' },
      { icon: MonitorSmartphone, label: 'Any device, anywhere' },
      { icon: ShieldCheck, label: 'Secure & HIPAA-ready' },
    ],
    overview: [
      'Creovixa video remote interpretation (VRI) connects you to qualified interpreters over secure video whenever you need them. VRI brings the visual cues and personal connection of on-site interpretation together with the speed and flexibility of remote access.',
      'Ideal for healthcare, legal, and business settings, our VRI platform works across computers, tablets, and phones with no complicated setup. Sessions are encrypted and HIPAA-ready, giving you dependable language access on demand, even for sign language and less common languages.',
    ],
    benefits: [
      {
        icon: Video,
        title: 'Visual Communication',
        description:
          'On-screen interpreters capture facial expressions and gestures, improving understanding and supporting sign language.',
      },
      {
        icon: Clock,
        title: 'Instant Connection',
        description:
          'Reach a qualified interpreter in seconds, ideal for unplanned conversations and urgent needs.',
      },
      {
        icon: MonitorSmartphone,
        title: 'Works on Any Device',
        description:
          'Launch VRI on a computer, tablet, or phone with a simple, reliable experience and no special hardware.',
      },
      {
        icon: ShieldCheck,
        title: 'Secure & Compliant',
        description:
          'Encrypted, HIPAA-ready sessions keep sensitive conversations private across every setting.',
      },
    ],
    useCases: [
      'On-demand interpretation for hospitals, clinics, and telehealth',
      'Remote court hearings, depositions, and legal consultations',
      'Sign language interpretation for Deaf and hard-of-hearing individuals',
      'Customer service, sales, and international business meetings',
      'Multi-site organizations needing consistent language access',
    ],
    industries: [
      {
        icon: HeartPulse,
        title: 'Healthcare',
        description:
          'Bring interpreters to the bedside instantly with secure, HIPAA-ready video.',
      },
      {
        icon: Scale,
        title: 'Legal Services',
        description:
          'Support remote hearings and consultations with clear, reliable video interpretation.',
      },
      {
        icon: Building2,
        title: 'Business',
        description:
          'Connect global teams and customers with face-to-face communication on demand.',
      },
    ],
    faqs: [
      {
        q: 'What is video remote interpretation (VRI)?',
        a: 'VRI connects you to a live interpreter over secure video, letting you see and hear the interpreter in real time from any location and device.',
      },
      {
        q: 'Is video remote interpretation secure and HIPAA compliant?',
        a: 'Yes. Our VRI sessions are encrypted and HIPAA-ready, protecting confidential healthcare, legal, and business conversations.',
      },
      {
        q: 'Do I need special equipment for VRI?',
        a: 'No. VRI works on standard computers, tablets, and smartphones with a camera and internet connection, with no special hardware required.',
      },
      {
        q: 'Can VRI be used for sign language interpretation?',
        a: 'Yes. Video is ideal for sign language interpretation, giving Deaf and hard-of-hearing individuals immediate visual access to a qualified interpreter.',
      },
    ],
  },
  {
    slug: 'over-the-phone-interpretation',
    eyebrow: 'Over-the-Phone Interpretation',
    title: 'Over-the-Phone Interpretation (OPI) Services',
    metaTitle:
      'Over-the-Phone Interpretation (OPI) | Creovixa Language Services',
    metaDescription:
      'Instant over-the-phone interpretation (OPI) in 200+ languages, available 24/7. Secure, on-demand phone interpretation for any setting from Creovixa.',
    keywords: [
      'over-the-phone interpretation',
      'OPI services',
      'phone interpreter',
      'professional language services',
    ],
    heroSubhead:
      'Reach a professional interpreter by phone in seconds, in more than 200 languages, 24 hours a day, with no appointment or equipment required.',
    heroHighlights: [
      { icon: PhoneCall, label: 'Connect in seconds' },
      { icon: Languages, label: '200+ languages, 24/7' },
      { icon: Wallet, label: 'Cost-effective access' },
    ],
    overview: [
      'Creovixa over-the-phone interpretation (OPI) gives you instant access to qualified interpreters by phone whenever language support is needed. It is the fastest, most flexible way to communicate across languages, with no scheduling or setup required.',
      'Available around the clock in more than 200 languages, OPI is perfect for quick conversations, unexpected needs, and situations where video or on-site interpretation is not practical. Every call is secure, confidential, and handled by a professional interpreter trained for your setting.',
    ],
    benefits: [
      {
        icon: PhoneCall,
        title: 'Immediate Access',
        description:
          'Connect to a professional interpreter in seconds, with no appointment or wait time.',
      },
      {
        icon: Languages,
        title: '200+ Languages, 24/7',
        description:
          'Get dependable coverage for common and rare languages any time of day or night.',
      },
      {
        icon: Wallet,
        title: 'Cost-Effective',
        description:
          'Pay only for the time you use, making phone interpretation an efficient choice for brief conversations.',
      },
      {
        icon: ShieldCheck,
        title: 'Secure & Confidential',
        description:
          'Every call is private and handled by interpreters bound by strict confidentiality standards.',
      },
    ],
    useCases: [
      'Quick clarifications and unplanned conversations',
      'After-hours, emergency, and overflow language support',
      'Customer service, help desks, and call centers',
      'Appointment scheduling, billing, and follow-up calls',
      'Rare languages where on-site interpreters are limited',
    ],
    industries: [
      {
        icon: HeartPulse,
        title: 'Healthcare',
        description:
          'Support triage, scheduling, and follow-up calls with instant phone interpretation.',
      },
      {
        icon: Building2,
        title: 'Business',
        description:
          'Serve multilingual customers across call centers and support lines.',
      },
      {
        icon: Landmark,
        title: 'Government',
        description:
          'Provide fast, reliable language access to residents and constituents.',
      },
    ],
    faqs: [
      {
        q: 'How fast can I connect to a phone interpreter?',
        a: 'Over-the-phone interpretation typically connects you to a qualified interpreter within seconds, with no appointment required.',
      },
      {
        q: 'Is over-the-phone interpretation available 24/7?',
        a: 'Yes. OPI is available around the clock, every day of the year, in more than 200 languages.',
      },
      {
        q: 'When should I choose phone interpretation over video or on-site?',
        a: 'Phone interpretation is ideal for quick conversations, urgent or after-hours needs, and situations where video or on-site interpretation is not practical or necessary.',
      },
      {
        q: 'Are over-the-phone interpretation calls confidential?',
        a: 'Yes. Every call is secure and handled by professional interpreters who follow strict confidentiality standards.',
      },
    ],
  },
]

export const serviceMeta = {
  icon: MessagesSquare,
  scheduleIcon: CalendarClock,
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((service) => service.slug === slug)
}

export const serviceSlugs = services.map((service) => service.slug)
