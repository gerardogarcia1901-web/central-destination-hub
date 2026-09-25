import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { LeasingForm } from "@/components/central/LeasingForm";

const TITLE = "Arrendamiento | CENTRAL Santa Rosa de Lima";
const DESCRIPTION =
  "Solicita información de arrendamiento para CENTRAL Santa Rosa de Lima.";

export const Route = createFileRoute("/arrendamientos")({
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
  component: ArrendamientosPage,
});

function ArrendamientosPage() {
  return (
    <>
      <PageHero
        eyebrow="Arrendamiento"
        title="Su marca puede ser parte de CENTRAL."
         description="Consulta por oportunidades de arrendamiento en Central Santa Rosa de Lima."
        breadcrumbs={[{ label: "Arrendamiento" }]}
       />

      <Section className="py-14 md:py-20">
        <LeasingForm />
      </Section>
    </>
  );
}
