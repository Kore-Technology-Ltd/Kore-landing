import './HowItWorks.css'

export default function HowItWorks() {
  return (
    <section id="section-how-it-works" className="how-kore-works">
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

      <div className="how-kore-works__cards-grid">
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
    </section>
  )
}
