import type { StoreInfo } from "../types";

export const store: StoreInfo = {
  name: "Pernambuco Materiais",
  tagline:
    "Materiais de construção com entrega rápida no Guarujá — do básico ao acabamento para sua obra.",
  description:
    "Tudo que sua obra precisa, com suporte para montar o pedido certo e manter o cronograma em dia.",
  since: "2025",
  address: {
    street: "Rua Luiz Custódio do Vale, 364",
    neighborhood: "Praia de Pernambuco",
    city: "Guarujá",
    state: "SP",
    zip: "11444-090",
  },
  hours: [
    { label: "Segunda a Sexta", value: "07:00 — 18:00" },
    { label: "Sábado", value: "07:30 — 17:30" },
    { label: "Domingo", value: "08:00 — 12:00" },
  ],
  contact: {
    phone: "(13) 3353-5733",
    phoneRaw: "1333535733",
    whatsapp: "5513996199155",
    whatsappLabel: "(13) 99619-9155",
    email: "contato@pernambucomateriais.com.br",
  },
  social: {
    instagramHandle: "@pernambucomateriais",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  units: [
    {
      name: "Loja 1",
      note:
        "Unidade principal — maior variedade de produtos e atendimento completo.",
      address: "Rua Luiz Custódio do Vale, 364",
      area: "Praia de Pernambuco, Guarujá — SP",
      mapQuery:
        "Rua Luiz Custódio do Vale, 364, Praia de Pernambuco, Guarujá SP",
    },
    {
      name: "Loja 2",
      note:
        "No Shopping Acapulco — acesso fácil para moradores e construtores da região.",
      address: "Rua Nelson Bozzi, 25 — Shopping Acapulco",
      area: "Jardim Acapulco, Guarujá — SP",
      mapQuery:
        "Rua Nelson Bozzi, 25, Shopping Acapulco, Jardim Acapulco, Guarujá SP",
    },
  ],
  audiences: [
    "Obras residenciais",
    "Reformas",
    "Pedreiros e autônomos",
    "Condomínios",
    "Clientes finais",
  ],
  services: [
    {
      icon: "Truck",
      title: "Entrega de materiais",
      description:
        "Entregas rápidas e eficientes para sua obra não parar e receber no prazo certo.",
    },
    {
      icon: "ClipboardList",
      title: "Montagem de pedido",
      description:
        "Ajudamos a montar a lista completa com quantidades e produtos ideais para cada etapa.",
    },
    {
      icon: "Users",
      title: "Indicação de mão de obra",
      description:
        "Conectamos você a profissionais parceiros para acelerar a execução com mais confiança.",
    },
    {
      icon: "Wrench",
      title: "Locação de equipamentos",
      description:
        "Andaimes e ferramentas para locação com praticidade e economia na obra.",
    },
  ],
  mapUrl: undefined,
};
