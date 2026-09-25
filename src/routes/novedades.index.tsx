import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { NewsCard } from "@/components/central/cards";
import { ContentPlaceholder } from "@/components/central/Placeholders";
import { CtaSection } from "@/components/central/CtaSection";
import { articles } from "@/data/news";

const TITLE = "Novedades | CENTRAL Santa Rosa de Lima";
const DESCRIPTION =
  "Novedades de CENTRAL Santa Rosa de Lima.";

export const Route = createFileRoute("/novedades/")({
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
  component: NovedadesPage,
});

function NovedadesPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHero
         eyebrow="CENTRAL Santa Rosa de Lima"
        title="Novedades"
         description="Noticias y contenido editorial de Central Santa Rosa de Lima."
        breadcrumbs={[{ label: "Novedades" }]}
      />
      <Section className="py-14 md:py-20">
        {articles.length ? (
          <>
            {featured && <NewsCard article={featured} featured />}
            {rest.length > 0 && (
              <div className="mt-16 grid gap-12 border-t border-border pt-16 md:grid-cols-3">
                {rest.map((article) => (
                  <NewsCard key={article.slug} article={article} />
                ))}
              </div>
            )}
          </>
        ) : (
          <ContentPlaceholder
             eyebrow="CENTRAL Santa Rosa de Lima"
            title="Por ahora no hay novedades publicadas."
            description="Vuelve pronto para conocer las novedades de CENTRAL."
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
