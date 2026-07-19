import { useState, useEffect } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import './HowItWorks.css'

export default function HowItWorks() {
  const [scale, setScale] = useState(1)
  const reveal = useScrollReveal()

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      if (w < 1280) {
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
      id="section-how-it-works"
      className={`how-kore-works ${reveal.className}`}
    >
      <div className="how-kore-works__header">
        <h2 className="how-kore-works__title">How Korè Works</h2>
        <p className="how-kore-works__subtitle">
          Four core innovations powering transparent, efficient agricultural
          trade
        </p>
      </div>

      <img
        className="how-kore-works__image"
        src="/images/how-kore-works-diagram.png"
        alt="How Korè Works diagram showing the four core innovations"
      />

      <div
        style={{
          height: `${500 * scale}px`,
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          marginTop: scale === 1 ? '95px' : '32px'
        }}
      >
        <div
          className="how-kore-works__cards-grid"
          style={{
            transform: `translateX(-50%) scale(${scale})`,
            transformOrigin: 'top center',
            width: '1205px',
            height: '500px',
            position: 'absolute',
            left: '50%',
            margin: '0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            columnGap: '61px',
            alignItems: 'center'
          }}
        >
          {/* Card 1: For Farmers */}
          <div className="how-kore-works__card how-kore-works__card--farmers">
            <div className="how-kore-works__card-content">
              <div className="how-kore-works__card-text-box">
                <span className="how-kore-works__card-title">For Farmers</span>
                <p className="how-kore-works__card-desc">
                  Direct market access, guaranteed buyers, real-time pricing
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: For Buyers */}
          <div className="how-kore-works__card how-kore-works__card--buyers">
            <div className="how-kore-works__card-content">
              <div className="how-kore-works__card-text-box">
                <span className="how-kore-works__card-title">For Buyers</span>
                <p className="how-kore-works__card-desc">
                  Fresh supply, transparent quality, fair pricing
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: For Society */}
          <div className="how-kore-works__card how-kore-works__card--society">
            <div className="how-kore-works__card-content">
              <div className="how-kore-works__card-text-box">
                <span className="how-kore-works__card-title">For Society</span>
                <p className="how-kore-works__card-desc">
                  Reduced waste, stable food prices, economic growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
