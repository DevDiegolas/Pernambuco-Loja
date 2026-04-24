# Pernambuco Materiais de Construção

Site institucional/catálogo da loja. Frontend-only — sem banco, sem backend.

**Stack:** Vite + React 18 + TypeScript + TailwindCSS + React Router + lucide-react.
**Deploy:** Vercel. **Dev/Prod local:** Docker.

---

## Rodando com Docker (recomendado)

> Nada precisa ser instalado na sua máquina além do Docker. Tudo (Node, npm, deps) vive no container.

### Modo desenvolvimento (hot reload em http://localhost:5173)

```bash
docker compose up --build
```

- O código é montado como volume — qualquer mudança em `src/` recarrega automaticamente.
- `node_modules` fica isolado dentro do container (não polui o host).

Para parar:

```bash
docker compose down
```

### Modo produção (Nginx em http://localhost:8080)

```bash
docker compose --profile prod up --build web-prod
```

Build standalone (sem compose):

```bash
docker build -t pernambuco-web .
docker run -p 8080:80 pernambuco-web
```

---

## Deploy na Vercel

A Vercel detecta o projeto Vite automaticamente. O `vercel.json` já configura:

- `framework: vite`
- `outputDirectory: dist`
- Rewrite SPA (`/*` → `/index.html`) para que rotas como `/produtos` funcionem direto.

Passos:

1. `vercel login`
2. `vercel` (na raiz do projeto) — para preview
3. `vercel --prod` — para produção

Ou conecte o repo no dashboard da Vercel e o build roda no push.

---

## Estrutura

```
src/
├── components/
│   ├── ui/             # primitives (Button, Container, Section, Chip, Icon, PlaceholderImage)
│   └── layout/         # Layout, Navbar, Footer, Logo, ScrollToTop
├── features/           # blocos de UI por domínio
│   ├── home/           # Hero, Highlights, FeaturedCategories, WhyUs, CallToAction
│   ├── products/       # ProductCard, ProductGrid, CategoryFilter, SearchBar
│   ├── about/          # StoreStory, Values
│   ├── contact/        # ContactInfo, MapEmbed
│   └── shared/         # PageHero
├── pages/              # rotas (compõem features, sem lógica pesada)
├── data/               # placeholders (store, categories, products, highlights)
├── types/              # tipos compartilhados
└── lib/                # utilitários (cn)
```

**Princípio:** pages chamam features, features usam primitives de `components/ui`.
Conteúdo placeholder está todo em `src/data/` — é o único lugar que precisa mudar quando vierem fotos e dados reais.

---

## Onde colocar conteúdo real

| O quê | Arquivo |
|---|---|
| Endereço, horário, telefones, redes sociais | `src/data/store.ts` |
| Categorias da loja | `src/data/categories.ts` |
| Produtos do catálogo | `src/data/products.ts` |
| Diferenciais (entrega, etc) | `src/data/highlights.ts` |
| Mapa do Google | `mapUrl` em `src/data/store.ts` |
| Fotos | substituir `<PlaceholderImage />` por `<img />` (recomendo subir em `public/`) |

---

## Comandos úteis (dentro do container)

```bash
docker compose exec web npm run lint       # typecheck
docker compose exec web npm run build      # build de produção
docker compose exec web npm install <pkg>  # adicionar dependência
```

Após instalar uma dependência nova, rebuild a imagem para persistir:

```bash
docker compose up --build
```
