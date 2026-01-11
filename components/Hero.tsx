import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-blue-700 text-sm font-semibold uppercase tracking-wider">
                Asesoría 100% Digital
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Protege lo que más <span className="text-blue-600">valoras</span>{" "}
              hoy.
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Encuentra el seguro ideal con las mejores compañías del mercado.
              Nuestra tecnología analiza tus necesidades para ofrecerte
              cobertura personalizada al mejor precio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cotizar"
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-center hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:scale-[1.02]"
              >
                Obtener Cotización Gratis
              </a>
              <a
                href="#coberturas"
                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-center hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                Ver Coberturas
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-[2rem] rotate-3 opacity-10"></div>
            <img
              src="https://picsum.photos/800/600?random=20"
              alt="Family insurance"
              className="relative rounded-[2rem] shadow-2xl z-10 w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
