import Header from "../components/Header";
import Hero from "../components/Hero";
import Problems from "../components/Problems";
import Solution from "../components/Solution";
import Benefits from "../components/Benefits";
import VirtualAssistantFeatures from "../components/VirtualAssistantFeatures";
import HowItWorks from "../components/HowItWorks";
import Schedule from "../components/Schedule";
import Bonus from "../components/Bonus";
import Guarantee from "../components/Guarantee";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Main background with subtle gradient */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/5 via-neutral-100/5 to-neutral-50/5" />
        </div>
      </div>
      <Header />
      <main className="relative">
        <Hero />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/5 via-neutral-100/5 to-neutral-50/5 -z-10" />
          <Problems />
          <Solution />
          <VirtualAssistantFeatures />
          <Benefits />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/5 via-white/5 to-neutral-50/5 -z-10" />
          <HowItWorks />
          <Bonus />
          <Guarantee />
        </div>
        <Schedule />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/5 via-white/5 to-neutral-50/5 -z-10" />
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;