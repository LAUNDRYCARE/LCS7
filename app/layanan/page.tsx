import type { Metadata } from "next";

import {
Shirt,
Zap,
Sparkles,
Truck,
Package,
} from "lucide-react";

import FeatureCard from "@/components/FeatureCard";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
title: "Layanan Laundry Soppeng | Laundry Care+",
description:
"Layanan laundry kiloan, express, satuan, setrika, dan antar jemput di Soppeng dengan standar C.A.R.E.+",
};

export default function LayananPage() {
return (
<main
className="min-h-screen px-6 py-12"
style={{
background:
"linear-gradient(180deg, #FFFFFF 0%, #EAF6FF 100%)",
}}
> <div className="mx-auto max-w-6xl">


    <section className="text-center">
      <h1 className="text-5xl font-bold text-[#002248]">
        Layanan Laundry Soppeng
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
        Laundry Care+ Soppeng menghadirkan berbagai layanan
        pencucian dengan kualitas premium dan pengerjaan
        yang tepat waktu.
      </p>

      <a
        href="https://wa.me/6285188220007"
        target="_blank"
        className="mt-8 inline-block rounded-full bg-green-600 px-8 py-4 font-bold text-white shadow-xl transition hover:bg-green-700"
      >
        📲 Pesan via WhatsApp
      </a>
    </section>

    <section className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <FeatureCard
        icon={<Shirt size={32} />}
        title="Laundry Kiloan"
        description="Cocok untuk kebutuhan harian dengan hasil bersih dan wangi."
      />

      <FeatureCard
        icon={<Zap size={32} />}
        title="Laundry Express"
        description="Pengerjaan lebih cepat untuk kebutuhan mendesak."
      />

      <FeatureCard
        icon={<Sparkles size={32} />}
        title="Setrika Saja"
        description="Mulai Rp4.000 dengan hasil rapi siap pakai."
      />

      <FeatureCard
        icon={<Package size={32} />}
        title="Laundry Satuan"
        description="Untuk selimut, bed cover, boneka, dan item khusus lainnya."
      />

      <FeatureCard
        icon={<Truck size={32} />}
        title="Antar Jemput"
        description="Praktis tanpa perlu datang ke outlet."
      />

    </section>

    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold text-[#002248]">
        Mengapa Memilih Laundry Care+?
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h3 className="text-xl font-bold">
            Bersih Maksimal
          </h3>

          <p className="mt-3 text-gray-500">
            Menggunakan deterjen berkualitas dan proses
            pencucian higienis.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h3 className="text-xl font-bold">
            Wangi Tahan Lama
          </h3>

          <p className="mt-3 text-gray-500">
            Aroma premium yang segar dan nyaman digunakan.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h3 className="text-xl font-bold">
            Tepat Waktu
          </h3>

          <p className="mt-3 text-gray-500">
            Proses pengerjaan sesuai estimasi yang diberikan.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h3 className="text-xl font-bold">
            Standar C.A.R.E.+
          </h3>

          <p className="mt-3 text-gray-500">
            Lebih dari sekadar bersih.
          </p>
        </div>

      </div>
    </section>

    <TestimonialSection />

    <CTASection />

  </div>
</main>


);
}
