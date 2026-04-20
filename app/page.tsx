import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { StorySection } from "@/components/sections/story-section";
import { WasteCrisisSection } from "@/components/sections/waste-crisis-section";
import { ValuePropsSection } from "@/components/sections/value-props-section";
import { InnovationsSection } from "@/components/sections/innovations-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { WaitlistSection } from "@/components/sections/waitlist-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FooterKoreSection } from "@/components/sections/footer-kore-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StorySection />
      <WasteCrisisSection />
      <ValuePropsSection />
      <InnovationsSection />
      <HowItWorksSection />
      <WaitlistSection />
      <FAQSection />
      <FooterKoreSection />
    </main>
  );
}
