export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Register & Verify",
      description: "Join the Korè platform. Farmers, wholesalers, and buyers register with location data and business details.",
    },
    {
      number: "02",
      title: "List & Discover",
      description: "Farmers list available produce with quantity, grade, and freshness status. Buyers discover nearby suppliers instantly.",
    },
    {
      number: "03",
      title: "Negotiate & Order",
      description: "Direct communication between buyers and sellers. Place orders with transparent pricing and delivery terms.",
    },
    {
      number: "04",
      title: "Transact & Verify",
      description: "Escrow payment processing. On-delivery quality verification. Funds released upon confirmation.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-secondary/30 py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
            The Korè Flow
          </h2>
          <p className="text-xl text-muted-foreground">
            Four simple steps to connect farm to table
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative space-y-4">
              {/* Step Number */}
              <div className="text-6xl md:text-7xl font-serif text-primary/20">
                {step.number}
              </div>
              
              {/* Content */}
              <div className="space-y-3 -mt-6">
                <h3 className="text-2xl md:text-xl lg:text-2xl font-serif text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="mt-16 md:mt-20 lg:mt-24 bg-white rounded-lg border border-border p-8 md:p-12 space-y-6">
          <h3 className="text-3xl md:text-4xl font-serif text-foreground">
            Why Choose Korè
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="font-serif text-lg text-foreground">✓ Real-time Price Transparency</p>
              <p className="text-muted-foreground">No hidden markups. See exact cost at every step.</p>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-lg text-foreground">✓ Speed & Convenience</p>
              <p className="text-muted-foreground">Order online, get delivered within 24-48 hours.</p>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-lg text-foreground">✓ Quality Assurance</p>
              <p className="text-muted-foreground">Freshness labeling and buyer verification on every transaction.</p>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-lg text-foreground">✓ Secure Payments</p>
              <p className="text-muted-foreground">Escrow-backed transactions. Money moves only when confirmed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
