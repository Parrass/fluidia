import { Gift, BookOpen, Headphones, Zap } from "lucide-react";

const bonuses = [
  {
    icon: <BookOpen className="w-8 h-8 text-accent" />,
    title: "Treinamento Gratuito",
    description: "Treinamento completo para maximizar o potencial do seu agente de IA."
  },
  {
    icon: <Headphones className="w-8 h-8 text-accent" />,
    title: "Suporte Prioritário",
    description: "Acesso direto à nossa equipe técnica para assistência rápida."
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "Análise de Desempenho",
    description: "Insights detalhados e relatórios sobre o impacto do seu agente de IA."
  }
];

const Bonus = () => {
  return (
    <section className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Gift className="w-12 h-12 text-accent mr-4" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Bônus Exclusivos
          </h2>
        </div>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Receba estes extras valiosos ao começar hoje.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <div key={index} className="glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="mb-4">{bonus.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{bonus.title}</h3>
              <p className="text-neutral-600">{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonus;