import { createFileRoute, Link } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/central/primitives";
import { CtaSection } from "@/components/central/CtaSection";

const TITLE = "Servicios | CENTRAL Santa Rosa de Lima";
const DESCRIPTION =
  "Información sobre los servicios de Central Santa Rosa de Lima.";

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
      >
        <Button asChild size="lg" className="rounded-none px-8 eyebrow">
          <Link to="/arrendamientos">Consultar arrendamiento</Link>
        </Button>
      </PageHero>

      <Section className="py-14 md:py-20">
        <div className="flex items-start gap-4 border border-border p-8 bg-sand/30">
          <Info className="size-6 text-primary shrink-0 mt-1" />
          <div>
            <h2 className="font-display font-semibold uppercase tracking-tight text-lg">Proyecto en desarrollo</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Central Santa Rosa de Lima se encuentra en desarrollo. Los servicios al visitante estarán disponibles con la apertura.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              No se han confirmado amenidades ni servicios específicos todavía. Mantente informado a través de nuestros canales oficiales.
            </p>
          </div>
        </div>
      </Section>

      <CtaSection
        eyebrow="Cómo llegar"
        title="Ubicación estratégica"
        description="Ruta Militar / RN18E, frente al desvío hacia Bolívar, Santa Rosa de Lima."
        primary={{ label: "Cómo llegar", to: "/visitanos" }}
        secondary={{ label: "Contacto", to: "/contacto" }}
      />
    </>
  );
}
