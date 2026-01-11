import React from "react";
import { PARTNERS } from "../constants";

const Partners: React.FC = () => {
  return (
    <section id="companias" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
          Nuestros Aliados
        </h2>
        <h3 className="text-3xl font-bold text-slate-900 mb-12">
          Respaldados por las mejores compañías
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-center">
          {PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="group relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-full object-contain filter drop-shadow-sm group-hover:scale-110 transition"
              />
              <p className="text-xs font-medium text-slate-400 mt-2 opacity-0 group-hover:opacity-100 transition">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
