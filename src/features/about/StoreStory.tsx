import Section from "../../components/ui/Section";
import PlaceholderImage from "../../components/ui/PlaceholderImage";
import { store } from "../../data/store";

export default function StoreStory() {
  return (
    <Section eyebrow="Nossa história" title={`Conheça a ${store.name}`}>
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div className="space-y-4 text-stone-700">
          <p>
            Começamos pequenos, atendendo a vizinhança com poucos itens e muita
            vontade. Hoje somos referência em materiais de construção na região,
            mantendo o mesmo cuidado de quando abrimos as portas pela primeira
            vez.
          </p>
          <p>
            Nosso compromisso é simples: produtos de qualidade, preço justo e
            atendimento que entende o que o seu projeto precisa — seja uma
            reforma de banheiro ou uma obra do zero.
          </p>
          <p className="text-sm text-stone-500">
            * Conteúdo placeholder — substituir com a história real da loja.
          </p>
        </div>
        <PlaceholderImage label="Fachada da loja" ratio="video" />
      </div>
    </Section>
  );
}
