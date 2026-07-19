import './Story.css'

export default function Story() {
  return (
    <section
      className="story section"
      id="section-story"
      aria-label="Our story"
    >
      <div className="container">
        <div className="story__grid">
          {/* Adeyemi */}
          <div className="story__pair">
            <div className="story__content">
              <div className="story__text-group">
                <span className="story__title">
                  Meet Adeyemi: A Farmer Without a Market
                </span>
                <span className="story__body">
                  Every morning, Adeyemi wakes at 6 AM to tend his vegetable
                  farm. He grows premium tomatoes, peppers, and leafy greens.
                  But by midday, He{"'"}s sitting in the market square hoping
                  someone or anyone will buy at whatever price he can get.
                  <br />
                  <br />
                  "I have no direct connection to restaurants or bulk buyers. I
                  can{"'"}t travel to find them. My produce sits and wilts while
                  I lose 30-40% to waste," Ade says.
                </span>
              </div>
              <div className="story__stat">
                <span className="story__stat-number">40%</span>
                <div className="story__stat-labels">
                  <span className="story__stat-label-bold">
                    Ade looses to spoilage
                  </span>
                  <span className="story__stat-label-light">
                    Every harvest week
                  </span>
                </div>
              </div>
            </div>
            <div
              className="story__image"
              role="img"
              aria-label="Adeyemi, a Nigerian farmer"
            />
          </div>

          {/* Kofi */}
          <div className="story__pair story__pair--reverse">
            <div className="story__content">
              <div className="story__text-group">
                <span className="story__title">
                  Meet Kofi: A Chef Searching for Freshness
                </span>
                <span className="story__body">
                  Kofi runs a popular restaurant in Lagos. He sources produce
                  from three different middlemen because he can{"'"}t find
                  consistent, fresh suppliers. His tomatoes come 3 days old. His
                  lettuce wilts by dinner service.
                  <br />
                  <br />
                  "I don{"'"}t know where my ingredients come from. I can{"'"}t
                  verify freshness. I pay premium prices and still get mediocre
                  quality," Kofi explains in frustration.
                </span>
              </div>
              <div className="story__stat">
                <span className="story__stat-number">3</span>
                <div className="story__stat-labels story__stat-labels--kofi">
                  <span className="story__stat-label-bold story__stat-label-bold--kofi">
                    Middlemen to find fresh produce
                  </span>
                  <span className="story__stat-label-light story__stat-label-light--kofi">
                    Still no guarantee of quality
                  </span>
                </div>
              </div>
            </div>
            <div
              className="story__image story__image--kofi"
              role="img"
              aria-label="Kofi, a restaurant chef"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
