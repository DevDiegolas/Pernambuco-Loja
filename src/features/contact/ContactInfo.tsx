import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { store } from "../../data/store";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink-900">
          <MapPin className="h-5 w-5 text-brand-600" /> Endereço
        </h3>
        <p className="mt-2 text-stone-700">
          {store.address.street}
          <br />
          {store.address.neighborhood} — {store.address.city}/{store.address.state}
          <br />
          CEP {store.address.zip}
        </p>
      </div>

      <div className="card p-6">
        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink-900">
          <Clock className="h-5 w-5 text-brand-600" /> Horário de funcionamento
        </h3>
        <ul className="mt-3 divide-y divide-stone-100 text-sm">
          {store.hours.map((h) => (
            <li key={h.label} className="flex justify-between py-2">
              <span className="text-stone-600">{h.label}</span>
              <span className="font-semibold text-ink-900">{h.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-6">
        <h3 className="font-display text-lg font-bold text-ink-900">Fale com a gente</h3>
        <ul className="mt-3 space-y-3 text-sm">
          <li className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-700">
              <Phone className="h-4 w-4" />
            </span>
            <a
              className="font-medium text-ink-900 hover:text-brand-700"
              href={`tel:${store.contact.phone.replace(/\D/g, "")}`}
            >
              {store.contact.phone}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-700">
              <MessageCircle className="h-4 w-4" />
            </span>
            <a
              className="font-medium text-ink-900 hover:text-brand-700"
              href={`https://wa.me/${store.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-700">
              <Mail className="h-4 w-4" />
            </span>
            <a
              className="font-medium text-ink-900 hover:text-brand-700"
              href={`mailto:${store.contact.email}`}
            >
              {store.contact.email}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
