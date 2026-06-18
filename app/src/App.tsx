import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import HeroSection from "./sections/HeroSection";
import HistorySection from "./sections/HistorySection";
import ProductsSection from "./sections/ProductsSection";
import MomentsSection from "./sections/MomentsSection";
import CommunitySection from "./sections/CommunitySection";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <HeroSection />
        <HistorySection />
        <ProductsSection />
        <MomentsSection />
        <CommunitySection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
