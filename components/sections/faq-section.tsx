"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "When is Korè launching?",
    answer: "We're launching Q3 2026 in Nigeria, Ghana, and Côte d'Ivoire. Join the waitlist to get early access and special launch benefits."
  },
  {
    question: "How much does it cost to use Korè?",
    answer: "Farmers and wholesalers use Korè free. Restaurants and bulk buyers pay a small per-transaction fee (0.5-2% depending on volume). Household buyers get special introductory pricing."
  },
  {
    question: "How do I know the produce is actually fresh?",
    answer: "Every listing shows four freshness statuses: Fresh, Normal, Urgent, and Clearance. Sellers update these in real-time. Our trust escrow means payment is only released after buyer confirmation, so sellers are incentivized to deliver what they promise."
  },
  {
    question: "What if I want to buy small quantities?",
    answer: "Our B2C retail tier is designed for households and small shops. You can buy by the bunch, not just by the crate. Minimum order quantities are flexible and clearly listed by each seller."
  },
  {
    question: "Is my payment protected?",
    answer: "Yes. All payments go through our trust escrow system. Money is held securely until the buyer confirms delivery and product quality. This protects both farmers and buyers."
  },
  {
    question: "How does the location-first discovery work?",
    answer: "When you open Korè, you'll see suppliers within your chosen radius (5km, 10km, 25km). Producers filter by distance and freshness. This means faster delivery and fresher produce."
  },
  {
    question: "Can I sell to both restaurants and households?",
    answer: "Absolutely. The dual-segment model lets farmers sell wholesale to restaurants using B2B bulk tier, and retail to households using B2C retail tier. One platform, multiple channels."
  },
  {
    question: "What if there's a dispute?",
    answer: "Our customer support team investigates disputes within 24 hours. We have a clear dispute resolution process and our trust escrow ensures funds are protected while disputes are resolved."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-background py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Korè before launch
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 md:px-8 py-5 flex items-center justify-between hover:bg-secondary/50 transition-colors text-left"
              >
                <h3 className="text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              {openIndex === idx && (
                <div className="px-6 md:px-8 py-5 border-t border-border bg-secondary/30">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto mt-16 md:mt-20 bg-accent/5 rounded-2xl p-8 md:p-12 text-center border border-accent/20 space-y-6">
          <h3 className="text-2xl md:text-3xl font-serif text-foreground">
            Still have questions?
          </h3>
          <p className="text-muted-foreground">
            Reach out to our team on WhatsApp. We&apos;re happy to answer any questions about Korè.
          </p>
          <a
            href="https://wa.me/234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
