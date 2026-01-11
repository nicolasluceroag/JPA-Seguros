
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Coverages from './components/Coverages';
import QuoteForm from './components/QuoteForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Coverages />
        <QuoteForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
