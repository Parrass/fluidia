import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav className="container-padding mx-auto flex h-16 items-center justify-between bg-neutral-900/30 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg">
        <a href="/" className="text-xl font-semibold text-white hover:text-accent transition-colors">
          Fluid AI
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