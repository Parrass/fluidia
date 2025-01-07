import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <section className="pt-32 pb-16 container-padding bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
            {t.hero.cta}
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
            {t.hero.viewWork}
          </button>
        </div>
      </div>
      <div className="mt-16 glass-card rounded-xl p-4 max-w-4xl mx-auto animate-float">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
          alt="AI Technology Visualization"
          className="rounded-lg w-full"
        />
      </div>
    </section>
  );
};

export default Hero;