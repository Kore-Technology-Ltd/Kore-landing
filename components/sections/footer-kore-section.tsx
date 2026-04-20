import Link from "next/link";

export function FooterKoreSection() {
  return (
    <footer className="bg-foreground text-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 mb-12 md:mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block mb-4">
              <img 
                src="/kore-logo.png" 
                alt="Korè" 
                className="h-15 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Trusted agricultural infrastructure connecting West Africa&apos;s farms to tables.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="mailto:info@kore.ng" className="text-white/70 hover:text-white transition-colors">
                Email
              </Link>
            </div>
          </div>

          {/* For Farmers */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white">For Farmers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Sell Direct
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Pricing Tool
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* For Buyers */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white">For Buyers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Browse Produce
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Subscribe
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Corporate Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 md:pt-12 space-y-6 md:space-y-0 md:flex items-center justify-between">
          
          {/* Copyright */}
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Korè. Kore Tecnology Limited | All rights reserved.
          </p>

          {/* Bottom CTA */}
          <Link
            href="https://wa.me/2348069838501"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Chat with Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
