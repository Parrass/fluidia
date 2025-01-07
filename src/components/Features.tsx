import { Brain, Cpu, BarChart, Workflow } from "lucide-react";

const features = [
  {
    title: "AI Strategy Consulting",
    description: "Custom AI roadmaps and strategies tailored to your business objectives and industry challenges.",
    icon: Brain,
  },
  {
    title: "Machine Learning Solutions",
    description: "Advanced ML models and algorithms that transform your data into actionable insights.",
    icon: Cpu,
  },
  {
    title: "Predictive Analytics",
    description: "Harness the power of data with our predictive modeling and analytics solutions.",
    icon: BarChart,
  },
  {
    title: "Process Automation",
    description: "Intelligent automation solutions that streamline operations and boost efficiency.",
    icon: Workflow,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Comprehensive AI Solutions for Modern Businesses
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          From strategy to implementation, we provide end-to-end AI services that drive real business value.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
              </div>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;