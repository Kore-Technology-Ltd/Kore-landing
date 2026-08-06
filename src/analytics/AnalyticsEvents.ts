/**
 * Centralized Google Analytics 4 (GA4) & Firebase Analytics Constants
 * Enforces strict typing and prevents magic strings across the application.
 */

export const AnalyticsEvents = {
  // Page & Route Tracking
  PAGE_VIEW: 'page_view',
  ROUTE_CHANGE: 'route_change',

  // Waitlist Conversion Funnel
  WAITLIST_STARTED: 'waitlist_started',
  WAITLIST_EMAIL_ENTERED: 'waitlist_email_entered',
  WAITLIST_NAME_ENTERED: 'waitlist_name_entered',
  WAITLIST_SUBMISSION_ATTEMPT: 'waitlist_submission_attempt',
  WAITLIST_SUBMISSION_SUCCESS: 'waitlist_submission_success',
  WAITLIST_SUBMISSION_FAILED: 'waitlist_submission_failed',
  WAITLIST_DUPLICATE_EMAIL: 'waitlist_duplicate_email',
  WAITLIST_VALIDATION_ERROR: 'waitlist_validation_error',
  WAITLIST_SERVER_ERROR: 'waitlist_server_error',

  // CTAs & User Interactivity
  CTA_CLICK: 'cta_click',
  OUTBOUND_CLICK: 'outbound_click',

  // Engagement & Scroll Depth
  SCROLL_DEPTH: 'scroll_depth',
  TIME_ON_PAGE: 'time_on_page',
  ENGAGED_USER: 'engaged_user',

  // System & Error Tracking
  FRONTEND_ERROR: 'frontend_error',
  COOKIE_CONSENT_UPDATED: 'cookie_consent_updated'
} as const

export type AnalyticsEventName =
  (typeof AnalyticsEvents)[keyof typeof AnalyticsEvents]

export const AnalyticsParamKeys = {
  PAGE_TITLE: 'page_title',
  PAGE_LOCATION: 'page_location',
  PAGE_PATH: 'page_path',
  PAGE_REFERRER: 'page_referrer',
  BUTTON_NAME: 'button_name',
  SECTION: 'section',
  POSITION: 'position',
  DESTINATION: 'destination',
  SOURCE: 'source',
  CAMPAIGN: 'campaign',
  UTM_SOURCE: 'utm_source',
  UTM_MEDIUM: 'utm_medium',
  UTM_CAMPAIGN: 'utm_campaign',
  UTM_CONTENT: 'utm_content',
  UTM_TERM: 'utm_term',
  DEVICE_TYPE: 'device_type',
  BROWSER: 'browser',
  OS: 'os',
  VIEWPORT: 'viewport',
  SCREEN_RESOLUTION: 'screen_resolution',
  LANGUAGE: 'language',
  TIME_SECONDS: 'time_seconds',
  PERCENT_SCROLLED: 'percent_scrolled',
  ERROR_MESSAGE: 'error_message',
  ERROR_STACK: 'error_stack',
  ERROR_TYPE: 'error_type',
  IS_REPEAT: 'is_repeat',
  ROLE: 'role'
} as const
