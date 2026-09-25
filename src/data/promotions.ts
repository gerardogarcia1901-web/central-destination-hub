import type { Promotion } from "./types";

/**
 * Promociones oficiales de CENTRAL Santa Rosa de Lima.
 * Santa Rosa se presenta como Próximamente y no cuenta con promociones vigentes.
 */
export const promotions: Promotion[] = [];

/** Tipos de contenido previstos para este módulo. */
export const promotionKinds = [
  "Promociones de comercios",
  "Campañas conjuntas",
  "Black Sale / Mega Sale",
  "Temporadas comerciales",
] as const;
