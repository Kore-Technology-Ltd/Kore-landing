import { initializeApp, getApps, type FirebaseApp } from 'firebase/app'
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics'
import { hasAnalyticsConsent, subscribeConsentChange } from './consent'

/**
 * Firebase Environment Variables Config
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

let firebaseAppInstance: FirebaseApp | null = null
let analyticsInstance: Analytics | null = null
let isInitializing = false

/**
 * Checks if valid Firebase credentials are provided in environment variables.
 */
export function hasValidFirebaseConfig(): boolean {
  return Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.projectId &&
    firebaseConfig.measurementId &&
    !firebaseConfig.apiKey.includes('Placeholder')
  )
}

/**
 * Singleton Firebase App initialization.
 */
export function getFirebaseApp(): FirebaseApp | null {
  if (typeof window === 'undefined') return null

  if (!firebaseAppInstance) {
    const existingApps = getApps()
    if (existingApps.length > 0) {
      firebaseAppInstance = existingApps[0]
    } else if (hasValidFirebaseConfig()) {
      try {
        firebaseAppInstance = initializeApp(firebaseConfig)
      } catch (err) {
        console.error('[Firebase] Error initializing Firebase App:', err)
      }
    } else {
      console.warn(
        '[Firebase] Missing or placeholder environment variables. Set VITE_FIREBASE_API_KEY and VITE_FIREBASE_MEASUREMENT_ID in .env'
      )
    }
  }

  return firebaseAppInstance
}

/**
 * Singleton Firebase Analytics initialization — guarded by privacy consent & browser support.
 */
export async function getAnalyticsInstance(): Promise<Analytics | null> {
  if (typeof window === 'undefined') return null

  // 1. Privacy Check: Never initialize Analytics if user hasn't granted consent
  if (!hasAnalyticsConsent()) {
    return null
  }

  // 2. Return existing instance if already initialized
  if (analyticsInstance) return analyticsInstance

  // 3. Ensure Firebase App is initialized
  const app = getFirebaseApp()
  if (!app) return null

  if (isInitializing) return null
  isInitializing = true

  try {
    const supported = await isSupported()
    if (supported) {
      analyticsInstance = getAnalytics(app)
      if (import.meta.env.DEV) {
        console.log(
          '[Firebase Analytics] Initialized successfully with GA4 Measurement ID:',
          firebaseConfig.measurementId
        )
      }
    } else {
      console.warn(
        '[Firebase Analytics] Analytics is not supported in this browser environment.'
      )
    }
  } catch (err) {
    console.error('[Firebase Analytics] Error initializing Analytics:', err)
  } finally {
    isInitializing = false
  }

  return analyticsInstance
}

/**
 * Subscribe to consent changes to dynamically initialize Analytics as soon as user accepts consent.
 */
if (typeof window !== 'undefined') {
  subscribeConsentChange(async (prefs) => {
    if (prefs.analytics && !analyticsInstance) {
      await getAnalyticsInstance()
    }
  })
}
