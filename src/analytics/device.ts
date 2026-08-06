/**
 * Device & Environment Information Utility
 * Captures browser, OS, device type, viewport, and screen resolution for analytics dimensions.
 */

export interface DeviceInfo {
  device_type: 'Desktop' | 'Tablet' | 'Mobile'
  browser: string
  os: string
  viewport: string
  screen_resolution: string
  language: string
  timezone: string
}

export function getDeviceInfo(): DeviceInfo {
  if (typeof window === 'undefined') {
    return {
      device_type: 'Desktop',
      browser: 'Unknown',
      os: 'Unknown',
      viewport: '0x0',
      screen_resolution: '0x0',
      language: 'en',
      timezone: 'UTC'
    }
  }

  const ua = navigator.userAgent || ''

  // 1. Device Type Detection
  let deviceType: 'Desktop' | 'Tablet' | 'Mobile' = 'Desktop'
  if (
    /iPad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))/i.test(ua)
  ) {
    deviceType = 'Tablet'
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(
      ua
    )
  ) {
    deviceType = 'Mobile'
  }

  // 2. Browser Detection
  let browser = 'Unknown'
  if (ua.indexOf('Firefox') > -1) browser = 'Firefox'
  else if (ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1) browser = 'Opera'
  else if (ua.indexOf('Trident') > -1) browser = 'Internet Explorer'
  else if (ua.indexOf('Edge') > -1 || ua.indexOf('Edg') > -1) browser = 'Edge'
  else if (ua.indexOf('Chrome') > -1) browser = 'Chrome'
  else if (ua.indexOf('Safari') > -1) browser = 'Safari'

  // 3. OS Detection
  let os = 'Unknown'
  if (ua.indexOf('Win') > -1) os = 'Windows'
  else if (ua.indexOf('Mac') > -1) os = 'macOS'
  else if (ua.indexOf('Linux') > -1) os = 'Linux'
  else if (ua.indexOf('Android') > -1) os = 'Android'
  else if (ua.indexOf('like Mac') > -1) os = 'iOS'

  // 4. Dimensions & Environment
  const viewport = `${window.innerWidth}x${window.innerHeight}`
  const screenResolution = `${window.screen?.width || 0}x${window.screen?.height || 0}`
  const language = navigator.language || 'en'
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'

  return {
    device_type: deviceType,
    browser,
    os,
    viewport,
    screen_resolution: screenResolution,
    language,
    timezone
  }
}
