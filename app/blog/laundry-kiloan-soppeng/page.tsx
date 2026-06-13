import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
title: "Laundry Kiloan Soppeng | Laundry Care+",
description:
"Laundry kiloan di Soppeng dengan harga mulai Rp7.000/kg. Bersih, wangi, dan tersedia layanan antar jemput.",
};

export default function LaundryKiloanBlogPage() {
return (
<main
className="min-h-screen px-6 py-12"
style={{
background:
"linear-gradient(180deg,#FFFFFF 0%,#EAF6FF 100%)",
}}
> <div className="mx-auto max-w-4xl">


    <article className="rounded-3xl bg-white p-10 shadow-xl">

      <h1 className="text-5xl font-bold text-[#002248]">
        Laundry Kiloan Soppeng
      </h1>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Jika Anda sedang mencari laundry kiloan di Soppeng,
        Laundry Care+ Soppeng hadir dengan layanan berkualitas,
        harga terjangkau, dan hasil yang bersih serta wangi.
      </p>

      <h2 className="mt-12 text-3xl font-bold text-[#002248]">
        Harga Laundry Kiloan
      </h2>

      <p className="mt-5 text-gray-600 leading-8">
        Harga laundry kiloan reguler mulai dari Rp7.000/kg.
        Tersedia pula layanan express dan antar jemput untuk
        memudahkan pelanggan.
      </p>

      <h2 className="mt-12 text-3xl font-bold text-[#002248]">
        Keunggulan Laundry Care+ Soppeng
      </h2>

      <ul className="mt-6 space-y-4 text-gray-600">
        <li>✅ Bersih maksimal</li>
        <li>✅ Wangi tahan lama</li>
        <li>✅ Rapi siap pakai</li>
        <li>✅ Tersedia layanan express</li>
        <li>✅ Antar jemput</li>
      </ul>

      <div className="mt-16 rounded-3xl bg-[#002248] p-10 text-center">

        <h2 className="text-3xl font-bold text-white">
          Hubungi Laundry Care+ Soppeng
        </h2>

        <p className="mt-4 text-blue-100">
          Pesan sekarang melalui WhatsApp.
        </p>

        <a
          href="https://wa.me/6285188220007"
          target="_blank"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-bold text-white"
        >
          <MessageCircle size={20} />
          Chat WhatsApp
        </a>

      </div>

    </article>

  </div>
</main>


);
}
