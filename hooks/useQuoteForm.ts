/// <reference types="vite/client" />
import { useState, FormEvent } from "react";
import { InsuranceType, QuoteRequest } from "../types";

export const useQuoteForm = () => {
  const [formData, setFormData] = useState<QuoteRequest>({
    fullName: "",
    email: "",
    phone: "",
    dni: "",
    location: "",
    // Inicializamos insuranceType vacío para obligar al usuario a elegir
    insuranceType: "" as unknown as InsuranceType,

    // Campos opcionales de auto inicializados
    brand: "",
    modelYear: "",
    version: "",
    plate: "",
    hasGNC: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

    try {
      const response = await fetch(`${apiUrl}/api/cotizar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Error al enviar");
      }
    } catch (error) {
      console.error(error);
      alert("Hubo un problema al enviar la solicitud.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      dni: "",
      location: "",
      insuranceType: "" as unknown as InsuranceType,
      brand: "",
      modelYear: "",
      version: "",
      plate: "",
      hasGNC: false,
    });
  };

  // Actualizado para aceptar booleanos (checkbox) y strings
  const handleChange = (field: keyof QuoteRequest, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return {
    formData,
    loading,
    submitted,
    handleSubmit,
    handleReset,
    handleChange,
  };
};
