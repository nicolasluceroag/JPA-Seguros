import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-white mb-6 block">
              Seguros APG
            </span>
            <p className="max-w-xs leading-relaxed">
              Transformando la industria del seguro con tecnología e
              inteligencia artificial. Tu bienestar es nuestro mayor compromiso.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li>
                <a href="#inicio" className="hover:text-blue-400 transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#companias" className="hover:text-blue-400 transition">
                  Compañías
                </a>
              </li>
              <li>
                <a href="#cotizar" className="hover:text-blue-400 transition">
                  Cotizar
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 Seguros APG. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition">
              Facebook
            </span>
            <span className="hover:text-white cursor-pointer transition">
              LinkedIn
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Instagram
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
