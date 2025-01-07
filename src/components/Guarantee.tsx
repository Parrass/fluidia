import { Shield } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-16 container-padding">
      <div className="max-w-4xl mx-auto text-center">
        <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          30-Day Money-Back Guarantee
        </h2>
        <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
          Try our AI agent risk-free. If you're not completely satisfied within 30 days, we'll refund your investment - no questions asked.
        </p>
        <button className="bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors text-lg font-semibold">
          Get Started Risk-Free
        </button>
      </div>
    </section>
  );
};

export default Guarantee;