import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import RefineCustomizeSection from "@/components/RefineCustomizeSection";
import MasterPromptingSection from "@/components/MasterPromptingSection";
import ClientsSection from "@/components/ClientsSection";
import IndustriesSection from "@/components/IndustriesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SolutionsSection />
        <FeaturesGrid />
        <RefineCustomizeSection />
        <MasterPromptingSection />
        <ClientsSection />
        <IndustriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
