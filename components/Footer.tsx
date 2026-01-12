import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10">
      <div className="p-8 flex flex-col md:flex-row justify-between items-center text-sm">
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
    </footer>
  );
};

export default Footer;
