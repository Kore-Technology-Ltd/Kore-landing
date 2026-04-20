"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("buyer");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // For now, just show success. In production, this would hit an API endpoint
      // that stores the waitlist signup in a database
      setSubmitted(true);
      setEmail("");
      setName("");
      setRole("buyer");
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="bg-gradient-to-b from-background via-secondary to-background py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <p className="text-sm font-medium text-accent">LAUNCHING SOON</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
              Join the Agricultural Revolution
            </h2>
            <p className="text-xl text-muted-foreground">
              Be among the first to experience direct, transparent, and efficient agricultural trade. Join thousands of farmers, restaurants, and wholesalers building West Africa's food future.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-border shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-serif text-foreground">
                    Welcome to Korè!
                  </h3>
                  <p className="text-muted-foreground">
                    Check your email for updates. We&apos;ll be in touch soon with early access information.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                    I&apos;m a...
                  </label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="farmer">Farmer / Wholesaler</option>
                    <option value="buyer">Restaurant / Hotel / Retailer</option>
                    <option value="consumer">Consumer / Household</option>
                    <option value="investor">Investor / Partner</option>
                  </select>
                </div>

                {error && (
                  <div className="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Joining..." : "Join the Waitlist"}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-sm font-medium text-muted-foreground">
              Already joined
            </p>
            <div className="flex justify-center gap-2 flex-wrap">
              <span className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground border border-border">
                2,847 farmers
              </span>
              <span className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground border border-border">
                1,234 restaurants
              </span>
              <span className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground border border-border">
                892 wholesalers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
