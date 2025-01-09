import Header from "../components/Header";
import Hero from "../components/Hero";
import Problems from "../components/Problems";
import Solution from "../components/Solution";
import Benefits from "../components/Benefits";
import HowItWorks from "../components/HowItWorks";
import Schedule from "../components/Schedule";
import Bonus from "../components/Bonus";
import Guarantee from "../components/Guarantee";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-white/80 to-indigo-50/50 animate-gradient-x" />
        </div>
      </div>
      <Header />
      <main className="relative">
        <Hero />
        <Problems />
        <div id="solutions">
          <Solution />
          <Benefits />
          <HowItWorks />
        </div>
        <div id="schedule">
          <Schedule />
        </div>
        <div id="services">
          <Bonus />
          <Guarantee />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;