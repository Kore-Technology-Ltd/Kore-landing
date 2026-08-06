import './Navbar.css'
import { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import CloseIcon from '@/assets/icons/CloseIcon'
import HamburgerIcon from '@/assets/icons/HamburgerIcon'
import SearchIcon from '@/assets/icons/SearchIcon'
import { useAnalytics } from '@/analytics/useAnalytics'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { trackCTA } = useAnalytics()
  const isTeamPage = location.pathname === '/team'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), [])

  // Observe active section on scroll
  useEffect(() => {
    const sections = [
      'section-story',
      'section-waste-crisis',
      'section-better-way',
      'section-core-problem',
      'section-why-kore',
      'section-how-it-works',
      'section-team',
      'section-faq'
    ]

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  const handleMobileNavClick = useCallback(
    (sectionId: string, label: string) => {
      trackCTA({
        button_name: label,
        section: 'mobile_navigation',
        destination: `#${sectionId}`
      })
      closeMobileMenu()
      setTimeout(() => scrollToSection(sectionId), 300)
    },
    [closeMobileMenu, trackCTA]
  )

  const scrollToSection = (id: string, label?: string) => {
    if (label) {
      trackCTA({
        button_name: label,
        section: 'desktop_navigation',
        destination: `#${id}`
      })
    }
    const el = document.getElementById(id)
    if (el) {
      const navbar = document.querySelector('.kore-navbar-container')
      const offset = navbar ? navbar.clientHeight : 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`kore-mobile-overlay${mobileMenuOpen ? ' is-open' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile menu card */}
      <div
        className={`kore-mobile-menu-card-wrapper${mobileMenuOpen ? ' is-open' : ''}`}
      >
        <div className="kore-mobile-menu-card">
          <button
            className="kore-mobile-menu-item"
            onClick={() =>
              handleMobileNavClick('section-waitlist', 'Join Waitlist')
            }
          >
            Join Waitlist
          </button>
          <button
            className="kore-mobile-menu-item"
            onClick={() => handleMobileNavClick('section-story', 'Story')}
          >
            Story
          </button>
          <button
            className="kore-mobile-menu-item"
            onClick={() =>
              handleMobileNavClick('section-waste-crisis', 'Waste Crisis')
            }
          >
            Waste Crisis
          </button>
          <button
            className="kore-mobile-menu-item"
            onClick={() => handleMobileNavClick('section-why-kore', 'Why Korè')}
          >
            Why Korè
          </button>
          <button
            className="kore-mobile-menu-item"
            onClick={() =>
              handleMobileNavClick('section-how-it-works', 'How it Works?')
            }
          >
            How it Works?
          </button>
          <button
            className={`kore-mobile-menu-item${isTeamPage ? ' active' : ''}`}
            onClick={() => {
              trackCTA({
                button_name: 'Team',
                section: 'mobile_navigation',
                destination: '/team'
              })
              closeMobileMenu()
              navigate('/team')
            }}
          >
            Team
          </button>
          <button
            className="kore-mobile-menu-item"
            onClick={() => handleMobileNavClick('section-faq', 'FAQ')}
          >
            FAQ
          </button>
        </div>
      </div>

      <header className="kore-navbar-container">
        <div className="kore-navbar-inner">
          <div className="kore-navbar-logo-placeholder"></div>

          {/* Desktop nav links — hidden on mobile via CSS */}
          <nav className="kore-desktop-nav">
            <div
              onClick={() => scrollToSection('section-story', 'Story')}
              className={`kore-desktop-nav-item${activeSection === 'section-story' ? ' active' : ''}`}
            >
              <span
                className={`text korre-nav-link${activeSection === 'section-story' ? ' is-active' : ''}`}
                data-korre-nav-bound="true"
                role="link"
                tabIndex={0}
              >
                Story
              </span>
            </div>
            <div
              onClick={() =>
                scrollToSection('section-waste-crisis', 'Waste Crisis')
              }
              className={`kore-desktop-nav-item${activeSection === 'section-waste-crisis' ? ' active' : ''}`}
            >
              <span
                className={`text korre-nav-link${activeSection === 'section-waste-crisis' ? ' is-active' : ''}`}
                data-korre-nav-bound="true"
                role="link"
                tabIndex={0}
              >
                Waste Crisis
              </span>
            </div>
            <div
              onClick={() => scrollToSection('section-why-kore', 'Why Korè')}
              className={`kore-desktop-nav-item${activeSection === 'section-why-kore' ? ' active' : ''}`}
            >
              <span
                className={`text korre-nav-link${activeSection === 'section-why-kore' ? ' is-active' : ''}`}
                data-korre-nav-bound="true"
                role="link"
                tabIndex={0}
              >
                Why Korè
              </span>
            </div>
            <div
              onClick={() =>
                scrollToSection('section-how-it-works', 'How it Works?')
              }
              className={`kore-desktop-nav-item${activeSection === 'section-how-it-works' ? ' active' : ''}`}
            >
              <span
                className={`text korre-nav-link${activeSection === 'section-how-it-works' ? ' is-active' : ''}`}
                data-korre-nav-bound="true"
                role="link"
                tabIndex={0}
              >
                How it Works?
              </span>
            </div>
            <div
              onClick={() => {
                trackCTA({
                  button_name: 'Team',
                  section: 'desktop_navigation',
                  destination: '/team'
                })
                navigate('/team')
              }}
              className={`kore-desktop-nav-item${isTeamPage ? ' active' : ''}`}
            >
              <span
                className={`text korre-nav-link${isTeamPage ? ' is-active' : ''}`}
                data-korre-nav-bound="true"
                role="link"
                tabIndex={0}
              >
                Team
              </span>
            </div>
            <div
              onClick={() => scrollToSection('section-faq', 'FAQ')}
              className={`kore-desktop-nav-item${activeSection === 'section-faq' ? ' active' : ''}`}
            >
              <span
                className={`text korre-nav-link${activeSection === 'section-faq' ? ' is-active' : ''}`}
                data-korre-nav-bound="true"
                role="link"
                tabIndex={0}
              >
                FAQ
              </span>
            </div>
          </nav>

          {/* Desktop right side actions */}
          <div className="kore-desktop-actions">
            <div className="kore-search-wrapper">
              <div className="kore-search-icon-container">
                <SearchIcon />
              </div>
            </div>
            <div
              onClick={() =>
                scrollToSection('section-waitlist', 'Join Waitlist')
              }
              className="kore-desktop-join-btn"
            >
              <span
                className="text korre-clickable kore-desktop-join-btn-text"
                data-korre-bound="true"
                role="button"
                tabIndex={0}
                aria-label="Join the waitlist"
              >
                Join Waitlist
              </span>
            </div>
          </div>

          {/* Mobile hamburger button — shown only on mobile via CSS */}
          <button
            className="kore-hamburger"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>

        {/* Responsive, distortion-free logo centered vertically with increased height */}
        <div className="kore-navbar-logo">
          <Link to="/">
            <img
              className="logo-dark"
              alt="Korè logo"
              src="/images/kore-logo-dark.png"
            />
            <img
              className="logo-light"
              alt="Korè logo"
              src="/images/kore-logo-light.png"
            />
          </Link>
        </div>
      </header>
    </>
  )
}
