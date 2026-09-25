import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/central/primitives";
import { CtaSection } from "@/components/central/CtaSection";
import { center } from "@/data/center";

const TITLE = "Cómo llegar | CENTRAL Santa Rosa de Lima";
const DESCRIPTION =
  "Encuentra la ubicación de Central Santa Rosa de Lima y abre tu ruta en Google Maps o Waze.";

export const Route = createFileRoute("/visitanos")({
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
  component: VisitanosPage,
});

function VisitanosPage() {
  return (
    <>
      <PageHero
        eyebrow="Central Santa Rosa de Lima"
        title="Cómo llegar"
        description={center.address}
        breadcrumbs={[{ label: "Cómo llegar" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-none px-8 eyebrow">
            <a href={center.mapsUrl} target="_blank" rel="noreferrer">
              Abrir en Google Maps
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-none px-8 eyebrow">
            <a href={center.wazeUrl} target="_blank" rel="noreferrer">
              Abrir en Waze
            </a>
          </Button>
        </div>
      </PageHero>

      <Section className="py-14 md:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="eyebrow flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4" aria-hidden /> Dirección
            </p>
            <p className="display-md mt-6 text-2xl md:text-3xl">{center.name}</p>
            <p className="mt-4 leading-relaxed">{center.address}</p>
            <p className="mt-3 text-muted-foreground">{center.addressDetail}</p>

          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden border border-border">
              <iframe
                title={`Ubicación exacta de ${center.name}`}
                src={center.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full border-0"
              />
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border bg-card p-4">
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="size-3.5 shrink-0" aria-hidden />
                  Ubicación exacta · {center.addressDetail}
                </p>
                <div className="flex w-full gap-2 sm:w-auto">
                  <Button asChild size="sm" className="flex-1 rounded-none eyebrow sm:flex-none">
                    <a href={center.mapsUrl} target="_blank" rel="noreferrer">Google Maps</a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1 rounded-none eyebrow sm:flex-none">
                    <a href={center.wazeUrl} target="_blank" rel="noreferrer">Waze</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CtaSection
        eyebrow="Contacto"
         title="¿Tienes una consulta sobre el proyecto?"
         description="Contáctanos para recibir más información sobre Central Santa Rosa de Lima."
        primary={{ label: "Ir a contacto", to: "/contacto" }}
        secondary={{ label: "Arrendamiento", to: "/arrendamientos" }}
      />
    </>
  );
}
