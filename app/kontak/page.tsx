import type { Metadata } from "next";
import {
Phone,
Clock3,
MapPin,
MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
title: "Kontak Laundry Care+ Soppeng",
description:
"Hubungi Laundry Care+ Soppeng melalui WhatsApp 0851-8822-0007. Buka setiap hari pukul 07.00–22.00.",
};

export default function KontakPage() {
return (
<main
className="min-h-screen px-6 py-12"
style={{
background:
"linear-gradient(180deg,#FFFFFF 0%,#EAF6FF 100%)",
}}
> <div className="mx-auto max-w-5xl">


    <section className="text-center">
      <h1 className="text-5xl font-bold text-[#002248]">
        Hubungi Laundry Care+ Soppeng
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        Siap membantu kebutuhan laundry Anda setiap hari.
      </p>
    </section>

    <div className="mt-14 grid gap-8 md:grid-cols-2">

      <div className="rounded-3xl bg-white p-8 shadow-xl">
        <Phone className="text-green-600" size={40} />

        <h2 className="mt-4 text-2xl font-bold">
          WhatsApp
        </h2>

        <p className="mt-3 text-gray-500">
          0851-8822-0007
        </p>

        <a
          href="https://wa.me/6285188220007"
          target="_blank"
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-bold text-white shadow-lg hover:bg-green-700"
        >
          <MessageCircle size={20} />
          Chat WhatsApp
        </a>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-xl">
        <Clock3 className="text-blue-600" size={40} />

        <h2 className="mt-4 text-2xl font-bold">
          Jam Operasional
        </h2>

        <p className="mt-3 text-gray-500">
          Setiap hari
        </p>

        <p className="font-semibold text-[#002248]">
          07.00 - 22.00
        </p>
      </div>

    </div>

    <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl">
      <MapPin className="text-red-500" size={40} />

      <h2 className="mt-4 text-2xl font-bold">
        Lokasi
      </h2>

      <p className="mt-3 text-gray-500">
        Jl. Malaka Raya, Kabupaten Soppeng,
        Sulawesi Selatan.
      </p>
    </div>

    <section className="mt-16 rounded-3xl bg-[#002248] p-12 text-center shadow-2xl">

      <h2 className="text-4xl font-bold text-white">
        Siap Laundry Hari Ini?
      </h2>

      <p className="mt-4 text-blue-100">
        Hubungi Laundry Care+ Soppeng sekarang juga.
      </p>

      <a
        href="https://wa.me/6285188220007"
        target="_blank"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-600 px-10 py-5 text-lg font-bold text-white shadow-xl hover:bg-green-700"
      >
        <MessageCircle size={24} />
        Pesan Sekarang
      </a>

    </section>

  </div>
</main>


);
}
