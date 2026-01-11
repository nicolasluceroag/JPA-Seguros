
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Preguntas Frecuentes</h2>
          <p className="text-slate-600">Todo lo que necesitas saber sobre nuestras coberturas y procesos.</p>
        </div>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition"
              >
                <span className="font-bold text-slate-800">{faq.question}</span>
                <svg 
                  className={`h-5 w-5 text-slate-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
