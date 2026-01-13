// components/QuoteSuccess.tsx
import React from "react";

interface Props {
  fullName: string;
  onReset: () => void;
}

export const QuoteSuccess: React.FC<Props> = ({ fullName, onReset }) => {
  return (
    <div className="h-full flex flex-col justify-center animate-fadeIn">
      <div className="flex items-center space-x-3 text-green-600 mb-6">
        <div className="p-2 bg-green-100 rounded-full">
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
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h4 className="text-xl font-bold">¡Solicitud recibida!</h4>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
        <p className="text-slate-700 leading-relaxed">
          Muchas gracias por tu interés, <strong>{fullName}</strong>. Hemos
          recibido tus datos correctamente.
        </p>
      </div>

      <button
        onClick={onReset}
        className="text-blue-600 font-semibold hover:underline text-left"
      >
        ← Volver al formulario
      </button>
    </div>
  );
};
