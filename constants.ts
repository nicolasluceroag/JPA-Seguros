import { InsuranceType, FAQItem, Partner } from "./types";

export const PARTNERS: Partner[] = [
  {
    name: "La Caja",
    logo: "https://seguros.lacaja.com.ar/images/la-caja-logo.svg",
  },
  {
    name: "Triunfo Seguros",
    logo: "https://play-lh.googleusercontent.com/6O1Z8MuF8ZZyQvrNbABDNmzxoaesqf0_bhPGFJqdPNjMtFD-tFEr1uP8GtMY83YG8Jo=w240-h480-rw",
  },
  {
    name: "Paraná Seguros",
    logo: "https://100seguro.com.ar/wp-content/uploads/2021/06/parana-seguros.jpg",
  },
  {
    name: "Mercantil Andina",
    logo: "https://100seguro.com.ar/wp-content/uploads/2021/10/Mercantil-Andina-logo-nuevo-.jpg",
  },
  {
    name: "Sancor Seguros",
    logo: "https://100seguro.com.ar/wp-content/uploads/2024/01/Logo-de-SANCOR-SEGUROS.jpg",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "¿Cómo puedo solicitar una cotización?",
    answer:
      "Puedes completar nuestro formulario en línea o contactarnos directamente por WhatsApp para recibir asesoría personalizada en menos de 10 minutos.",
  },
  {
    question: "¿Qué documentos necesito para contratar un seguro de auto?",
    answer:
      "Generalmente requerimos tu identificación oficial, tarjeta de circulación del vehículo y comprobante de domicilio. El proceso es 100% digital.",
  },
  {
    question: "¿Cuentan con seguros internacionales?",
    answer:
      "Sí, trabajamos con aliados globales para ofrecer coberturas de salud y viajes que funcionan en cualquier parte del mundo.",
  },
  {
    question: "¿Cómo funcionan las reclamaciones?",
    answer:
      "En caso de siniestro, puedes reportarlo a través de nuestra línea de atención 24/7. Te asignaremos un gestor personal que te acompañará en todo el proceso.",
  },
];

export const INSURANCE_OPTIONS = Object.values(InsuranceType);
