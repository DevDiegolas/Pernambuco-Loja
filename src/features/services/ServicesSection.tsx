import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import Icon from "../../components/ui/Icon";
import { store } from "../../data/store";
import { SECTIONS } from "../../lib/sections";

export default function ServicesSection() {
  return (
    <Section
      id={SECTIONS.servicos}
      eyebrow="Serviços"
      title="Mais que fornecer material — parceria da sua obra"
      description="Soluções completas para facilitar do planejamento à execução."
      className="bg-white"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {store.services.map((service, i) => (
          <Reveal key={service.title} delay={i * 70} direction="up">
            <article className="card flex h-full gap-5 p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-500 text-white">
                <Icon name={service.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-ink-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {service.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal direction="up" delay={220}>
        <p className="mt-10 max-w-3xl font-display text-lg leading-8 text-stone-700">
          Aqui você encontra não só os materiais, mas também o suporte necessário
          para fazer sua obra acontecer com mais segurança, agilidade e
          confiança.
        </p>
      </Reveal>
    </Section>
  );
}
