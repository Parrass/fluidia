import { CalendarDays, FileText, Users } from "lucide-react";
import { Button } from "./ui/button";

const steps = [
  {
    number: "1",
    title: "Consultoria gratuita",
    description: "Fale com um engenheiro de sistemas real (normalmente +R$500/hora) e discuta os requisitos e objetivos do seu projeto. Ouviremos atentamente para entender sua visão e objetivos.",
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

        <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={index} className="relative flex-1 px-4 mb-8 md:mb-0">
              <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50/50 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl mb-6">
                  {step.number}
                </div>
                <step.icon className="w-7 h-7 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-8">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-2 z-0">
                  <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-indigo-600 transform translate-x-4" />
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-indigo-600" />
                </div>
              )}
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