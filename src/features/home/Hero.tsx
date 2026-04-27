import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import Container from "../../components/ui/Container";
import PlaceholderImage from "../../components/ui/PlaceholderImage";
import Reveal from "../../components/ui/Reveal";
import { store } from "../../data/store";
import { SECTIONS } from "../../lib/sections";
import { scrollToSection } from "../../lib/scroll";

export default function Hero() {
  const waUrl = `https://wa.me/${store.contact.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento."
  )}`;

  const stats = [
    { n: "2", u: "lojas", d: "no Guarujá" },
    { n: "24h", u: "entrega", d: "na região" },
    { n: store.since, u: "", d: "fundação" },
  ];

  return (
    <section id={SECTIONS.topo} className="hero-dark">
      <Container className="relative z-[2] pt-[clamp(80px,8vw,120px)] pb-[clamp(64px,7vw,96px)]">
        <div className="grid items-center gap-[clamp(32px,5vw,72px)] lg:grid-cols-[1.1fr_1fr]">
          {/* LEFT */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 font-mono text-[12px] uppercase tracking-[0.1em] text-white">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand-500"
                  style={{ boxShadow: "0 0 0 4px rgba(249,115,22,.2)" }}
                />
                <MapPin className="h-3 w-3" />
                Guarujá &amp; região · entrega rápida
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1
                className="mt-6 font-display font-extrabold leading-[1.0] tracking-[-0.035em] text-white"
                style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
              >
                Do básico
                <br />
                <span className="text-brand-500">ao acabamento.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p
                className="mt-6 max-w-[48ch] leading-[1.55] text-white/65"
                style={{ fontSize: "clamp(16px, 1.6vw, 19px)" }}
              >
                Materiais de construção com entrega rápida no Guarujá. Tudo que
                sua obra precisa, com suporte pra montar o pedido certo.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg btn-primary"
                >
                  <MessageCircle className="h-[18px] w-[18px]" /> Solicitar orçamento
                </a>
                <a
                  href={`#${SECTIONS.produtos}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(SECTIONS.produtos);
                  }}
                  className="btn btn-lg border border-white/25 bg-transparent text-white hover:bg-white/10"
                >
                  Ver categorias <ArrowRight className="h-[18px] w-[18px]" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-14 grid grid-cols-3 border-t border-white/10 pt-7">
                {stats.map((s, i) => (
                  <div
                    key={s.d}
                    className={
                      i < 2
                        ? "border-r border-white/10 pr-4"
                        : ""
                    }
                    style={i > 0 ? { paddingLeft: 24 } : undefined}
                  >
                    <div
                      className="font-display font-bold tracking-[-0.03em] text-white"
                      style={{ fontSize: "clamp(26px,3.2vw,38px)" }}
                    >
                      {s.n}
                      {s.u && (
                        <>
                          <span className="ml-1 text-brand-500">·</span>
                          <span
                            className="ml-1.5 font-medium text-white/65"
                            style={{ fontSize: "0.5em" }}
                          >
                            {s.u}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="mt-1 text-[13px] text-white/65">{s.d}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT — collage */}
          <div className="relative aspect-[1/1.05] min-h-[460px] max-lg:min-h-[380px] max-lg:aspect-[1/0.85]">
            <Reveal delay={120} className="absolute inset-[0_30%_20%_0]">
              <div className="anim-float h-full">
                <PlaceholderImage
                  label="obra atendida · cliente guarujá"
                  ratio="free"
                  dark
                  className="h-full rounded-[20px]"
                />
              </div>
            </Reveal>
            <Reveal delay={220} className="absolute inset-[28%_0_0_38%]">
              <div className="anim-float-slow h-full">
                <PlaceholderImage
                  label="obra atendida · reforma"
                  ratio="free"
                  dark
                  className="h-full rounded-[20px]"
                />
              </div>
            </Reveal>
            <Reveal
              delay={320}
              className="absolute bottom-[8%] left-[-6%] w-[64%]"
            >
              <div className="anim-float-card rounded-2xl border border-stone-200 bg-white px-5 pb-4 pt-5 shadow-lift">
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone-500">
                  Clientes atendidos
                </div>
                <div className="mt-1.5 font-display text-[20px] font-bold tracking-[-0.02em] text-ink-900">
                  Obras no Guarujá
                </div>
                <div className="mt-1 text-[13px] text-stone-600">
                  Residências, reformas, condomínios
                </div>
              </div>
            </Reveal>

            <div
              className="absolute right-[4%] top-[-4%] rounded-[14px] bg-brand-500 px-5 pb-5 pt-4 text-white shadow-brand"
              style={{ transform: "rotate(3deg)" }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-90">
                Guarujá · {store.since}
              </div>
              <div
                className="mt-1.5 font-display font-extrabold leading-[0.9] tracking-[-0.04em]"
                style={{ fontSize: "clamp(34px,4.8vw,52px)" }}
              >
                Obra
                <br />
                em&nbsp;dia.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
