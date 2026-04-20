import { Header } from "@/components/header";
import { FooterKoreSection } from "@/components/sections/footer-kore-section";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-foreground mb-8">
              Contact Us
            </h1>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif text-foreground mb-4">Get in Touch</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  We're here to help and answer any questions you might have about Korè. 
                  Whether you're a farmer, buyer, or just interested in learning more about 
                  our mission to reduce food waste in West Africa.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-3">Email</h3>
                  <a 
                    href="mailto:info@kore.ng" 
                    className="text-primary hover:underline"
                  >
                    info@kore.ng
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-3">Phone Number</h3>
                  <a 
                  
                  >
                    +234 806 983 8501
                    <br />
                    +234 907 064 2191
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Office Hours</h3>
                <p className="text-foreground/70">
                  Monday - Friday: 9:00 AM - 6:00 PM WAT<br />
                  Saturday: 10:00 AM - 2:00 PM WAT<br />
                  Sunday: Closed
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Location</h3>
                <p className="text-foreground/70">
                  Serving Nigeria, Ghana, and Côte d'Ivoire<br />
                  West Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterKoreSection />
    </main>
  );
}
