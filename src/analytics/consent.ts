/**
 * GDPR / CCPA Cookie Consent Manager with Google Consent Mode v2 Support.
 * Ensures no analytics or tracking scripts fire until explicit user consent is granted.
 */

export interface CookiePreferences {
  necessary: boolean // Always true
  analytics: boolean
  functional: boolean
  marketing: boolean
}

export const DEFAULT_CONSENT: CookiePreferences = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false
}

export const ACCEPT_ALL_CONSENT: CookiePreferences = {
  necessary: true,
  analytics: true,
  functional: true,
  marketing: true
}

export const REJECT_ALL_CONSENT: CookiePreferences = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false
}

const CONSENT_STORAGE_KEY = 'kore_cookie_consent_v2'
type ConsentListener = (preferences: CookiePreferences) => void
const listeners: Set<ConsentListener> = new Set()

/**
 * Ensures window.dataLayer and gtag are initialized on window for Google Consent Mode v2.
 */
function ensureGtagWindow() {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  if (!window.gtag) {
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    }
  }
}

/**
 * Initializes Google Consent Mode v2 with default DENIED states before analytics initialization.
 */
export function initGoogleConsentModeV2() {
  if (typeof window === 'undefined') return
  ensureGtagWindow()

  // Default to denied for privacy compliance (GDPR/CCPA)
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
    wait_for_update: 500
  })

  // If user already saved preferences, apply them immediately
  const saved = getSavedConsent()
  if (saved) {
    updateGoogleConsentModeV2(saved)
  }
}

/**
 * Updates Google Consent Mode v2 states dynamically when user changes preferences.
 */
export function updateGoogleConsentModeV2(prefs: CookiePreferences) {
  if (typeof window === 'undefined') return
  ensureGtagWindow()

  const analyticsState = prefs.analytics ? 'granted' : 'denied'
  const marketingState = prefs.marketing ? 'granted' : 'denied'
  const functionalState = prefs.functional ? 'granted' : 'denied'

  window.gtag('consent', 'update', {
    analytics_storage: analyticsState,
    ad_storage: marketingState,
    ad_user_data: marketingState,
    ad_personalization: marketingState,
    functionality_storage: functionalState,
    personalization_storage: functionalState
  })
}

/**
 * Gets saved cookie preferences from localStorage. Returns null if user hasn't made a choice yet.
 */
export function getSavedConsent(): CookiePreferences | null {
  if (typeof window === 'undefined') return null
  try {
    const item = localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!item) return null
    const parsed = JSON.parse(item)
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      functional: Boolean(parsed.functional),
      marketing: Boolean(parsed.marketing)
    }
  } catch (err) {
    console.warn('[Consent] Error reading stored consent:', err)
    return null
  }
}

/**
 * Saves cookie preferences to localStorage and notifies listeners.
 */
export function saveConsent(prefs: CookiePreferences) {
  if (typeof window === 'undefined') return
  const finalPrefs: CookiePreferences = {
    necessary: true,
    analytics: Boolean(prefs.analytics),
    functional: Boolean(prefs.functional),
    marketing: Boolean(prefs.marketing)
  }

  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(finalPrefs))
  } catch (err) {
    console.error('[Consent] Failed to write consent to localStorage:', err)
  }

  updateGoogleConsentModeV2(finalPrefs)
  listeners.forEach((listener) => listener(finalPrefs))
}

/**
 * Check if analytics consent has been granted.
 */
export function hasAnalyticsConsent(): boolean {
  const saved = getSavedConsent()
  return Boolean(saved && saved.analytics)
}

/**
 * Subscribe to consent changes.
 */
export function subscribeConsentChange(listener: ConsentListener): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

// Global TypeScript Window augmentation for gtag and dataLayer
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}
