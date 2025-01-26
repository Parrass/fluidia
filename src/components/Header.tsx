import { Menu, X } from "lucide-react";
import { useState } from "react";

const FluidLogo = () => {
  return (
    <div className="relative w-8 h-8 flex items-center">
      <div className="absolute w-3 h-3 rounded-full bg-accent/80 animate-float" style={{ left: '0px' }} />
      <div className="absolute w-3 h-3 rounded-full bg-accent/80 animate-float" style={{ left: '4px', animationDelay: '0.2s' }} />
      <div className="absolute w-3 h-3 rounded-full bg-accent/80 animate-float" style={{ left: '8px', animationDelay: '0.4s' }} />
      <div className="absolute w-3 h-3 rounded-full bg-accent/80 animate-float" style={{ left: '12px', animationDelay: '0.6s' }} />
      <div className="absolute w-3 h-3 rounded-full bg-accent/80 animate-float" style={{ left: '16px', animationDelay: '0.8s' }} />
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 100; // Offset to account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav className="container-padding mx-auto flex h-16 items-center justify-between bg-neutral-900/30 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg">
        <a href="/" className="flex items-center gap-3 text-xl font-semibold text-white hover:text-accent transition-colors">
          <FluidLogo />
          <div className="flex items-center gap-2">
            <img 
              src="c18af634-058b-497f-9e0a-5a2e7461605a.png" 
              alt="Magic Wand" 
              className="w-6 h-6 invert"
            />
            Fluid AI
          </div>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => handleScroll('solutions')} 
            className="text-neutral-200 hover:text-white transition-colors"
          >
            Soluções
          </button>
          <button 
            onClick={() => handleScroll('services')} 
            className="text-neutral-200 hover:text-white transition-colors"
          >
            Serviços
          </button>
          <button
            onClick={() => handleScroll('schedule')}
            className="bg-accent/90 hover:bg-accent text-white px-6 py-2 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Contate-nos
          </button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden mt-2 container-padding py-4 bg-neutral-900/30 backdrop-blur-sm border border-white/10 rounded-2xl">
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => handleScroll('solutions')} 
              className="text-neutral-200 hover:text-white transition-colors text-left"
            >
              Soluções
            </button>
            <button 
              onClick={() => handleScroll('services')} 
              className="text-neutral-200 hover:text-white transition-colors text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => handleScroll('schedule')}
              className="bg-accent/90 hover:bg-accent text-white px-6 py-2 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              Contate-nos
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;