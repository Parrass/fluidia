import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    // Here you would typically trigger a language change in your app
    console.log("Language changed to:", value);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-lg border-b border-neutral-800">
      <nav className="container-padding mx-auto flex h-16 items-center justify-between">
        <a href="/" className="text-xl font-semibold text-white">
          Fluid AI
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-neutral-400 hover:text-white transition-colors">
            {language === "pt-BR" ? "Soluções" : "Solutions"}
          </a>
          <a href="#testimonials" className="text-neutral-400 hover:text-white transition-colors">
            {language === "pt-BR" ? "Casos de Sucesso" : "Case Studies"}
          </a>
          <a href="#pricing" className="text-neutral-400 hover:text-white transition-colors">
            {language === "pt-BR" ? "Serviços" : "Services"}
          </a>
          <Select onValueChange={handleLanguageChange} defaultValue={language}>
            <SelectTrigger className="w-[120px] bg-transparent border-neutral-700 text-white">
              <Globe className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="pt-BR">Português</SelectItem>
            </SelectContent>
          </Select>
          <button className="bg-white text-neutral-900 px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors">
            {language === "pt-BR" ? "Contate-nos" : "Contact Us"}
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
        <div className="md:hidden absolute top-16 left-0 right-0 bg-neutral-900/90 backdrop-blur-lg border-b border-neutral-800">
          <div className="container-padding py-4 flex flex-col gap-4">
            <a href="#features" className="text-neutral-400 hover:text-white transition-colors">
              {language === "pt-BR" ? "Soluções" : "Solutions"}
            </a>
            <a href="#testimonials" className="text-neutral-400 hover:text-white transition-colors">
              {language === "pt-BR" ? "Casos de Sucesso" : "Case Studies"}
            </a>
            <a href="#pricing" className="text-neutral-400 hover:text-white transition-colors">
              {language === "pt-BR" ? "Serviços" : "Services"}
            </a>
            <Select onValueChange={handleLanguageChange} defaultValue={language}>
              <SelectTrigger className="w-[120px] bg-transparent border-neutral-700 text-white">
                <Globe className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="pt-BR">Português</SelectItem>
              </SelectContent>
            </Select>
            <button className="bg-white text-neutral-900 px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors">
              {language === "pt-BR" ? "Contate-nos" : "Contact Us"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;