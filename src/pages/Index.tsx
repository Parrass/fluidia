import React from "react";
import Header from "@/components/Header";
import ClinicPresentation from "@/components/ClinicPresentation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main>
        <ClinicPresentation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;