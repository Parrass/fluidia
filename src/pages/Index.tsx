import Header from "../components/Header";
import Hero from "../components/Hero";
import Problems from "../components/Problems";
import Solution from "../components/Solution";
import Benefits from "../components/Benefits";
import HowItWorks from "../components/HowItWorks";
import Schedule from "../components/Schedule";
import Bonus from "../components/Bonus";
import Guarantee from "../components/Guarantee";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-neutral-50" />
        </div>
      </div>
      <Header />
      <main className="relative">
        <Hero />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-neutral-900 to-primary -z-10" />
          <Problems />
          <Solution />
        </div>
        <Benefits />
        <HowItWorks />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 -z-10" />
          <Bonus />
          <Guarantee />
        </div>
        <Schedule />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;