import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
title: "Harga Laundry Soppeng 2026 | Laundry Care+",
description:
"Informasi harga laundry di Soppeng mulai Rp4.000. Tersedia laundry kiloan, express, satuan, dan antar jemput.",
};

export default function HargaLaundrySoppengPage() {
return (
<main
className="min-h-screen px-6 py-12"
style={{
background:
"linear-gradient(180deg,#FFFFFF 0%,#EAF6FF 100%)",
}}
> <div className="mx-auto max-w-4xl">

    <div className="rounded-3xl bg-white p-10 shadow-xl">

      <h1 className="text-5xl font-bold text-[#002248]">
        Harga Laundry Soppeng 2026
      </h1>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Laundry Care+ Soppeng menyediakan layanan laundry
        kiloan, express, satuan, dan antar jemput dengan harga
        terjangkau dan kualitas premium.
      </p>

      <h2 className="mt-12 text-3xl font-bold text-[#002248]">
        Daftar Harga Laundry
      </h2>

      <div className="mt-8 space-y-5">

        <div className="rounded-2xl bg-slate-50 p-6">
          <div className="flex items-center justify-between">
            <span>Setrika Saja</span>
            <span className="font-bold">
              Mulai Rp4.000
            </span>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-50 p-6">
          <div className="flex items-center justify-between">
            <span>Laundry Kiloan</span>
            <span className="font-bold">
              Mulai Rp7.000/kg
            </span>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-50 p-6">
          <div className="flex items-center justify-between">
            <span>Laundry Express</span>
            <span className="font-bold">
              Mulai Rp12.000/kg
            </span>
          </div>
        </div>

      </div>

      <h2 className="mt-14 text-3xl font-bold text-[#002248]">
        Mengapa Memilih Laundry Care+ Soppeng?
      </h2>

      <ul className="mt-6 space-y-3 text-gray-600">
        <li>✅ Bersih maksimal</li>
        <li>✅ Wangi tahan lama</li>
        <li>✅ Tepat waktu</li>
        <li>✅ Tersedia antar jemput</li>
        <li>✅ Layanan express</li>
      </ul>

      <div className="mt-16 rounded-3xl bg-[#002248] p-10 text-center">

        <h2 className="text-3xl font-bold text-white">
          Pesan Sekarang
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

    </div>

  </div>
</main>

);
}
