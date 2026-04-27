import { Clock, MapPin, MessageCircle } from "lucide-react";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import PlaceholderImage from "../../components/ui/PlaceholderImage";
import { store } from "../../data/store";
import { SECTIONS } from "../../lib/sections";
import { cn } from "../../lib/cn";

const mapHref = (q: string) =>
  `https://www.google.com/maps/search/${encodeURIComponent(q)}`;
const waHref = (txt: string) =>
  `https://wa.me/${store.contact.whatsapp}?text=${encodeURIComponent(txt)}`;

export default function LocationsSection() {
  return (
    <section
      id={SECTIONS.localizacao}
      className="bg-stone-100 py-[clamp(64px,9vw,112px)]"
    >
      <Container>
        <Reveal>
          <header className="mb-14 max-w-3xl">
            <p className="eyebrow">Localização</p>
            <h2 className="sec-title mt-3">Nossas unidades no Guarujá.</h2>
          </header>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {store.units.map((unit, i) => (
            <Reveal key={unit.name} delay={i * 80}>
              <article className="flex h-full flex-col overflow-hidden rounded-[18px] border border-stone-200 bg-white">
                <div className="relative">
                  <PlaceholderImage
                    label={`${unit.name.toLowerCase()} · fachada`}
                    ratio="free"
                    className="h-[220px] rounded-none"
                  />
                  <span
                    className={cn(
                      "absolute left-3.5 top-3.5 rounded-full px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white",
                      i === 0 ? "bg-brand-500" : "bg-ink-900"
                    )}
                  >
                    {unit.name}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[13.5px] leading-[1.55] text-stone-600">
                    {unit.note}
                  </p>

                  <div className="mt-4 flex items-start gap-3.5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-stone-100 text-brand-600">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-[16px] font-semibold tracking-[-0.01em] text-ink-900">
                        {unit.address}
                      </h3>
                      <p className="mt-0.5 text-[13.5px] text-stone-600">
                        {unit.area}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto flex gap-2.5 pt-5">
                    <a
                      href={mapHref(unit.mapQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline flex-1 justify-center"
                    >
                      <MapPin className="h-3.5 w-3.5" /> Ver no mapa
                    </a>
                    <a
                      href={waHref(`Olá! Estou interessado na ${unit.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary flex-1 justify-center"
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Painel de horários */}
        <Reveal delay={160}>
          <div className="mt-6 flex flex-wrap items-center gap-7 rounded-[18px] border border-stone-200 bg-white px-8 py-7">
            <div className="flex items-center gap-3.5">
              <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-ink-900 text-brand-400">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="eyebrow">Horário</p>
                <p className="mt-1 font-display text-[18px] font-bold tracking-[-0.01em]">
                  de funcionamento
                </p>
              </div>
            </div>
            <div className="grid min-w-[280px] flex-1 grid-cols-1 gap-3.5 sm:grid-cols-3">
              {store.hours.map((h) => (
                <div
                  key={h.label}
                  className="rounded-md border-l-[3px] border-brand-500 bg-stone-50 px-4 py-3.5"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-stone-500">
                    {h.label}
                  </div>
                  <div className="mt-1 font-display text-[15px] font-semibold tracking-[-0.01em]">
                    {h.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
