import Section from "../../components/ui/Section";
import PlaceholderImage from "../../components/ui/PlaceholderImage";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Estoque completo para entrega imediata",
  "Profissionais que entendem do produto e da obra",
  "Parcerias com pedreiros, eletricistas e encanadores",
  "Condições especiais para construtores e revendas",
];

export default function WhyUs() {
  return (
    <Section className="bg-stone-100/50">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <PlaceholderImage label="Foto da loja" ratio="wide" />
        <div>
          <p className="section-eyebrow">Por que a Pernambuco</p>
          <h2 className="section-title mt-2">
            Mais que uma loja, um parceiro de obra.
          </h2>
          <p className="mt-4 text-stone-600">
            Atendemos pessoas físicas, mestres de obra e empresas com a mesma
            atenção. Nossa equipe está pronta para te orientar na escolha certa.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span className="text-ink-800">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
