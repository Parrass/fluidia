import { Shield } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-16 container-padding">
      <div className="max-w-4xl mx-auto text-center">
        <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Garantia de 30 Dias
        </h2>
        <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
          Experimente nosso agente de IA sem riscos. Se você não estiver completamente satisfeito em 30 dias, devolvemos seu investimento - sem perguntas.
        </p>
        <button className="bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors text-lg font-semibold">
          Comece Sem Riscos
        </button>
      </div>
    </section>
  );
};

export default Guarantee;