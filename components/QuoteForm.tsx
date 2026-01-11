import React, { useState } from "react";
import { InsuranceType, QuoteRequest } from "../types";
import { INSURANCE_OPTIONS } from "../constants";

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteRequest>({
    fullName: "",
    email: "",
    phone: "",
    insuranceType: InsuranceType.AUTO,
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<string | null>(null);

  return (
    <section id="cotizar" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-5 border border-slate-100">
          <div className="lg:col-span-2 bg-blue-600 p-8 lg:p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-6">Cotiza ahora</h3>
              <p className="text-blue-100 mb-8">
                Completa el formulario y recibe una asesoría preliminar por
                nuestra IA en segundos.
              </p>
              <ul className="space-y-4">
                {[
                  "Atención Personalizada",
                  "Respuesta en < 15 min",
                  "Múltiples Opciones",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
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

          <div className="lg:col-span-3 p-8 lg:p-12">
            {!advice ? (
              <form onSubmit={""} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Nombre Completo
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      placeholder="Ingrese su nombre"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Teléfono
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="Ingrese su teléfono"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Correo Electrónico
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Ingrese su correo electrónico"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    ¿Qué deseas asegurar?
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition appearance-none cursor-pointer"
                    value={formData.insuranceType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        insuranceType: e.target.value as InsuranceType,
                      })
                    }
                  >
                    {INSURANCE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Detalles adicionales
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition h-32"
                    placeholder="Cuéntanos un poco más sobre lo que necesitas (ej. Modelo del auto, valor comercial, etc.)"
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                  ></textarea>
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg shadow-blue-200 flex items-center justify-center space-x-2 ${
                    loading
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-3"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Analizando...</span>
                    </>
                  ) : (
                    <span>Cotizar con IA de Seguros Pro</span>
                  )}
                </button>
              </form>
            ) : (
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
                  <h5 className="text-sm font-bold text-blue-600 uppercase mb-4 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Recomendación Inteligente Instantánea
                  </h5>
                  <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed whitespace-pre-line">
                    {advice}
                  </div>
                </div>
                <button
                  onClick={() => {
                    setAdvice(null);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      insuranceType: InsuranceType.AUTO,
                      details: "",
                    });
                  }}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  ← Solicitar otra cotización
                </button>
                <p className="mt-8 text-sm text-slate-400 text-center">
                  Un asesor humano validará estos datos y te contactará en
                  breve.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
