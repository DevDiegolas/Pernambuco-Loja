import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../components/ui/Container";
import PageHero from "../features/shared/PageHero";
import CategoryFilter from "../features/products/CategoryFilter";
import SearchBar from "../features/products/SearchBar";
import ProductGrid from "../features/products/ProductGrid";
import { products } from "../data/products";
import { categories } from "../data/categories";

export default function Produtos() {
  const [params, setParams] = useSearchParams();
  const initialCat = params.get("cat");
  const [active, setActive] = useState<string | null>(initialCat);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const next = new URLSearchParams(params);
    if (active) next.set("cat", active);
    else next.delete("cat");
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const okCat = active ? p.category === active : true;
      const okQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q);
      return okCat && okQuery;
    });
  }, [active, query]);

  return (
    <>
      <PageHero
        eyebrow="Catálogo"
        title="Conheça o que vendemos"
        description="Mais de 1.500 itens organizados por categoria. Veja um recorte do nosso catálogo — fale com a gente para preço, estoque e entrega."
      />
      <Container className="py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CategoryFilter
            categories={categories}
            active={active}
            onChange={setActive}
          />
          <SearchBar value={query} onChange={setQuery} />
        </div>

        <p className="mt-5 text-sm text-stone-500">
          {filtered.length} {filtered.length === 1 ? "item" : "itens"} encontrados
        </p>

        <div className="mt-6">
          <ProductGrid products={filtered} />
        </div>
      </Container>
    </>
  );
}
