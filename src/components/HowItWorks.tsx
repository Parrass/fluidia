import { CalendarDays, FileText, Users } from "lucide-react";
import { Button } from "./ui/button";

const steps = [
  {
    number: "1",
    title: "Consultoria gratuita",
    description: "Fale com um engenheiro de sistemas real (normalmente +R$500/hora) e discuta os requisitos e objetivos do seu projeto. Ouviremos atentamente para entender sua visão e objetivos.",
    icon: Users,
    buttonText: "Agendar uma chamada"
  },
  {
    number: "2",
    title: "Escopo e Proposta",
    description: "Com base na sua consulta, forneceremos um escopo detalhado, incluindo etapas detalhadas, cronograma, orçamento e algumas possíveis modificações ou extensões ao seu sistema.",
    icon: FileText,
    buttonText: "Agendar uma chamada"
  },
  {
    number: "3",
    title: "Início do projeto",
    description: "Com a proposta acertada, agendaremos uma reunião inicial para apresentar nossa equipe e começarmos de verdade.",
    icon: CalendarDays,
    buttonText: "Agendar uma chamada"
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

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl">
                    {step.number}
                  </div>
                  <step.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-8">{step.description}</p>
                <Button 
                  onClick={handleScroll}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300"
                >
                  {step.buttonText}
                </Button>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-8 border-t-2 border-dashed border-blue-300 z-0 transform -translate-y-1/2 translate-x-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;