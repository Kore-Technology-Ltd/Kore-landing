"use client";

import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-background pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <p className="text-sm font-medium text-accent">In Development • Launching Q3 2026</p>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight text-foreground">
                Stop Food Waste. Start Direct Trade.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Korè connects farmers directly to restaurants, wholesalers, and households. No middlemen. Real-time freshness labeling. Transparent pricing. Building West Africa&apos;s most trusted agricultural marketplace.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#waitlist"
                className="px-8 py-3.5 bg-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-center"
              >
                Join the Waitlist
              </Link>
              <Link
                href="#story"
                className="px-8 py-3.5 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors text-center"
              >
                See Our Story
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
             
              <div>
                <p className="text-3xl font-serif text-accent">38M</p>
                <p className="text-sm text-muted-foreground">Tonnes wasted annually</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/images/kore-hero.jpg"
              alt="Korè marketplace - fresh agricultural produce"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
