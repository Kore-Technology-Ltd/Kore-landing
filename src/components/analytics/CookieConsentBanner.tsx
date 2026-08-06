import { useEffect, useRef } from 'react'
import './CookieConsent.css'

interface CookieConsentBannerProps {
  onAcceptAll: () => void
  onRejectNonEssential: () => void
  onCustomize: () => void
}

export default function CookieConsentBanner({
  onAcceptAll,
  onRejectNonEssential,
  onCustomize
}: CookieConsentBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Focus banner for accessibility when mounted
    const timer = setTimeout(() => {
      if (bannerRef.current) {
        bannerRef.current.focus()
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      ref={bannerRef}
      className="kore-cookie-card-wrapper"
      role="region"
      aria-label="Cookie Privacy Notice"
      tabIndex={-1}
    >
      <div className="kore-cookie-card">
        <div className="kore-cookie-card__header">
          <div className="kore-cookie-card__icon-box">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="#d3a014"
                fillOpacity="0.15"
                stroke="#d3a014"
                strokeWidth="2"
              />
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                fill="#d3a014"
              />
              <circle cx="8.5" cy="7.5" r="1.5" fill="#194332" />
              <circle cx="16.5" cy="8.5" r="1" fill="#194332" />
              <circle cx="15.5" cy="16.5" r="1.5" fill="#194332" />
            </svg>
          </div>
          <div className="kore-cookie-card__title-meta">
            <span className="kore-cookie-card__badge">Privacy Choice</span>
            <h2 className="kore-cookie-card__title">We value your privacy</h2>
          </div>
        </div>

        <p className="kore-cookie-card__description">
          Korè uses essential cookies for platform security, and optional
          analytics to help us measure site performance and improve our
          agricultural marketplace.{' '}
          <a href="/privacy" className="kore-cookie-card__link">
            Learn more
          </a>
        </p>

        <div className="kore-cookie-card__actions">
          <button
            type="button"
            className="kore-cookie-btn kore-cookie-btn--gold"
            onClick={onAcceptAll}
          >
            Accept All
          </button>
          <button
            type="button"
            className="kore-cookie-btn kore-cookie-btn--cream"
            onClick={onRejectNonEssential}
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            className="kore-cookie-btn kore-cookie-btn--text"
            onClick={onCustomize}
          >
            Customize Preferences
          </button>
        </div>
      </div>
    </div>
  )
}
