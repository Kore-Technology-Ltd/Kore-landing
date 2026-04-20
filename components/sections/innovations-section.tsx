"use client";

import { MapPin, Leaf, Lock, Users } from "lucide-react";

const innovations = [
  {
    icon: MapPin,
    title: "Location-First Discovery",
    description: "Buyers see suppliers within relevant radius for peak freshness and reduced logistics. Direct proximity means fresher produce and lower transportation costs.",
    color: "bg-primary/10"
  },
  {
    icon: Leaf,
    title: "Freshness Labeling System",
    description: "Four-status transparency: Fresh, Normal, Urgent, Clearance. Prevent spoilage through real-time status updates and smart pricing tiers.",
    color: "bg-accent/10"
  },
  {
    icon: Lock,
    title: "Trust-First Escrow",
    description: "Secure payment holding, released only on confirmed delivery. Protects both buyers and sellers while building platform reputation.",
    color: "bg-primary/10"
  },
  {
    icon: Users,
    title: "Dual-Segment Model",
    description: "B2B Bulk tier for hotels and restaurants. B2C Retail tier for households. Flexible MOQs meet different buyer needs.",
    color: "bg-accent/10"
  }
];

export function InnovationsSection() {
  return (
    <section id="innovations" className="bg-background py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
            How Korè Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Four core innovations powering transparent, efficient agricultural trade
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {innovations.map((innovation, idx) => {
            const Icon = innovation.icon;
            return (
              <div
                key={idx}
                className={`${innovation.color} rounded-lg p-8 md:p-10 space-y-4 border border-border hover:border-primary/30 transition-all duration-300`}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white flex items-center justify-center">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-foreground">
                  {innovation.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {innovation.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Value Proposition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-20 lg:mt-24">
          <div className="text-center space-y-3">
            <div className="text-5xl md:text-6xl font-serif text-accent">For Farmers</div>
            <p className="text-muted-foreground text-lg">Direct market access, guaranteed buyers, real-time pricing</p>
          </div>
          <div className="text-center space-y-3">
            <div className="text-5xl md:text-6xl font-serif text-accent">For Buyers</div>
            <p className="text-muted-foreground text-lg">Fresh supply, transparent quality, fair pricing</p>
          </div>
          <div className="text-center space-y-3">
            <div className="text-5xl md:text-6xl font-serif text-accent">For Society</div>
            <p className="text-muted-foreground text-lg">Reduced waste, stable food prices, economic growth</p>
          </div>
        </div>
      </div>
    </section>
  );
}
