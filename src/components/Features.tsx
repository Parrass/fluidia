import { Brain, Cpu, BarChart, Workflow } from "lucide-react";

const features = [
  {
    title: "Consultoria em Estratégia de IA",
    description: "Roteiros e estratégias de IA personalizados para seus objetivos de negócio e desafios do setor.",
    icon: Brain,
  },
  {
    title: "Soluções de Machine Learning",
    description: "Modelos e algoritmos avançados de ML que transformam seus dados em insights acionáveis.",
    icon: Cpu,
  },
  {
    title: "Análise Preditiva",
    description: "Aproveite o poder dos dados com nossas soluções de modelagem e análise preditiva.",
    icon: BarChart,
  },
  {
    title: "Automação de Processos",
    description: "Soluções inteligentes de automação que otimizam operações e aumentam a eficiência.",
    icon: Workflow,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 container-padding bg-gradient-to-br from-neutral-50 via-accent/5 to-neutral-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Soluções Abrangentes de IA para Empresas Modernas
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Da estratégia à implementação, fornecemos serviços completos de IA que geram valor real para o negócio.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
              </div>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;