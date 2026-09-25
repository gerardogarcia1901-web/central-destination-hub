import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/central/primitives";

const TITLE = "Preguntas frecuentes | CENTRAL Santa Rosa de Lima";
const DESCRIPTION = "Respuestas sobre CENTRAL Santa Rosa de Lima, su ubicación, apertura, marcas y arrendamiento.";

const questions = [
  { question: "¿Dónde estará Central Santa Rosa de Lima?", answer: "Sobre Ruta Militar / RN18E, frente al desvío hacia Bolívar, Santa Rosa de Lima, La Unión, El Salvador." },
  { question: "¿Central Santa Rosa de Lima ya está abierto?", answer: "No. El proyecto se encuentra en desarrollo y se presenta públicamente como Próximamente." },
  { question: "¿Cuándo abrirá Central Santa Rosa de Lima?", answer: "La fecha de apertura se comunicará a través de los canales oficiales de CENTRAL cuando corresponda." },
  { question: "¿Qué marcas habrá en Central Santa Rosa de Lima?", answer: "Las marcas se anunciarán en los canales oficiales de CENTRAL conforme sean confirmadas para publicación." },
  { question: "¿Habrá gastronomía y servicios?", answer: "La oferta de gastronomía y servicios se comunicará oficialmente conforme avance el proyecto." },
  { question: "¿Dónde puedo ver promociones y eventos?", answer: "Las secciones Promociones y Eventos están publicadas y mostrarán la información vigente cuando exista actividad confirmada." },
  { question: "¿Cómo llego al proyecto?", answer: "Puedes abrir la ubicación en Google Maps o Waze desde la sección Cómo llegar." },
  { question: "¿Cómo puedo consultar por arrendamiento?", answer: "Completa el formulario de Arrendamiento de Central Santa Rosa de Lima." },
] as const;

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
    links: [{ rel: "canonical", href: "https://central-discover-spaces.lovable.app/preguntas-frecuentes" }],
  }),
  component: PreguntasFrecuentesPage,
});

function PreguntasFrecuentesPage() {
  return (
    <>
      <PageHero eyebrow="Ayuda" title="Preguntas frecuentes" breadcrumbs={[{ label: "Preguntas frecuentes" }]} />
      <Section className="py-14 md:py-20">
        <Accordion type="single" collapsible className="mx-auto max-w-4xl border-t border-border">
          {questions.map((item) => (
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