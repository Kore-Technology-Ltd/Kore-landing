export function WasteCrisisSection() {
  return (
    <section id="problem" className="bg-background py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Main Statistic */}
          <div className="text-center space-y-6">
            <div className="text-7xl md:text-8xl lg:text-9xl font-serif text-primary">
              38M
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
              Tonnes of Produce Lost Annually
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Not due to production shortfalls, but due to distribution gaps and information asymmetries across West Africa&apos;s agricultural supply chain.
            </p>
          </div>

          {/* Supporting Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="text-center space-y-3">
              <div className="text-5xl font-serif text-accent">67%</div>
              <p className="text-lg text-muted-foreground">Of perishables spoil before reaching end-markets</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl font-serif text-accent">4-6x</div>
              <p className="text-lg text-muted-foreground">Price mark-up through inefficient intermediaries</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl font-serif text-accent">92%</div>
              <p className="text-lg text-muted-foreground">Of farms lack direct buyer connections</p>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="bg-secondary/50 border border-border rounded-lg p-8 md:p-12 space-y-6 mt-12">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground">
              The Core Problem
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Farmers grow quality produce but lack reliable buyers. Households and businesses need fresh supply but struggle to find trustworthy sources. Wholesalers operate in information silos, unable to optimize distribution. This fragmentation wastes millions in lost produce, inflated prices, and missed economic opportunity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Korè solves this</strong> by connecting the entire agricultural value chain through location-first discovery, transparent freshness standards, and trust-backed transactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
