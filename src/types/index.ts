export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: string; // nome do ícone do lucide-react
};

export type Product = {
  id: string;
  name: string;
  category: string; // slug da categoria
  shortDescription: string;
  unit: string; // ex: "saco 50kg", "milheiro", "metro"
  badges?: string[];
};

export type StoreInfo = {
  name: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: { label: string; value: string }[];
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
  };
  mapUrl?: string;
};

export type Highlight = {
  icon: string;
  title: string;
  description: string;
};
