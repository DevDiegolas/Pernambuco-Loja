import { MapPin } from "lucide-react";
import { store } from "../../data/store";

export default function MapEmbed() {
  if (store.mapUrl) {
    return (
      <div className="overflow-hidden rounded-2xl ring-1 ring-stone-200 shadow-soft">
        <iframe
          src={store.mapUrl}
          title={`Mapa - ${store.name}`}
          loading="lazy"
          className="h-[420px] w-full"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className="placeholder-img flex h-[420px] w-full items-center justify-center rounded-2xl ring-1 ring-stone-200 shadow-soft">
      <div className="flex flex-col items-center gap-2 text-stone-600">
        <MapPin className="h-8 w-8 text-brand-600" />
        <p className="font-semibold">Mapa em breve</p>
        <p className="text-xs text-stone-500">
          Adicione `mapUrl` em src/data/store.ts
        </p>
      </div>
    </div>
  );
}
