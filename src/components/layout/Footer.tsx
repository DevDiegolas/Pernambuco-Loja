import Container from "../ui/Container";
import { store } from "../../data/store";
import { NAV_ITEMS } from "../../lib/sections";
import { scrollToSection } from "../../lib/scroll";

export default function Footer() {
  const year = new Date().getFullYear();
  const waUrl = `https://wa.me/${store.contact.whatsapp}`;

  return (
    <footer className="bg-black text-white">
      <Container className="pb-7 pt-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo-pernambuco.png"
                alt="Pernambuco Materiais"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="mt-4 max-w-[34ch] text-[13.5px] leading-[1.6] text-white/55">
              Materiais de construção com entrega rápida no Guarujá — do básico
              ao acabamento, com suporte pra obra não parar.
            </p>
          </div>

          {/* Navegar */}
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-400">
              Navegar
            </div>
            <div className="flex flex-col gap-2.5">
              {NAV_ITEMS.filter((n) => n.id !== "topo").map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="text-[13.5px] text-white/75 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Unidades */}
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-400">
              Unidades
            </div>
            <div className="flex flex-col gap-3.5">
              {store.units.map((u) => (
                <div
                  key={u.name}
                  className="text-[13px] leading-[1.5] text-white/70"
                >
                  <div className="mb-0.5 font-semibold text-white">
                    {u.name}
                  </div>
                  {u.address}
                  <br />
                  {u.area}
                </div>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-400">
              Contato
            </div>
            <div className="flex flex-col gap-2.5 text-[13.5px]">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 hover:text-white"
              >
                WhatsApp {store.contact.whatsappLabel}
              </a>
              <a
                href={`tel:${store.contact.phoneRaw}`}
                className="text-white/85 hover:text-white"
              >
                Loja {store.contact.phone}
              </a>
              {store.social.instagram && (
                <a
                  href={store.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 hover:text-white"
                >
                  Instagram {store.social.instagramHandle}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
          <div>© {year} {store.name}</div>
          <div>Guarujá · SP · Desde {store.since}</div>
        </div>
      </Container>
    </footer>
  );
}
