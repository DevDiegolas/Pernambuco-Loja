import { MessageCircle } from "lucide-react";
import { store } from "../../data/store";

export default function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${store.contact.whatsapp}?text=${encodeURIComponent(
        "Olá! Gostaria de solicitar um orçamento."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="wa-fab"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
