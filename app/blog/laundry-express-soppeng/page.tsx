import type { Metadata } from "next";
import { MessageCircle, Zap } from "lucide-react";

export const metadata: Metadata = {
title: "Laundry Express Soppeng | Laundry Care+",
description:
"Layanan laundry express di Soppeng dengan pengerjaan cepat, hasil bersih, dan wangi tahan lama.",
};

export default function LaundryExpressBlogPage() {
return (
<main
className="min-h-screen px-6 py-12"
style={{
background:
"linear-gradient(180deg,#FFFFFF 0%,#EAF6FF 100%)",
}}
> <div className="mx-auto max-w-4xl">

    <article className="rounded-3xl bg-white p-10 shadow-xl">

      <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-yellow-700 font-semibold">
        <Zap size={18} />
        PRIORITAS EXPRESS
      </div>

      <h1 className="mt-6 text-5xl font-bold text-[#002248]">
        Laundry Express Soppeng
      </h1>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Butuh pakaian bersih dalam waktu cepat?
        Laundry Care+ Soppeng menyediakan layanan express
        dengan pengerjaan prioritas dan kualitas premium.
      </p>

      <h2 className="mt-12 text-3xl font-bold text-[#002248]">
        Mengapa Memilih Laundry Express?
      </h2>

      <ul className="mt-6 space-y-4 text-gray-600">
        <li>⚡ Pengerjaan prioritas</li>
        <li>✨ Bersih maksimal</li>
        <li>🌸 Wangi tahan lama</li>
        <li>👕 Rapi siap pakai</li>
        <li>🚚 Tersedia layanan antar jemput</li>
      </ul>

      <h2 className="mt-12 text-3xl font-bold text-[#002248]">
        Cocok Untuk
      </h2>

      <ul className="mt-6 space-y-4 text-gray-600">
        <li>✔ Karyawan</li>
        <li>✔ Mahasiswa</li>
        <li>✔ Kebutuhan mendadak</li>
        <li>✔ Acara penting</li>
        <li>✔ Perjalanan dinas</li>
      </ul>

      <div className="mt-16 rounded-3xl bg-[#002248] p-10 text-center">

        <h2 className="text-3xl font-bold text-white">
          Pesan Laundry Express Sekarang
        </h2>

        <p className="mt-4 text-blue-100">
          Hubungi Laundry Care+ Soppeng melalui WhatsApp.
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
