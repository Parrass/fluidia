const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-padding py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Estratégia de IA</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Machine Learning</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Automação de Processos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Casos de Sucesso</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Documentação</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Blog</a></li>
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