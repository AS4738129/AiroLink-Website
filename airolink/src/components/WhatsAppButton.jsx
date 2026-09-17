import { MessageCircle } from "lucide-react";
import { siteInfo } from "../data/site";

export default function WhatsAppButton() {
  const digits = siteInfo.whatsapp.replace(/^0/, "233");
  return (
    <a
      href={`https://wa.me/${digits}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AiroLink on WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-panel transition-transform hover:scale-105"
    >
      <MessageCircle size={26} fill="white" className="text-[#25D366]" />
    </a>
  );
}
