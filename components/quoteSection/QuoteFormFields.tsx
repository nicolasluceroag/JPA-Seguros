import React, { FormEvent } from "react";
// OJO: Ajusta las rutas "../../" según dónde tengas types y constants
import { QuoteRequest, InsuranceType } from "../../types";
import { INSURANCE_OPTIONS } from "../../constants";
import { FormInput, FormSelect, FormCheckbox } from "./FormInputs";

interface Props {
  formData: QuoteRequest;
  loading: boolean;
  onSubmit: (e: FormEvent) => void;
  // Acepta strings y booleanos
  onChange: (field: keyof QuoteRequest, value: string | boolean) => void;
}

export const QuoteFormFields: React.FC<Props> = ({
  formData,
  loading,
  onSubmit,
  onChange,
}) => {
  // Detectamos si seleccionó "Auto"
  const isAuto = formData.insuranceType === InsuranceType.AUTO;

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* --- SECCIÓN 1: DATOS PERSONALES --- */}
      <div className="grid sm:grid-cols-2 gap-6">
        <FormInput
          label="Nombre Completo"
          placeholder="Ingrese su nombre"
          required
          value={formData.fullName}
          onChange={(e) => onChange("fullName", e.target.value)}
        />
        <FormInput
          label="Teléfono"
          type="number"
          placeholder="Ingrese su teléfono"
          required
          value={formData.phone}
          onChange={(e) => onChange("phone", e.target.value)}
        />
        <FormInput
          label="DNI"
          type="number"
          placeholder="Ingrese su DNI"
          required
          value={formData.dni}
          onChange={(e) => onChange("dni", e.target.value)}
        />
        <FormInput
          label="Localidad"
          placeholder="Ciudad / Provincia"
          required
          value={formData.location}
          onChange={(e) => onChange("location", e.target.value)}
        />
      </div>

      <FormInput
        label="Correo Electrónico"
        type="email"
        placeholder="Ingrese su correo"
        required
        value={formData.email}
        onChange={(e) => onChange("email", e.target.value)}
      />

      {/* --- SECCIÓN 2: TIPO DE SEGURO --- */}
      <FormSelect
        label="¿Qué deseas asegurar?"
        required
        value={formData.insuranceType}
        options={INSURANCE_OPTIONS}
        onChange={(e) => onChange("insuranceType", e.target.value)}
      />

      {/* --- SECCIÓN 3: DATOS DEL VEHÍCULO (Condicional) --- */}
      {isAuto && (
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 space-y-6 animate-fadeIn mt-4">
          <h4 className="font-bold text-slate-700 border-b border-slate-300 pb-2">
            Datos del Vehículo
          </h4>

          <div className="grid sm:grid-cols-2 gap-6">
            <FormInput
              label="Marca"
              placeholder="Ej: Ford, Toyota"
              required={isAuto} // Obligatorio solo si el bloque es visible
              value={formData.brand}
              onChange={(e) => onChange("brand", e.target.value)}
            />
            <FormInput
              label="Año de Fabricación"
              type="number"
              placeholder="Ej: 2022"
              required={isAuto}
              value={formData.modelYear}
              onChange={(e) => onChange("modelYear", e.target.value)}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <FormInput
              label="Versión"
              placeholder="Ej: Titanium 1.5"
              required={isAuto}
              value={formData.version}
              onChange={(e) => onChange("version", e.target.value)}
            />
            <FormInput
              label="Patente"
              placeholder="Ej: AA123BB"
              required={isAuto}
              value={formData.plate}
              onChange={(e) => onChange("plate", e.target.value)}
            />
          </div>

          <FormCheckbox
            label="¿Posee equipo de GNC?"
            checked={formData.hasGNC}
            onChange={(e) => onChange("hasGNC", e.target.checked)}
          />
        </div>
      )}

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
            <span>Enviando...</span>
          </>
        ) : (
          <span>Solicitar Cotización</span>
        )}
      </button>
    </form>
  );
};
