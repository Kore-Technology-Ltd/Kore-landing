import { useState, useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const prevSlide = useRef(0)

  const goToSlide = (index: number) => {
    if (index === currentSlide) return
    prevSlide.current = currentSlide
    setCurrentSlide(index)
    setAnimKey((k) => k + 1)
  }

  // Detect mobile viewports
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Autoplay logic - switch slide every 5 seconds (disabled on mobile)
  useEffect(() => {
    if (isMobile) {
      setCurrentSlide(0)
      return
    }
    const timer = setInterval(() => {
      goToSlide(currentSlide === 0 ? 1 : 0)
    }, 5000)
    return () => clearInterval(timer)
  }, [currentSlide, isMobile])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="hero" id="section-hero" aria-label="Hero Section">
      <div className="hero-section">
        {/* Carousel Viewport containing the slides */}
        <div className="hero-carousel-container">
          <div
            className="hero-carousel-track"
            style={{ transform: `translateX(-${currentSlide * 50}%)` }}
          >
            {/* Slide 1 */}
            <div
              className={`hero-slide-item${currentSlide === 0 ? ' is-entering' : ''}`}
              key={currentSlide === 0 ? animKey : undefined}
            >
              <div className="hero-slide-content">
                {/* Left Column Content (Text and Buttons) */}
                <div className="frame-4456">
                  <div className="frame-4455">
                    <h1 className="stop-food-waste-start-direct-trade">
                      Stop Food Waste
                      <br />
                      Start Direct Trade
                    </h1>
                    <p className="hero-description">
                      Korè connects farmers directly to restaurants,
                      wholesalers, <br /> and households. No middlemen.
                      Real-time freshness labeling.
                      <br /> Transparent pricing. Building West Africa's most
                      trusted <br /> agricultural marketplace.
                    </p>
                  </div>
                  <div className="frame-4454">
                    <button
                      className="frame-4544 korre-clickable"
                      onClick={() => scrollToSection('section-waitlist')}
                      type="button"
                    >
                      <div className="frame-4451">
                        <span className="join-waitlist">Join Waitlist</span>
                      </div>
                    </button>
                    <button
                      className="frame-45442 korre-clickable"
                      onClick={() => scrollToSection('section-story')}
                      type="button"
                    >
                      <div className="frame-4451">
                        <span className="see-our-story">See Our Story</span>
                      </div>
                    </button>
                  </div>
                  <div className="hero-features-mobile-stat-in-card">
                    <span className="hero-features-mobile-stat-num">38M</span>
                    <span className="hero-features-mobile-stat-label">
                      Tonnes wasted annually
                    </span>
                  </div>
                </div>

                {/* Right Column Content (Collage / Mockup SVG) */}
                <img
                  className="frame-4449"
                  src="/images/hero-graphic.svg"
                  alt="Kore agricultural platform mockup collage"
                />
              </div>
            </div>

            {/* Slide 2: Step Flow Diagram */}
            <div
              className={`hero-slide-item hero-slide-item--flow${currentSlide === 1 ? ' is-entering' : ''}`}
              key={currentSlide === 1 ? animKey : undefined}
            >
              <div className="hero-slide-content">
                {/* Left Column Content (Text and Buttons) */}
                <div className="frame-4456">
                  <div className="frame-4455 kor-flow-header">
                    <div className="the-kor-flow">The Korè Flow</div>
                    <div className="kor-flow-container">
                      <span className="kor-flow-intro">
                        Four simple steps to connect farm to table
                      </span>
                      <ul className="kor-flow-steps-list">
                        <li>
                          <span className="kor-flow-step-title">Step 1: </span>
                          <span className="kor-flow-step-desc">
                            Join the Korè platform. Farmers, wholesalers, and
                            buyers register with location data and business
                            details.
                          </span>
                        </li>
                        <li>
                          <span className="kor-flow-step-title">Step 2: </span>
                          <span className="kor-flow-step-desc">
                            Farmers list available produce with quantity, grade,
                            and freshness status. Buyers discover nearby
                            suppliers instantly.
                          </span>
                        </li>
                        <li>
                          <span className="kor-flow-step-title">Step 3: </span>
                          <span className="kor-flow-step-desc">
                            Direct communication between buyers and sellers.
                            Place orders with transparent pricing and delivery
                            terms.
                          </span>
                        </li>
                        <li>
                          <span className="kor-flow-step-title">Step 4: </span>
                          <span className="kor-flow-step-desc">
                            Escrow payment processing. On-delivery quality
                            verification. Funds released upon confirmation.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="frame-4454">
                    <button
                      className="frame-4544 korre-clickable"
                      onClick={() => scrollToSection('section-waitlist')}
                      type="button"
                    >
                      <div className="frame-4451">
                        <span className="join-waitlist">Join Waitlist</span>
                      </div>
                    </button>
                    <button
                      className="frame-45442 korre-clickable"
                      onClick={() => scrollToSection('section-story')}
                      type="button"
                    >
                      <div className="frame-4451">
                        <span className="see-our-story">See Our Story</span>
                      </div>
                    </button>
                  </div>
                </div>
                <img
                  className="frame-4479-1"
                  src="/images/hero-graphic-2.svg"
                  alt="Step flow diagram collage"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Navigation Indicators (Golden Active Dot in the middle) */}
        <div className="hero-carousel-dots">
          <button
            className={`hero-carousel-dot ${currentSlide === 0 ? 'is-active' : ''}`}
            onClick={() => goToSlide(0)}
            aria-label="Go to Slide 1"
          />
          <button
            className={`hero-carousel-dot ${currentSlide === 1 ? 'is-active' : ''}`}
            onClick={() => goToSlide(1)}
            aria-label="Go to Slide 2"
          />
        </div>

        {/* Bottom Features Bar (Fixed at the bottom of the hero canvas, untouched) */}
        <div className="frame-4669">
          <div className="hero-features-mobile-stat">
            <span className="hero-features-mobile-stat-num">38M</span>
            <span className="hero-features-mobile-stat-label">
              Tonnes wasted annually
            </span>
          </div>
          <div className="frame-4462">
            {/* Feature 1 */}
            <div className="frame-4459">
              <div className="frame-4461">
                <div className="frame-4460">
                  <img
                    className="mi-location"
                    src="/images/icon-location.svg"
                    alt=""
                  />
                </div>
                <div className="frame-44592">
                  <div className="feature-title">Location First Discovery</div>
                  <div className="feature-desc">
                    Buyers see suppliers within relevant radius for peak
                    freshness and reduced logistics. Direct proximity means
                    fresher produce and lower transportation costs.
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="frame-4467">
              <div className="frame-4461">
                <div className="frame-4460">
                  <img
                    className="meteor-icons-leaf"
                    src="/images/icon-leaf.svg"
                    alt=""
                  />
                </div>
                <div className="frame-44592">
                  <div className="feature-title">Freshness Labeling System</div>
                  <div className="feature-desc">
                    Four-status transparency: Fresh, Normal, Urgent, Clearance.
                    Prevent spoilage through real-time status updates and smart
                    pricing tiers.
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="frame-4468">
              <div className="frame-4461">
                <div className="frame-4460">
                  <img
                    className="uil-lock"
                    src="/images/icon-lock.svg"
                    alt=""
                  />
                </div>
                <div className="frame-44592">
                  <div className="feature-title">Trust-First Escrow</div>
                  <div className="feature-desc">
                    Secure payment holding, released only on confirmed delivery.
                    Protects both buyers and sellers while building platform
                    reputation.
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="frame-4469">
              <div className="frame-4461">
                <div className="frame-4460">
                  <img
                    className="wordpress-people"
                    src="/images/icon-community.svg"
                    alt=""
                  />
                </div>
                <div className="frame-44592">
                  <div className="feature-title">Dual-Segment Model</div>
                  <div className="feature-desc">
                    B2B Bulk tier for hotels and restaurants. B2C Retail tier
                    for households. Flexible MOQs meet different buyer needs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
