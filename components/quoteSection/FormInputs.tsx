import React from "react";

// Estilos comunes
const INPUT_STYLES =
  "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition";
const LABEL_STYLES = "text-sm font-semibold text-slate-700 mb-2 block";

// 1. Input (Texto, Número, Email)
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormInput: React.FC<InputProps> = ({
  label,
  className,
  ...props
}) => (
  <div className="space-y-2">
    <label className={LABEL_STYLES}>{label}</label>
    <input className={`${INPUT_STYLES} ${className || ""}`} {...props} />
  </div>
);

// 2. Select (Desplegable)
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
}

export const FormSelect: React.FC<SelectProps> = ({
  label,
  options,
  ...props
}) => (
  <div className="space-y-2">
    <label className={LABEL_STYLES}>{label}</label>
    <select className={INPUT_STYLES} {...props}>
      <option value="" disabled>
        -- Elegir opción --
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

// 3. Checkbox (Casilla de verificación)
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormCheckbox: React.FC<CheckboxProps> = ({
  label,
  className,
  ...props
}) => (
  <div className="flex items-center gap-2 py-2">
    <label
      className="text-sm font-semibold text-slate-700 select-none cursor-pointer"
      onClick={(e) => {
        const input = (e.target as HTMLElement)
          .nextElementSibling as HTMLInputElement;
        if (input) input.click();
      }}
    >
      {label}
    </label>

    <input
      type="checkbox"
      className={`h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 ${
        className || ""
      }`}
      {...props}
    />
  </div>
);
