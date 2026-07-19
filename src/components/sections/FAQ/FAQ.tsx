import './FAQ.css'
import FAQItem from '@/components/FAQItem'
import { useState, useCallback } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }, [])

  return (
    <section
      className="faq"
      id="section-faq"
      aria-label="Frequently asked questions"
    >
      {/* 1. Header Area */}
      <div className="faq__header">
        <h2 className="faq__title">Frequently Asked Questions</h2>
        <p className="faq__subtitle">
          Everything you need to know about Korè before launch
        </p>
      </div>

      {/* 2. Accordion Items List */}
      <div className="faq__list" role="list">
        <FAQItem
          question="When is Korè launching?"
          answer="Korè is targeting a Q3 2026 launch, starting in Ibadan (Oyo State) as our pilot city before expanding to Lagos and Ogun. Sign up on the waitlist to be notified the moment we go live."
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
        />
        <FAQItem
          question="How much does it cost to use Korè?"
          answer="Joining and browsing Korè is free for all users. Korè earns a small transaction commission (5–15%) on successfully completed orders, only when you sell. There are no upfront fees."
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
        />
        <FAQItem
          question="How do i know the produce is actually fresh?"
          answer="Every listing on Korè carries a mandatory freshness label (Fresh, Normal, Urgent, or Clearance) set by the supplier and verified by our Customer Service Agents. Buyers can also leave verified reviews after each confirmed delivery."
          isOpen={openIndex === 2}
          onToggle={() => handleToggle(2)}
        />
        <FAQItem
          question="What if i want to buy small quantities?"
          answer="Korè supports both B2B bulk orders and B2C retail orders. Retail buyers get reduced minimum order quantities (e.g. 500g, 1 unit, 1 bunch). The platform may also aggregate small orders on shared delivery routes to keep costs manageable."
          isOpen={openIndex === 3}
          onToggle={() => handleToggle(3)}
        />
        <FAQItem
          question="Is my payment protected?"
          answer="Yes. All payments on Korè are held in escrow. The supplier only receives funds after you confirm delivery. If there's a quality dispute, our Customer Service team mediates with a clear SLA."
          isOpen={openIndex === 4}
          onToggle={() => handleToggle(4)}
        />
        <FAQItem
          question="How does the location first discovery work?"
          answer="When you sign up, you set your delivery city and LGA. Your marketplace feed then shows only suppliers within a relevant geographic radius, reducing logistics complexity and improving freshness guarantees."
          isOpen={openIndex === 5}
          onToggle={() => handleToggle(5)}
        />
        <FAQItem
          question="Can i sell to both restaurants and households?"
          answer="Yes. Suppliers can configure their store to serve B2B buyers (restaurants, hotels, processors), B2C buyers (households, food vendors), or both, with separate MOQ settings for each tier."
          isOpen={openIndex === 6}
          onToggle={() => handleToggle(6)}
        />
        <FAQItem
          question="What if there’s a dispute?"
          answer="Buyers can raise a dispute with photo evidence within a defined window after delivery. Our Customer Service Agents handle all disputes with a published SLA. Suppliers on Korè are held to a quality and reliability score, where three unresolved strikes trigger a suspension review."
          isOpen={openIndex === 7}
          onToggle={() => handleToggle(7)}
        />
      </div>

      {/* 3. CTA contact */}
      <div className="faq__cta">
        {/* Background Decorative SVG */}
        <svg
          className="faq__cta-bg"
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

        <div className="faq__cta-content">
          <div className="faq__cta-header">
            <span className="faq__cta-title">Still have questions?</span>
            <span className="faq__cta-subtitle">
              Reach out to our team on WhatsApp. We're happy to answer any
              questions about Korè.
            </span>
          </div>
          <a
            href="https://wa.me/2349021204151"
            target="_blank"
            rel="noopener noreferrer"
            className="faq__cta-btn"
          >
            <svg
              className="faq__cta-btn-icon"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                fill="#fff"
              />
              <path
                d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.117 1.528 5.845L.057 23.5l5.825-1.527A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.006-1.372l-.36-.214-3.714.974.993-3.63-.234-.373A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"
                fill="#fff"
              />
            </svg>
            <span className="faq__cta-btn-text">WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  )
}
