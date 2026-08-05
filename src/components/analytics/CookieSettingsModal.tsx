import React, { useState, useEffect, useRef } from 'react'
import type { CookiePreferences } from '@/analytics/consent'
import './CookieConsent.css'

interface CookieSettingsModalProps {
  isOpen: boolean
  onClose: () => void
  currentConsent: CookiePreferences | null
  onSave: (preferences: CookiePreferences) => void
}

export default function CookieSettingsModal({
  isOpen,
  onClose,
  currentConsent,
  onSave
}: CookieSettingsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  const [prefs, setPrefs] = useState<CookiePreferences>({
    necessary: true,
    analytics: currentConsent ? currentConsent.analytics : false,
    functional: currentConsent ? currentConsent.functional : false,
    marketing: currentConsent ? currentConsent.marketing : false
  })

  // Sync state when modal opens
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement
      setPrefs({
        necessary: true,
        analytics: currentConsent ? currentConsent.analytics : false,
        functional: currentConsent ? currentConsent.functional : false,
        marketing: currentConsent ? currentConsent.marketing : false
      })
    }
  }, [isOpen, currentConsent])

  // Accessibility: Handle ESC key & Focus Trap
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    if (modalRef.current) {
      modalRef.current.focus()
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      if (previousActiveElement.current) {
        previousActiveElement.current.focus()
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleToggle = (
    category: keyof Omit<CookiePreferences, 'necessary'>
  ) => {
    setPrefs((prev) => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  const handleSave = () => {
    onSave(prefs)
  }

  const handleAcceptAll = () => {
    onSave({
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true
    })
  }

  const handleRejectAll = () => {
    onSave({
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false
    })
  }

  return (
    <div
      className="kore-cookie-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="kore-cookie-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="kore-cookie-modal-title"
        aria-describedby="kore-cookie-modal-desc"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="kore-cookie-modal__header">
          <div className="kore-cookie-modal__title-group">
            <span className="kore-cookie-card__badge">GDPR &amp; CCPA</span>
            <h2
              id="kore-cookie-modal-title"
              className="kore-cookie-modal__title"
            >
              Cookie Preferences
            </h2>
          </div>
          <button
            type="button"
            className="kore-cookie-modal__close"
            onClick={onClose}
            aria-label="Close Cookie Preferences"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="kore-cookie-modal__body">
          <p id="kore-cookie-modal-desc" className="kore-cookie-modal__intro">
            Manage your cookie settings below. Essential cookies are required to
            run the site, while optional cookies help us improve user experience
            and measure platform performance.
          </p>

          {/* 1. Necessary Cookies (Locked) */}
          <div className="kore-cookie-row">
            <div className="kore-cookie-row__info">
              <div className="kore-cookie-row__title-line">
                <span className="kore-cookie-row__name">Necessary Cookies</span>
                <span className="kore-cookie-row__status-badge">
                  Always Active
                </span>
              </div>
              <p className="kore-cookie-row__desc">
                Required for core navigation, layout rendering, security, and
                accessibility. Cannot be disabled.
              </p>
            </div>
            <div className="kore-cookie-row__switch-wrapper">
              <input
                type="checkbox"
                checked={true}
                disabled={true}
                className="kore-cookie-checkbox--disabled"
                aria-label="Necessary Cookies (Always Active)"
              />
            </div>
          </div>

          {/* 2. Analytics Cookies (GA4) */}
          <div className="kore-cookie-row">
            <div className="kore-cookie-row__info">
              <div className="kore-cookie-row__title-line">
                <span className="kore-cookie-row__name">
                  Analytics Cookies (GA4)
                </span>
              </div>
              <p className="kore-cookie-row__desc">
                Helps us measure waitlist signups, page views, scroll depth, and
                interaction performance via Google Analytics 4.
              </p>
            </div>
            <div className="kore-cookie-row__switch-wrapper">
              <label className="kore-switch">
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={() => handleToggle('analytics')}
                  aria-label="Analytics Cookies"
                />
                <span className="kore-slider"></span>
              </label>
            </div>
          </div>

          {/* 3. Functional Cookies */}
          <div className="kore-cookie-row">
            <div className="kore-cookie-row__info">
              <div className="kore-cookie-row__title-line">
                <span className="kore-cookie-row__name">
                  Functional Cookies
                </span>
              </div>
              <p className="kore-cookie-row__desc">
                Enables enhanced UI state persistence, scroll position
                restoration, and local preferences.
              </p>
            </div>
            <div className="kore-cookie-row__switch-wrapper">
              <label className="kore-switch">
                <input
                  type="checkbox"
                  checked={prefs.functional}
                  onChange={() => handleToggle('functional')}
                  aria-label="Functional Cookies"
                />
                <span className="kore-slider"></span>
              </label>
            </div>
          </div>

          {/* 4. Marketing Cookies */}
          <div className="kore-cookie-row">
            <div className="kore-cookie-row__info">
              <div className="kore-cookie-row__title-line">
                <span className="kore-cookie-row__name">Marketing Cookies</span>
              </div>
              <p className="kore-cookie-row__desc">
                Enables campaign tracking and social platform integration
                insights.
              </p>
            </div>
            <div className="kore-cookie-row__switch-wrapper">
              <label className="kore-switch">
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={() => handleToggle('marketing')}
                  aria-label="Marketing Cookies"
                />
                <span className="kore-slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="kore-cookie-modal__footer">
          <button
            type="button"
            className="kore-cookie-btn kore-cookie-btn--text"
            onClick={handleRejectAll}
          >
            Reject All
          </button>
          <div className="kore-cookie-modal__footer-right">
            <button
              type="button"
              className="kore-cookie-btn kore-cookie-btn--forest"
              onClick={handleSave}
            >
              Save Preferences
            </button>
            <button
              type="button"
              className="kore-cookie-btn kore-cookie-btn--gold"
              onClick={handleAcceptAll}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
