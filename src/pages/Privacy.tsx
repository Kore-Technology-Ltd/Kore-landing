import { useState, useEffect } from 'react'
import Navbar from '@/components/sections/Navbar/Navbar'
import Footer from '@/components/sections/Footer/Footer'
import PrivacyContent from '@/components/legal/PrivacyContent'
import '@/components/legal/legal.css'

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('sec-1')

  const sections = [
    { id: 'sec-1', label: '1. Who We Are' },
    { id: 'sec-2', label: '2. Data We Collect' },
    { id: 'sec-3', label: '3. Lawful Basis' },
    { id: 'sec-4', label: '4. How We Use Data' },
    { id: 'sec-5', label: '5. Data Sharing' },
    { id: 'sec-6', label: '6. Data Retention' },
    { id: 'sec-7', label: '7. Your Rights' },
    { id: 'sec-8', label: '8. Data Security' },
    { id: 'sec-9', label: '9. Cookies & Tracking' },
    { id: 'sec-10', label: "10. Children's Privacy" },
    { id: 'sec-11', label: '11. Cross-Border Transfers' },
    { id: 'sec-12', label: '12. Third-Party Links' },
    { id: 'sec-13', label: '13. Marketing' },
    { id: 'sec-14', label: '14. Policy Updates' },
    { id: 'sec-15', label: '15. Contact & Complaints' }
  ]

  // Observe active section on scroll and manage body overflow for stickiness
  useEffect(() => {
    // 1. Manage body/html overflow to ensure position: sticky works
    const htmlEl = document.documentElement
    const bodyEl = document.body

    const origHtmlOverflow = htmlEl.style.overflow
    const origBodyOverflow = bodyEl.style.overflow
    const origHtmlOverflowX = htmlEl.style.overflowX
    const origBodyOverflowX = bodyEl.style.overflowX

    htmlEl.style.overflow = 'visible'
    bodyEl.style.overflow = 'visible'
    htmlEl.style.overflowX = 'visible'
    bodyEl.style.overflowX = 'visible'

    // 2. Setup ScrollSpy observer
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
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

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id)
      if (el) observer.observe(el)
    })

    return () => {
      // Cleanup observer
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id)
        if (el) observer.unobserve(el)
      })

      // Restore original body/html styles
      htmlEl.style.overflow = origHtmlOverflow
      bodyEl.style.overflow = origBodyOverflow
      htmlEl.style.overflowX = origHtmlOverflowX
      bodyEl.style.overflowX = origBodyOverflowX
    }
  }, [])

  // Scroll the active navigation link into view inside the sticky sidebar container
  useEffect(() => {
    if (window.innerWidth > 991) {
      const activeLink = document.querySelector(
        '.legal-sidebar .legal-nav-link.active'
      )
      if (activeLink) {
        activeLink.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        })
      }
    }
  }, [activeSection])

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      const navbar = document.querySelector('.kore-navbar-container')
      const offset = navbar?.clientHeight || 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="legal-page-wrapper">
      <Navbar />

      {/* Hero Section */}
      <section className="legal-hero">
        <div className="legal-hero-decorations">
          {/* Subtle decorative background shapes */}
          <svg
            width="100%"
            height="100%"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10%"
              cy="20%"
              r="150"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="2"
            />
            <circle
              cx="90%"
              cy="80%"
              r="200"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="legal-hero-tag">Legal Document</div>
        <h1 className="legal-hero-title">Privacy Policy</h1>
        <div className="legal-hero-meta">
          <span>Last Updated: July 1st, 2026</span>
          <span>Version: 2.0</span>
          <span>Compliant with: NDPA 2023 (Nigeria)</span>
        </div>
      </section>

      {/* Main Body Container (Two columns) */}
      <div className="legal-body-container">
        {/* Sticky Sidebar Navigation */}
        <aside className="legal-sidebar">
          <div className="legal-nav-title">Document Outline</div>
          <nav>
            <ul className="legal-nav-list">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => handleNavClick(sec.id)}
                    className={`legal-nav-link ${activeSection === sec.id ? 'active' : ''}`}
                    style={{
                      border: 'none',
                      background: 'none',
                      width: '100%',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    {sec.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Document Content */}
        <PrivacyContent />
      </div>

      <Footer />
    </div>
  )
}
