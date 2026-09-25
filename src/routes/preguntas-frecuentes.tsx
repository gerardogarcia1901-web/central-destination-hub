import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/central/primitives";
import { center } from "@/data/center";

const TITLE = "Preguntas frecuentes | CENTRAL Santa Rosa de Lima";
const DESCRIPTION = "Respuestas sobre ubicación, apertura y arrendamiento en Central Santa Rosa de Lima.";

export const Route = createFileRoute("/preguntas-frecuentes")({
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
  component: PreguntasFrecuentesPage,
});

function PreguntasFrecuentesPage() {
  return (
    <>
      <PageHero eyebrow="Ayuda" title="Preguntas frecuentes" breadcrumbs={[{ label: "Preguntas frecuentes" }]} />
      <Section className="py-14 md:py-20">
        <Accordion type="single" collapsible className="mx-auto max-w-4xl border-t border-border">
          {center.faqs.map((item) => (
            <AccordionItem key={item.question} value={item.question} className="border-b border-border">
              <AccordionTrigger className="py-6 text-left font-display text-base font-semibold hover:no-underline md:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-3xl pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap gap-3">
          <Button asChild className="rounded-none eyebrow"><Link to="/visitanos">Cómo llegar</Link></Button>
          <Button asChild variant="outline" className="rounded-none eyebrow"><Link to="/contacto">Contacto</Link></Button>
        </div>
      </Section>
    </>
  );
}
