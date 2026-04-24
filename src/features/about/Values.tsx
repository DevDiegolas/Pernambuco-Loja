import Section from "../../components/ui/Section";
import Icon from "../../components/ui/Icon";

const values = [
  {
    icon: "Hammer",
    title: "Feito para a obra real",
    description:
      "Produtos testados no dia a dia, que aguentam o tranco do canteiro.",
  },
  {
    icon: "Users",
    title: "Gente que entende",
    description:
      "Nossa equipe já passou por obras e sabe recomendar o que é certo.",
  },
  {
    icon: "ShieldCheck",
    title: "Compromisso",
    description: "Se prometemos entregar, entregamos. Com nota e garantia.",
  },
];

export default function Values() {
  return (
    <Section
      eyebrow="Valores"
      title="O que guia a gente"
      className="bg-stone-100/50"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="card p-6">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-200">
              <Icon name={v.icon} className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
              {v.title}
            </h3>
            <p className="mt-1 text-sm text-stone-600">{v.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
