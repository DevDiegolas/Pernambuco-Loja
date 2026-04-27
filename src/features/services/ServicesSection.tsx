import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import Icon from "../../components/ui/Icon";
import { store } from "../../data/store";
import { SECTIONS } from "../../lib/sections";

export default function ServicesSection() {
  return (
    <section
      id={SECTIONS.servicos}
      className="bg-white py-[clamp(64px,9vw,112px)]"
    >
      <Container>
        <Reveal>
          <header className="mb-14 max-w-3xl">
            <p className="eyebrow">Serviços</p>
            <h2 className="sec-title mt-3">
              Mais que fornecer material —
              <br />
              parceira da sua obra.
            </h2>
            <p className="sec-sub mt-4">
              Soluções completas pra facilitar todo o processo, do planejamento
              à execução.
            </p>
          </header>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {store.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div
                className="flex h-full items-start gap-5 rounded-2xl border border-stone-200 bg-stone-50 px-7 pb-6 pt-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-900 hover:bg-white"
              >
                <div className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-xl bg-brand-500 text-white">
                  <Icon name={s.icon} className="h-6 w-6" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display text-[20px] font-bold tracking-[-0.02em] text-ink-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-stone-600">
                    {s.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <p className="mt-11 max-w-[62ch] font-display text-[18px] leading-[1.55] text-stone-700">
            Aqui você encontra não só os materiais, mas também o suporte
            necessário pra fazer sua obra acontecer com mais segurança,
            agilidade e confiança.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
