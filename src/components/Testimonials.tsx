const testimonials = [
  {
    quote: "As soluções de machine learning da Fluid AI revolucionaram nossas capacidades de análise de dados. Os insights que obtivemos são inestimáveis.",
    author: "Sarah Chen",
    role: "CTO da TechVision",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
  },
  {
    quote: "A consultoria em estratégia de IA deles nos ajudou a identificar e implementar as soluções perfeitas para as necessidades do nosso negócio.",
    author: "Mark Thompson",
    role: "CEO da DataSync",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote: "As soluções de automação de processos da Fluid AI melhoraram significativamente nossa eficiência operacional.",
    author: "Elena Rodriguez",
    role: "COO da GlobalTech",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 container-padding bg-neutral-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Histórias de Sucesso dos Clientes
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Veja como nossas soluções de IA estão transformando empresas em diferentes setores.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <p className="text-neutral-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;