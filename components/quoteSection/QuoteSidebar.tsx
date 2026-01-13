// components/QuoteSidebar.tsx
import React from "react";

export const QuoteSidebar: React.FC = () => {
  const benefits = [
    "Atención Personalizada",
    "Respuesta Rápida",
    "Múltiples Opciones",
  ];

  return (
    <div className="lg:col-span-2 bg-blue-600 p-8 lg:p-12 text-white flex flex-col justify-between">
      <div>
        <h3 className="text-3xl font-bold mb-6">Cotiza ahora</h3>
        <p className="text-blue-100 mb-8">
          Completa el formulario y un asesor especializado analizará tu caso
          para ofrecerte las mejores opciones del mercado.
        </p>
        <ul className="space-y-4">
          {benefits.map((item, i) => (
            <li key={i} className="flex items-center space-x-3">
              {/* Puedes usar íconos de librería aquí como Lucide o Heroicons */}
              <svg
                className="h-5 w-5 text-blue-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
