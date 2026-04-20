"use client";

import { Quote } from "lucide-react";

const adopters = [
  {
    name: "Ama Owusu",
    role: "Farmer, Kumasi",
    quote: "I've been farming for 20 years. The first time I saw Korè's plan, I knew this was the future. Direct access to buyers who value my quality? That changes everything.",
    initial: "A"
  },
  {
    name: "Chef Folake",
    role: "Caterer, Ogun state",
    quote: "Every restaurant owner has the same problem: where do I find fresh, reliable produce? Korè solves this overnight. I can't wait to launch.",
    initial: "F"
  },
  {
    name: "Abiola Adebayo",
    role: "Wholesaler, Abuja",
    quote: "The B2B bulk tier is exactly what we need. Our margins are better. Our sourcing is faster. Our customers get fresher goods. Win-win-win.",
    initial: "A"
  },
  {
    name: "Grace Mensah",
    role: "Household Buyer, Accra",
    quote: "Shopping in a broken system is frustrating. With Korè, I can see exactly where my vegetables come from, how fresh they are, and I pay fair prices.",
    initial: "G"
  }
];

export function EarlyAdoptersSection() {
  return (
    <section id="early-adopters" className="bg-secondary py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
            What Early Adopters Are Saying
          </h2>
          <p className="text-xl text-muted-foreground">
            Farmers, restaurants, wholesalers, and households all see the same opportunity: a transparent, efficient, trustworthy agricultural marketplace.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {adopters.map((adopter, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 md:p-10 space-y-6 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-accent opacity-40" />
              <p className="text-lg text-foreground leading-relaxed">
                "{adopter.quote}"
              </p>
              <div className="pt-6 border-t border-border flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-serif font-bold text-primary">{adopter.initial}</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{adopter.name}</p>
                  <p className="text-sm text-muted-foreground">{adopter.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Your voice matters. Join hundreds of early adopters shaping Korè's future.
          </p>
          <a
            href="#waitlist"
            className="inline-block px-8 py-3.5 bg-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Join the Movement
          </a>
        </div>
      </div>
    </section>
  );
}
