import { Bot, Clock, Zap } from "lucide-react";

const features = [
  {
    icon: <Bot className="w-8 h-8 text-accent" />,
    title: "Automação Inteligente",
    description: "Nossos agentes de IA lidam com tarefas rotineiras e interações com clientes automaticamente."
  },
  {
    icon: <Clock className="w-8 h-8 text-accent" />,
    title: "Disponibilidade 24/7",
    description: "Nunca perca uma oportunidade com engajamento contínuo com o cliente."
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "Integração Fácil",
    description: "Integre perfeitamente nossos agentes de IA com seus sistemas existentes."
  }
];

const Solution = () => {
  return (
    <section className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Conheça Sua Solução de IA
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Transforme suas operações de negócio com nossos agentes de IA avançados.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
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

export default Solution;