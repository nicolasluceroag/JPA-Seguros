import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Coverages from "./components/Coverages";
import QuoteForm from "./components/quoteSection/QuoteSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingSocials from "./components/FloatingSocials";

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Coverages />
        <QuoteForm />
        <FAQ />
      </main>
      <Footer />
      <FloatingSocials />
    </div>
  );
};

export default App;
