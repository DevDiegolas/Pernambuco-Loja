import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "../../components/ui/Section";
import Icon from "../../components/ui/Icon";
import { categories } from "../../data/categories";

export default function FeaturedCategories() {
  return (
    <Section
      eyebrow="Categorias"
      title="Tudo organizado por tipo de obra"
      description="Encontre rápido o que precisa, do básico de fundação ao acabamento fino."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <Link
            key={c.slug}
            to={`/produtos?cat=${c.slug}`}
            className="card group flex items-start gap-4 p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-200 transition group-hover:bg-brand-600 group-hover:text-white">
              <Icon name={c.icon} className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-ink-900">
                  {c.name}
                </h3>
                <ArrowUpRight className="h-4 w-4 text-stone-400 transition group-hover:text-brand-600" />
              </div>
              <p className="mt-1 text-sm text-stone-600">{c.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
