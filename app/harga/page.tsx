import type { Metadata } from "next";

import {
Sparkles,
Flower2,
Clock3,
Truck,
} from "lucide-react";

import FeatureCard from "@/components/FeatureCard";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
title: "Harga Laundry Soppeng | Laundry Care+",
description:
"Harga laundry di Soppeng mulai Rp4.000. Laundry kiloan, express, dan antar jemput dengan standar C.A.R.E.+",
};

export default function HargaPage() {
return (
<main
className="min-h-screen px-6 py-12"
style={{
background:
"linear-gradient(180deg, #FFFFFF 0%, #EAF6FF 100%)",
}}
> <div className="mx-auto max-w-6xl">

```
    <section className="text-center">
      <h1 className="text-5xl font-bold text-[#002248]">
        Harga Laundry Soppeng
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
        Laundry Care+ Soppeng melayani laundry kiloan,
        express, dan satuan dengan harga terjangkau dan
        kualitas premium.
      </p>

      <a
        href="https://wa.me/6285188220007"
        target="_blank"
        className="mt-8 inline-block rounded-full bg-green-600 px-8 py-4 font-bold text-white shadow-xl transition hover:bg-green-700"
      >
        📲 Pesan via WhatsApp
      </a>
    </section>

    <section className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      <FeatureCard
        icon={<Sparkles size={32} />}
        title="Bersih Maksimal"
        description="Proses pencucian higienis dengan kualitas terbaik."
      />

      <FeatureCard
        icon={<Flower2 size={32} />}
        title="Wangi Tahan Lama"
        description="Menggunakan pewangi premium pilihan."
      />

      <FeatureCard
        icon={<Clock3 size={32} />}
        title="Tepat Waktu"
        description="Estimasi pengerjaan yang jelas."
      />

      <FeatureCard
        icon={<Truck size={32} />}
        title="Gratis Antar Jemput"
        description="Praktis dan hemat waktu."
      />

    </section>

    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold text-[#002248]">
        Daftar Harga
      </h2>

      <div className="space-y-5">

        <div className="rounded-3xl bg-white p-6 shadow-lg flex items-center justify-between">
          <span>Laundry Reguler</span>
          <span className="font-bold text-[#002248]">
            Mulai Rp4.000/kg
          </span>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg flex items-center justify-between">
          <span>Setrika Lipat</span>
          <span className="font-bold text-[#002248]">
            Mulai Rp5.000/kg
          </span>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg flex items-center justify-between">
          <span>Laundry Express</span>
          <span className="font-bold text-[#002248]">
            Mulai Rp7.000/kg
          </span>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg flex items-center justify-between">
          <span>Selimut</span>
          <span className="font-bold text-[#002248]">
            Mulai Rp20.000
          </span>
        </div>

      </div>
    </section>

    <TestimonialSection />

    <CTASection />

  </div>
</main>


);
}
