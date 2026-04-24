import type { Category } from "../types";

export const categories: Category[] = [
  {
    slug: "basicos",
    name: "Básicos de Obra",
    description: "Cimento, cal, areia, brita e tudo para o alicerce.",
    icon: "Boxes",
  },
  {
    slug: "estrutura",
    name: "Estrutura",
    description: "Tijolos, blocos, vergalhões e telhas.",
    icon: "Construction",
  },
  {
    slug: "hidraulica",
    name: "Hidráulica",
    description: "Tubos, conexões, registros e caixas d'água.",
    icon: "Droplets",
  },
  {
    slug: "eletrica",
    name: "Elétrica",
    description: "Fios, disjuntores, tomadas, iluminação.",
    icon: "Zap",
  },
  {
    slug: "ferragens",
    name: "Ferragens & Ferramentas",
    description: "Pregos, parafusos, ferramentas manuais e elétricas.",
    icon: "Wrench",
  },
  {
    slug: "acabamentos",
    name: "Acabamentos",
    description: "Pisos, revestimentos, tintas e louças.",
    icon: "PaintRoller",
  },
];
