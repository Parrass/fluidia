import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Choose Your Plan",
    description: "Select the AI agent package that best fits your business needs."
  },
  {
    number: "2",
    title: "Quick Setup",
    description: "We'll configure your AI agent to match your business requirements."
  },
  {
    number: "3",
    title: "Go Live",
    description: "Your AI agent starts working immediately, handling tasks 24/7."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 container-padding bg-neutral-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How It Works
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Get started with your AI agent in three simple steps.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="glass-card p-6 rounded-xl relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2 mt-2">{step.title}</h3>
              <p className="text-neutral-600">{step.description}</p>
              <CheckCircle2 className="w-6 h-6 text-accent mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;