import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6285188218821"
      target="_blank"
      className="
      fixed
      bottom-8
      right-8
      bg-green-500
      p-4
      rounded-full
      shadow-xl
      hover:scale-110
      transition
      z-50"
    >
      <MessageCircle size={30} color="white" />
    </a>
  );
}