import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Schedule = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"reuniao-de-automacoes-com-ia"});
      cal("ui", {
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/50 -z-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Agende uma Consulta Gratuita</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha o melhor horário para conversarmos sobre como podemos ajudar sua empresa a crescer com automação inteligente.
          </p>
        </div>
        <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-4">
          <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/10] w-full">
            <Cal
              namespace="reuniao-de-automacoes-com-ia"
              calLink="luiz-parras/reuniao-de-automacoes-com-ia"
              style={{width:"100%", height:"100%", borderRadius: "1rem"}}
              config={{
                layout: "month_view",
                hideEventTypeDetails: "false"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;