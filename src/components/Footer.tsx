const Footer = () => {
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container-padding py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleScroll('problems')} className="text-neutral-300 hover:text-white transition-colors">Desafios</button></li>
              <li><button onClick={() => handleScroll('solution')} className="text-neutral-300 hover:text-white transition-colors">Soluções</button></li>
              <li><button onClick={() => handleScroll('services')} className="text-neutral-300 hover:text-white transition-colors">Benefícios</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleScroll('schedule')} className="text-neutral-300 hover:text-white transition-colors">Agendar</button></li>
              <li><button onClick={() => handleScroll('bonus')} className="text-neutral-300 hover:text-white transition-colors">Bônus</button></li>
              <li><button onClick={() => handleScroll('faq')} className="text-neutral-300 hover:text-white transition-colors">FAQ</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleScroll('schedule')} className="text-neutral-300 hover:text-white transition-colors">Agendar Consulta</button></li>
              <li><a href="mailto:contato@fluidai.com" className="text-neutral-300 hover:text-white transition-colors">Email</a></li>
              <li><a href="tel:+5511999999999" className="text-neutral-300 hover:text-white transition-colors">Telefone</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Termos</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Segurança</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-neutral-800">
          <p className="text-neutral-400 text-center">
            © 2024 Fluid AI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;