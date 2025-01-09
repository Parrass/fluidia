import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const scrollToSchedule = () => {
    const scheduleElement = document.getElementById('schedule');
    if (scheduleElement) {
      scheduleElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-16 container-padding relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent/30 to-primary animate-gradient-x" />
      
      {/* Content with glass effect */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight text-white">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToSchedule}
            className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
          >
            {t.hero.cta}
            <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={scrollToSchedule}
            className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
          >
            {t.hero.viewWork}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;