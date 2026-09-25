import type { CenterInfo } from "./types";

const OFFICIAL_MAPS_URL = "https://maps.app.goo.gl/yQxG4hH6yQxG4hH6";
const MAPS_PLACE = "Central Santa Rosa de Lima";

export const center: CenterInfo = {
  name: "CENTRAL Santa Rosa de Lima",
  shortName: "Santa Rosa de Lima",
  city: "Santa Rosa de Lima",
  department: "La Unión",
  tagline: "Un nuevo Central está por llegar a Santa Rosa de Lima",
  description:
    "Un nuevo Central está por llegar a Santa Rosa de Lima.",
  longDescription: [
    "Un nuevo Central está por llegar a Santa Rosa de Lima.",
    "El proyecto se encuentra en desarrollo.",
  ],
  address: "Ruta Militar / RN18E, frente al desvío hacia Bolívar, Santa Rosa de Lima, La Unión, El Salvador",
  addressDetail: "Frente al desvío hacia Bolívar.",
  mapsUrl: OFFICIAL_MAPS_URL,
  wazeUrl: OFFICIAL_MAPS_URL,
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(MAPS_PLACE)}&z=15&output=embed`,
  hoursNote:
    "Central Santa Rosa de Lima se encuentra en desarrollo. Los horarios estarán disponibles con la apertura.",
  stats: [],
  directions: [
    {
      label: "Dirección",
      description: "Ruta Militar / RN18E, frente al desvío hacia Bolívar, Santa Rosa de Lima, La Unión, El Salvador.",
    },
  ],
  faqs: [
    {
      question: "¿Dónde estará Central Santa Rosa de Lima?",
      answer: "Sobre Ruta Militar / RN18E, frente al desvío hacia Bolívar, Santa Rosa de Lima, La Unión, El Salvador.",
    },
    {
      question: "¿Central Santa Rosa de Lima ya está abierto?",
      answer: "No. El proyecto se encuentra en desarrollo y se presenta públicamente como Próximamente.",
    },
    {
      question: "¿Cuándo abrirá Central Santa Rosa de Lima?",
      answer: "La fecha de apertura se comunicará a través de los canales oficiales de CENTRAL cuando corresponda.",
    },
    {
      question: "¿Qué marcas habrá en Central Santa Rosa de Lima?",
      answer: "Las marcas se anunciarán en los canales oficiales de CENTRAL conforme sean confirmadas para publicación.",
    },
    {
      question: "¿Habrá gastronomía y servicios?",
      answer: "La oferta de gastronomía y servicios se comunicará oficialmente conforme avance el proyecto.",
    },
    {
      question: "¿Dónde puedo ver promociones y eventos?",
      answer: "Las secciones Promociones y Eventos están publicadas y mostrarán la información vigente cuando exista actividad confirmada.",
    },
    {
      question: "¿Cómo llego al proyecto?",
      answer: "Puedes abrir la ubicación en Google Maps o Waze desde la sección Cómo llegar.",
    },
    {
      question: "¿Cómo puedo consultar por arrendamiento?",
      answer: "Completa el formulario de Arrendamiento de Central Santa Rosa de Lima.",
    },
  ],
};
