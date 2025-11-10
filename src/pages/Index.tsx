import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ResourceCards from "@/components/ResourceCards";
import AboutGuidance from "@/components/AboutGuidance";
import WhatsNew from "@/components/WhatsNew";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ResourceCards />
        <AboutGuidance />
        <WhatsNew />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
