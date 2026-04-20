"use client";

import Image from "next/image";

export function StorySection() {
  return (
    <section id="story" className="bg-background py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 space-y-20 md:space-y-32">
        
        {/* Story 1: The Farmer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              Meet Adeyemi: A Farmer Without a Market
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Every morning, Adeyemi wakes at 6 AM to tend his vegetable farm. He grows premium tomatoes, peppers, and leafy greens. But by midday, He's sitting in the market square hoping someone or anyone will buy at whatever price he can get.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              "I have no direct connection to restaurants or bulk buyers. I can't travel to find them. My produce sits and wilts while I lose 30-40% to waste," Ade says.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-4xl font-serif text-accent">40%</div>
                <div className="flex flex-col justify-center">
                  <p className="text-foreground font-medium">Ade loses to spoilage</p>
                  <p className="text-muted-foreground text-sm">Every harvest week</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/images/story-farmer.jpg"
              alt="Ama the farmer"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Story 2: The Restaurant */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/images/story-restaurant.jpg"
              alt="Kofi the restaurant owner"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              Meet Kofi: A Chef Searching for Freshness
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Kofi runs a popular restaurant in Ghana. He sources produce from three different middlemen because he can't find consistent, fresh suppliers. His tomatoes come 3 days old. His lettuce wilts by dinner service.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              "I don't know where my ingredients come from. I can't verify freshness. I pay premium prices and still get mediocre quality," Kofi explains in frustration.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-4xl font-serif text-accent">3</div>
                <div className="flex flex-col justify-center">
                  <p className="text-foreground font-medium">Middlemen to find fresh produce</p>
                  <p className="text-muted-foreground text-sm">Still no guarantee of quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Opportunity */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 lg:p-16 space-y-8 border border-border">
          <div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              The Invisible Waste
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              West Africa loses <span className="text-primary font-serif text-2xl">38 million tonnes</span> of produce annually. Most never reaches willing buyers because the infrastructure is broken.
            </p>
            <p className="text-lg text-muted-foreground">
              Farmers can't reach buyers. Buyers can't find farmers. Middlemen extract all value. Consumers pay 300% markups. <span className="text-foreground font-medium">Everyone loses.</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-border">
            <div>
              <p className="text-sm text-muted-foreground mb-2">The inefficiency</p>
              <p className="text-3xl font-serif text-accent">38M tonnes</p>
              <p className="text-muted-foreground mt-2">Wasted annually</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">The impact</p>
              <p className="text-3xl font-serif text-accent">67%</p>
              <p className="text-muted-foreground mt-2">Price markup from farm to table</p>
            </div>
          </div>
        </div>

        {/* The Vision */}
        <div className="text-center space-y-8">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight">
            What if there was a better way?
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Korè connects Ama directly to Kofi. No middlemen. No spoilage. No guessing. Real-time discovery based on location. Transparent freshness. Escrow-backed trust.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-4">
              <div className="text-6xl font-serif text-primary">↑30%</div>
              <p className="text-muted-foreground">Farmer income increase</p>
              <p className="text-sm text-muted-foreground">Direct market access</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-serif text-accent">↓40%</div>
              <p className="text-muted-foreground">Buyer costs reduction</p>
              <p className="text-sm text-muted-foreground">No middleman markup</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-serif text-primary">12M</div>
              <p className="text-muted-foreground">Tonnes saved from waste</p>
              <p className="text-sm text-muted-foreground">In first 3 years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
