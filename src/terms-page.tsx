import { useState } from 'react'

export default function TermsPage() {
  const effectiveDate = '1 July 2026'
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

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="legal-page-wrapper">
      {/* Header / Navbar */}
      <header className="legal-header">
        <div className="legal-header-container">
          <a href="/" className="legal-logo-link">
            <img
              src="/images/035b322f53fa89191732a6b2a468167880c6b99b.png"
              alt="Korè Logo"
              className="legal-logo-img"
            />
          </a>
          <a href="/" className="legal-back-btn">
            ← Back to Home
          </a>
        </div>
      </header>

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
          <span>📅 Effective Date: {effectiveDate}</span>
          <span>•</span>
          <span>📄 Version: 2.0</span>
          <span>•</span>
          <span>🇳🇬 Governing Law: Federal Republic of Nigeria</span>
        </div>
      </section>

      {/* Main Body Container (Two columns) */}
      <div className="legal-body-container">
        {/* Sticky Sidebar Navigation */}
        <aside className="legal-sidebar">
          <div className="legal-sidebar-sticky">
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
          </div>
        </aside>

        {/* Document Content */}
        <main className="legal-content-card">
          <div className="legal-intro-box">
            These Terms and Conditions ("Terms") constitute a legally binding
            agreement between you ("User," "Buyer," "Seller," or "you") and{' '}
            <strong>IKORE LABS LTD</strong> (RC Number: 9614851), a private
            company limited by shares incorporated in the Federal Republic of
            Nigeria under the Companies and Allied Matters Act (CAMA) 2020,
            trading as <strong>Korè</strong> and operating the digital
            marketplace platform at <strong>kore.ng</strong> ("the Platform").
            By accessing or using the Platform in any way, you confirm that you
            have read, understood, and agree to be bound by these Terms in their
            entirety. If you do not agree, you must immediately cease using the
            Platform.
          </div>

          {/* Section 1 */}
          <section id="sec-1" className="legal-section-block">
            <h2 className="legal-section-title">1. About the Platform</h2>
            <p>
              Korè is a digital marketplace platform operated by IKORE LABS LTD
              that connects farmers, food producers, wholesalers, traders, and
              small businesses ("Sellers") with bulk buyers, households, and
              consumers ("Buyers") across Nigeria. The Platform provides
              infrastructure for product discovery, listings, communications,
              escrow-secured payments, and logistics coordination.
            </p>
            <p>
              Korè operates as an intermediary marketplace and is not a party to
              any transaction between Buyers and Sellers. IKORE LABS LTD does
              not own, store, inspect, or handle any goods listed on the
              Platform. Responsibility for the accuracy of listings, quality of
              goods, and fulfilment of orders rests entirely with the respective
              Seller.
            </p>
          </section>

          {/* Section 2 */}
          <section id="sec-2" className="legal-section-block">
            <h2 className="legal-section-title">2. Eligibility</h2>
            <p>To use this Platform, you must:</p>
            <ul>
              <li>
                Be at least 18 years of age, or the age of majority in your
                jurisdiction;
              </li>
              <li>
                Be a legal resident or registered business entity in Nigeria or
                any jurisdiction where the Platform is accessible;
              </li>
              <li>
                Have the legal capacity to enter into binding contracts under
                Nigerian law;
              </li>
              <li>
                Not be prohibited from using the Platform under any applicable
                law or regulation; and
              </li>
              <li>
                For Sellers: hold any licences, permits, or regulatory approvals
                required for the sale of your products under Nigerian law,
                including but not limited to NAFDAC registration for food and
                consumable goods, and SON certification where applicable.
              </li>
            </ul>
            <p>
              By registering, you represent and warrant that all of the above
              conditions are met and will remain met throughout your use of the
              Platform.
            </p>
          </section>

          {/* Section 3 */}
          <section id="sec-3" className="legal-section-block">
            <h2 className="legal-section-title">3. Account Registration</h2>
            <p>
              To access the full features of the Platform, you must create an
              account. When registering, you agree to:
            </p>
            <ul>
              <li>
                Provide accurate, current, and complete information, including
                your legal name, contact details, and where applicable, your CAC
                registration number or NAFDAC registration;
              </li>
              <li>Keep your account information updated at all times;</li>
              <li>
                Maintain the confidentiality of your password and account
                credentials;
              </li>
              <li>
                Accept full responsibility for all activities conducted under
                your account; and
              </li>
              <li>
                Notify Korè immediately at <strong>info@kore.ng</strong> if you
                suspect any unauthorised access to your account.
              </li>
            </ul>
            <p>
              Korè reserves the right to verify the identity and credentials of
              any User and to suspend or terminate accounts where information
              provided is found to be false, misleading, or incomplete.
            </p>
          </section>

          {/* Section 4 */}
          <section id="sec-4" className="legal-section-block">
            <h2 className="legal-section-title">4. Seller Obligations</h2>
            <p>As a Seller on the Korè Platform, you agree to the following:</p>
            <ul>
              <li>
                <strong>Accurate Listings:</strong> All product listings must
                accurately describe the goods being sold, including quality,
                quantity, weight, condition, freshness date (where applicable),
                price, and location. Misleading listings are strictly
                prohibited.
              </li>
              <li>
                <strong>Regulatory Compliance:</strong> You are solely
                responsible for ensuring that all goods you list comply with
                applicable Nigerian laws and regulations, including those
                administered by NAFDAC, SON, and the Federal Competition and
                Consumer Protection Commission (FCCPC).
              </li>
              <li>
                <strong>Prohibited Items:</strong> You must not list counterfeit
                goods, expired food products, unlicensed pharmaceuticals,
                controlled substances, stolen goods, weapons, or any product
                whose sale is prohibited under Nigerian law.
              </li>
              <li>
                <strong>Fulfilment:</strong> You are obligated to fulfil all
                confirmed orders in the condition, quantity, and timeframe
                described in your listing. Failure to fulfil a confirmed order
                may result in account suspension and may trigger the escrow
                dispute resolution process.
              </li>
              <li>
                <strong>Tax Obligations:</strong> You are solely responsible for
                declaring and paying all applicable taxes on income earned
                through the Platform, including Value Added Tax (VAT) where
                applicable, in accordance with the Federal Inland Revenue
                Service (FIRS) requirements.
              </li>
              <li>
                <strong>Verification:</strong> Korè may require Sellers to
                complete a verification process, including submission of a valid
                government-issued ID (NIN or BVN), business registration
                documents (CAC), and relevant product licences before listings
                are approved or made public.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="sec-5" className="legal-section-block">
            <h2 className="legal-section-title">5. Buyer Obligations</h2>
            <p>As a Buyer on the Korè Platform, you agree to:</p>
            <ul>
              <li>
                Review all product listings carefully before placing an order,
                including descriptions, prices, and Seller ratings;
              </li>
              <li>
                Make payment through the Platform's escrow system only and not
                conduct off-platform transactions with Sellers;
              </li>
              <li>
                Confirm receipt of goods promptly and honestly upon delivery;
                and
              </li>
              <li>
                Raise any disputes regarding quality, quantity, or non-delivery
                within 48 hours of the scheduled delivery date through the
                Platform's dispute resolution process.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="sec-6" className="legal-section-block">
            <h2 className="legal-section-title">
              6. Payments and Escrow System
            </h2>
            <p>
              All transactions on the Korè Platform are processed through a
              third-party escrow payment system integrated with licensed
              Nigerian payment processors (including Paystack and/or
              Flutterwave, as applicable).
            </p>
            <ul>
              <li>
                <strong>Escrow Hold:</strong> When a Buyer places an order and
                makes payment, funds are held in escrow and are not released to
                the Seller until the Buyer confirms receipt and satisfaction
                with the goods, or until the dispute resolution process
                concludes in the Seller's favour.
              </li>
              <li>
                <strong>Release of Funds:</strong> Funds are released to the
                Seller upon: (a) Buyer confirmation of delivery; or (b) expiry
                of the Buyer confirmation window (48 hours from confirmed
                delivery date) without a dispute being raised; or (c) resolution
                of a dispute in the Seller's favour.
              </li>
              <li>
                <strong>Refunds:</strong> Refunds to Buyers are processed where:
                (a) a Seller fails to fulfil a confirmed order; (b) goods
                received are materially different from the listing; or (c) a
                dispute is resolved in the Buyer's favour. Refunds are processed
                within 3–7 business days to the original payment method.
              </li>
              <li>
                <strong>Service Fee:</strong> Korè charges a service fee on each
                completed transaction. The current fee structure is displayed on
                the Platform and may be updated from time to time with notice to
                Sellers.
              </li>
              <li>
                <strong>Off-Platform Transactions:</strong> Conducting
                transactions outside the Platform to circumvent the escrow
                system is a material breach of these Terms and may result in
                immediate account termination. Korè accepts no liability for
                disputes arising from off-platform transactions.
              </li>
              <li>
                <strong>Currency:</strong> All transactions are denominated in
                Nigerian Naira (₦) unless otherwise specified on the Platform.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="sec-7" className="legal-section-block">
            <h2 className="legal-section-title">
              7. Dispute Resolution — Transactions
            </h2>
            <p>
              Where a dispute arises between a Buyer and a Seller regarding a
              transaction, the following process applies:
            </p>
            <ol>
              <li>
                <strong>Initiation:</strong> The disputing party must raise a
                dispute through the Platform within 48 hours of the delivery
                date by submitting evidence (photos, messages, delivery
                receipts).
              </li>
              <li>
                <strong>Korè Review:</strong> Our support team will review the
                evidence submitted by both parties within 3–5 business days.
              </li>
              <li>
                <strong>Decision:</strong> Korè will issue a resolution
                decision. Funds held in escrow will be released or refunded in
                accordance with the decision.
              </li>
              <li>
                <strong>Appeal:</strong> Either party may appeal the decision
                within 5 business days by emailing{' '}
                <strong>disputes@kore.ng</strong> with additional supporting
                evidence.
              </li>
              <li>
                <strong>Final Resolution:</strong> Where an appeal cannot be
                resolved internally, the matter may be referred to the Consumer
                Protection Council of Nigeria or arbitration under the
                Arbitration and Mediation Act 2023.
              </li>
            </ol>
          </section>

          {/* Section 8 */}
          <section id="sec-8" className="legal-section-block">
            <h2 className="legal-section-title">8. Prohibited Conduct</h2>
            <p>You must not, under any circumstances:</p>
            <ul>
              <li>
                Use the Platform for any unlawful purpose or in violation of any
                Nigerian or applicable international law;
              </li>
              <li>
                List, sell, or purchase prohibited, counterfeit, expired, or
                stolen goods;
              </li>
              <li>
                Engage in price manipulation, shill bidding, or any form of
                market manipulation;
              </li>
              <li>
                Impersonate any person or entity, or misrepresent your
                affiliation with any person or entity;
              </li>
              <li>
                Attempt to gain unauthorised access to any part of the Platform
                or any other User's account;
              </li>
              <li>Transmit any virus, malware, or other harmful code;</li>
              <li>Harass, threaten, or abuse any other User;</li>
              <li>
                Use automated tools, bots, or scrapers to access or extract data
                from the Platform without written permission; or
              </li>
              <li>
                Circumvent or manipulate the Platform's rating, review, or
                verification systems.
              </li>
            </ul>
            <p>
              Violation of any prohibited conduct provision may result in
              immediate account suspension or termination, forfeiture of funds
              held in escrow (pending investigation), and where applicable,
              referral to law enforcement authorities.
            </p>
          </section>

          {/* Section 9 */}
          <section id="sec-9" className="legal-section-block">
            <h2 className="legal-section-title">9. Intellectual Property</h2>
            <p>
              All content on the Platform — including the Korè name, logo, brand
              identity, software, product architecture, text, graphics, and
              database compilations — is the intellectual property of IKORE LABS
              LTD and is protected under Nigerian copyright law and applicable
              international treaties.
            </p>
            <p>
              By submitting any content to the Platform (including product
              photos, descriptions, or reviews), you grant IKORE LABS LTD a
              non-exclusive, royalty-free, worldwide licence to use, display,
              reproduce, and distribute that content for the purposes of
              operating and promoting the Platform.
            </p>
            <p>
              You may not copy, reproduce, distribute, modify, or create
              derivative works from any Platform content without the prior
              written consent of IKORE LABS LTD.
            </p>
          </section>

          {/* Section 10 */}
          <section id="sec-10" className="legal-section-block">
            <h2 className="legal-section-title">10. Ratings and Reviews</h2>
            <p>
              Users may leave honest ratings and reviews of Sellers and
              transactions. By submitting a review, you confirm that:
            </p>
            <ul>
              <li>The review is based on your genuine experience;</li>
              <li>
                The review does not contain false, defamatory, or misleading
                statements;
              </li>
              <li>
                You are not submitting the review in exchange for any benefit or
                at the request of the Seller; and
              </li>
              <li>
                The review does not contain personal or sensitive information
                about any individual.
              </li>
            </ul>
            <p>
              Korè reserves the right to remove reviews that violate these
              requirements or the Platform's community standards.
            </p>
          </section>

          {/* Section 11 */}
          <section id="sec-11" className="legal-section-block">
            <h2 className="legal-section-title">11. Platform Availability</h2>
            <p>
              Korè strives to maintain continuous availability of the Platform
              but does not guarantee uninterrupted access. The Platform may be
              temporarily unavailable due to scheduled maintenance, technical
              issues, force majeure events (including power outages, internet
              infrastructure failures, civil unrest, or acts of God), or
              decisions by IKORE LABS LTD. We will endeavour to provide advance
              notice of scheduled downtime where reasonably practicable.
            </p>
          </section>

          {/* Section 12 */}
          <section id="sec-12" className="legal-section-block">
            <h2 className="legal-section-title">12. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by Nigerian law, IKORE LABS LTD
              shall not be liable for:
            </p>
            <ul>
              <li>
                Any dispute between a Buyer and a Seller regarding the quality,
                quantity, or delivery of goods;
              </li>
              <li>
                Any indirect, incidental, special, consequential, or punitive
                damages arising from your use of the Platform;
              </li>
              <li>
                Loss of profits, revenue, data, goodwill, or business
                opportunities;
              </li>
              <li>
                Any losses arising from reliance on product listings,
                descriptions, or Seller representations; or
              </li>
              <li>
                Any losses resulting from third-party payment processor
                failures, network outages, or force majeure events.
              </li>
            </ul>
            <p>
              Where liability cannot be excluded by law, the aggregate liability
              of IKORE LABS LTD to any User shall not exceed the total service
              fees paid by that User to Korè in the three months preceding the
              event giving rise to the claim.
            </p>
          </section>

          {/* Section 13 */}
          <section id="sec-13" className="legal-section-block">
            <h2 className="legal-section-title">13. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless IKORE LABS LTD,
              its directors (Toluwanimi Durojaiye Timothy and Samuel Ayomide
              Adeyemi), employees, agents, and affiliates from and against any
              claims, liabilities, damages, losses, and expenses (including
              reasonable legal fees) arising out of or in any way connected
              with: (a) your use of the Platform; (b) your breach of these
              Terms; (c) your listing, sale, or purchase of any goods; (d) your
              violation of any applicable law or regulation; or (e) any claim by
              a third party arising from your conduct on the Platform.
            </p>
          </section>

          {/* Section 14 */}
          <section id="sec-14" className="legal-section-block">
            <h2 className="legal-section-title">
              14. Termination and Suspension
            </h2>
            <p>
              Korè reserves the right to suspend or permanently terminate your
              account, with or without notice, for any of the following reasons:
            </p>
            <ul>
              <li>Breach of any provision of these Terms;</li>
              <li>
                Submission of false or misleading information during
                registration or listing;
              </li>
              <li>Engagement in prohibited conduct as defined in Section 8;</li>
              <li>Repeated failure to fulfil confirmed orders (Sellers);</li>
              <li>Chargebacks or payment fraud; or</li>
              <li>
                Any conduct that Korè reasonably determines to be harmful to
                Users, the Platform, or IKORE LABS LTD.
              </li>
            </ul>
            <p>
              Upon termination, any funds held in escrow for disputed
              transactions will be resolved in accordance with Section 7. All
              licences granted to you under these Terms will immediately
              terminate.
            </p>
          </section>

          {/* Section 15 */}
          <section id="sec-15" className="legal-section-block">
            <h2 className="legal-section-title">15. Modifications to Terms</h2>
            <p>
              IKORE LABS LTD reserves the right to update or modify these Terms
              at any time. Where changes are material, we will notify registered
              Users via email or a prominent notice on the Platform at least 14
              days before the changes take effect. Your continued use of the
              Platform after the effective date of any updated Terms constitutes
              your acceptance of the revised Terms. If you do not agree to the
              revised Terms, you must cease using the Platform.
            </p>
          </section>

          {/* Section 16 */}
          <section id="sec-16" className="legal-section-block">
            <h2 className="legal-section-title">
              16. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the Federal Republic of Nigeria, including the Companies
              and Allied Matters Act (CAMA) 2020, the Federal Competition and
              Consumer Protection Act (FCCPA) 2018, and the Nigeria Data
              Protection Act (NDPA) 2023. Any dispute arising under these Terms
              that cannot be resolved informally shall be submitted to binding
              arbitration under the Arbitration and Mediation Act 2023,
              administered by the Lagos Court of Arbitration, with the seat of
              arbitration in Lagos, Nigeria.
            </p>
          </section>

          {/* Section 17 */}
          <section id="sec-17" className="legal-section-block">
            <h2 className="legal-section-title">17. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid, illegal,
              or unenforceable under Nigerian law, the remaining provisions
              shall continue in full force and effect. The invalid provision
              shall be modified to the minimum extent necessary to make it
              enforceable.
            </p>
          </section>

          {/* Section 18 */}
          <section id="sec-18" className="legal-section-block">
            <h2 className="legal-section-title">18. Contact Information</h2>
            <p>
              For any questions, complaints, or legal notices regarding these
              Terms, please contact us:
            </p>
            <div className="legal-info-card">
              <div className="legal-info-card-title">
                IKORE LABS LTD (Trading as Korè)
              </div>
              <div className="legal-info-card-text">
                RC Number: 9614851
                <br />
                Registered in Nigeria under CAMA 2020
                <br />
                Address: 65, BQ Soweto UCH, Ibadan, Oyo State, Nigeria
                <br />
                📧 Legal: <a href="mailto:legal@kore.ng">legal@kore.ng</a>
                <br />
                📧 General: <a href="mailto:info@kore.ng">info@kore.ng</a>
                <br />
                📧 Disputes:{' '}
                <a href="mailto:disputes@kore.ng">disputes@kore.ng</a>
                <br />
                📱 WhatsApp:{' '}
                <a href="https://wa.me/2349021204151">+234 902 120 4151</a>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="legal-footer">
        <p style={{ margin: 0 }}>
          © 2026 Korè. Ikore Labs Limited | All rights reserved.
        </p>
        <div className="legal-footer-links">
          <a href="/privacy" className="legal-footer-link">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="/terms" className="legal-footer-link">
            Terms &amp; Conditions
          </a>
        </div>
      </footer>
    </div>
  )
}
