import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o processo de implementação da IA?",
    answer: "O processo começa com uma consultoria gratuita onde analisamos suas necessidades. Em seguida, desenvolvemos um plano personalizado e implementamos a solução de forma gradual, garantindo uma transição suave."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "A maioria dos clientes começa a ver resultados nas primeiras semanas após a implementação. O impacto completo geralmente é observado dentro de 2-3 meses."
  },
  {
    question: "Preciso ter conhecimento técnico?",
    answer: "Não, nossa equipe fornece todo o suporte necessário. Oferecemos treinamento completo e documentação detalhada para sua equipe."
  },
  {
    question: "Qual é o investimento necessário?",
    answer: "O investimento varia de acordo com suas necessidades específicas. Oferecemos planos flexíveis que se adaptam ao seu orçamento e escala de operação."
  },
  {
    question: "Como é feito o suporte técnico?",
    answer: "Fornecemos suporte técnico 24/7 através de múltiplos canais: chat, email e telefone. Nossa equipe está sempre disponível para ajudar."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossa solução de IA
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-card px-6 rounded-xl border-none"
            >
              <AccordionTrigger className="hover:no-underline py-4 group">
                <span className="text-left font-semibold group-hover:text-accent transition-colors">
                  {faq.question}
                </span>
                <ChevronDown className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;