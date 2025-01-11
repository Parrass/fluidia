import { CalendarDays, FileText, Users } from "lucide-react";
import { Button } from "./ui/button";

const steps = [
  {
    number: "1",
    title: "Consultoria gratuita",
    description: "Fale com um engenheiro real (normalmente +R$500/hora) e discuta os requisitos e objetivos do seu projeto. Ouviremos atentamente para entender sua visão e objetivos.",
    icon: Users,
  },
  {
    number: "2",
    title: "Escopo e Proposta",
    description: "Com base na sua consulta, forneceremos um escopo detalhado, incluindo etapas detalhadas, cronograma, orçamento e algumas possíveis modificações ou extensões ao seu sistema.",
    icon: FileText,
  },
  {
    number: "3",
    title: "Início do projeto",
    description: "Com a proposta acertada, agendaremos uma reunião inicial para apresentar nossa equipe e começarmos de verdade.",
    icon: CalendarDays,
  }
];

const HowItWorks = () => {
  const handleScroll = () => {
    const element = document.getElementById('schedule');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-blue-50/50 -z-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2">Etapas</p>
          <h2 className="text-4xl font-bold mb-4">Como funciona</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A automação é complicada – mas implementá-la não precisa ser.
            Simplificaremos o processo para você em 3 etapas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex">
              <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full w-full">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl mb-6">
                  {step.number}
                </div>
                <step.icon className="w-7 h-7 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 flex-grow">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={handleScroll}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 px-8 py-6 text-lg"
          >
            Agendar uma chamada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;