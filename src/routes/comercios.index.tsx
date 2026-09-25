import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { ContentPlaceholder } from "@/components/central/Placeholders";

const TITLE = "Directorio | CENTRAL Santa Rosa de Lima";
const DESCRIPTION =
  "Próximamente conocerás las marcas que formarán parte de Central Santa Rosa de Lima.";

export const Route = createFileRoute("/comercios/")({
  component: ComerciosPage,
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
});

function ComerciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Directorio"
         title="Directorio"
        description="Próximamente conocerás las marcas que formarán parte de Central Santa Rosa de Lima."
        breadcrumbs={[{ label: "Directorio" }]}
       />

      <Section className="py-12 md:py-16">
        <ContentPlaceholder
          title="Próximamente conocerás las marcas que formarán parte de Central Santa Rosa de Lima."
        />
      </Section>
    </>
  );
}
