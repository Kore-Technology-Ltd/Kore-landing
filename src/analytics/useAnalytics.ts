import { useEffect, useRef, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import {
  logEvent,
  trackPageView,
  trackWaitlist,
  trackCTA,
  trackOutbound,
  trackScroll,
  trackTiming,
  trackEngagedUser,
  trackError,
  type WaitlistEventParams,
  type CTAParams,
  type OutboundParams,
  type ErrorParams
} from './analyticsHelpers'
import { captureCampaignParams } from './utm'
import { hasAnalyticsConsent } from './consent'

/**
 * Hook 1: Automatic Page View & Campaign Tracking on Route Change
 */
export function useAutoPageTracking() {
  const location = useLocation()
  const lastPathnameRef = useRef<string | null>(null)

  useEffect(() => {
    const currentPath = location.pathname + location.search

    // Prevent duplicate page view firing for the exact same path
    if (lastPathnameRef.current === currentPath) {
      return
    }
    lastPathnameRef.current = currentPath

    // Capture UTM campaign parameters on page load/change
    captureCampaignParams()

    // Fire Page View event
    trackPageView(document.title, location.pathname)
  }, [location.pathname, location.search])
}

/**
 * Hook 2: Scroll Depth Tracking (25%, 50%, 75%, 90%, 100%)
 * Uses passive scroll listeners, debouncing, and fires each threshold only once per route.
 */
export function useScrollTracking() {
  const location = useLocation()
  const trackedDepthsRef = useRef<Set<number>>(new Set())

  useEffect(() => {
    // Reset tracked depths on route change
    trackedDepthsRef.current.clear()

    let timeoutId: ReturnType<typeof setTimeout> | null = null

    const handleScroll = () => {
      if (timeoutId) return

      // Throttle scroll checks every 200ms
      timeoutId = setTimeout(() => {
        timeoutId = null

        const windowHeight = window.innerHeight
        const fullHeight = document.documentElement.scrollHeight
        const scrollTop =
          window.scrollY ||
          window.pageYOffset ||
          document.documentElement.scrollTop

        if (fullHeight <= windowHeight) return

        const totalScrollable = fullHeight - windowHeight
        const scrollPercent = Math.round((scrollTop / totalScrollable) * 100)

        const thresholds: (25 | 50 | 75 | 90 | 100)[] = [25, 50, 75, 90, 100]

        thresholds.forEach((threshold) => {
          if (
            scrollPercent >= threshold &&
            !trackedDepthsRef.current.has(threshold)
          ) {
            trackedDepthsRef.current.add(threshold)
            trackScroll(threshold)
          }
        })
      }, 200)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [location.pathname])
}

/**
 * Hook 3: Engagement & Time on Page Tracking (30s, 60s, 120s, 300s)
 */
export function useEngagementTracking() {
  const location = useLocation()

  useEffect(() => {
    const startTime = Date.now()
    const timers: ReturnType<typeof setTimeout>[] = []
    let hasEngaged = false

    const timeMilestones: (30 | 60 | 120 | 300)[] = [30, 60, 120, 300]

    timeMilestones.forEach((seconds) => {
      const timer = setTimeout(() => {
        trackTiming(seconds)

        if (seconds >= 30 && !hasEngaged) {
          hasEngaged = true
          trackEngagedUser()
        }
      }, seconds * 1000)

      timers.push(timer)
    })

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
      const timeSpentSec = Math.round((Date.now() - startTime) / 1000)
      if (timeSpentSec >= 10 && import.meta.env.DEV) {
        console.log(
          `[Analytics] Time on ${location.pathname}: ${timeSpentSec}s`
        )
      }
    }
  }, [location.pathname])
}

/**
 * Hook 4: Automatic Outbound Link Click Detection
 */
export function useOutboundTracking() {
  const location = useLocation()

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const anchor = target?.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      // Check if external link
      const isExternal =
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:')

      const isSameHost = href.includes(window.location.hostname)

      if (isExternal && !isSameHost) {
        const text =
          anchor.innerText ||
          anchor.getAttribute('aria-label') ||
          'External Link'
        const section =
          anchor.closest('section, footer, header, nav')?.id || 'page'

        trackOutbound({
          destination: href,
          text: text.trim(),
          section,
          page: location.pathname
        })
      }
    }

    document.addEventListener('click', handleAnchorClick, { capture: true })
    return () => {
      document.removeEventListener('click', handleAnchorClick, {
        capture: true
      })
    }
  }, [location.pathname])
}

/**
 * Hook 5: Unhandled Frontend Error & Rejection Tracking
 */
export function useGlobalErrorTracking() {
  useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      trackError({
        message: event.message || 'Unhandled Error',
        stack:
          event.error?.stack ||
          `${event.filename}:${event.lineno}:${event.colno}`,
        error_type: 'window_onerror'
      })
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason
      const message =
        typeof reason === 'string'
          ? reason
          : reason?.message || 'Unhandled Promise Rejection'

      trackError({
        message,
        stack: reason?.stack || '',
        error_type: 'unhandled_rejection'
      })
    }

    window.addEventListener('error', handleGlobalError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleGlobalError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])
}

/**
 * Core React Hook: Exposes all helper functions & consent info for components.
 */
export function useAnalytics() {
  const logCustomEvent = useCallback(
    (eventName: string, params?: Record<string, any>) => {
      logEvent(eventName, params)
    },
    []
  )

  const logCTA = useCallback((params: CTAParams) => {
    trackCTA(params)
  }, [])

  const logWaitlist = useCallback(
    (
      stage:
        | 'started'
        | 'email_entered'
        | 'name_entered'
        | 'submission_attempt'
        | 'submission_success'
        | 'submission_failed'
        | 'duplicate_email'
        | 'validation_error'
        | 'server_error',
      params?: WaitlistEventParams
    ) => {
      trackWaitlist(stage, params)
    },
    []
  )

  const logOutbound = useCallback((params: OutboundParams) => {
    trackOutbound(params)
  }, [])

  const logFrontendError = useCallback((params: ErrorParams) => {
    trackError(params)
  }, [])

  return {
    hasConsent: hasAnalyticsConsent(),
    logEvent: logCustomEvent,
    trackPageView,
    trackWaitlist: logWaitlist,
    trackCTA: logCTA,
    trackOutbound: logOutbound,
    trackError: logFrontendError
  }
}
