import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/central/primitives";
import { PromotionCard } from "@/components/central/cards";
import { ContentPlaceholder } from "@/components/central/Placeholders";
import { CtaSection } from "@/components/central/CtaSection";
import { promotions } from "@/data/promotions";
import { allStores } from "@/data/stores";

const TITLE = "Promociones | CENTRAL Santa Rosa de Lima";
const DESCRIPTION =
  "Promociones de CENTRAL Santa Rosa de Lima.";

export const Route = createFileRoute("/promociones")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PromocionesPage,
});

function PromocionesPage() {
  const storeName = (slug?: string) => allStores.find((s) => s.slug === slug)?.name;

  return (
    <>
      <PageHero
         eyebrow="CENTRAL Santa Rosa de Lima"
        title="Promociones"
         description="Por ahora no hay promociones disponibles. Vuelve pronto para conocer nuevas promociones en Central Santa Rosa de Lima."
        breadcrumbs={[{ label: "Promociones" }]}
      />

      <Section className="py-14 md:py-20">
        {promotions.length ? (
          <>
            <SectionHeading eyebrow="Vigentes" title="Promociones publicadas" />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {promotions.map((promo) => (
                <PromotionCard key={promo.slug} promotion={promo} storeName={storeName(promo.storeSlug)} />
              ))}
            </div>
          </>
        ) : (
          <ContentPlaceholder
             eyebrow="CENTRAL Santa Rosa de Lima"
            title="Por ahora no hay promociones disponibles."
             description="Vuelve pronto para conocer nuevas promociones en Central Santa Rosa de Lima."
          />
        )}
      </Section>

      <CtaSection
        eyebrow="Directorio"
        title="Encuentra lo que buscas."
        description="Tiendas, gastronomía, servicios y más."
        primary={{ label: "Ver directorio", to: "/comercios" }}
        secondary={{ label: "Cómo llegar", to: "/visitanos" }}
      />
    </>
  );
}
