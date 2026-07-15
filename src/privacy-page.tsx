import { useState } from 'react';

export default function PrivacyPage() {
  const effectiveDate = "1 July 2026";
  const [activeSection, setActiveSection] = useState("sec-1");

  const sections = [
    { id: "sec-1", label: "1. Who We Are" },
    { id: "sec-2", label: "2. Data We Collect" },
    { id: "sec-3", label: "3. Lawful Basis" },
    { id: "sec-4", label: "4. How We Use Data" },
    { id: "sec-5", label: "5. Data Sharing" },
    { id: "sec-6", label: "6. Data Retention" },
    { id: "sec-7", label: "7. Your Rights" },
    { id: "sec-8", label: "8. Data Security" },
    { id: "sec-9", label: "9. Cookies & Tracking" },
    { id: "sec-10", label: "10. Children's Privacy" },
    { id: "sec-11", label: "11. Cross-Border Transfers" },
    { id: "sec-12", label: "12. Third-Party Links" },
    { id: "sec-13", label: "13. Marketing" },
    { id: "sec-14", label: "14. Policy Updates" },
    { id: "sec-15", label: "15. Contact & Complaints" }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="legal-page-wrapper">
      {/* Header / Navbar */}
      <header className="legal-header">
        <div className="legal-header-container">
          <a href="/" className="legal-logo-link">
            <img src="/images/035b322f53fa89191732a6b2a468167880c6b99b.png" alt="Korè Logo" className="legal-logo-img" />
          </a>
          <a href="/" className="legal-back-btn">
            ← Back to Home
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="legal-hero">
        <div className="legal-hero-decorations">
          {/* Subtle decorative background shapes */}
          <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10%" cy="20%" r="150" stroke="rgba(255,255,255,0.03)" strokeWidth="2" />
            <circle cx="90%" cy="80%" r="200" stroke="rgba(255,255,255,0.03)" strokeWidth="2" />
          </svg>
        </div>
        <div className="legal-hero-tag">Legal Document</div>
        <h1 className="legal-hero-title">Privacy Policy</h1>
        <div className="legal-hero-meta">
          <span>📅 Effective Date: {effectiveDate}</span>
          <span>•</span>
          <span>📄 Version: 2.0</span>
          <span>•</span>
          <span>🇳🇬 Compliant with: NDPA 2023 (Nigeria)</span>
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
                      style={{ border: 'none', background: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}
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
            This Privacy Policy ("Policy") describes how <strong>IKORE LABS LTD</strong> (RC Number: 9614851), trading as <strong>Korè</strong>, a company incorporated in Nigeria under CAMA 2020, collects, uses, stores, and protects your personal data when you use our digital marketplace platform at <strong>kore.ng</strong> ("the Platform"). This Policy is issued in compliance with the <strong>Nigeria Data Protection Act 2023 (NDPA)</strong> and the regulations of the <strong>Nigeria Data Protection Commission (NDPC)</strong>. By using the Platform, you consent to the collection and use of your personal data as described in this Policy.
          </div>

          {/* Section 1 */}
          <section id="sec-1" className="legal-section-block">
            <h2 className="legal-section-title">1. Who We Are (Data Controller)</h2>
            <p>
              For the purposes of the Nigeria Data Protection Act 2023, the Data Controller responsible for your personal data is:
            </p>
            <div className="legal-info-card">
              <div className="legal-info-card-title">IKORE LABS LTD (Trading as Korè)</div>
              <div className="legal-info-card-text">
                RC Number: 9614851<br />
                Address: 65, BQ Soweto UCH, Ibadan, Oyo State, Federal Republic of Nigeria<br />
                Data Protection Email: <a href="mailto:privacy@kore.ng">privacy@kore.ng</a>
              </div>
            </div>
            <p>
              We are registered with the Nigeria Data Protection Commission (NDPC) as a Data Controller. Our Data Protection Officer (DPO) can be reached at <a href="mailto:privacy@kore.ng">privacy@kore.ng</a>.
            </p>
          </section>

          {/* Section 2 */}
          <section id="sec-2" className="legal-section-block">
            <h2 className="legal-section-title">2. Personal Data We Collect</h2>
            <p>
              We collect personal data only where it is necessary for a legitimate purpose. The categories of personal data we collect include:
            </p>
            
            <div className="legal-sub-section">
              <h3 className="legal-sub-title">2.1 Data You Provide Directly</h3>
              <ul>
                <li>Full legal name and username;</li>
                <li>Email address and phone number (including WhatsApp number);</li>
                <li>Residential or business address;</li>
                <li>National Identification Number (NIN) or Bank Verification Number (BVN) — for Seller identity verification only;</li>
                <li>CAC business registration number (Sellers);</li>
                <li>Bank account details (for payment disbursement to Sellers);</li>
                <li>Product listings, descriptions, and photographs submitted by Sellers;</li>
                <li>Communications sent to us via email, WhatsApp, or the Platform's messaging system; and</li>
                <li>Dispute submissions, including photographs and written descriptions.</li>
              </ul>
            </div>

            <div className="legal-sub-section">
              <h3 className="legal-sub-title">2.2 Data Collected Automatically</h3>
              <ul>
                <li>IP address and approximate location;</li>
                <li>Device type, operating system, and browser information;</li>
                <li>Pages visited, time spent on the Platform, and click-through data;</li>
                <li>Transaction history (orders placed, completed, or disputed);</li>
                <li>Session identifiers and authentication tokens; and</li>
                <li>Cookies and similar tracking technologies (see Section 9).</li>
              </ul>
            </div>

            <div className="legal-sub-section">
              <h3 className="legal-sub-title">2.3 Data from Third Parties</h3>
              <ul>
                <li>Payment confirmation data from our payment processors (Paystack, Flutterwave);</li>
                <li>Delivery status data from logistics integration partners; and</li>
                <li>Identity verification results from third-party KYC providers.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec-3" className="legal-section-block">
            <h2 className="legal-section-title">3. Lawful Basis for Processing</h2>
            <p>
              Under the NDPA 2023, we process your personal data on the following lawful bases:
            </p>
            <ul>
              <li><strong>Contract Performance:</strong> Processing necessary to fulfil the contract between you and Korè (account creation, transaction processing, escrow management, dispute resolution).</li>
              <li><strong>Consent:</strong> Where you have freely given specific, informed, and unambiguous consent (e.g., marketing communications, optional analytics).</li>
              <li><strong>Legal Obligation:</strong> Where processing is required to comply with applicable Nigerian law (e.g., FIRS tax reporting, NDPC registration, EFCC/NFIU anti-money laundering requirements).</li>
              <li><strong>Legitimate Interests:</strong> Where necessary for our legitimate business interests (fraud prevention, Platform security, product improvement), provided these interests are not overridden by your rights and freedoms.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="sec-4" className="legal-section-block">
            <h2 className="legal-section-title">4. How We Use Your Personal Data</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul>
              <li><strong>Account Management:</strong> Creating, verifying, and maintaining your account;</li>
              <li><strong>Transaction Processing:</strong> Processing orders, managing escrow payments, disbursing funds to Sellers, and issuing refunds to Buyers;</li>
              <li><strong>Identity Verification:</strong> Verifying the identity and credentials of Sellers to maintain a trusted marketplace;</li>
              <li><strong>Dispute Resolution:</strong> Reviewing evidence and facilitating resolution of disputes between Buyers and Sellers;</li>
              <li><strong>Platform Improvement:</strong> Analysing usage data to improve features, performance, and user experience;</li>
              <li><strong>Communications:</strong> Sending transactional notifications (order confirmations, payment receipts, dispute updates) and — with your consent — promotional communications;</li>
              <li><strong>Security and Fraud Prevention:</strong> Detecting, investigating, and preventing fraudulent transactions, account takeovers, and prohibited conduct;</li>
              <li><strong>Legal Compliance:</strong> Meeting our obligations under Nigerian law, including FIRS tax reporting, anti-money laundering (AML) obligations under the Money Laundering Prevention and Prohibition Act 2022, and data protection compliance under the NDPA 2023; and</li>
              <li><strong>Customer Support:</strong> Responding to enquiries, complaints, and support requests.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="sec-5" className="legal-section-block">
            <h2 className="legal-section-title">5. Data Sharing and Third-Party Disclosure</h2>
            <p>
              We do not sell your personal data to any third party. We may share your personal data with the following categories of third parties only where necessary and on a need-to-know basis:
            </p>
            <ul>
              <li><strong>Payment Processors:</strong> Paystack and/or Flutterwave, for the processing of escrow payments, refunds, and disbursements. These processors are bound by their own privacy policies and applicable CBN regulations;</li>
              <li><strong>Logistics Partners:</strong> Third-party delivery companies integrated into the Platform, who receive the delivery address and order details necessary to complete a delivery;</li>
              <li><strong>Identity Verification Providers:</strong> Third-party KYC providers used to verify Seller identities, who receive only the minimum data necessary for verification;</li>
              <li><strong>Cloud Service Providers:</strong> Infrastructure providers (including Supabase and cloud hosting services) that host the Platform and its data, who process data under appropriate data processing agreements;</li>
              <li><strong>Legal and Regulatory Authorities:</strong> Where required by Nigerian law, court order, or regulatory authority (including NDPC, FIRS, EFCC, NFIU, or law enforcement), we may disclose personal data without prior notice to you; and</li>
              <li><strong>Professional Advisors:</strong> Legal counsel, accountants, and auditors, subject to professional confidentiality obligations.</li>
            </ul>
            <p>
              Where we share data with any third party acting as a Data Processor on our behalf, we ensure a data processing agreement is in place that requires them to protect your data in accordance with the NDPA 2023.
            </p>
          </section>

          {/* Section 6 */}
          <section id="sec-6" className="legal-section-block">
            <h2 className="legal-section-title">6. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by Nigerian law. Our standard retention periods are as follows:
            </p>
            <div className="legal-table-wrapper">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Data Category</th>
                    <th>Retention Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Account information</td>
                    <td>Duration of account + 3 years after closure</td>
                  </tr>
                  <tr>
                    <td>Transaction records</td>
                    <td>7 years (FIRS tax compliance requirement)</td>
                  </tr>
                  <tr>
                    <td>Payment data</td>
                    <td>5 years (CBN / AML compliance)</td>
                  </tr>
                  <tr>
                    <td>Dispute records</td>
                    <td>3 years from resolution date</td>
                  </tr>
                  <tr>
                    <td>Identity verification data</td>
                    <td>5 years from last transaction</td>
                  </tr>
                  <tr>
                    <td>Communications / support logs</td>
                    <td>2 years</td>
                  </tr>
                  <tr>
                    <td>Marketing consent records</td>
                    <td>Until consent is withdrawn + 1 year</td>
                  </tr>
                  <tr>
                    <td>Usage and analytics data</td>
                    <td>13 months (rolling)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              After the applicable retention period, your data will be securely deleted or anonymised so that it can no longer be associated with you.
            </p>
          </section>

          {/* Section 7 */}
          <section id="sec-7" className="legal-section-block">
            <h2 className="legal-section-title">7. Your Rights Under the NDPA 2023</h2>
            <p>
              Under the Nigeria Data Protection Act 2023, you have the following rights with respect to your personal data:
            </p>
            <ul>
              <li><strong>Right of Access:</strong> You may request a copy of all personal data we hold about you;</li>
              <li><strong>Right to Rectification:</strong> You may request that inaccurate or incomplete personal data be corrected;</li>
              <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> You may request deletion of your personal data, subject to our legal retention obligations;</li>
              <li><strong>Right to Restriction of Processing:</strong> You may request that we restrict the processing of your data in certain circumstances;</li>
              <li><strong>Right to Data Portability:</strong> You may request your personal data in a structured, commonly used, machine-readable format;</li>
              <li><strong>Right to Object:</strong> You may object to processing based on legitimate interests or for direct marketing purposes; and</li>
              <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw your consent at any time without affecting the lawfulness of prior processing.</li>
            </ul>
            <p>
              To exercise any of these rights, please submit a written request to <a href="mailto:privacy@kore.ng">privacy@kore.ng</a>. We will respond within <strong>30 days</strong> of receiving a verifiable request. You also have the right to lodge a complaint with the <strong>Nigeria Data Protection Commission (NDPC)</strong> at ndpc.gov.ng if you believe your rights have been violated.
            </p>
          </section>

          {/* Section 8 */}
          <section id="sec-8" className="legal-section-block">
            <h2 className="legal-section-title">8. Data Security</h2>
            <p>
              We implement appropriate technical and organisational security measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. These measures include:
            </p>
            <ul>
              <li>Encryption of data in transit using TLS/SSL protocols;</li>
              <li>Encryption of sensitive data at rest;</li>
              <li>Role-based access controls limiting staff access to personal data on a need-to-know basis;</li>
              <li>Regular security assessments and vulnerability testing;</li>
              <li>Secure cloud infrastructure with automated backups; and</li>
              <li>Staff training on data protection and security practices.</li>
            </ul>
            <p>
              In the event of a personal data breach that is likely to result in a high risk to your rights and freedoms, we will notify you and the NDPC within <strong>72 hours</strong> of becoming aware of the breach, as required by the NDPA 2023.
            </p>
          </section>

          {/* Section 9 */}
          <section id="sec-9" className="legal-section-block">
            <h2 className="legal-section-title">9. Cookies and Tracking</h2>
            <p>
              The Platform uses cookies and similar tracking technologies to improve your experience. We use the following types of cookies:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the Platform to function (authentication, session management, cart/escrow state). Cannot be disabled.</li>
              <li><strong>Analytics Cookies:</strong> Used to understand how Users interact with the Platform (pages visited, time on site, error tracking). Used with your consent.</li>
              <li><strong>Preference Cookies:</strong> Store your settings and preferences (language, notification preferences). Used with your consent.</li>
            </ul>
            <p>
              You may manage your cookie preferences through your browser settings or through our cookie consent banner. Disabling non-essential cookies will not affect your ability to use core Platform features.
            </p>
          </section>

          {/* Section 10 */}
          <section id="sec-10" className="legal-section-block">
            <h2 className="legal-section-title">10. Children's Privacy</h2>
            <p>
              The Korè Platform is not directed at children under the age of 18. We do not knowingly collect personal data from persons under 18. If we become aware that we have collected personal data from a minor without verifiable parental consent, we will take immediate steps to delete that information. If you believe we may have collected data from a minor, please contact us at <a href="mailto:privacy@kore.ng">privacy@kore.ng</a>.
            </p>
          </section>

          {/* Section 11 */}
          <section id="sec-11" className="legal-section-block">
            <h2 className="legal-section-title">11. Cross-Border Data Transfers</h2>
            <p>
              Where we transfer personal data outside Nigeria (for example, to cloud infrastructure providers or payment processors with servers outside Nigeria), we ensure that such transfers comply with the NDPA 2023. We transfer data only to countries or organisations that provide an adequate level of data protection, or where appropriate safeguards (such as data transfer agreements) are in place.
            </p>
          </section>

          {/* Section 12 */}
          <section id="sec-12" className="legal-section-block">
            <h2 className="legal-section-title">12. Third-Party Links</h2>
            <p>
              The Platform may contain links to third-party websites or services (including logistics partners, payment processors, and social media platforms). This Privacy Policy applies only to the Korè Platform. We are not responsible for the privacy practices of any third-party websites. We encourage you to review the privacy policies of any external sites you visit.
            </p>
          </section>

          {/* Section 13 */}
          <section id="sec-13" className="legal-section-block">
            <h2 className="legal-section-title">13. Marketing Communications</h2>
            <p>
              With your consent, we may send you promotional emails, SMS, or WhatsApp messages about new features, offers, or products on the Platform. You may opt out of marketing communications at any time by clicking "Unsubscribe" in any email, or by contacting us at <a href="mailto:info@kore.ng">info@kore.ng</a>. Opting out of marketing communications will not affect transactional notifications (such as order confirmations and payment receipts), which are necessary for the operation of your account.
            </p>
          </section>

          {/* Section 14 */}
          <section id="sec-14" className="legal-section-block">
            <h2 className="legal-section-title">14. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or applicable law. Where changes are material, we will notify you by email or through a prominent notice on the Platform at least 14 days before the updated Policy takes effect. Your continued use of the Platform after the effective date of any updated Policy constitutes your acceptance of the revised Policy.
            </p>
          </section>

          {/* Section 15 */}
          <section id="sec-15" className="legal-section-block">
            <h2 className="legal-section-title">15. Contact and Complaints</h2>
            <p>
              For any privacy-related enquiries, requests to exercise your rights, or complaints, please contact:
            </p>
            <div className="legal-info-card">
              <div className="legal-info-card-title">Data Protection Officer</div>
              <div className="legal-info-card-text">
                IKORE LABS LTD (Trading as Korè)<br />
                RC Number: 9614851<br />
                Address: 65, BQ Soweto UCH, Ibadan, Oyo State, Federal Republic of Nigeria<br />
                📧 Privacy: <a href="mailto:privacy@kore.ng">privacy@kore.ng</a><br />
                📧 General: <a href="mailto:info@kore.ng">info@kore.ng</a><br />
                📱 WhatsApp: <a href="https://wa.me/2349021204151">+234 902 120 4151</a>
              </div>
            </div>
            <p style={{ fontSize: '13px', opacity: 0.8 }}>
              You also have the right to complain to the Nigeria Data Protection Commission (NDPC) at <a href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer">ndpc.gov.ng</a>.
            </p>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="legal-footer">
        <p style={{ margin: 0 }}>© 2026 Korè. Ikore Labs Limited | All rights reserved.</p>
        <div className="legal-footer-links">
          <a href="/privacy" className="legal-footer-link">Privacy Policy</a>
          <span>|</span>
          <a href="/terms" className="legal-footer-link">Terms &amp; Conditions</a>
        </div>
      </footer>
    </div>
  );
}
