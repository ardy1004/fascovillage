import { UrgencyBanner } from "@/components/sections/UrgencyBanner";
import { Hero } from "@/components/sections/Hero";
import { Gallery } from "@/components/sections/Gallery";
import { UnitTypes } from "@/components/sections/UnitTypes";
import { Specs } from "@/components/sections/Specs";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBanner />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Gallery />
        <UnitTypes />
        <Specs />
        <CalculatorSection />
        <LeadFormSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
