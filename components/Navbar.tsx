import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              JPA Seguros Integrales
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#inicio"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Inicio
            </a>
            <a
              href="#companias"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Compañías
            </a>
            <a
              href="#coberturas"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Coberturas
            </a>
            <a
              href="#cotizar"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Cotizar
            </a>
            <a
              href="#faq"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Preguntas
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              aria-label="Abrir menú"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 flex flex-col space-y-4">
          <a
            href="#inicio"
            onClick={() => setIsOpen(false)}
            className="text-slate-600 font-medium"
          >
            Inicio
          </a>
          <a
            href="#companias"
            onClick={() => setIsOpen(false)}
            className="text-slate-600 font-medium"
          >
            Compañías
          </a>
          <a
            href="#coberturas"
            onClick={() => setIsOpen(false)}
            className="text-slate-600 font-medium"
          >
            Coberturas
          </a>
          <a
            href="#cotizar"
            onClick={() => setIsOpen(false)}
            className="text-slate-600 font-medium"
          >
            Cotizar
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="text-slate-600 font-medium"
          >
            Preguntas
          </a>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium w-full">
            Contáctanos
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
