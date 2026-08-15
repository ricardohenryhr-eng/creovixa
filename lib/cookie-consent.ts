export const CONSENT_STORAGE_KEY = 'creovixa-cookie-consent'
export const CONSENT_VERSION = 1

// Custom event used to (re)open the preferences dialog from anywhere,
// e.g. the "Cookie Preferences" link in the footer.
export const OPEN_PREFERENCES_EVENT = 'creovixa:open-cookie-preferences'

export type ConsentCategories = {
  // Essential cookies are always on and cannot be disabled.
  essential: true
  analytics: boolean
}

export type ConsentRecord = {
  version: number
  timestamp: string
  categories: ConsentCategories
}

export function getStoredConsent(): ConsentRecord | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as ConsentRecord
    // Ignore consent captured under an older policy version so users are
    // re-prompted when the cookie policy materially changes.
    if (parsed.version !== CONSENT_VERSION) return null
    return parsed
  } catch {
    return null
  }
}

export function storeConsent(categories: ConsentCategories): ConsentRecord {
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    categories,
  }
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record))
  } catch {
    // Storage may be unavailable (private mode, blocked cookies); fail safe.
  }
  return record
}

export function openCookiePreferences() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT))
}
