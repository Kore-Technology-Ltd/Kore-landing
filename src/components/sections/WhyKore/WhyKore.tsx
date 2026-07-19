import { useState, useEffect } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import './WhyKore.css'

export default function WhyKore() {
  const [scale, setScale] = useState(1)
  const reveal = useScrollReveal()

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      if (w < 1240) {
        setScale((w * 0.92) / 1205)
      } else {
        setScale(1)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section
      ref={reveal.ref}
      id="section-comparison"
      className={`comparison-section ${reveal.className}`}
      aria-label="Why Choose Korè"
    >
      <div
        className="comparison-grid-wrapper"
        style={{
          height: `${476 * scale}px`,
          width: '100%',
          overflow: 'hidden',
          marginTop: scale === 1 ? '40px' : '0px',
          position: 'relative'
        }}
      >
        <div
          className="comparison-grid"
          style={{
            transform: `translateX(-50%) scale(${scale})`,
            transformOrigin: 'top center',
            width: '1205px',
            height: '476px',
            position: 'absolute',
            left: '50%'
          }}
        >
          <svg
            width="756"
            height="828"
            viewBox="0 0 756 828"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="none"
            className="comparison-grid__bg-svg"
          >
            <g>
              <path
                d="M756 0L754.7504 357.096 2.4992 663 0 317.1412 756 0Z"
                className="comparison-grid__bg-path-1"
              />
              <path
                d="M756 77L754.7504 434.096 2.4992 740 0 394.1412 756 77Z"
                className="comparison-grid__bg-path-2"
              />
              <path
                d="M756 165L754.7504 522.096 2.4992 828 0 482.1412 756 165Z"
                className="comparison-grid__bg-path-3"
              />
            </g>
          </svg>

          {/* Column 1: Features */}
          <div className="comparison-grid__col comparison-grid__col--features">
            <div className="comparison-grid__cell--header">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--feature-name">
                  Feature
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--feature-name">
                  Direct Buyer Connection
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--feature-name">
                  Real-time Freshness Info
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--feature-name">
                  Transparent Pricing
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--feature-name">
                  Escrow Protection
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--feature-name">
                  Location-based Discovery
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--feature-name">
                  Middleman Fee
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Traditional Market */}
          <div className="comparison-grid__col comparison-grid__col--traditional">
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--traditional-header">
                  Traditional Market
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--traditional-val">
                  No
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--traditional-val">
                  No
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--traditional-val">
                  No
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--traditional-val">
                  No
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--traditional-val">
                  No
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--traditional-val">
                  15-25%
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Korè */}
          <div className="comparison-grid__col comparison-grid__col--kore">
            <div className="comparison-grid__cell--header">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--kore-header">
                  Korè
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--kore-val">
                  Yes
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--kore-val">
                  Yes
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--kore-val">
                  Yes
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--kore-val">
                  Yes
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--kore-val">
                  Yes
                </span>
              </div>
            </div>
            <div className="comparison-grid__cell">
              <div className="comparison-grid__inner-container">
                <span className="comparison-grid__text comparison-grid__text--kore-val">
                  0%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
