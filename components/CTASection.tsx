import { MessageCircle, MapPin } from "lucide-react";

export default function CTASection() {
return ( <section className="mt-16 rounded-3xl bg-[#002248] p-8 text-center text-white shadow-2xl"> <h2 className="text-3xl font-bold">
Siap Laundry Hari Ini? </h2>

  <p className="mt-3 text-blue-100">
    Hubungi Laundry Care+ Soppeng dan nikmati layanan terbaik
    dengan standar C.A.R.E.+
  </p>

  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
    <a
      href="https://wa.me/6285188220007"
      target="_blank"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-green-700"
    >
      <MessageCircle size={20} />
      Pesan via WhatsApp
    </a>

    <a
      href="https://maps.google.com"
      target="_blank"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#002248] shadow-lg"
    >
      <MapPin size={20} />
      Lihat Lokasi
    </a>
  </div>
</section>

);
}
