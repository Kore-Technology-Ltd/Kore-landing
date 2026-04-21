"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const islandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = islandRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&display=swap');

        .island {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          border-radius: 100px;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          overflow: visible;
          transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
          border: 0.75px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(40px) saturate(180%) brightness(1.05);
          -webkit-backdrop-filter: blur(40px) saturate(180%) brightness(1.05);
        }

        .island-default {
          background: rgba(0,0,0,0.4);
          box-shadow:
            inset 0 0 0 0.5px rgba(255,255,255,0.06),
            0 8px 32px rgba(0,0,0,0.6),
            0 2px 8px rgba(0,0,0,0.4),
            0 0 80px rgba(224,123,42,0.08);
        }

        .island-scrolled {
          background: rgba(0,0,0,0.55);
          border-color: rgba(255,255,255,0.09);
          box-shadow:
            inset 0 0 0 0.5px rgba(255,255,255,0.04),
            0 12px 48px rgba(0,0,0,0.8),
            0 2px 8px rgba(0,0,0,0.6),
            0 0 80px rgba(224,123,42,0.06);
        }

        .island::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 100px;
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, transparent 100%);
          pointer-events: none;
        }

        .island::after {
          content: '';
          position: absolute;
          top: 0;
          left: 10%; right: 10%;
          height: 0.75px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          pointer-events: none;
        }

        .logo-mark {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(224,123,42,0.95), rgba(201,168,76,0.6));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          color: white;
          box-shadow: 0 0 12px rgba(224,123,42,0.3), inset 0 0.5px 0 rgba(255,255,255,0.3);
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }

        .logo-mark::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 50%;
          background: rgba(255,255,255,0.15);
          border-radius: 50% 50% 0 0;
        }

        .logo-wordmark {
          font-family: 'Instrument Serif', serif;
          font-size: 18px;
          font-style: italic;
          color: rgba(255,255,255,0.92);
          letter-spacing: 0.02em;
        }

        .nav-link {
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,0.5);
          padding: 7px 13px;
          border-radius: 100px;
          transition: all 0.25s ease;
          letter-spacing: 0.01em;
          white-space: nowrap;
          text-decoration: none;
        }

        .nav-link:hover {
          color: rgba(255,255,255,0.92);
          background: rgba(255,255,255,0.06);
        }

        .cta-pill {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 18px;
          border-radius: 100px;
          background: linear-gradient(135deg, rgba(224,123,42,0.95) 0%, rgba(201,168,76,0.8) 100%);
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.95);
          letter-spacing: 0.01em;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
          box-shadow: 0 0 20px rgba(224,123,42,0.35), inset 0 0.5px 0 rgba(255,255,255,0.25);
          text-decoration: none;
          flex-shrink: 0;
        }

        .cta-pill::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 50%;
          background: rgba(255,255,255,0.12);
          border-radius: 100px 100px 0 0;
          pointer-events: none;
        }

        .cta-pill:hover {
          transform: scale(1.05);
          box-shadow: 0 0 32px rgba(224,123,42,0.55), inset 0 0.5px 0 rgba(255,255,255,0.25);
        }

        .cta-arrow {
          transition: transform 0.3s ease;
          display: inline-block;
        }

        .cta-pill:hover .cta-arrow {
          transform: translateX(3px);
        }

        .waitlist-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(255,255,255,0.7);
          display: inline-block;
          animation: dot-pulse 2s ease-in-out infinite;
        }

        @keyframes dot-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }

        .mobile-toggle {
          display: none;
          background: rgba(255,255,255,0.06);
          border: 0.75px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: rgba(255,255,255,0.7);
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .mobile-toggle:hover {
          background: rgba(255,255,255,0.1);
          color: white;
        }

        .mobile-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 0; right: 0;
          background: rgba(10,10,10,0.8);
          backdrop-filter: blur(40px) saturate(180%);
          -webkit-backdrop-filter: blur(40px) saturate(180%);
          border: 0.75px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.7);
          animation: menu-in 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }

        @keyframes menu-in {
          from { opacity: 0; transform: translateY(-8px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .mobile-menu::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%);
          pointer-events: none;
        }

        .mobile-menu::after {
          content: '';
          position: absolute;
          top: 0;
          left: 15%; right: 15%;
          height: 0.75px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          pointer-events: none;
        }

        .mobile-nav-link {
          font-size: 15px;
          font-weight: 400;
          color: rgba(255,255,255,0.65);
          padding: 11px 16px;
          border-radius: 14px;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .mobile-nav-link:hover {
          color: white;
          background: rgba(255,255,255,0.07);
        }

        .mobile-cta-link {
          margin-top: 8px;
          text-align: center;
          background: linear-gradient(135deg, rgba(224,123,42,0.95), rgba(201,168,76,0.8));
          color: white !important;
          font-weight: 500;
          border-radius: 100px;
          box-shadow: 0 0 20px rgba(224,123,42,0.3);
        }

        .mobile-cta-link:hover {
          background: linear-gradient(135deg, rgba(224,123,42,1), rgba(201,168,76,0.95)) !important;
        }

        @media (max-width: 720px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex; }
        }
      `}</style>

      <header
        style={{
          position: "fixed",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          width: "calc(100% - 48px)",
          maxWidth: 900,
          transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <div
          ref={islandRef}
          className={`island ${isScrolled ? "island-scrolled" : "island-default"}`}
          onMouseMove={handleMouseMove}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div className="logo-mark">
              <img 
                src="/IMG_1764.PNG" 
                alt="Korè" 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover",
                  borderRadius: "50%"
                }}
              />
            </div>
            <span className="logo-wordmark">Korè</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {[
              { href: "#story", label: "Story" },
              { href: "#problem", label: "Waste Crisis" },
              { href: "#why-kore", label: "Why Korè" },
              { href: "#how-it-works", label: "How It Works" },
              { href: "/teams", label: "Team" },
              { href: "#faq", label: "FAQ" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="nav-link">{label}</Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link href="#waitlist" className="cta-pill desktop-cta">
            <span className="waitlist-dot" />
            Join Waitlist
            <span className="cta-arrow">→</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="3" y1="3" x2="13" y2="13" /><line x1="13" y1="3" x2="3" y2="13" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="2" y1="5" x2="14" y2="5" /><line x1="2" y1="11" x2="14" y2="11" />
              </svg>
            )}
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              {[
                { href: "#story", label: "Story" },
                { href: "#problem", label: "Waste Crisis" },
                { href: "#why-kore", label: "Why Korè Different" },
                { href: "#how-it-works", label: "How It Works" },
                { href: "/teams", label: "Team" },
                { href: "#faq", label: "FAQ" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                  {label}
                </Link>
              ))}
              <Link href="#waitlist" className="mobile-nav-link mobile-cta-link" onClick={() => setIsMenuOpen(false)}>
                Join Waitlist →
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}