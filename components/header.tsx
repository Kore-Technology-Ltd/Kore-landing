"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      onMouseMove={handleMouseMove}
    >
      {/* Background gradient that appears on scroll */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/0 backdrop-blur-md" />
      )}

      <div className="relative px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center transition-all duration-300 hover:opacity-80"
          >
            <img 
              src="/kore-logo.png" 
              alt="Korè" 
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#story"
              className="text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground"
            >
              Story
            </Link>

            <Link
              href="#problem"
              className="text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground"
            >
              Waste Crisis
            </Link>

            <Link
              href="#why-kore"
              className="text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground"
            >
              Why Korè Different
            </Link>

            <Link
              href="#how-it-works"
              className="text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground"
            >
              How It Works
            </Link>
            
            <Link
              href="/teams"
              className="text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground"
            >
              Team
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground"
            >
              FAQ
            </Link>
          </nav>

          {/* Dynamic Island CTA - Desktop */}
          <div className="hidden md:flex">
            <Link
              href="#waitlist"
              className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-primary/80 to-primary rounded-full backdrop-blur-xl border border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, rgba(224, 123, 42, 0.85) 0%, rgba(201, 168, 76, 0.4) 100%)`,
              }}
            >
              <span className="text-sm font-semibold text-white">Join Waitlist</span>
              <ArrowRight size={16} className="text-white transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="transition-colors duration-200 md:hidden text-foreground hover:text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-6 md:hidden">
            <div className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 px-6 py-6 space-y-6">
              <nav className="flex flex-col gap-4">
                <Link
                  href="#story"
                  className="text-base font-medium text-foreground transition-colors duration-200 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Story
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-base font-medium text-foreground transition-colors duration-200 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="#why-kore"
                  className="text-base font-medium text-foreground transition-colors duration-200 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Why Korè Different
                </Link>
                <Link
                  href="/teams"
                  className="text-base font-medium text-foreground transition-colors duration-200 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Team
                </Link>
                <Link
                  href="#faq"
                  className="text-base font-medium text-foreground transition-colors duration-200 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
              </nav>
              <Link
                href="#waitlist"
                className="group flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-br from-primary/80 to-primary rounded-full backdrop-blur-xl border border-primary/30 transition-all duration-300 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm font-semibold text-white">Join Waitlist</span>
                <ArrowRight size={16} className="text-white" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Animated gradient line at bottom */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      )}
    </header>
  );
}
