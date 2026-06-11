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
      w-16
      h-16
      rounded-full
      bg-green-500
      flex
      items-center
      justify-center
      shadow-2xl
      z-50"
    >
      <MessageCircle
        size={32}
        className="text-white"
      />
    </a>
  );
}