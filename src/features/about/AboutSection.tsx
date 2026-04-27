import { MessageCircle } from "lucide-react";
import Container from "../../components/ui/Container";
import PlaceholderImage from "../../components/ui/PlaceholderImage";
import Reveal from "../../components/ui/Reveal";
import { store } from "../../data/store";
import { SECTIONS } from "../../lib/sections";

const valueGrid = [
  ["Entrega rápida", "No prazo certo pra obra não parar."],
  ["Pronta entrega", "Diversos produtos prontos pra sair."],
  ["Montagem do pedido", "A gente ajuda a montar a lista da obra."],
  ["Locação", "Andaimes e equipamentos quando você precisa."],
];

export default function AboutSection() {
  const waUrl = `https://wa.me/${store.contact.whatsapp}?text=${encodeURIComponent(
    "Olá! Quero montar o pedido para minha obra."
  )}`;

  return (
    <section
      id={SECTIONS.sobre}
      className="bg-white py-[clamp(64px,9vw,112px)]"
    >
      <Container>
        <div className="grid items-center gap-[clamp(32px,5vw,72px)] lg:grid-cols-[1fr_1.15fr]">
          {/* Esquerda: 2 fotos lado a lado */}
          <Reveal>
            <div className="grid grid-cols-2 gap-3.5">
              <PlaceholderImage
                label="loja 1 · praia de pernambuco"
                ratio="free"
                className="h-[380px] rounded-2xl max-md:h-[260px]"
              />
              <PlaceholderImage
                label="loja 2 · shopping acapulco"
                ratio="free"
                className="h-[380px] rounded-2xl max-md:h-[260px]"
              />
            </div>
          </Reveal>

          {/* Direita: narrativa + valores + audiences + CTA */}
          <Reveal delay={100}>
            <div>
              <p className="eyebrow">Sobre a loja</p>
              <h2 className="sec-title mt-4">
                Desde {store.since}, lado a lado
                <br />
                com cada obra.
              </h2>
              <p className="mt-5 max-w-[56ch] text-[16px] leading-[1.65] text-stone-700">
                Nossa loja nasceu com um propósito claro: oferecer soluções
                completas, com agilidade, preço justo e atendimento de qualidade
                para cada cliente. Entendemos a necessidade de cada projeto e
                oferecemos os materiais adequados com praticidade e eficiência,
                de um estoque que vai do básico ao acabamento.
              </p>
              <p className="mt-3.5 max-w-[56ch] text-[15px] leading-[1.65] text-stone-600">
                Trabalhamos com fornecedores confiáveis pra garantir qualidade e
                durabilidade. Mais do que vender materiais, o objetivo é
                facilitar a obra do cliente — entrega rápida, pronta entrega,
                suporte na montagem do pedido e locação de equipamentos.
              </p>

              {/* Grid 2x2 de valores com bordas */}
              <div className="mt-8 grid grid-cols-2 border-l border-t border-stone-200">
                {valueGrid.map(([title, desc]) => (
                  <div
                    key={title}
                    className="border-b border-r border-stone-200 px-5 py-5"
                  >
                    <div className="font-display text-[15px] font-semibold text-brand-600">
                      {title}
                    </div>
                    <div className="mt-1.5 text-[13.5px] leading-[1.55] text-stone-600">
                      {desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Audiences */}
              <div className="mt-8">
                <p className="eyebrow mb-3.5">Atendemos todo tipo de obra</p>
                <div className="flex flex-wrap gap-2">
                  {store.audiences.map((a) => (
                    <span
                      key={a}
                      className="chip cursor-default text-[13px]"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg btn-primary mt-7"
                >
                  <MessageCircle className="h-[18px] w-[18px]" /> Montar pedido
                  para minha obra
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
