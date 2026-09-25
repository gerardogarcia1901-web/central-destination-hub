import type { Article } from "./types";

/**
 * Novedades oficiales de CENTRAL Santa Rosa de Lima.
 * Santa Rosa se presenta como Próximamente.
 */
export const articles: Article[] = [];

/** Tipos de contenido previstos para este módulo. */
export const newsKinds = [
  "Nuevas aperturas",
  "Actividades especiales",
  "Noticias de la plaza",
  "Renovación del inmueble",
] as const;

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
