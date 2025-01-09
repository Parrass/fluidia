import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Escolha seu Plano",
    description: "Selecione o pacote de agente de IA que melhor atende às necessidades do seu negócio."
  },
  {
    number: "2",
    title: "Configuração Rápida",
    description: "Configuraremos seu agente de IA de acordo com os requisitos do seu negócio."
  },
  {
    number: "3",
    title: "Ativação",
    description: "Seu agente de IA começa a trabalhar imediatamente, gerenciando tarefas 24/7."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 container-padding bg-white/90 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Como Funciona
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Comece com seu agente de IA em três etapas simples.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="glass-card p-6 rounded-xl relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2 mt-2">{step.title}</h3>
              <p className="text-neutral-600">{step.description}</p>
              <CheckCircle2 className="w-6 h-6 text-accent mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;