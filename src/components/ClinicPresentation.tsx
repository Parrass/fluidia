import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Clock, Shield, Award, DollarSign, CheckCircle, Users, Brain, BadgeCheck, Timer, Phone } from "lucide-react";

const slides = [
  {
    title: "Revolucione o Atendimento da sua Clínica",
    subtitle: "Otimize processos e encante pacientes com Inteligência Artificial",
    icon: <Brain className="w-12 h-12 text-accent mb-4" />,
    gradient: "bg-gradient-to-r from-accent to-accent/70"
  },
  {
    title: "Problemas Comuns",
    content: [
      "Longas filas de espera",
      "Atrasos no atendimento",
      "Falta de acompanhamento",
      "Comunicação ineficiente"
    ],
    icon: <Clock className="w-12 h-12 text-red-500 mb-4" />,
    gradient: "bg-gradient-to-r from-red-500/20 to-red-600/20"
  },
  {
    title: "Nossa Solução",
    subtitle: "Agente de IA Especializado para Clínicas",
    content: ["Automatização inteligente", "Gestão personalizada", "Atendimento 24/7"],
    icon: <Shield className="w-12 h-12 text-green-500 mb-4" />,
    gradient: "bg-gradient-to-r from-green-500/20 to-green-600/20"
  },
  {
    title: "Benefícios Claros",
    content: [
      "Redução de 70% no tempo de espera",
      "Satisfação do paciente aumentada",
      "Processos otimizados",
      "Economia de recursos"
    ],
    icon: <CheckCircle className="w-12 h-12 text-blue-500 mb-4" />,
    gradient: "bg-gradient-to-r from-blue-500/20 to-blue-600/20"
  },
  {
    title: "Como Funciona",
    content: [
      "Integração simples",
      "Treinamento da equipe",
      "Personalização para sua clínica",
      "Suporte contínuo"
    ],
    icon: <Users className="w-12 h-12 text-purple-500 mb-4" />,
    gradient: "bg-gradient-to-r from-purple-500/20 to-purple-600/20"
  },
  {
    title: "Resultados Tangíveis",
    content: [
      "Aumento de 40% na eficiência",
      "Redução de 50% em custos operacionais",
      "95% de satisfação dos pacientes",
      "ROI positivo em 3 meses"
    ],
    icon: <Award className="w-12 h-12 text-yellow-500 mb-4" />,
    gradient: "bg-gradient-to-r from-yellow-500/20 to-yellow-600/20"
  },
  {
    title: "Diferenciais Exclusivos",
    content: [
      "IA especializada em saúde",
      "Integração com sistemas existentes",
      "Personalização avançada",
      "Suporte premium"
    ],
    icon: <BadgeCheck className="w-12 h-12 text-indigo-500 mb-4" />,
    gradient: "bg-gradient-to-r from-indigo-500/20 to-indigo-600/20"
  },
  {
    title: "Bônus Especiais",
    content: [
      "Treinamento completo da equipe",
      "Dashboard personalizado",
      "Relatórios avançados",
      "Consultoria estratégica"
    ],
    icon: <DollarSign className="w-12 h-12 text-emerald-500 mb-4" />,
    gradient: "bg-gradient-to-r from-emerald-500/20 to-emerald-600/20"
  },
  {
    title: "Garantia Sem Risco",
    content: [
      "30 dias de teste gratuito",
      "Suporte dedicado",
      "Satisfação garantida",
      "Cancelamento flexível"
    ],
    icon: <Shield className="w-12 h-12 text-teal-500 mb-4" />,
    gradient: "bg-gradient-to-r from-teal-500/20 to-teal-600/20"
  },
  {
    title: "Oferta Limitada",
    content: [
      "50% de desconto nos 3 primeiros meses",
      "Setup gratuito",
      "Migração de dados incluída",
      "Vagas limitadas"
    ],
    icon: <Timer className="w-12 h-12 text-rose-500 mb-4" />,
    gradient: "bg-gradient-to-r from-rose-500/20 to-rose-600/20"
  },
  {
    title: "Entre em Contato Agora",
    subtitle: "Transforme sua clínica hoje mesmo!",
    content: [
      "📱 (11) 99999-9999",
      "📧 contato@clinica.ai",
      "Vagas limitadas para este mês"
    ],
    icon: <Phone className="w-12 h-12 text-accent mb-4" />,
    gradient: "bg-gradient-to-r from-accent to-accent/70"
  }
];

const ClinicPresentation = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className={`${slide.gradient} border-none shadow-xl`}>
                <CardContent className="flex flex-col items-center justify-center min-h-[500px] p-8 text-center">
                  {slide.icon}
                  <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                  {slide.subtitle && (
                    <p className="text-xl mb-6 text-neutral-700">{slide.subtitle}</p>
                  )}
                  {slide.content && (
                    <ul className="space-y-3">
                      {slide.content.map((item, i) => (
                        <li key={i} className="text-lg text-neutral-800">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ClinicPresentation;