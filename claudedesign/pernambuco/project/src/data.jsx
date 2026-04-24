// ============ Dados (conforme PDF) ============

const STORE = {
  name: "Pernambuco Materiais",
  tagline: "Materiais de construção com entrega rápida no Guarujá — do básico ao acabamento para sua obra.",
  whatsapp: "5513996199155",      // (13) 99619-9155
  whatsappLabel: "(13) 99619-9155",
  phone: "(13) 3353-5733",
  phoneRaw: "1333535733",
  instagram: "@pernambucomateriais",
  instagramUrl: "https://instagram.com/",
  since: "2025",
  units: [
    {
      name: "Loja 1",
      note: "Unidade principal — maior variedade de produtos e atendimento completo.",
      address: "Rua Luiz Custódio do Vale, 364",
      area: "Praia de Pernambuco, Guarujá — SP",
      mapQ: "Rua Luiz Custódio do Vale, 364, Praia de Pernambuco, Guarujá SP",
    },
    {
      name: "Loja 2",
      note: "No Shopping Acapulco — acesso fácil para moradores e construtores da região.",
      address: "Rua Nelson Bozzi, 25 — Shopping Acapulco",
      area: "Jardim Acapulco, Guarujá — SP",
      mapQ: "Rua Nelson Bozzi, 25, Shopping Acapulco, Jardim Acapulco, Guarujá SP",
    },
  ],
  hours: [
    { d: "Segunda a Sexta", h: "07:00 — 18:00" },
    { d: "Sábado",          h: "07:30 — 17:30" },
    { d: "Domingo",         h: "08:00 — 12:00" },
  ],
};

const CATEGORIES = [
  { id: "basicos",     t: "Materiais básicos", d: "Cimento, areia, pedra", i: "foundation" },
  { id: "hidraulica",  t: "Hidráulica",        d: "Tubos e conexões",      i: "water" },
  { id: "eletrica",    t: "Elétrica",          d: "Fios, disjuntores, acessórios", i: "bolt" },
  { id: "acabamento",  t: "Acabamento",        d: "Tinta, revestimento, porcelanato", i: "brush" },
  { id: "ferramentas", t: "Ferramentas",       d: "Elétricas, manuais e EPI", i: "wrench" },
  { id: "locacao",     t: "Locação",           d: "Andaime, martelete e mais", i: "truck" },
];

const AUDIENCES = [
  "Obras residenciais",
  "Reformas",
  "Pedreiros e autônomos",
  "Condomínios",
  "Clientes finais",
];

const SERVICES = [
  {
    i: "truck",
    t: "Entrega de materiais",
    d: "Entregas rápidas e eficientes, garantindo que os materiais cheguem no prazo certo para não atrasar sua obra.",
  },
  {
    i: "clipboard",
    t: "Montagem de pedido",
    d: "Auxiliamos na montagem completa do seu pedido, identificando quantidade e materiais ideais para cada etapa da obra.",
  },
  {
    i: "users",
    t: "Indicação de mão de obra",
    d: "Rede de profissionais parceiros — pedreiros, pintores e prestadores de serviço — para conectar cliente e mão de obra qualificada.",
  },
  {
    i: "wrench",
    t: "Locação de equipamentos",
    d: "Equipamentos para locação, como andaimes e ferramentas — mais economia e praticidade para a obra.",
  },
];

Object.assign(window, { STORE, CATEGORIES, AUDIENCES, SERVICES });
