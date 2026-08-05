import './Waitlist.css'
import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { createPortal } from 'react-dom'
import {
  fetchWaitlistStats,
  formatStatNumber,
  submitWaitlist,
  normalizeNigerianPhone,
  type WaitlistStats,
  type WaitlistRole
} from '@lib/waitlist'

export default function Waitlist() {
  const [stats, setStats] = useState<WaitlistStats | null>(() => {
    try {
      const cached = localStorage.getItem('kore_waitlist_stats')
      const cachedTime = localStorage.getItem('kore_waitlist_stats_time')
      if (cached && cachedTime) {
        const age = Date.now() - parseInt(cachedTime, 10)
        if (age < 5 * 60 * 1000) {
          return JSON.parse(cached)
        }
      }
    } catch (e) {
      console.warn('Failed to parse cached stats', e)
    }
    return null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Custom Select Dropdown states
  const [selectedRole, setSelectedRole] = useState<WaitlistRole | ''>('')
  const [selectedRoleLabel, setSelectedRoleLabel] = useState('Select your role')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadStats = async () => {
      try {
        const cachedTime = localStorage.getItem('kore_waitlist_stats_time')
        if (cachedTime) {
          const age = Date.now() - parseInt(cachedTime, 10)
          if (age < 5 * 60 * 1000) {
            return
          }
        }
      } catch {}

      const data = await fetchWaitlistStats()
      if (data) {
        setStats(data)
        try {
          localStorage.setItem('kore_waitlist_stats', JSON.stringify(data))
          localStorage.setItem(
            'kore_waitlist_stats_time',
            Date.now().toString()
          )
        } catch {}
      }
    }
    loadStats()
  }, [])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (target && target.closest('.waitlist__dropdown-modal')) {
        return
      }
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Clear role error border and text when selectedRole updates or dropdown opens
  useEffect(() => {
    if (selectedRole || isDropdownOpen) {
      const trigger = document.getElementById('waitlist-role-trigger')
      if (trigger) {
        trigger.style.borderColor = ''
      }
      if (isDropdownOpen && selectedRoleLabel === 'Role is required!') {
        setSelectedRoleLabel('Select your role')
      }
    }
  }, [selectedRole, isDropdownOpen, selectedRoleLabel])

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const el = e.currentTarget
    el.style.borderColor = ''
    el.classList.remove('waitlist__input--error')

    // Restore original placeholders
    if (el.id === 'waitlist-name') el.placeholder = 'Enter your full name'
    if (el.id === 'waitlist-phone') el.placeholder = 'e.g. +234 800 000 0000'
    if (el.id === 'waitlist-location') el.placeholder = 'City or region'
    if (el.id === 'waitlist-email') el.placeholder = 'you@example.com'

    // Fire waitlist_started on first field focus
    if (!hasStartedFunnelRef.current) {
      hasStartedFunnelRef.current = true
      trackWaitlist('started', { source: 'waitlist_form' })
    }

    if (el.id === 'waitlist-name' && !hasEnteredNameRef.current) {
      hasEnteredNameRef.current = true
      trackWaitlist('name_entered')
    }

    if (el.id === 'waitlist-email' && !hasEnteredEmailRef.current) {
      hasEnteredEmailRef.current = true
      trackWaitlist('email_entered')
    }
  }

  const handleWaitlistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = ((formData.get('name') as string) || '').trim()
    const phone = ((formData.get('phone') as string) || '').trim()
    const location = ((formData.get('location') as string) || '').trim()
    const email = ((formData.get('email') as string) || '').trim()
    const role = selectedRole // Get value directly from state

    trackWaitlist('submission_attempt', {
      button_location: 'section-waitlist',
      role: role || 'unselected'
    })

    // Clear previous error styles
    const errorFields = [
      'waitlist-name',
      'waitlist-phone',
      'waitlist-location',
      'waitlist-email'
    ]
    errorFields.forEach((id) => {
      const el = document.getElementById(id) as HTMLInputElement
      if (el) {
        el.style.borderColor = ''
        el.classList.remove('waitlist__input--error')
        if (id === 'waitlist-name') el.placeholder = 'Enter your full name'
        if (id === 'waitlist-phone') el.placeholder = 'e.g. +234 800 000 0000'
        if (id === 'waitlist-location') el.placeholder = 'City or region'
        if (id === 'waitlist-email') el.placeholder = 'you@example.com'
      }
    })
    const trigger = document.getElementById('waitlist-role-trigger')
    if (trigger) {
      trigger.style.borderColor = ''
    }

    let hasError = false
    const showError = (id: string, placeholderMsg: string) => {
      const el = document.getElementById(id) as HTMLInputElement
      if (el) {
        el.style.borderColor = '#ff8882'
        el.classList.add('waitlist__input--error')
        if (el.tagName === 'INPUT') {
          el.placeholder = placeholderMsg
          el.value = ''
        }
      }
      hasError = true
    }

    if (!name) {
      showError('waitlist-name', 'Name is required.')
    }
    if (!phone) {
      showError('waitlist-phone', 'Phone number is required.')
    }
    if (!location) {
      showError('waitlist-location', 'Location is required.')
    }
    if (!email) {
      showError('waitlist-email', 'Email address is required.')
    } else {
      const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      if (!looksLikeEmail) {
        showError('waitlist-email', 'Enter a valid email address.')
      }
    }
    if (!role) {
      const el = document.getElementById('waitlist-role-trigger')
      if (el) {
        el.style.borderColor = '#ff8882'
      }
      setSelectedRoleLabel('Role is required!')
      hasError = true
    }

    if (hasError) {
      trackWaitlist('validation_error', {
        role: role || 'unselected',
        error_message: 'Validation failed'
      })
      ;(window as any).Korre?.notifications?.show(
        'Please fix the highlighted fields.',
        'error'
      )
      return
    }

    setIsSubmitting(true)

    try {
      const normalizedPhone = normalizeNigerianPhone(phone)
      const result = await submitWaitlist({
        name,
        email: email.toLowerCase(),
        phone: normalizedPhone,
        location,
        role: role as WaitlistRole
      })

      if (result.success) {
        trackWaitlist('submission_success', {
          role: role as string,
          email: email.toLowerCase()
        })
        ;(window as any).Korre?.notifications?.show(
          result.message || 'Thanks! Your submission is in.',
          'success'
        )
        form.reset()
        setSelectedRole('')
        setSelectedRoleLabel('Select your role')
        // Reset placeholders
        errorFields.forEach((id) => {
          const el = document.getElementById(id) as HTMLInputElement
          if (el) {
            el.classList.remove('waitlist__input--error')
            if (id === 'waitlist-name') el.placeholder = 'Enter your full name'
            if (id === 'waitlist-phone')
              el.placeholder = 'e.g. +234 800 000 0000'
            if (id === 'waitlist-location') el.placeholder = 'City or region'
            if (id === 'waitlist-email') el.placeholder = 'you@example.com'
          }
        })
        hasStartedFunnelRef.current = false
        hasEnteredNameRef.current = false
        hasEnteredEmailRef.current = false
      } else {
        const isDuplicate =
          result.message?.toLowerCase().includes('already') ||
          result.message?.toLowerCase().includes('duplicate')
        if (isDuplicate) {
          trackWaitlist('duplicate_email', {
            role: role as string,
            email: email.toLowerCase(),
            error_message: result.message
          })
        } else {
          trackWaitlist('submission_failed', {
            role: role as string,
            error_message: result.message
          })
        }
        ;(window as any).Korre?.notifications?.show(
          result.message || 'Submission failed. Please try again.',
          'error'
        )
      }
    } catch (err: any) {
      console.error('[Waitlist] Error submitting waitlist:', err)
      trackWaitlist('server_error', {
        role: role as string,
        error_message: err.message
      })
      trackError({
        message: err.message || 'Waitlist submission API exception',
        stack: err.stack,
        error_type: 'waitlist_api_error'
      })
      ;(window as any).Korre?.notifications?.show(
        err.message || 'An error occurred. Please try again.',
        'error'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const reveal = useScrollReveal()

  return (
    <section
      ref={reveal.ref}
      className={`waitlist ${reveal.className}`}
      id="section-waitlist"
      aria-label="Join the waitlist"
    >
      {/* 1. Launching Soon Badge */}
      <div className="waitlist__badge-wrapper">
        <span className="waitlist__badge-text">LAUNCHING SOON</span>
      </div>

      {/* 2. Title & Subtitle */}
      <div className="waitlist__header">
        <span className="waitlist__title">
          Join the Agricultural Revolution
        </span>
        <span className="waitlist__subtitle">
          Be among the first to experience direct, transparent, and efficient
          agricultural trade. Join thousands of farmers, restaurants, and
          wholesalers building West Africa's food future.
        </span>
      </div>

      {/* 3. Form Card Block */}
      <div className="waitlist__card">
        {/* Background Decorative Contiguous SVG */}
        <svg
          className="waitlist__card-bg"
          viewBox="0 0 756 828"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M756 0L754.7504 357.096 2.4992 663 0 317.1412 756 0Z"
              fill="#164d37"
              fillRule="nonzero"
            />
            <path
              d="M756 77L754.7504 434.096 2.4992 740 0 394.1412 756 77Z"
              fill="#1a6044"
              fillRule="nonzero"
            />
            <path
              d="M756 165L754.7504 522.096 2.4992 828 0 482.1412 756 165Z"
              fill="#217b57"
              fillRule="nonzero"
            />
          </g>
        </svg>

        <div className="waitlist__form-wrapper">
          <form
            className="waitlist__form"
            onSubmit={handleWaitlistSubmit}
            noValidate
          >
            {/* Name and Phone Row */}
            <div className="waitlist__row">
              <div className="waitlist__field waitlist__field--half">
                <label className="waitlist__label" htmlFor="waitlist-name">
                  Name
                </label>
                <input
                  className="waitlist__input"
                  id="waitlist-name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  onFocus={handleInputFocus}
                  required
                />
              </div>
              <div className="waitlist__field waitlist__field--half">
                <label className="waitlist__label" htmlFor="waitlist-phone">
                  Phone Number
                </label>
                <input
                  className="waitlist__input"
                  id="waitlist-phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. +234 800 000 0000"
                  autoComplete="tel"
                  onFocus={handleInputFocus}
                  required
                />
              </div>
            </div>

            {/* Location */}
            <div className="waitlist__field">
              <label className="waitlist__label" htmlFor="waitlist-location">
                Location
              </label>
              <input
                className="waitlist__input"
                id="waitlist-location"
                name="location"
                type="text"
                placeholder="City or region"
                autoComplete="address-level2"
                onFocus={handleInputFocus}
                required
              />
            </div>

            {/* Email Address */}
            <div className="waitlist__field">
              <label className="waitlist__label" htmlFor="waitlist-email">
                Email Address
              </label>
              <input
                className="waitlist__input"
                id="waitlist-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                onFocus={handleInputFocus}
                required
              />
            </div>

            {/* Custom Dropdown Selection */}
            <div className="waitlist__field" ref={dropdownRef}>
              <span className="waitlist__label">I'm a ...</span>
              <div className="waitlist__select-wrapper">
                {/* The Visible Select Trigger Box */}
                <div
                  className={`waitlist__select-trigger ${selectedRole ? 'waitlist__select-trigger--selected' : ''} ${selectedRoleLabel === 'Role is required!' ? 'waitlist__select-trigger--error' : ''}`}
                  id="waitlist-role-trigger"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  role="button"
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                >
                  <span className="waitlist__select-trigger-text">
                    {selectedRoleLabel}
                  </span>
                  <div
                    className={`waitlist__select-arrow-container ${isDropdownOpen ? 'waitlist__select-arrow-container--open' : ''}`}
                  >
                    <svg
                      className="waitlist__select-arrow"
                      viewBox="0 0 15.416 9.122"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.708 9.122L15.416 1.416 14.002 0 7.708 6.294 1.416 0 0 1.416 7.708 9.122Z"
                        fill="#000000"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* The Custom Dropdown Options Modal Popup */}
                {isDropdownOpen &&
                  createPortal(
                    <div
                      className="waitlist__dropdown-overlay"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <div
                        className="waitlist__dropdown-modal"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="waitlist__dropdown-modal-header">
                          <span className="waitlist__dropdown-modal-title">
                            Select your role
                          </span>
                          <button
                            className="waitlist__dropdown-modal-close"
                            type="button"
                            onClick={() => setIsDropdownOpen(false)}
                            aria-label="Close"
                          >
                            &times;
                          </button>
                        </div>
                        <ul
                          className="waitlist__dropdown-options"
                          role="listbox"
                        >
                          {(
                            [
                              { value: 'farmer', label: 'Farmer' },
                              { value: 'wholesaler', label: 'Wholesaler' },
                              { value: 'restaurant', label: 'Restaurant' },
                              { value: 'household', label: 'Household' },
                              { value: 'hotel', label: 'Hotel' },
                              { value: 'consumer', label: 'Consumer' },
                              { value: 'retailer', label: 'Retailer' },
                              { value: 'investor', label: 'Investor' },
                              { value: 'partner', label: 'Partner' }
                            ] as const
                          ).map((option) => (
                            <li
                              key={option.value}
                              className={`waitlist__dropdown-option ${selectedRole === option.value ? 'waitlist__dropdown-option--selected' : ''}`}
                              role="option"
                              aria-selected={selectedRole === option.value}
                              onClick={() => {
                                setSelectedRole(option.value)
                                setSelectedRoleLabel(option.label)
                                setIsDropdownOpen(false)
                              }}
                            >
                              {option.label}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>,
                    document.body
                  )}

                {/* Hidden Input field to submit the selected value in the native form submit */}
                <input
                  type="hidden"
                  id="waitlist-role"
                  name="role"
                  value={selectedRole}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="waitlist__submit"
              type="submit"
              disabled={isSubmitting}
            >
              <span className="waitlist__submit-text">
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </span>
            </button>
          </form>

          <span className="waitlist__privacy">
            We respect your privacy. Unsubscribe at any time.
          </span>
        </div>
      </div>

      {/* 4. Social Proof Section */}
      <div className="waitlist__social-proof">
        <span className="waitlist__social-proof-title">Already joined</span>
        <div className="waitlist__pills">
          <div className="waitlist__pill">
            <span className="waitlist__pill-text">
              {stats ? formatStatNumber(stats.farmer) : '2,847'} farmers
            </span>
          </div>
          <div className="waitlist__pill">
            <span className="waitlist__pill-text">
              {stats ? formatStatNumber(stats.restaurant) : '1,234'} restaurants
            </span>
          </div>
          <div className="waitlist__pill">
            <span className="waitlist__pill-text">
              {stats ? formatStatNumber(stats.wholesaler) : '892'} wholesalers
            </span>
          </div>
          <div className="waitlist__pill">
            <span className="waitlist__pill-text">
              {stats && stats.household
                ? formatStatNumber(stats.household)
                : '2'}{' '}
              households
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
