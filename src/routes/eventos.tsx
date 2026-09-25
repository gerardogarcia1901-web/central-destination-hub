import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { ContentPlaceholder } from "@/components/central/Placeholders";
import { CtaSection } from "@/components/central/CtaSection";

const TITLE = "Eventos | CENTRAL Santa Rosa de Lima";
const DESCRIPTION =
  "Por ahora no hay eventos publicados en Central Santa Rosa de Lima.";

export const Route = createFileRoute("/eventos")({
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
  component: EventosPage,
});

function EventosPage() {
  return (
    <>
      <PageHero
        eyebrow="CENTRAL Santa Rosa de Lima"
        title="Eventos"
        description="Por ahora no hay eventos publicados. Vuelve pronto para conocer lo que viene en Central Santa Rosa de Lima."
        breadcrumbs={[{ label: "Eventos" }]}
      />
      <Section className="py-14 md:py-20">
        <ContentPlaceholder
          eyebrow="CENTRAL Santa Rosa de Lima"
          title="Por ahora no hay eventos publicados."
          description="Vuelve pronto para conocer lo que viene en Central Santa Rosa de Lima."
        />
      </Section>

      <CtaSection
        eyebrow="Directorio"
        title="Marcas y comercios"
        description="Conoce todas las marcas que formarán parte de CENTRAL."
        primary={{ label: "Ver directorio", to: "/comercios" }}
        secondary={{ label: "Cómo llegar", to: "/visitanos" }}
      />
    </>
  );
}
