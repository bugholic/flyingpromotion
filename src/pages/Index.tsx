import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground diagonal-grid overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        {/* <TestimonialsSection />
        <TeamSection /> */}
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
