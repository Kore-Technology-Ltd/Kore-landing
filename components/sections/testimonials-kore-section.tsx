export function TestimonialsKoreSection() {
  const testimonials = [
    {
      name: "Amara Osei",
      role: "Vegetable Farmer, Greater Accra",
      quote: "Before Korè, I sold through middlemen who took 40% margin. Now I sell directly and earn 3x more. My tomatoes reach buyers fresh, not spoiled.",
      segment: "Farmer"
    },
    {
      name: "Kwasi Restaurant Group",
      role: "Head Chef & Procurement",
      quote: "We now source directly from farms. Quality is consistent, prices are transparent, and we've cut our vegetable budget by 25% while serving fresher dishes.",
      segment: "Restaurant"
    },
    {
      name: "Ama Adjoa",
      role: "Household Buyer, Kumasi",
      quote: "I get fresh produce sourced 50km away, delivered within 24 hours. I know exactly where my food comes from and trust the quality guarantee.",
      segment: "Household"
    },
    {
      name: "Mensah Wholesalers",
      role: "Distribution Aggregator",
      quote: "Korè connects us with multiple farmers and buyers simultaneously. We've reduced waste by 45% and doubled our transaction volume.",
      segment: "Wholesaler"
    }
  ];

  return (
    <section id="testimonials" className="bg-background py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
            Trusted by the Community
          </h2>
          <p className="text-xl text-muted-foreground">
            Real stories from farmers, buyers, and businesses transforming their agricultural trade
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-secondary/50 border border-border rounded-lg p-8 md:p-10 space-y-5 hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote */}
              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="pt-4 border-t border-border space-y-1">
                <p className="font-serif text-lg font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.role}
                </p>
                <div className="pt-2">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                    {testimonial.segment}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 md:mt-20 pt-16 md:pt-20 border-t border-border space-y-8">
          <h3 className="text-2xl md:text-3xl font-serif text-foreground text-center">
            Verified & Trusted
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <p className="text-4xl md:text-5xl font-serif text-accent">2,500+</p>
              <p className="text-muted-foreground">Active Farmers & Suppliers</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl md:text-5xl font-serif text-accent">8,000+</p>
              <p className="text-muted-foreground">Verified Buyers & Restaurants</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl md:text-5xl font-serif text-accent">₵2.4B</p>
              <p className="text-muted-foreground">Transaction Volume YTD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
