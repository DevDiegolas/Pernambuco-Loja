import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import { ArrowUpRight, MessageCircle, Phone, Instagram } from "lucide-react";
import { store } from "../../data/store";
import { SECTIONS } from "../../lib/sections";

export default function ContactSection() {
  const contacts = [
    {
      title: "WhatsApp",
      value: store.contact.whatsappLabel,
      sub: "Orçamento rápido pela conversa",
      href: `https://wa.me/${store.contact.whatsapp}?text=${encodeURIComponent(
        "Olá! Gostaria de solicitar um orçamento."
      )}`,
      icon: MessageCircle,
      primary: true,
    },
    {
      title: "Telefone da loja",
      value: store.contact.phone,
      sub: "Ligue direto na unidade principal",
      href: `tel:${store.contact.phoneRaw}`,
      icon: Phone,
      primary: false,
    },
    {
      title: "Instagram",
      value: store.social.instagramHandle ?? "@pernambucomateriais",
      sub: "Obras, novidades e bastidores",
      href: store.social.instagram ?? "https://instagram.com/",
      icon: Instagram,
      primary: false,
    },
  ];

  return (
    <section id={SECTIONS.contato} className="bg-ink-900 py-16 text-white sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal direction="up">
            <div>
              <p className="section-eyebrow text-brand-300">Contato</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Fala com a gente e resolve sua obra mais rápido
              </h2>
              <p className="mt-5 max-w-xl text-base text-stone-300 sm:text-lg">
                Mande a lista da obra pelo WhatsApp, ligue na loja ou acompanhe
                as novidades no Instagram.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={120} className="space-y-3">
            {contacts.map((contact) => {
              const IconCmp = contact.icon;
              return (
                <a
                  key={contact.title}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-4 rounded-2xl border p-5 transition duration-300 hover:-translate-y-0.5 ${
                    contact.primary
                      ? "border-brand-500 bg-brand-500"
                      : "border-white/15 bg-white/[0.02] hover:border-white/35"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                      contact.primary
                        ? "bg-white/20 text-white"
                        : "border border-white/10 bg-ink-900 text-brand-400"
                    }`}
                  >
                    <IconCmp className="h-5 w-5" />
                  </span>

                  <span className="flex-1">
                    <span className="block text-[11px] uppercase tracking-[0.14em] text-white/60">
                      {contact.title}
                    </span>
                    <span className="mt-1 block font-display text-xl font-bold leading-tight text-white">
                      {contact.value}
                    </span>
                    <span className="mt-1 block text-sm text-white/75">
                      {contact.sub}
                    </span>
                  </span>

                  <ArrowUpRight className="h-5 w-5 text-white/80 transition group-hover:text-white" />
                </a>
              );
            })}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
