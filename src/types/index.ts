export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: string; // nome do ícone do lucide-react
};

export type StoreUnit = {
  name: string;
  note: string;
  address: string;
  area: string;
  mapQuery: string;
};

export type ServiceItem = {
  icon: string;
  title: string;
  description: string;
};

export type StoreInfo = {
  name: string;
  tagline: string;
  description: string;
  since: string;
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
    phoneRaw: string;
    whatsapp: string;
    whatsappLabel: string;
    email: string;
  };
  social: {
    instagramHandle?: string;
    instagram?: string;
    facebook?: string;
  };
  units: StoreUnit[];
  audiences: string[];
  services: ServiceItem[];
  mapUrl?: string;
};
