import { cn } from "../../lib/cn";
import Icon from "../../components/ui/Icon";
import type { Category } from "../../types";

type Props = {
  categories: Category[];
  active: string | null;
  onChange: (slug: string | null) => void;
};

export default function CategoryFilter({ categories, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange(null)}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-semibold ring-1 transition",
          active === null
            ? "bg-ink-900 text-white ring-ink-900"
            : "bg-white text-ink-700 ring-stone-200 hover:ring-brand-400"
        )}
      >
        Todos
      </button>
      {categories.map((c) => {
        const isActive = active === c.slug;
        return (
          <button
            key={c.slug}
            onClick={() => onChange(c.slug)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold ring-1 transition",
              isActive
                ? "bg-brand-600 text-white ring-brand-600"
                : "bg-white text-ink-700 ring-stone-200 hover:ring-brand-400"
            )}
          >
            <Icon name={c.icon} className="h-3.5 w-3.5" />
            {c.name}
          </button>
        );
      })}
    </div>
  );
}
