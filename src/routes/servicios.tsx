import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { ContentPlaceholder } from "@/components/central/Placeholders";
import { CtaSection } from "@/components/central/CtaSection";

const TITLE = "Servicios | CENTRAL Santa Rosa de Lima";
const DESCRIPTION =
  "Central Santa Rosa de Lima se encuentra en desarrollo. Los servicios al visitante estarán disponibles con la apertura.";

export const Route = createFileRoute("/servicios")({
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
  component: ServiciosPage,
});

function ServiciosPage() {
  return (
    <>
      <PageHero
         eyebrow="Central Santa Rosa de Lima"
        title="Servicios"
         description="Central Santa Rosa de Lima se encuentra en desarrollo. Los servicios al visitante estarán disponibles con la apertura."
        breadcrumbs={[{ label: "Servicios" }]}
       />

      <Section className="py-14 md:py-20">
         <ContentPlaceholder title="Central Santa Rosa de Lima se encuentra en desarrollo. Los servicios al visitante estarán disponibles con la apertura." />
      </Section>

      <CtaSection
        eyebrow="Cómo llegar"
         title="Ruta Militar / RN18E"
         description="Frente al desvío hacia Bolívar, Santa Rosa de Lima, La Unión, El Salvador."
        primary={{ label: "Cómo llegar", to: "/visitanos" }}
        secondary={{ label: "Ver directorio", to: "/comercios" }}
      />
    </>
  );
}
