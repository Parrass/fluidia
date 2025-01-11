import { ShoppingCart, Calendar, HelpCircle, MessageCircle } from "lucide-react";

const features = [
  {
    icon: <ShoppingCart className="w-12 h-12 text-accent" />,
    title: "Envio de Produtos",
    description: "Automatize o processo de vendas com envio de catálogos, preços e finalização de pedidos diretamente pelo WhatsApp."
  },
  {
    icon: <Calendar className="w-12 h-12 text-accent" />,
    title: "Agendamentos",
    description: "Permita que seus clientes agendem consultas, reuniões ou serviços de forma automatizada, 24 horas por dia."
  },
  {
    icon: <HelpCircle className="w-12 h-12 text-accent" />,
    title: "Resolução de Dúvidas",
    description: "Respostas instantâneas para as perguntas mais frequentes dos seus clientes, melhorando a satisfação e reduzindo o tempo de espera."
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-accent" />,
    title: "Encaminhamentos",
    description: "Direcionamento inteligente das conversas para os departamentos ou especialistas adequados quando necessário."
  }
];

const VirtualAssistantFeatures = () => {
  return (
    <section className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Funcionalidades do Assistente Virtual
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Automatize processos e melhore o atendimento com recursos poderosos via WhatsApp
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VirtualAssistantFeatures;