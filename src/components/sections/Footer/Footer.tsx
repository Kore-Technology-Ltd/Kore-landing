import { useState, useEffect } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      if (w < 1240) {
        setScale(w / 1205)
      } else {
        setScale(1)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      style={{
        height: `${480 * scale}px`,
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        overflow: 'hidden',
        backgroundColor: 'rgb(25, 67, 50)'
      }}
    >
      <footer
        className="kore-footer"
        aria-label="Footer"
        style={{
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: 'top center',
          width: '1205px',
          height: '480px',
          position: 'absolute',
          left: '50%',
          backgroundColor: 'rgb(25, 67, 50)'
        }}
      >
        {/* Background Decorative Contiguous SVG */}
        <svg
          className="footer__bg"
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

        {/* 1. Email Address Link */}
        <a href="mailto:info@kore.ng" className="footer__email-address">
          info@kore.ng
        </a>

        {/* 2. Chat with us WhatsApp button */}
        <a
          href="https://wa.me/2349021204151"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__chat-button-wrapper"
        >
          <div className="footer__chat-button">
            <span className="footer__chat-text">Chat with us</span>
          </div>
        </a>

        {/* 2. Top Grid Area (Brand info, logo, links columns) */}
        <div className="footer__top-container">
          {/* Brand Column */}
          <div className="footer__brand">
            <span className="footer__tagline">
              Trusted agricultural <br />
              infrastructure connecting <br />
              West Africa's farms to tables.
            </span>
            <div className="footer__logo-wrapper">
              <Link to="/">
                <img
                  className="footer__logo"
                  alt="Version 1.1Artboard 27@4x 4"
                  loading="lazy"
                  decoding="async"
                  src="/images/kore-logo-light.png"
                />
              </Link>
            </div>
          </div>

          {/* Links Navigation Columns */}
          <nav className="footer__links" aria-label="Footer links">
            <div className="footer__col">
              <span className="footer__col-title">For Farmers</span>
              <span className="footer__col-link" role="link" tabIndex={0}>
                Sell Direct
              </span>
              <span className="footer__col-link" role="link" tabIndex={0}>
                Pricing Tool
              </span>
              <span className="footer__col-link" role="link" tabIndex={0}>
                Resources
              </span>
            </div>

            <div className="footer__col">
              <span className="footer__col-title">For Buyers</span>
              <span className="footer__col-link" role="link" tabIndex={0}>
                Browse Picture
              </span>
              <span className="footer__col-link" role="link" tabIndex={0}>
                Subscribe
              </span>
              <span className="footer__col-link" role="link" tabIndex={0}>
                Corporate Orders
              </span>
            </div>

            <div className="footer__col">
              <span className="footer__col-title">Company</span>
              <a href="about.html" className="footer__col-link">
                About Us
              </a>
              <span className="footer__col-link" role="link" tabIndex={0}>
                Blog
              </span>
              <span className="footer__col-link" role="link" tabIndex={0}>
                Careers
              </span>
            </div>

            <div className="footer__col">
              <span className="footer__col-title">Legal</span>
              <Link to="/privacy" className="footer__col-link">
                Privacy Policy
              </Link>
              <Link to="/terms" className="footer__col-link">
                Terms &amp; Condition
              </Link>
              <a href="mailto:info@kore.ng" className="footer__col-link">
                Contact
              </a>
            </div>
          </nav>
        </div>

        {/* 3. Bottom Row (Divider, Copyright & Socials) */}
        <div className="footer__bottom-row">
          <div className="footer__socials" aria-label="Social links">
            {/* X */}
            <a
              href="https://x.com/koreagric"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="footer__social-icon"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M20 4L4 20" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/koreagric"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="footer__social-icon"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/koreagric"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="footer__social-icon"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* Threads */}
            <a
              href="https://threads.net/@koreagric"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="footer__social-icon"
              >
                <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12c0-3.327 1.625-6.273 4.127-8.085" />
                <path d="M12 18a6 6 0 1 1 6-6c0 1.657-1.343 3-3 3s-3-1.343-3-3" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/koreagric/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="footer__social-icon"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@koreagric"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="footer__social-icon"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
          <div className="footer__line"></div>
          <div className="footer__bottom-inner">
            <div className="footer__copyright-wrapper">
              <span className="footer__copyright">
                &copy; 2026 Korè. Kore Technology Limited | All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
