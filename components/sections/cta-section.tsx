import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-primary text-white py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Ready to Transform Your Agricultural Trade?
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl opacity-90">
            Join thousands of farmers, wholesalers, and buyers on Korè. Start connecting directly today.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="https://wa.me/234"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity text-center"
            >
              Chat on WhatsApp
            </Link>
            <Link
              href="#"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              Learn More
            </Link>
          </div>

          {/* Support Text */}
          <p className="text-sm opacity-80 pt-4">
            Questions? Our team is available 24/7 on WhatsApp. No registration required to chat.
          </p>
        </div>
      </div>
    </section>
  );
}
