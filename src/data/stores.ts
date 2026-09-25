import type { Store } from "./types";

/**
 * Comercios oficiales de CENTRAL Santa Rosa de Lima.
 * Santa Rosa se presenta como Próximamente y no cuenta con marcas confirmadas para publicación.
 */
export const stores: Store[] = [];

export const allStores: Store[] = stores;

export const getStore = (slug: string) => allStores.find((s) => s.slug === slug);

export const storeContact = (store: Store) => {
  if (store.whatsapp) return { label: "WhatsApp", value: store.whatsapp, href: `https://wa.me/503${store.whatsapp.replace(/\D/g, "")}` };
  if (store.phone) return { label: "Teléfono", value: store.phone, href: `tel:+503${store.phone.replace(/\D/g, "")}` };
  return null;
};
