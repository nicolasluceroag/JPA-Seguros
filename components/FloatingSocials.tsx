import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

const FloatingSocials: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/1234567890" // Reemplaza con tu link de API de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/tu_usuario"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Ir a Instagram"
      >
        <FaInstagram size={24} />
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/tu_pagina"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Ir a Facebook"
      >
        <FaFacebookF size={24} />
      </a>
    </div>
  );
};

export default FloatingSocials;
