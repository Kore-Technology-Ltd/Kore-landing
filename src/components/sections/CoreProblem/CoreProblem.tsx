import { useScrollReveal } from '@/hooks/useScrollReveal'
import './CoreProblem.css'

export default function CoreProblem() {
  const reveal = useScrollReveal()

  return (
    <section
      ref={reveal.ref}
      id="section-core-problem"
      className={`core-problem ${reveal.className}`}
      aria-label="The Core Problem"
    >
      <img
        className="core-problem__bg-image"
        src="/images/traditional-supply-chain.png"
        alt="Decorative background illustration"
      />
      <div className="core-problem__content">
        <img
          className="core-problem__image"
          src="/images/kore-supply-chain.png"
          alt="The Core Problem Illustration"
        />
        <div className="core-problem__text-col">
          <div className="core-problem__header">
            <h2 className="core-problem__title">The Core Problem</h2>
            <p className="core-problem__desc">
              Farmers grow quality produce but lack reliable buyers. Households
              and businesses need fresh supply but struggle to find trustworthy
              sources. Wholesalers operate in information silos, unable to
              optimize distribution. This fragmentation wastes millions in lost
              produce, inflated prices, and missed economic opportunity.
              <br />
              <br />
              <span className="core-problem__desc-bold">
                Korè solves this
              </span>{' '}
              by connecting the entire agricultural value chain through
              location-first discovery, transparent freshness standards, and
              trust-backed transactions.
            </p>
          </div>
          <div className="core-problem__stat-row">
            <span className="core-problem__stat-number">38M</span>
            <div className="core-problem__stat-labels">
              <span className="core-problem__stat-title">
                Tonnes wasted annually
              </span>
              <span className="core-problem__stat-sub">
                Influencing food shortages
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
