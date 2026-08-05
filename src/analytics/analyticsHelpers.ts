import { logEvent as firebaseLogEvent } from 'firebase/analytics'
import { getAnalyticsInstance } from './firebase'
import { hasAnalyticsConsent } from './consent'
import { getDeviceInfo } from './device'
import { getAttributionParams } from './utm'
import { AnalyticsEvents, type AnalyticsEventName } from './AnalyticsEvents'

/**
 * Base Event Payload structure with automatic device, campaign, and context metadata.
 */
export interface BaseEventParams {
  page_location?: string
  page_path?: string
  page_title?: string
  referrer?: string
  device_type?: string
  browser?: string
  os?: string
  viewport?: string
  screen_resolution?: string
  language?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  timestamp?: number
  [key: string]: any
}

/**
 * Core strongly-typed function for logging events to GA4 via Firebase.
 */
export async function logEvent(
  eventName: AnalyticsEventName | string,
  customParams: Record<string, any> = {}
): Promise<void> {
  if (typeof window === 'undefined') return

  // 1. Enrich with standard metadata
  const deviceInfo = getDeviceInfo()
  const attribution = getAttributionParams()

  const fullPayload: BaseEventParams = {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
    referrer: attribution.referrer || document.referrer || 'direct',
    device_type: deviceInfo.device_type,
    browser: deviceInfo.browser,
    os: deviceInfo.os,
    viewport: deviceInfo.viewport,
    screen_resolution: deviceInfo.screen_resolution,
    language: deviceInfo.language,
    utm_source: attribution.utm_source,
    utm_medium: attribution.utm_medium,
    utm_campaign: attribution.utm_campaign,
    utm_content: attribution.utm_content,
    utm_term: attribution.utm_term,
    timestamp: Date.now(),
    ...customParams
  }

  // Debug logging in Development mode
  if (import.meta.env.DEV) {
    console.log(`[GA4 Event] ${eventName}`, fullPayload)
  }

  // Privacy Guard: Do not send to Firebase if consent is not granted
  if (!hasAnalyticsConsent()) {
    return
  }

  try {
    const analytics = await getAnalyticsInstance()
    if (analytics) {
      firebaseLogEvent(analytics, eventName, fullPayload)
    }
  } catch (err) {
    console.error(`[GA4 Error] Failed to log event "${eventName}":`, err)
  }
}

/**
 * Track Page Views (Automatic & Manual).
 */
export function trackPageView(pageTitle?: string, path?: string) {
  logEvent(AnalyticsEvents.PAGE_VIEW, {
    page_title: pageTitle || document.title,
    page_path: path || window.location.pathname,
    page_location: window.location.href
  })
}

/**
 * Track Waitlist Conversion Funnel Events.
 */
export interface WaitlistEventParams {
  source?: string
  button_location?: string
  email?: string
  name?: string
  role?: string
  error_message?: string
  reason?: string
  [key: string]: any
}

export function trackWaitlist(
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
  params: WaitlistEventParams = {}
) {
  const eventNameMap: Record<string, AnalyticsEventName> = {
    started: AnalyticsEvents.WAITLIST_STARTED,
    email_entered: AnalyticsEvents.WAITLIST_EMAIL_ENTERED,
    name_entered: AnalyticsEvents.WAITLIST_NAME_ENTERED,
    submission_attempt: AnalyticsEvents.WAITLIST_SUBMISSION_ATTEMPT,
    submission_success: AnalyticsEvents.WAITLIST_SUBMISSION_SUCCESS,
    submission_failed: AnalyticsEvents.WAITLIST_SUBMISSION_FAILED,
    duplicate_email: AnalyticsEvents.WAITLIST_DUPLICATE_EMAIL,
    validation_error: AnalyticsEvents.WAITLIST_VALIDATION_ERROR,
    server_error: AnalyticsEvents.WAITLIST_SERVER_ERROR
  }

  const eventName =
    eventNameMap[stage] || AnalyticsEvents.WAITLIST_SUBMISSION_ATTEMPT

  // Sanitize PII (never log raw passwords, optionally mask email for raw parameters if needed)
  const safeParams = { ...params }
  if (safeParams.email) {
    // Keep email domain for demographic insights while masking user prefix if necessary
    const parts = safeParams.email.split('@')
    safeParams.email_domain = parts[1] || ''
    delete safeParams.email
  }

  logEvent(eventName, {
    funnel_step: stage,
    ...safeParams
  })
}

/**
 * Track CTA Button Clicks.
 */
export interface CTAParams {
  button_name: string
  section: string
  position?: string
  destination?: string
  page?: string
}

export function trackCTA(params: CTAParams) {
  logEvent(AnalyticsEvents.CTA_CLICK, {
    button_name: params.button_name,
    section: params.section,
    position: params.position || 'main',
    destination: params.destination || window.location.pathname,
    page: params.page || window.location.pathname
  })
}

/**
 * Track Outbound Links.
 */
export interface OutboundParams {
  destination: string
  text?: string
  section?: string
  page?: string
}

export function trackOutbound(params: OutboundParams) {
  logEvent(AnalyticsEvents.OUTBOUND_CLICK, {
    destination: params.destination,
    text: params.text || '',
    section: params.section || 'content',
    page: params.page || window.location.pathname
  })
}

/**
 * Track Scroll Depth Thresholds (25%, 50%, 75%, 90%, 100%).
 */
export function trackScroll(depth: 25 | 50 | 75 | 90 | 100) {
  logEvent(AnalyticsEvents.SCROLL_DEPTH, {
    percent_scrolled: depth,
    page_path: window.location.pathname
  })
}

/**
 * Track Time on Page & User Engagement Milestones.
 */
export function trackTiming(seconds: 30 | 60 | 120 | 300) {
  logEvent(AnalyticsEvents.TIME_ON_PAGE, {
    time_seconds: seconds,
    page_path: window.location.pathname
  })
}

export function trackEngagedUser() {
  logEvent(AnalyticsEvents.ENGAGED_USER, {
    page_path: window.location.pathname
  })
}

/**
 * Track Frontend Errors & Unhandled Exceptions.
 */
export interface ErrorParams {
  message: string
  stack?: string
  error_type?: string
  component_stack?: string
}

export function trackError(params: ErrorParams) {
  logEvent(AnalyticsEvents.FRONTEND_ERROR, {
    error_message: params.message,
    error_stack: params.stack ? params.stack.slice(0, 500) : '',
    error_type: params.error_type || 'unhandled_exception',
    component_stack: params.component_stack
      ? params.component_stack.slice(0, 500)
      : '',
    page_path: window.location.pathname
  })
}
