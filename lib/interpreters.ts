export const INTERPRETER_STATUSES = [
  'New Applicant',
  'Interview Scheduled',
  'Approved',
  'Active',
  'Inactive',
] as const

export type InterpreterStatus = (typeof INTERPRETER_STATUSES)[number]

export const AVAILABILITY_OPTIONS = [
  'Full-time',
  'Part-time',
  'On-call / as needed',
  'Weekends only',
] as const

export const US_STATES = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
  'District of Columbia',
] as const

export type Interpreter = {
  id: string
  full_name: string
  email: string
  phone: string | null
  language_pairs: string | null
  state: string | null
  availability: string | null
  experience: string | null
  modality: string | null
  location: string | null
  certifications: string | null
  notes: string | null
  status: InterpreterStatus
  resume_path: string | null
  source: 'manual' | 'application_form'
  created_at: string
  updated_at: string
}

/** Tailwind token classes for each status badge. */
export function statusBadgeClasses(status: string): string {
  switch (status) {
    case 'New Applicant':
      return 'bg-primary/10 text-primary border-primary/20'
    case 'Interview Scheduled':
      return 'bg-amber-500/10 text-amber-700 border-amber-500/20'
    case 'Approved':
      return 'bg-violet-500/10 text-violet-700 border-violet-500/20'
    case 'Active':
      return 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20'
    case 'Inactive':
      return 'bg-muted text-muted-foreground border-border'
    default:
      return 'bg-muted text-muted-foreground border-border'
  }
}
