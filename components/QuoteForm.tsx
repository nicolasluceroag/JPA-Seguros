import React, { useState, FormEvent } from "react";
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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // LÓGICA DE URL:
    // @ts-ignore  <--- ESTA LÍNEA MATA EL ERROR ROJO
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

    // DEBUG: Esta alerta te dirá la verdad cuando le des al botón
    alert("Conectando a: " + apiUrl);

    try {
      const response = await fetch(`${apiUrl}/api/cotizar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setLoading(false);
        setSubmitted(true);
      } else {
        throw new Error("Error al enviar el correo");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert(
        "Hubo un problema al enviar la solicitud. Por favor intenta de nuevo más tarde."
      );
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      insuranceType: InsuranceType.AUTO,
      details: "",
    });
  };

  return (
    <section id="cotizar" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-5 border border-slate-100">
          {/* Sidebar Azul */}
          <div className="lg:col-span-2 bg-blue-600 p-8 lg:p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-6">Cotiza ahora</h3>
              <p className="text-blue-100 mb-8">
                Completa el formulario y un asesor especializado analizará tu
                caso para ofrecerte las mejores opciones del mercado.
              </p>
              <ul className="space-y-4">
                {[
                  "Atención Personalizada",
                  "Respuesta Rápida",
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

          {/* Formulario */}
          <div className="lg:col-span-3 p-8 lg:p-12">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    aria-label="Tipo de seguro"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
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
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <span>Solicitar Cotización</span>
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
                  <p className="text-slate-700 leading-relaxed">
                    Muchas gracias por tu interés,{" "}
                    <strong>{formData.fullName}</strong>. Hemos recibido tus
                    datos correctamente. Uno de nuestros productores se pondrá
                    en contacto contigo a la brevedad para brindarte el
                    asesoramiento que necesitas.
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="text-blue-600 font-semibold hover:underline text-left"
                >
                  ← Volver al formulario
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
