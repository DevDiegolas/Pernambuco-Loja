import PageHero from "../features/shared/PageHero";
import StoreStory from "../features/about/StoreStory";
import Values from "../features/about/Values";
import CallToAction from "../features/home/CallToAction";

export default function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title="Uma loja construída tijolo por tijolo, com você."
        description="Conheça a história, os valores e a equipe por trás da Pernambuco Materiais."
      />
      <StoreStory />
      <Values />
      <CallToAction />
    </>
  );
}
