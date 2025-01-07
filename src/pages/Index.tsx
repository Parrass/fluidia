import Header from "../components/Header";
import Hero from "../components/Hero";
import Problems from "../components/Problems";
import Solution from "../components/Solution";
import Benefits from "../components/Benefits";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
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
        <Solution />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Bonus />
        <Guarantee />
      </main>
      <Footer />
    </div>
  );
};

export default Index;