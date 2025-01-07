import { TrendingUp, Clock, Target } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="w-12 h-12 text-accent" />,
    title: "Increased Sales",
    description: "Convert more leads with instant responses and personalized interactions."
  },
  {
    icon: <Clock className="w-12 h-12 text-accent" />,
    title: "Save Time",
    description: "Automate routine tasks and focus on strategic business growth."
  },
  {
    icon: <Target className="w-12 h-12 text-accent" />,
    title: "Better Efficiency",
    description: "Streamline operations and reduce manual workload significantly."
  }
];

const Benefits = () => {
  return (
    <section className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Transform Your Business
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Experience the power of AI-driven automation and growth.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-neutral-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;