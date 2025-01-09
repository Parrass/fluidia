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
    <div className="min-h-screen">
      <Header />
      <main>
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