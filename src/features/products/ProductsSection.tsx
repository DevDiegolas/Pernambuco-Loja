import { ArrowRight, MessageCircle } from "lucide-react";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import Icon from "../../components/ui/Icon";
import StoreImage from "../../components/ui/StoreImage";
import { categories } from "../../data/categories";
import { store } from "../../data/store";
import { storeImages } from "../../data/storeImages";
import { SECTIONS } from "../../lib/sections";

const waLink = (txt: string) =>
  `https://wa.me/${store.contact.whatsapp}?text=${encodeURIComponent(txt)}`;

const categoryImages: Record<string, string> = storeImages.categories;

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
                className="card card-hover group flex h-full flex-col overflow-hidden"
              >
                <div className="relative overflow-hidden border-b border-stone-200">
                  <StoreImage
                    src={categoryImages[c.slug]}
                    alt={`Produtos de ${c.name.toLowerCase()} disponíveis na Pernambuco Materiais`}
                    ratio="video"
                    className="rounded-none"
                    imageClassName="transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/55 via-ink-900/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 grid h-[52px] w-[52px] place-items-center rounded-xl bg-white text-brand-600 shadow-lift">
                    <Icon name={c.icon} className="h-6 w-6" strokeWidth={1.7} />
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
