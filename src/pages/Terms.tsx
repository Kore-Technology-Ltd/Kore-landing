import { useState, useEffect } from 'react'
import Navbar from '@/components/sections/Navbar/Navbar'
import Footer from '@/components/sections/Footer/Footer'
import TermsContent from '@/components/legal/TermsContent'
import '@/components/legal/legal.css'

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('sec-1')

  const sections = [
    { id: 'sec-1', label: '1. About the Platform' },
    { id: 'sec-2', label: '2. Eligibility' },
    { id: 'sec-3', label: '3. Account Registration' },
    { id: 'sec-4', label: '4. Seller Obligations' },
    { id: 'sec-5', label: '5. Buyer Obligations' },
    { id: 'sec-6', label: '6. Payments & Escrow' },
    { id: 'sec-7', label: '7. Dispute Resolution' },
    { id: 'sec-8', label: '8. Prohibited Conduct' },
    { id: 'sec-9', label: '9. Intellectual Property' },
    { id: 'sec-10', label: '10. Ratings & Reviews' },
    { id: 'sec-11', label: '11. Platform Availability' },
    { id: 'sec-12', label: '12. Limitation of Liability' },
    { id: 'sec-13', label: '13. Indemnification' },
    { id: 'sec-14', label: '14. Termination' },
    { id: 'sec-15', label: '15. Modifications to Terms' },
    { id: 'sec-16', label: '16. Governing Law' },
    { id: 'sec-17', label: '17. Severability' },
    { id: 'sec-18', label: '18. Contact Information' }
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
          <svg
            width="100%"
            height="100%"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="15%"
              cy="30%"
              r="180"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="2"
            />
            <circle
              cx="85%"
              cy="70%"
              r="220"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="legal-hero-tag">Legal Document</div>
        <h1 className="legal-hero-title">Terms &amp; Conditions</h1>
        <div className="legal-hero-meta">
          <span>Last Updated: July 1st, 2026</span>
          <span>Version: 2.0</span>
          <span>Governing Law: Federal Republic of Nigeria</span>
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
        <TermsContent />
      </div>

      <Footer />
    </div>
  )
}
