import { AlertCircle, Clock, UserX } from "lucide-react";

const problems = [
  {
    icon: <Clock className="w-8 h-8 text-accent" />,
    title: "Slow Response Times",
    description: "Manual processes and limited availability lead to delayed customer responses and lost opportunities."
  },
  {
    icon: <UserX className="w-8 h-8 text-accent" />,
    title: "Lead Loss",
    description: "Without 24/7 engagement, potential customers slip away during off-hours and peak times."
  },
  {
    icon: <AlertCircle className="w-8 h-8 text-accent" />,
    title: "Manual Processes",
    description: "Repetitive tasks consume valuable time that could be spent on strategic business growth."
  }
];

const Problems = () => {
  return (
    <section className="py-16 container-padding bg-neutral-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Common Business Challenges
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Businesses today face critical operational hurdles that impact growth and efficiency.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
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