# Pernambuco Materiais de Construção

Site institucional da loja — uma vitrine digital simples, bonita e direta ao ponto.
Mostra **o que vendemos**, **onde estamos** e **como falar com a gente**, sem complicação.

🌐 **Online em:** [pernambuco-xi.vercel.app](https://pernambuco-xi.vercel.app)

---

## Sobre o site

Single-page com navegação suave entre seções:

- **Início** — apresentação da loja e diferenciais
- **Produtos** — catálogo com filtro por categoria e busca
- **Sobre** — nossa história, valores e compromisso
- **Contato** — endereço, horário, telefone, WhatsApp e mapa

Tudo pensado pra carregar rápido, funcionar bem no celular e ser fácil de atualizar
conforme a loja for crescendo.

---

## Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | React + TypeScript |
| Build | Vite |
| Estilo | TailwindCSS |
| Ícones | lucide-react |
| Ambiente local | Docker |
| Hospedagem | Vercel |

---

## Como atualizar conteúdo

Todo o conteúdo do site está em [`src/data/`](src/data) — placeholders prontos para
substituir conforme as informações reais forem chegando.

| Arquivo | O que mexe |
| --- | --- |
| `store.ts` | Endereço, horário, telefones, redes sociais, mapa |
| `categories.ts` | Categorias da loja |
| `products.ts` | Itens do catálogo |
| `highlights.ts` | Diferenciais (entrega, atendimento, etc) |

Para fotos reais, basta trocar os componentes `<PlaceholderImage />` por `<img />`
apontando para arquivos em `public/`.

---

## Estrutura

```text
src/
├── components/
│   ├── ui/         # peças reutilizáveis (botão, container, ícones…)
│   └── layout/     # navbar, footer, logo
├── features/       # blocos de conteúdo do site (hero, produtos, sobre, contato…)
├── data/           # conteúdo da loja (placeholders)
├── lib/            # utilitários (scroll suave, helpers)
└── types/          # tipos compartilhados
```

---

Feito com cuidado para a sua obra. 🧱
