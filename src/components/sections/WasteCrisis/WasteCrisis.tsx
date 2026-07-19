import './WasteCrisis.css'

export default function WasteCrisis() {
  return (
    <section
      id="section-waste-crisis"
      className="waste-crisis"
      aria-label="The Invisible Waste Crisis"
    >
      <div className="waste-crisis__content">
        <div className="waste-crisis__header">
          <h2 className="waste-crisis__title">The Invisible Waste</h2>
          <p className="waste-crisis__body">
            West Africa loses{' '}
            <span className="waste-crisis__highlight">38 million tonnes</span>{' '}
            of produce annually. Most never reaches willing buyers because the{' '}
            <br /> structure is broken.
            <br />
            <br />
            Farmers can{"'"}t reach buyers. Buyers can{"'"}t find farmers.
            Middlemen extract all value. Consumers pay 300% <br /> markups.{' '}
            <span className="waste-crisis__bold">Everyone loses.</span>
          </p>
        </div>
        <div className="waste-crisis__stats">
          <div className="waste-crisis__stat-col">
            <div className="waste-crisis__stat-item">
              <span className="waste-crisis__stat-label">The inefficiency</span>
              <span className="waste-crisis__stat-value">38M tonnes</span>
              <span className="waste-crisis__stat-desc">Wasted annually</span>
            </div>
          </div>
          <div className="waste-crisis__stat-col">
            <div className="waste-crisis__stat-item">
              <span className="waste-crisis__stat-label">The impact</span>
              <span className="waste-crisis__stat-value">67%</span>
              <span className="waste-crisis__stat-desc">
                Price markup from farm to table
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
