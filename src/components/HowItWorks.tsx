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
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <p className="text-blue-600 font-medium mb-2">Etapas</p>
          <h2 className="text-4xl font-bold mb-4">Como funciona</h2>
          <p className="text-gray-600 max-w-2xl">
            A automação é complicada – mas implementá-la não precisa ser.
            Simplificaremos o processo para você em 3 etapas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-lg shadow-sm relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <step.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <Button 
                  variant="outline" 
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  onClick={() => window.open("https://cal.com/luiz-parras/reuniao-de-automacoes-com-ia", "_blank")}
                >
                  {step.buttonText}
                </Button>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-8 border-t-2 border-dashed border-blue-300 z-0" style={{ transform: 'translateX(-50%)' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;