import { ArrowRight, MessageCircle } from "lucide-react";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import Icon from "../../components/ui/Icon";
import { categories } from "../../data/categories";
import { store } from "../../data/store";
import { SECTIONS } from "../../lib/sections";

const waLink = (txt: string) =>
  `https://wa.me/${store.contact.whatsapp}?text=${encodeURIComponent(txt)}`;

export default function ProductsSection() {
  return (
    <section
      id={SECTIONS.produtos}
      className="bg-stone-50 py-[clamp(64px,9vw,112px)]"
    >
      <Container>
        <Reveal>
          <header className="mb-14 max-w-3xl">
            <p className="eyebrow">Produtos</p>
            <h2 className="sec-title mt-3">
              Linha completa pra
              <br />
              todas as etapas da obra.
            </h2>
            <p className="sec-sub mt-4">
              Organizado por categoria — consulte preço e disponibilidade direto
              no WhatsApp.
            </p>
          </header>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 50}>
              <a
                href={waLink(`Olá! Queria saber sobre ${c.name.toLowerCase()}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover flex h-full flex-col overflow-hidden"
              >
                {/* Topo: ícone com fundo escuro + grid decorativo */}
                <div
                  className="relative flex min-h-[200px] items-center justify-center overflow-hidden border-b border-stone-200 bg-stone-50 px-7 pb-7 pt-9"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(11,18,32,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,18,32,.05) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                      WebkitMaskImage:
                        "radial-gradient(ellipse 70% 70% at 50% 50%, #000 40%, transparent 100%)",
                      maskImage:
                        "radial-gradient(ellipse 70% 70% at 50% 50%, #000 40%, transparent 100%)",
                    }}
                  />
                  <div
                    className="relative grid h-[110px] w-[110px] place-items-center rounded-3xl bg-ink-900 text-brand-400"
                    style={{
                      boxShadow: "0 18px 40px -16px rgba(11,18,32,.4)",
                    }}
                  >
                    <Icon name={c.icon} className="h-14 w-14" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  <div className="font-display text-[22px] font-bold tracking-[-0.02em] text-ink-900">
                    {c.name}
                  </div>
                  <p className="mt-1.5 flex-1 text-[14px] text-stone-600">
                    {c.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-stone-200 pt-3.5">
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-600">
                      <MessageCircle className="h-3.5 w-3.5" /> Consultar preço
                      no WhatsApp
                    </span>
                    <ArrowRight className="h-4 w-4 text-stone-500" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
