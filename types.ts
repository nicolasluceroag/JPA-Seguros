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
  email: string;
  phone: string;
  insuranceType: InsuranceType;
  details: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Partner {
  name: string;
  logo: string;
}
