import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { ContentPlaceholder } from "@/components/central/Placeholders";
import { center } from "@/data/center";

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
        title="Marcas y comercios"
        description="Próximamente conocerás las marcas que formarán parte de Central Santa Rosa de Lima."
        breadcrumbs={[{ label: "Directorio" }]}
      >
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{center.hoursNote}</p>
      </PageHero>

      <Section className="py-12 md:py-16">
        <ContentPlaceholder
          title="Próximamente conocerás las marcas que formarán parte de Central Santa Rosa de Lima."
          description="Estamos trabajando para traerte las mejores opciones. Por ahora no se muestran comercios ficticios."
        />
      </Section>
    </>
  );
}
