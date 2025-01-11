import { TrendingUp, Clock, Target } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="w-12 h-12 text-accent" />,
    title: "Aumento nas Vendas",
    description: "Converta mais leads com respostas instantâneas e interações personalizadas."
  },
  {
    icon: <Clock className="w-12 h-12 text-accent" />,
    title: "Economia de Tempo",
    description: "Automatize tarefas rotineiras e foque no crescimento estratégico do negócio."
  },
  {
    icon: <Target className="w-12 h-12 text-accent" />,
    title: "Melhor Eficiência",
    description: "Otimize operações e reduza significativamente a carga de trabalho manual."
  }
];

const Benefits = () => {
  return (
    <section id="services" className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Transforme Seu Negócio
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Experimente o poder da automação e crescimento impulsionados por IA.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-neutral-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
