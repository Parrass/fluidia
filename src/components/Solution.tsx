import { Bot, Clock, Zap } from "lucide-react";

const features = [
  {
    icon: <Bot className="w-8 h-8 text-accent" />,
    title: "Intelligent Automation",
    description: "Our AI agents handle routine tasks and customer interactions automatically."
  },
  {
    icon: <Clock className="w-8 h-8 text-accent" />,
    title: "24/7 Availability",
    description: "Never miss an opportunity with round-the-clock customer engagement."
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "Easy Integration",
    description: "Seamlessly integrate our AI agents with your existing business systems."
  }
];

const Solution = () => {
  return (
    <section className="py-16 container-padding bg-primary text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Meet Your AI Solution
        </h2>
        <p className="text-neutral-300 text-center mb-12 max-w-2xl mx-auto">
          Transform your business operations with our advanced AI agents.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;