import Container from "../components/ui/Container";
import PageHero from "../features/shared/PageHero";
import ContactInfo from "../features/contact/ContactInfo";
import MapEmbed from "../features/contact/MapEmbed";

export default function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Onde encontrar"
        title="Estamos prontos para atender você."
        description="Visite a loja, ligue ou chame no WhatsApp. Estamos a um clique da sua obra."
      />
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <ContactInfo />
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-ink-900">
              Como chegar
            </h2>
            <MapEmbed />
          </div>
        </div>
      </Container>
    </>
  );
}
