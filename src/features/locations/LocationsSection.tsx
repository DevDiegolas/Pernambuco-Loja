import { Clock, MapPin, MessageCircle } from "lucide-react";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import PlaceholderImage from "../../components/ui/PlaceholderImage";
import Button from "../../components/ui/Button";
import { store } from "../../data/store";
import { SECTIONS } from "../../lib/sections";

function mapSearchHref(mapQuery: string) {
  return `https://www.google.com/maps/search/${encodeURIComponent(mapQuery)}`;
}

export default function LocationsSection() {
  return (
    <Section
      id={SECTIONS.localizacao}
      eyebrow="Localização"
      title="Nossas unidades no Guarujá"
      description="Duas lojas para atender com agilidade e cobertura da região."
      className="bg-stone-100/60"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {store.units.map((unit, i) => (
          <Reveal key={unit.name} delay={i * 90} direction="up">
            <article className="card flex h-full flex-col overflow-hidden">
              <div className="relative">
                <PlaceholderImage
                  label={`${unit.name.toLowerCase()} · fachada`}
                  ratio="wide"
                  className="rounded-none ring-0"
                />
                <span className="absolute left-4 top-4 rounded-full bg-brand-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                  {unit.name}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-6 text-stone-600">{unit.note}</p>

                <div className="mt-4 flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-200">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink-900">
                      {unit.address}
                    </h3>
                    <p className="text-sm text-stone-600">{unit.area}</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  <Button
                    as="a"
                    external
                    href={mapSearchHref(unit.mapQuery)}
                    variant="outline"
                    className="justify-center"
                  >
                    <MapPin className="h-4 w-4" /> Ver no mapa
                  </Button>
                  <Button
                    as="a"
                    external
                    href={`https://wa.me/${store.contact.whatsapp}?text=${encodeURIComponent(`Olá! Estou interessado na ${unit.name}.`)}`}
                    variant="primary"
                    className="justify-center"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal direction="up" delay={180}>
        <div className="card mt-6 p-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-900 text-brand-400">
              <Clock className="h-5 w-5" />
            </span>
            <div>
              <p className="section-eyebrow">Horário</p>
              <h3 className="font-display text-lg font-bold text-ink-900">
                de funcionamento
              </h3>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {store.hours.map((hour) => (
              <div
                key={hour.label}
                className="rounded-lg border-l-4 border-brand-500 bg-stone-50 px-4 py-3"
              >
                <p className="text-[11px] uppercase tracking-[0.14em] text-stone-500">
                  {hour.label}
                </p>
                <p className="mt-1 font-display text-sm font-semibold text-ink-900">
                  {hour.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
