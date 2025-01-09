import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-4 left-4 right-4 z-50">
        <nav className="container-padding mx-auto flex h-16 items-center justify-between bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg">
          <a href="/" className="text-xl font-semibold text-white hover:text-accent transition-colors">
            Fluid AI
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleScroll('solutions')} 
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Soluções
            </button>
            <button 
              onClick={() => handleScroll('services')} 
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => setIsContactOpen(true)}
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
          <div className="md:hidden mt-2 container-padding py-4 bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => handleScroll('solutions')} 
                className="text-neutral-400 hover:text-white transition-colors text-left"
              >
                Soluções
              </button>
              <button 
                onClick={() => handleScroll('services')} 
                className="text-neutral-400 hover:text-white transition-colors text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => {
                  setIsContactOpen(true);
                  setIsMenuOpen(false);
                }}
                className="bg-accent/90 hover:bg-accent text-white px-6 py-2 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/20"
              >
                Contate-nos
              </button>
            </div>
          </div>
        )}
      </header>

      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Entre em Contato</DialogTitle>
            <DialogDescription>
              Deixe seus dados que entraremos em contato em breve.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nome
              </label>
              <input
                id="name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Seu nome completo"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="seu@email.com"
              />
            </div>
            <Button type="submit" className="mt-4">
              Enviar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;