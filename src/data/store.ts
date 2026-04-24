import type { StoreInfo } from "../types";

// PLACEHOLDER — substituir conforme info real chegar
export const store: StoreInfo = {
  name: "Pernambuco Materiais",
  tagline: "Tudo para a sua obra, do alicerce ao acabamento.",
  description:
    "Há mais de [X] anos atendendo construtores, mestres de obra e famílias com materiais de qualidade, atendimento próximo e preço justo.",
  address: {
    street: "Rua Exemplo, 000",
    neighborhood: "Bairro Exemplo",
    city: "Cidade",
    state: "UF",
    zip: "00000-000",
  },
  hours: [
    { label: "Segunda a Sexta", value: "07:00 — 18:00" },
    { label: "Sábado", value: "07:00 — 13:00" },
    { label: "Domingo", value: "Fechado" },
  ],
  contact: {
    phone: "(00) 0000-0000",
    whatsapp: "5500000000000",
    email: "contato@pernambucomateriais.com.br",
  },
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  // Placeholder — trocar pela URL embed do Google Maps depois
  mapUrl: undefined,
};
