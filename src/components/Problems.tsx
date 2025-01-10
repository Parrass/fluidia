import { AlertCircle, Clock, UserX } from "lucide-react";

const problems = [
  {
    icon: <Clock className="w-8 h-8 text-accent" />,
    title: "Tempo de Resposta Lento",
    description: "Processos manuais e disponibilidade limitada levam a respostas atrasadas e oportunidades perdidas."
  },
  {
    icon: <UserX className="w-8 h-8 text-accent" />,
    title: "Perda de Leads",
    description: "Sem engajamento 24/7, clientes potenciais são perdidos durante horários não comerciais e picos de demanda."
  },
  {
    icon: <AlertCircle className="w-8 h-8 text-accent" />,
    title: "Processos Manuais",
    description: "Tarefas repetitivas consomem tempo valioso que poderia ser usado no crescimento estratégico do negócio."
  }
];

const Problems = () => {
  return (
    <section className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Desafios Comuns dos Negócios
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          As empresas hoje enfrentam obstáculos operacionais críticos que impactam o crescimento e a eficiência.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-neutral-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;