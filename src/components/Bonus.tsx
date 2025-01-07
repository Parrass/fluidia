import { Gift, BookOpen, Headphones, Zap } from "lucide-react";

const bonuses = [
  {
    icon: <BookOpen className="w-8 h-8 text-accent" />,
    title: "Free Training",
    description: "Comprehensive training on maximizing your AI agent's potential."
  },
  {
    icon: <Headphones className="w-8 h-8 text-accent" />,
    title: "Priority Support",
    description: "Direct access to our technical team for quick assistance."
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "Performance Analytics",
    description: "Detailed insights and reporting on your AI agent's impact."
  }
];

const Bonus = () => {
  return (
    <section className="py-16 container-padding bg-primary text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Gift className="w-12 h-12 text-accent mr-4" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Exclusive Bonuses
          </h2>
        </div>
        <p className="text-neutral-300 text-center mb-12 max-w-2xl mx-auto">
          Get these valuable extras when you start today.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="mb-4">{bonus.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{bonus.title}</h3>
              <p className="text-neutral-300">{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonus;