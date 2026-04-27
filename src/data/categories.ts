import type { Category } from "../types";

export const categories: Category[] = [
  {
    slug: "basicos",
    name: "Materiais básicos",
    description: "Cimento, areia, pedra e itens essenciais para começar a obra.",
    icon: "Construction",
  },
  {
    slug: "hidraulica",
    name: "Hidráulica",
    description: "Tubos, conexões, registros e soluções para água e esgoto.",
    icon: "Droplets",
  },
  {
    slug: "eletrica",
    name: "Elétrica",
    description: "Fios, disjuntores, iluminação e acessórios elétricos.",
    icon: "Zap",
  },
  {
    slug: "acabamento",
    name: "Acabamento",
    description: "Tinta, revestimento, porcelanato e itens de finalização.",
    icon: "PaintRoller",
  },
  {
    slug: "ferramentas",
    name: "Ferramentas",
    description: "Ferramentas manuais, elétricas e acessórios de apoio.",
    icon: "Wrench",
  },
  {
    slug: "locacao",
    name: "Locação",
    description: "Andaime, martelete e equipamentos para locação por período.",
    icon: "Truck",
  },
];
