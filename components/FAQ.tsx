import React, { useState } from "react";
import { FAQS } from "../constants";

const FAQ: React.FC = () => {
  // 1. Estado inicial en 'null' para que todos arranquen cerrados
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold text-blue-600 uppercase tracking-widest mb-4">
            Preguntas frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border border-slate-200 rounded-2xl overflow-hidden bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200 shadow-md"
                    : "hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-slate-50 cursor-pointer"
                >
                  <span
                    className={`font-bold transition-colors duration-300 ${
                      isOpen ? "text-blue-900" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <svg
                    className={`h-5 w-5 text-slate-400 transition-transform duration-500 ease-in-out ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* 2. Animación usando Grid Rows para una transición perfecta de altura */}
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
