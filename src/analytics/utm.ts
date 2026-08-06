/**
 * Campaign & Attribution Tracking Utility (UTM Parameters & Referrers)
 * Persists first-touch (localStorage) and last-touch (sessionStorage) attribution data.
 */

export interface AttributionParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  gclid?: string
  fbclid?: string
  referrer?: string
  landing_page?: string
  first_utm_source?: string
  first_utm_medium?: string
  first_utm_campaign?: string
}

const FIRST_TOUCH_KEY = 'kore_first_touch_attribution'
const LAST_TOUCH_KEY = 'kore_last_touch_attribution'

/**
 * Parses current URL query string for UTM parameters and captures attribution data.
 */
export function captureCampaignParams(): AttributionParams {
  if (typeof window === 'undefined') return {}

  const urlParams = new URLSearchParams(window.location.search)
  const currentReferrer = document.referrer || 'direct'
  const currentPath = window.location.pathname + window.location.search

  const utmSource = urlParams.get('utm_source') || undefined
  const utmMedium = urlParams.get('utm_medium') || undefined
  const utmCampaign = urlParams.get('utm_campaign') || undefined
  const utmContent = urlParams.get('utm_content') || undefined
  const utmTerm = urlParams.get('utm_term') || undefined
  const gclid = urlParams.get('gclid') || undefined
  const fbclid = urlParams.get('fbclid') || undefined

  const hasNewCampaign = Boolean(
    utmSource || utmMedium || utmCampaign || gclid || fbclid
  )

  const currentAttribution: AttributionParams = {
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_content: utmContent,
    utm_term: utmTerm,
    gclid,
    fbclid,
    referrer: currentReferrer,
    landing_page: currentPath
  }

  // 1. First-Touch Attribution (stored permanently in localStorage)
  try {
    const existingFirstTouch = localStorage.getItem(FIRST_TOUCH_KEY)
    if (!existingFirstTouch) {
      localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(currentAttribution))
    }
  } catch (err) {
    console.warn('[UTM] Error setting first-touch attribution:', err)
  }

  // 2. Last-Touch Attribution (stored in sessionStorage)
  try {
    if (hasNewCampaign || !sessionStorage.getItem(LAST_TOUCH_KEY)) {
      sessionStorage.setItem(LAST_TOUCH_KEY, JSON.stringify(currentAttribution))
    }
  } catch (err) {
    console.warn('[UTM] Error setting last-touch attribution:', err)
  }

  return getAttributionParams()
}

/**
 * Retrieves merged attribution parameters (current session + first touch).
 */
export function getAttributionParams(): AttributionParams {
  if (typeof window === 'undefined') return {}

  let firstTouch: AttributionParams = {}
  let lastTouch: AttributionParams = {}

  try {
    const storedFirst = localStorage.getItem(FIRST_TOUCH_KEY)
    if (storedFirst) firstTouch = JSON.parse(storedFirst)

    const storedLast = sessionStorage.getItem(LAST_TOUCH_KEY)
    if (storedLast) lastTouch = JSON.parse(storedLast)
  } catch (err) {
    console.warn('[UTM] Error parsing stored attribution:', err)
  }

  return {
    ...lastTouch,
    referrer: document.referrer || lastTouch.referrer || 'direct',
    landing_page: window.location.pathname,
    first_utm_source: firstTouch.utm_source,
    first_utm_medium: firstTouch.utm_medium,
    first_utm_campaign: firstTouch.utm_campaign
  }
}
