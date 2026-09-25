import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/central/primitives";
import { ContentPlaceholder } from "@/components/central/Placeholders";
import { CtaSection } from "@/components/central/CtaSection";
import { center } from "@/data/center";

const TITLE = "Central Santa Rosa de Lima | CENTRAL";
const DESCRIPTION = "Un nuevo Central está por llegar a Santa Rosa de Lima. Encuentra información sobre el proyecto, ubicación y arrendamiento.";

export const Route = createFileRoute("/")({
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
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO — fallback visual de marca mientras no exista fotografía aprobada */}
      <section className="relative isolate overflow-hidden border-b border-border bg-sand">
        <span
          aria-hidden
          className="wordmark pointer-events-none absolute -bottom-6 right-0 -z-10 select-none text-[22vw] leading-none text-foreground/[0.04]"
        >
          CENTRAL
        </span>
        <div className="container-central flex min-h-[72svh] items-center py-20 md:py-28">
          <div className="fade-up max-w-4xl">
            <span className="block h-1 w-16 bg-highlight" aria-hidden />
            <h1 className="display-xl mt-8">
              Central
              <br />
              Santa Rosa
              <br />
              de Lima
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Un nuevo Central está por llegar a Santa Rosa de Lima.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-none px-8 eyebrow">
                <Link to="/comercios">Ver directorio</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none px-8 eyebrow">
                <Link to="/visitanos">Cómo llegar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ESTADO PRÓXIMAMENTE */}
      <section aria-label="Información de la plaza" className="border-b border-border bg-background">
        <div className="container-central py-14 md:py-20">
          <p className="eyebrow text-muted-foreground">Próximamente</p>
           <h2 className="display-md mt-4">Un nuevo Central está por llegar a Santa Rosa de Lima.</h2>
        </div>
      </section>

      {/* DIRECTORIO */}
      <Section>
        <SectionHeading
          eyebrow="Directorio"
           title="Directorio"
          description="Próximamente conocerás las marcas que formarán parte de Central Santa Rosa de Lima."
        />
        <div className="mt-12">
          <ContentPlaceholder
            title="Próximamente conocerás las marcas que formarán parte de Central Santa Rosa de Lima."
          />
        </div>
      </Section>

      {/* PROMOCIONES */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Promociones"
          title="Promociones"
          description="Por ahora no hay promociones disponibles. Vuelve pronto para conocer nuevas promociones en Central Santa Rosa de Lima."
        />
        <div className="mt-12">
          <ContentPlaceholder
            title="Por ahora no hay promociones disponibles."
            description="Vuelve pronto para conocer nuevas promociones en Central Santa Rosa de Lima."
          />
        </div>
      </Section>

      {/* CÓMO LLEGAR */}
      <Section>
        <SectionHeading eyebrow="Cómo llegar" title="En Santa Rosa de Lima" />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rule-line pt-4">
            <p className="eyebrow flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4" aria-hidden /> Dirección
            </p>
            <p className="mt-3 text-lg leading-relaxed">{center.address}</p>
            <p className="mt-2 text-muted-foreground">{center.addressDetail}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:items-end lg:justify-end">
            <Button asChild size="lg" className="rounded-none px-8 eyebrow">
              <a href={center.mapsUrl} target="_blank" rel="noreferrer">Google Maps</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none px-8 eyebrow">
              <a href={center.wazeUrl} target="_blank" rel="noreferrer">Waze</a>
            </Button>
            <Link to="/visitanos" className="inline-flex items-center gap-2 py-3 eyebrow underline-offset-8 hover:underline sm:px-4">
              Ver mapa <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </Section>

      <CtaSection
        eyebrow="Arrendamiento"
        title="Su marca puede ser parte de CENTRAL."
        description="Conoce las oportunidades de arrendamiento en Central Santa Rosa de Lima."
        primary={{ label: "Solicitar información", to: "/arrendamientos" }}
        secondary={{ label: "Contacto", to: "/contacto" }}
      />
    </>
  );
}
