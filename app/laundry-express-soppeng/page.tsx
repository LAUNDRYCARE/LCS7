import type { Metadata } from "next";

import {
  Zap,
  Clock3,
  Sparkles,
  Flower2,
  Truck,
} from "lucide-react";

import FeatureCard from "@/components/FeatureCard";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Laundry Express Soppeng | Laundry Care+",
  description:
    "Laundry Express Soppeng dengan pengerjaan cepat, bersih, dan wangi. Hubungi Laundry Care+ Soppeng sekarang.",
};

export default function LaundryExpressPage() {
  return (
    <main
      className="min-h-screen px-6 py-12"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #EAF6FF 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">

        {/* Hero */}
        <section className="text-center">

          <div className="inline-flex rounded-full bg-yellow-100 px-5 py-2 text-yellow-700 font-bold">
            ⚡ PRIORITAS EXPRESS
          </div>

          <h1 className="mt-6 text-5xl font-bold text-[#002248]">
            Laundry Express Soppeng
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Butuh pakaian bersih dengan cepat?
            Laundry Care+ Soppeng menyediakan layanan express
            dengan pengerjaan prioritas dan kualitas premium.
          </p>

          <a
            href="https://wa.me/6285188220007"
            target="_blank"
            className="mt-8 inline-block rounded-full bg-green-600 px-8 py-4 font-bold text-white shadow-xl hover:bg-green-700"
          >
            📲 Pesan via WhatsApp
          </a>

        </section>

        {/* Keunggulan */}
        <section className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <FeatureCard
            icon={<Zap size={32} />}
            title="Proses Cepat"
            description="Pengerjaan lebih cepat untuk kebutuhan mendesak."
          />

          <FeatureCard
            icon={<Sparkles size={32} />}
            title="Bersih Maksimal"
            description="Hasil bersih dan higienis."
          />

          <FeatureCard
            icon={<Flower2 size={32} />}
            title="Wangi Premium"
            description="Aroma segar dan tahan lama."
          />

          <FeatureCard
            icon={<Truck size={32} />}
            title="Antar Jemput"
            description="Lebih praktis tanpa keluar rumah."
          />

        </section>

        {/* Cara Kerja */}
        <section className="mt-20">

          <h2 className="mb-8 text-3xl font-bold text-[#002248]">
            Proses Express
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="text-5xl font-bold text-sky-600">
                1
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Hubungi Kami
              </h3>

              <p className="mt-3 text-gray-500">
                Pesan layanan express melalui WhatsApp.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="text-5xl font-bold text-sky-600">
                2
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Prioritas Pengerjaan
              </h3>

              <p className="mt-3 text-gray-500">
                Pakaian Anda mendapatkan prioritas pencucian.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="text-5xl font-bold text-sky-600">
                3
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Siap Dipakai
              </h3>

              <p className="mt-3 text-gray-500">
                Bersih, wangi, dan siap digunakan kembali.
              </p>
            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="mt-20">

          <h2 className="mb-8 text-3xl font-bold text-[#002248]">
            Pertanyaan Umum
          </h2>

          <div className="space-y-5">

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold">
                Apakah tersedia layanan express?
              </h3>

              <p className="mt-3 text-gray-500">
                Ya, Laundry Care+ Soppeng menyediakan layanan express
                dengan pengerjaan prioritas.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold">
                Apakah tersedia antar jemput?
              </h3>

              <p className="mt-3 text-gray-500">
                Ya, tersedia layanan antar jemput untuk memudahkan pelanggan.
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