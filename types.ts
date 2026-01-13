export enum InsuranceType {
  AUTO = "Automotor",
  LIFE = "Vida",
  HOME = "Hogar",
  HEALTH = "Salud",
  BUSINESS = "Empresas",
  TRAVEL = "Viajes",
}

export interface QuoteRequest {
  fullName: string;
  phone: string;
  dni: string;
  location: string;
  email: string;
  insuranceType: InsuranceType;
  // Nuevos campos opcionales (solo para Auto)
  brand?: string; // Marca
  modelYear?: string; // Año
  version?: string; // Versión/Modelo
  plate?: string; // Patente
  hasGNC?: boolean; // GNC
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Partner {
  name: string;
  logo: string;
}
