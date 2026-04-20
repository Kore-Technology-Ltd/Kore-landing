import { Header } from "@/components/header";
import { FooterKoreSection } from "@/components/sections/footer-kore-section";

export default function PrivacyPage() {
  const effectiveDate = "1 May 2026";

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">

            {/* Header */}
            <div className="mb-12">
              <p className="text-xs font-mono tracking-widest text-foreground/40 uppercase mb-4">
                Legal Document
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-foreground mb-4">
                Privacy Policy
              </h1>
              <div className="flex flex-wrap gap-6 text-sm text-foreground/50 border-t border-foreground/10 pt-4">
                <span>Effective Date: {effectiveDate}</span>
                <span>Version: 1.0</span>
                <span>Compliant with: NDPA 2023 (Nigeria)</span>
              </div>
            </div>

            {/* Intro box */}
            <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6 mb-10">
              <p className="text-sm text-foreground/70 leading-relaxed">
                This Privacy Policy ("Policy") describes how <strong className="text-foreground">Kore
                Technology Limited</strong> (trading as <strong className="text-foreground">Korè</strong>),
                a company incorporated in Nigeria under CAMA 2020, collects, uses, stores, and protects
                your personal data when you use our digital marketplace platform at{" "}
                <strong className="text-foreground">kore.ng</strong> ("the Platform"). This Policy is
                issued in compliance with the <strong className="text-foreground">Nigeria Data Protection
                Act 2023 (NDPA)</strong> and the regulations of the{" "}
                <strong className="text-foreground">Nigeria Data Protection Commission (NDPC)</strong>.
                By using the Platform, you consent to the collection and use of your personal data as
                described in this Policy.
              </p>
            </div>

            <div className="space-y-10 text-foreground/70">

              {/* 1 */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">1. Who We Are (Data Controller)</h2>
                <p className="mb-4">
                  For the purposes of the Nigeria Data Protection Act 2023, the Data Controller
                  responsible for your personal data is:
                </p>
                <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-5 text-sm space-y-1">
                  <p><strong className="text-foreground">Kore Technology Limited</strong></p>
                  <p>Trading as Korè </p>
                  <p>RC Number: [To be inserted upon CAC registration]</p>
                  <p>Lagos State, Federal Republic of Nigeria</p>
                </div>
               
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">2. Personal Data We Collect</h2>
                <p className="mb-3">
                  We collect personal data only where it is necessary for a legitimate purpose.
                  The categories of personal data we collect include:
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2.1 Data You Provide Directly</h3>
                    <ul className="list-disc pl-6 space-y-1">
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

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2.2 Data Collected Automatically</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>IP address and approximate location;</li>
                      <li>Device type, operating system, and browser information;</li>
                      <li>Pages visited, time spent on the Platform, and click-through data;</li>
                      <li>Transaction history (orders placed, completed, or disputed);</li>
                      <li>Session identifiers and authentication tokens; and</li>
                      <li>Cookies and similar tracking technologies (see Section 9).</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2.3 Data from Third Parties</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Payment confirmation data from our payment processors (Paystack, Flutterwave);</li>
                      <li>Delivery status data from logistics integration partners; and</li>
                      <li>Identity verification results from third-party KYC providers.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">3. Lawful Basis for Processing</h2>
                <p className="mb-3">
                  Under the NDPA 2023, we process your personal data on the following lawful bases:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Contract Performance:</strong> Processing necessary to fulfil the contract between you and Korè (account creation, transaction processing, escrow management, dispute resolution).</li>
                  <li><strong className="text-foreground">Consent:</strong> Where you have freely given specific, informed, and unambiguous consent (e.g., marketing communications, optional analytics).</li>
                  <li><strong className="text-foreground">Legal Obligation:</strong> Where processing is required to comply with applicable Nigerian law (e.g., FIRS tax reporting, NDPC registration, EFCC/NFIU anti-money laundering requirements).</li>
                  <li><strong className="text-foreground">Legitimate Interests:</strong> Where necessary for our legitimate business interests (fraud prevention, Platform security, product improvement), provided these interests are not overridden by your rights and freedoms.</li>
                </ul>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">4. How We Use Your Personal Data</h2>
                <p className="mb-3">We use your personal data for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Account Management:</strong> Creating, verifying, and maintaining your account;</li>
                  <li><strong className="text-foreground">Transaction Processing:</strong> Processing orders, managing escrow payments, disbursing funds to Sellers, and issuing refunds to Buyers;</li>
                  <li><strong className="text-foreground">Identity Verification:</strong> Verifying the identity and credentials of Sellers to maintain a trusted marketplace;</li>
                  <li><strong className="text-foreground">Dispute Resolution:</strong> Reviewing evidence and facilitating resolution of disputes between Buyers and Sellers;</li>
                  <li><strong className="text-foreground">Platform Improvement:</strong> Analysing usage data to improve features, performance, and user experience;</li>
                  <li><strong className="text-foreground">Communications:</strong> Sending transactional notifications (order confirmations, payment receipts, dispute updates) and — with your consent — promotional communications;</li>
                  <li><strong className="text-foreground">Security and Fraud Prevention:</strong> Detecting, investigating, and preventing fraudulent transactions, account takeovers, and prohibited conduct;</li>
                  <li><strong className="text-foreground">Legal Compliance:</strong> Meeting our obligations under Nigerian law, including FIRS tax reporting, anti-money laundering (AML) obligations under the Money Laundering Prevention and Prohibition Act 2022, and data protection compliance under the NDPA 2023; and</li>
                  <li><strong className="text-foreground">Customer Support:</strong> Responding to enquiries, complaints, and support requests.</li>
                </ul>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">5. Data Sharing and Third-Party Disclosure</h2>
                <p className="mb-3">
                  We do not sell your personal data to any third party. We may share your personal
                  data with the following categories of third parties only where necessary and on a
                  need-to-know basis:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Payment Processors:</strong> Paystack and/or Flutterwave, for the processing of escrow payments, refunds, and disbursements. These processors are bound by their own privacy policies and applicable CBN regulations;</li>
                  <li><strong className="text-foreground">Logistics Partners:</strong> Third-party delivery companies integrated into the Platform, who receive the delivery address and order details necessary to complete a delivery;</li>
                  <li><strong className="text-foreground">Identity Verification Providers:</strong> Third-party KYC providers used to verify Seller identities, who receive only the minimum data necessary for verification;</li>
                  <li><strong className="text-foreground">Cloud Service Providers:</strong> Infrastructure providers (including Supabase and cloud hosting services) that host the Platform and its data, who process data under appropriate data processing agreements;</li>
                  <li><strong className="text-foreground">Legal and Regulatory Authorities:</strong> Where required by Nigerian law, court order, or regulatory authority (including NDPC, FIRS, EFCC, NFIU, or law enforcement), we may disclose personal data without prior notice to you; and</li>
                  <li><strong className="text-foreground">Professional Advisors:</strong> Legal counsel, accountants, and auditors, subject to professional confidentiality obligations.</li>
                </ul>
                <p className="mt-3">
                  Where we share data with any third party acting as a Data Processor on our behalf,
                  we ensure a data processing agreement is in place that requires them to protect
                  your data in accordance with the NDPA 2023.
                </p>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">6. Data Retention</h2>
                <p className="mb-3">
                  We retain your personal data only for as long as necessary to fulfil the purposes
                  for which it was collected, or as required by Nigerian law. Our standard retention
                  periods are as follows:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-foreground/10">
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Data Category</th>
                        <th className="text-left py-2 font-semibold text-foreground">Retention Period</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-foreground/5">
                      {[
                        ["Account information", "Duration of account + 3 years after closure"],
                        ["Transaction records", "7 years (FIRS tax compliance requirement)"],
                        ["Payment data", "5 years (CBN / AML compliance)"],
                        ["Dispute records", "3 years from resolution date"],
                        ["Identity verification data", "5 years from last transaction"],
                        ["Communications / support logs", "2 years"],
                        ["Marketing consent records", "Until consent is withdrawn + 1 year"],
                        ["Usage and analytics data", "13 months (rolling)"],
                      ].map(([category, period]) => (
                        <tr key={category}>
                          <td className="py-2 pr-4 text-foreground/80">{category}</td>
                          <td className="py-2 text-foreground/60">{period}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4">
                  After the applicable retention period, your data will be securely deleted or
                  anonymised so that it can no longer be associated with you.
                </p>
              </section>

              {/* 7 */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">7. Your Rights Under the NDPA 2023</h2>
                <p className="mb-3">
                  Under the Nigeria Data Protection Act 2023, you have the following rights with
                  respect to your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Right of Access:</strong> You may request a copy of all personal data we hold about you;</li>
                  <li><strong className="text-foreground">Right to Rectification:</strong> You may request that inaccurate or incomplete personal data be corrected;</li>
                  <li><strong className="text-foreground">Right to Erasure ("Right to be Forgotten"):</strong> You may request deletion of your personal data, subject to our legal retention obligations;</li>
                  <li><strong className="text-foreground">Right to Restriction of Processing:</strong> You may request that we restrict the processing of your data in certain circumstances;</li>
                  <li><strong className="text-foreground">Right to Data Portability:</strong> You may request your personal data in a structured, commonly used, machine-readable format;</li>
                  <li><strong className="text-foreground">Right to Object:</strong> You may object to processing based on legitimate interests or for direct marketing purposes; and</li>
                  <li><strong className="text-foreground">Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw your consent at any time without affecting the lawfulness of prior processing.</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, please submit a written request to{" "}
                  <a href="mailto:privacy@kore.ng" className="text-foreground underline">privacy@kore.ng</a>.
                  We will respond within <strong className="text-foreground">30 days</strong> of
                  receiving a verifiable request. You also have the right to lodge a complaint with
                  the <strong className="text-foreground">Nigeria Data Protection Commission (NDPC)</strong>{" "}
                  at ndpc.gov.ng if you believe your rights have been violated.
                </p>
              </section>

              {/* 8 */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">8. Data Security</h2>
                <p className="mb-3">
                  We implement appropriate technical and organisational security measures to protect
                  your personal data against unauthorised access, disclosure, alteration, or
                  destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit using TLS/SSL protocols;</li>
                  <li>Encryption of sensitive data at rest;</li>
                  <li>Role-based access controls limiting staff access to personal data on a need-to-know basis;</li>
                  <li>Regular security assessments and vulnerability testing;</li>
                  <li>Secure cloud infrastructure with automated backups; and</li>
                  <li>Staff training on data protection and security practices.</li>
                </ul>
                <p className="mt-3">
                  In the event of a personal data breach that is likely to result in a high risk to
                  your rights and freedoms, we will notify you and the NDPC within{" "}
                  <strong className="text-foreground">72 hours</strong> of becoming aware of the
                  breach, as required by the NDPA 2023.
                </p>
              </section>

              {/* 9 */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">9. Cookies and Tracking</h2>
                <p className="mb-3">
                  The Platform uses cookies and similar tracking technologies to improve your
                  experience. We use the following types of cookies:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Essential Cookies:</strong> Required for the Platform to function (authentication, session management, cart/escrow state). Cannot be disabled.</li>
                  <li><strong className="text-foreground">Analytics Cookies:</strong> Used to understand how Users interact with the Platform (pages visited, time on site, error tracking). Used with your consent.</li>
                  <li><strong className="text-foreground">Preference Cookies:</strong> Store your settings and preferences (language, notification preferences). Used with your consent.</li>
                </ul>
                <p className="mt-3">
                  You may manage your cookie preferences through your browser settings or through our
                  cookie consent banner. Disabling non-essential cookies will not affect your ability
                  to use core Platform features.
                </p>
              </section>

              {/* 10 */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">10. Children's Privacy</h2>
                <p>
                  The Korè Platform is not directed at children under the age of 18. We do not
                  knowingly collect personal data from persons under 18. If we become aware that we
                  have collected personal data from a minor without verifiable parental consent, we
                  will take immediate steps to delete that information. If you believe we may have
                  collected data from a minor, please contact us at{" "}
                  <a href="mailto:privacy@kore.ng" className="text-foreground underline">privacy@kore.ng</a>.
                </p>
              </section>

              {/* 11 */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">11. Cross-Border Data Transfers</h2>
                <p>
                  Where we transfer personal data outside Nigeria (for example, to cloud
                  infrastructure providers or payment processors with servers outside Nigeria),
                  we ensure that such transfers comply with the NDPA 2023. We transfer data only
                  to countries or organisations that provide an adequate level of data protection,
                  or where appropriate safeguards (such as data transfer agreements) are in place.
                </p>
              </section>

              {/* 12 */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">12. Third-Party Links</h2>
                <p>
                  The Platform may contain links to third-party websites or services (including
                  logistics partners, payment processors, and social media platforms). This Privacy
                  Policy applies only to the Korè Platform. We are not responsible for the privacy
                  practices of any third-party websites. We encourage you to review the privacy
                  policies of any external sites you visit.
                </p>
              </section>

              {/* 13 */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">13. Marketing Communications</h2>
                <p>
                  With your consent, we may send you promotional emails, SMS, or WhatsApp messages
                  about new features, offers, or products on the Platform. You may opt out of
                  marketing communications at any time by clicking "Unsubscribe" in any email, or
                  by contacting us at{" "}
                  <a href="mailto:info@kore.ng" className="text-foreground underline">info@kore.ng</a>.
                  Opting out of marketing communications will not affect transactional notifications
                  (such as order confirmations and payment receipts), which are necessary for the
                  operation of your account.
                </p>
              </section>

              {/* 14 */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">14. Updates to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our
                  practices, technology, or applicable law. Where changes are material, we will
                  notify you by email or through a prominent notice on the Platform at least
                  14 days before the updated Policy takes effect. Your continued use of the Platform
                  after the effective date of any updated Policy constitutes your acceptance of
                  the revised Policy.
                </p>
              </section>

              {/* 15 */}
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-3">15. Contact and Complaints</h2>
                <p className="mb-4">
                  For any privacy-related enquiries, requests to exercise your rights, or complaints,
                  please contact:
                </p>
                <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6 space-y-2 text-sm">
                  <p><strong className="text-foreground">Data Protection Officer</strong></p>
                  <p>Kore Technology Limited (Trading as Korè)</p>
                  <p>Lagos State, Federal Republic of Nigeria</p>
                  <div className="pt-2 space-y-1">
                    <p>📧 General: <a href="mailto:info@kore.ng" className="text-foreground underline">info@kore.ng</a></p>
                    <p>📱 WhatsApp: <a href="https://wa.me/2348069838501" className="text-foreground underline">+234 806 983 8501</a></p>
                    <p>📱 WhatsApp: <a href="https://wa.me/2349070642191" className="text-foreground underline">+234 907 064 2191</a></p>
                  </div>
                  <div className="pt-2 border-t border-foreground/10">
                    <p className="text-foreground/50">
                      You also have the right to complain to the Nigeria Data Protection Commission (NDPC) at{" "}
                      <a href="https://ndpc.gov.ng" className="text-foreground underline" target="_blank" rel="noopener noreferrer">ndpc.gov.ng</a>
                    </p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>

      <FooterKoreSection />
    </main>
  );
}