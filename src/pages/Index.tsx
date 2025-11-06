import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChapterList from "@/components/ChapterList";
import ResourceCards from "@/components/ResourceCards";
import WhatsNew from "@/components/WhatsNew";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ChapterList />
        <ResourceCards />
        <WhatsNew />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
