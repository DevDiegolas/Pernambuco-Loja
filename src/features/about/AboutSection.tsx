import Section from "../../components/ui/Section";
import PlaceholderImage from "../../components/ui/PlaceholderImage";
import Reveal from "../../components/ui/Reveal";
import Button from "../../components/ui/Button";
import { MessageCircle } from "lucide-react";
import { store } from "../../data/store";
import { SECTIONS } from "../../lib/sections";

const valuePoints = [
  {
    title: "Entrega rápida",
    description: "No prazo certo para a obra não parar.",
  },
  {
    title: "Pronta entrega",
    description: "Diversos produtos sempre prontos para sair.",
  },
  {
    title: "Montagem do pedido",
    description: "Ajudamos a montar a lista completa da obra.",
  },
  {
    title: "Locação",
    description: "Equipamentos e andaimes quando você precisa.",
  },
];

export default function AboutSection() {
  return (
    <Section
      id={SECTIONS.sobre}
      eyebrow="Sobre a loja"
      title="Desde 2025, lado a lado com cada obra"
      description="Mais que vender materiais, o objetivo é facilitar sua obra com agilidade, suporte técnico e preço justo."
      className="bg-white"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <Reveal direction="up">
          <div className="grid gap-3 sm:grid-cols-2">
            <PlaceholderImage
              label="Loja 1 · Praia de Pernambuco"
              ratio="tall"
            />
            <PlaceholderImage
              label="Loja 2 · Shopping Acapulco"
              ratio="tall"
            />
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <div className="space-y-4 text-stone-700">
            <p>
              Nossa loja nasceu com um propósito claro: oferecer soluções
              completas, com agilidade, preço justo e atendimento de qualidade
              para cada cliente.
            </p>
            <p>
              Entendemos a necessidade de cada projeto e ajudamos na escolha
              dos materiais certos para cada etapa, do básico ao acabamento.
            </p>

            <div className="mt-6 grid gap-0 border border-stone-200 md:grid-cols-2">
              {valuePoints.map((value) => (
                <div key={value.title} className="border border-stone-200 p-4">
                  <h3 className="font-display text-sm font-semibold text-brand-700">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-sm text-stone-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <p className="section-eyebrow">Atendemos todo tipo de obra</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {store.audiences.map((audience) => (
                  <span
                    key={audience}
                    className="rounded-full border border-stone-200 bg-white px-3 py-1 text-sm text-ink-900"
                  >
                    {audience}
                  </span>
                ))}
              </div>

              <Button
                as="a"
                external
                href={`https://wa.me/${store.contact.whatsapp}?text=${encodeURIComponent(
                  "Olá! Quero montar o pedido para minha obra."
                )}`}
                variant="primary"
                className="mt-5"
              >
                <MessageCircle className="h-4 w-4" /> Montar pedido para minha
                obra
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
