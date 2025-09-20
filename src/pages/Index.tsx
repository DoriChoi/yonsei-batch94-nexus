import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import ExecutiveSection from "@/components/ExecutiveSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <NewsSection />
        <ExecutiveSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
