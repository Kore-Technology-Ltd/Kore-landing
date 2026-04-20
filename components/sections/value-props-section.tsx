"use client";

import { Zap, Shield, TrendingUp, Users } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Instant Connection",
    description: "Real-time discovery of suppliers within your radius. No middlemen. No delays. Direct access to fresh sources within hours, not weeks.",
    for: "Buyers"
  },
  {
    icon: TrendingUp,
    title: "Fair Pricing",
    description: "Dynamic pricing based on freshness status. Farmers earn more. Buyers pay less. Transparency ensures everyone wins.",
    for: "Everyone"
  },
  {
    icon: Shield,
    title: "Trust Escrow",
    description: "Secure transactions with payment held until delivery confirmed. Both parties protected. Building an economy on trust, not fear.",
    for: "Both"
  },
  {
    icon: Users,
    title: "Dual-Segment Flexibility",
    description: "Sell to restaurants by the crate. Sell to households by the bunch. Different buyers, different needs, same platform.",
    for: "Farmers"
  }
];

export function ValuePropsSection() {
  return (
    <section id="why-kore" className="bg-background py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
            Why Korè is Different
          </h2>
          <p className="text-xl text-muted-foreground">
            We&apos;re not another marketplace. We&apos;re rebuilding trust in agricultural trade from the ground up.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-16 md:mb-24">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 md:p-10 border border-border hover:border-primary/30 transition-all duration-300 space-y-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-xs md:text-sm text-accent font-medium mt-1">
                      For {benefit.for}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-secondary rounded-2xl overflow-hidden border border-border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-foreground">Traditional Market</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-primary font-serif">Korè</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Direct Buyer Connection", traditional: "No", kore: "Yes" },
                  { feature: "Real-time Freshness Info", traditional: "No", kore: "Yes" },
                  { feature: "Transparent Pricing", traditional: "No", kore: "Yes" },
                  { feature: "Escrow Protection", traditional: "No", kore: "Yes" },
                  { feature: "Location-based Discovery", traditional: "No", kore: "Yes" },
                  { feature: "Middleman Fee", traditional: "15-25%", kore: "0%" }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border last:border-b-0 hover:bg-background/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-center text-muted-foreground">{row.traditional}</td>
                    <td className="px-6 py-4 text-sm text-center text-primary font-serif font-bold">{row.kore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
