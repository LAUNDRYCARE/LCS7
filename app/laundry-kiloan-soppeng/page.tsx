import type { Metadata } from "next";

import {
  Shirt,
  Sparkles,
  Flower2,
  Clock3,
  Truck,
} from "lucide-react";

import FeatureCard from "@/components/FeatureCard";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Laundry Kiloan Soppeng | Laundry Care+",
  description:
    "Laundry kiloan di Soppeng dengan harga mulai Rp7.000/kg. Bersih, wangi, rapi, dan tersedia layanan antar jemput.",
};

export default function LaundryKiloanPage() {
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
          <h1 className="text-5xl font-bold text-[#002248]">
            Laundry Kiloan Soppeng
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Laundry Care+ Soppeng melayani laundry kiloan dengan
            harga mulai Rp4.000/kg, hasil bersih maksimal,
            wangi tahan lama, dan siap pakai.
          </p>

          <a
            href="https://wa.me/6285188220007"
            target="_blank"
            className="mt-8 inline-block rounded-full bg-green-600 px-8 py-4 font-bold text-white shadow-xl transition hover:bg-green-700"
          >
            📲 Pesan via WhatsApp
          </a>
        </section>

        {/* Keunggulan */}
        <section className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <FeatureCard
            icon={<Sparkles size={32} />}
            title="Bersih Maksimal"
            description="Pencucian higienis dengan kualitas terbaik."
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
            description="Lebih praktis dan hemat waktu."
          />

        </section>

        {/* Harga */}
        <section className="mt-20">
          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h2 className="text-3xl font-bold text-[#002248]">
              Harga Laundry Kiloan
            </h2>

            <p className="mt-4 text-gray-500">
              Harga laundry kiloan reguler mulai:
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Shirt size={40} className="text-sky-600" />

              <div>
                <div className="text-gray-500">
                  Laundry Reguler
                </div>

                <div className="text-4xl font-bold text-[#002248]">
                  Rp4.000/kg
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Cara Kerja */}
        <section className="mt-20">

          <h2 className="mb-8 text-3xl font-bold text-[#002248]">
            Cara Pemesanan
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
                Pesan melalui WhatsApp atau datang langsung ke outlet.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="text-5xl font-bold text-sky-600">
                2
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Proses Pencucian
              </h3>

              <p className="mt-3 text-gray-500">
                Pakaian dicuci, dikeringkan, dan dirapikan dengan standar C.A.R.E.+.
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
                Pakaian bersih, wangi, dan siap digunakan kembali.
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