/** Sitio matriz de la marca CENTRAL (todas las ubicaciones). */
export const BRAND_URL = "https://central.example.sv";

export const site = {
  name: "CENTRAL",
  subtitle: "Santa Rosa de Lima",
  fullName: "CENTRAL Santa Rosa de Lima",
  operator: "Grupo Galo",
  tagline: "Un nuevo Central está por llegar a Santa Rosa de Lima",
  description:
    "Un nuevo Central está por llegar a Santa Rosa de Lima.",
  email: "info@grupogalo.net",
  whatsapp: "7697-9921",
  whatsappUrl: "https://wa.me/50376979921",
  address: "Ruta Militar / RN18E, frente al desvío hacia Bolívar, Santa Rosa de Lima, La Unión, El Salvador",
  addressShort: "Ruta Militar / RN18E, Santa Rosa de Lima",
  brandUrl: BRAND_URL,
  instagram: "@central.elsalvador",
  instagramUrl: "https://www.instagram.com/central.elsalvador/",
  social: [{ label: "Instagram @central.elsalvador", href: "https://www.instagram.com/central.elsalvador/" }],
} as const;

export const mainNav = [
  { label: "Inicio", to: "/" },
  { label: "Directorio", to: "/comercios" },
  { label: "Gastronomía", to: "/gastronomia" },
  { label: "Promociones", to: "/promociones" },
  { label: "Eventos", to: "/eventos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Cómo llegar", to: "/visitanos" },
  { label: "Arrendamiento", to: "/arrendamientos" },
  { label: "Contacto", to: "/contacto" },
] as const;

export const legalLinks = [
  { label: "Novedades", to: "/novedades" },
  { label: "Política de Privacidad", to: "/privacidad" },
  { label: "Términos y Condiciones", to: "/terminos" },
] as const;
