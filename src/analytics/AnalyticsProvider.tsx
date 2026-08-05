import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react'
import {
  initGoogleConsentModeV2,
  getSavedConsent,
  saveConsent,
  subscribeConsentChange,
  type CookiePreferences,
  ACCEPT_ALL_CONSENT,
  REJECT_ALL_CONSENT
} from './consent'
import { getFirebaseApp, getAnalyticsInstance } from './firebase'
import {
  useAutoPageTracking,
  useScrollTracking,
  useEngagementTracking,
  useOutboundTracking,
  useGlobalErrorTracking
} from './useAnalytics'
import CookieConsentBanner from '@/components/analytics/CookieConsentBanner'
import CookieSettingsModal from '@/components/analytics/CookieSettingsModal'

interface AnalyticsContextType {
  consent: CookiePreferences | null
  hasResponded: boolean
  isSettingsOpen: boolean
  openSettings: () => void
  closeSettings: () => void
  acceptAll: () => void
  rejectNonEssential: () => void
  updatePreferences: (prefs: CookiePreferences) => void
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined
)

/**
 * Internal Active Hooks Activator component (must run inside React Router context)
 */
function AnalyticsHooksActive() {
  useAutoPageTracking()
  useScrollTracking()
  useEngagementTracking()
  useOutboundTracking()
  useGlobalErrorTracking()

  return null
}

interface AnalyticsProviderProps {
  children: ReactNode
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const [consent, setConsent] = useState<CookiePreferences | null>(() =>
    getSavedConsent()
  )
  const [hasResponded, setHasResponded] = useState<boolean>(() =>
    Boolean(getSavedConsent())
  )
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  // 1. Initialize Google Consent Mode v2 early (defaults to denied for analytics/ad storage)
  useEffect(() => {
    initGoogleConsentModeV2()
    getFirebaseApp()
    if (getSavedConsent()?.analytics) {
      getAnalyticsInstance()
    }
  }, [])

  // 2. Subscribe to consent state changes
  useEffect(() => {
    const unsubscribe = subscribeConsentChange((newPrefs) => {
      setConsent(newPrefs)
      setHasResponded(true)
    })
    return unsubscribe
  }, [])

  const openSettings = useCallback(() => setIsSettingsOpen(true), [])
  const closeSettings = useCallback(() => setIsSettingsOpen(false), [])

  const acceptAll = useCallback(() => {
    saveConsent(ACCEPT_ALL_CONSENT)
    setHasResponded(true)
  }, [])

  const rejectNonEssential = useCallback(() => {
    saveConsent(REJECT_ALL_CONSENT)
    setHasResponded(true)
  }, [])

  const updatePreferences = useCallback((prefs: CookiePreferences) => {
    saveConsent(prefs)
    setHasResponded(true)
    setIsSettingsOpen(false)
  }, [])

  const value: AnalyticsContextType = {
    consent,
    hasResponded,
    isSettingsOpen,
    openSettings,
    closeSettings,
    acceptAll,
    rejectNonEssential,
    updatePreferences
  }

  return (
    <AnalyticsContext.Provider value={value}>
      <AnalyticsHooksActive />
      {children}
      {!hasResponded && (
        <CookieConsentBanner
          onAcceptAll={acceptAll}
          onRejectNonEssential={rejectNonEssential}
          onCustomize={openSettings}
        />
      )}
      <CookieSettingsModal
        isOpen={isSettingsOpen}
        onClose={closeSettings}
        currentConsent={consent}
        onSave={updatePreferences}
      />
    </AnalyticsContext.Provider>
  )
}

/**
 * Hook to consume Analytics Context for opening cookie modal or checking consent state.
 */
export function useAnalyticsContext(): AnalyticsContextType {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error(
      'useAnalyticsContext must be used within an AnalyticsProvider'
    )
  }
  return context
}
