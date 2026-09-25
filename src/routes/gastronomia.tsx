import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { ContentPlaceholder } from "@/components/central/Placeholders";
import { CtaSection } from "@/components/central/CtaSection";

const TITLE = "Gastronomía | CENTRAL Santa Rosa de Lima";
const DESCRIPTION =
  "Próximamente conocerás las opciones para comer en Central Santa Rosa de Lima.";

export const Route = createFileRoute("/gastronomia")({
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
  component: GastronomiaPage,
});

function GastronomiaPage() {
  return (
    <>
      <PageHero
         eyebrow="Central Santa Rosa de Lima"
        title="Gastronomía"
         description="Próximamente conocerás las opciones para comer en Central Santa Rosa de Lima."
        breadcrumbs={[{ label: "Gastronomía" }]}
       />

      <Section className="py-12 md:py-16">
         <ContentPlaceholder title="Próximamente conocerás las opciones para comer en Central Santa Rosa de Lima." />
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
