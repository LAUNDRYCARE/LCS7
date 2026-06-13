import type { Metadata } from "next";
import { ShieldCheck, Truck, Zap, Clock, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Laundry Care+ Soppeng",
  description:
    "Laundry Care+ Soppeng melayani laundry kiloan, express, satuan, dan antar jemput dengan standar C.A.R.E.+.",
};

export default function TentangKamiPage() {
  return (
    <main
      className="min-h-screen px-6 py-12"
      style={{
        background:
          "linear-gradient(180deg,#FFFFFF 0%,#EAF6FF 100%)",
      }}
    >
      <div className="mx-auto max-w-5xl">

        <h1 className="text-5xl font-bold text-[#002248]">
          Tentang Laundry Care+ Soppeng
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Laundry Care+ Soppeng menyediakan layanan laundry kiloan,
          express, satuan, dan antar jemput dengan harga mulai Rp4.000.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <ShieldCheck className="w-10 h-10 text-blue-600" />
            <h2 className="mt-4 text-2xl font-bold">
              Standar C.A.R.E.+
            </h2>
            <p className="mt-3 text-gray-500">
              Bersih maksimal, wangi tahan lama, dan rapi siap pakai.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <Truck className="w-10 h-10 text-blue-600" />
            <h2 className="mt-4 text-2xl font-bold">
              Antar Jemput
            </h2>
            <p className="mt-3 text-gray-500">
              Praktis tanpa perlu datang ke outlet.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <Zap className="w-10 h-10 text-blue-600" />
            <h2 className="mt-4 text-2xl font-bold">
              Layanan Express
            </h2>
            <p className="mt-3 text-gray-500">
              Cocok untuk kebutuhan mendesak.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <Clock className="w-10 h-10 text-blue-600" />
            <h2 className="mt-4 text-2xl font-bold">
              Jam Operasional
            </h2>
            <p className="mt-3 text-gray-500">
              Setiap hari pukul 07.00–22.00.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 mt-12 text-center">

          <Phone className="w-12 h-12 mx-auto text-green-600" />

          <h2 className="text-3xl font-bold mt-4">
            Hubungi Laundry Care+ Soppeng
          </h2>

          <p className="text-gray-500 mt-3">
            WhatsApp 0851-8822-0007
          </p>

          <a
            href="https://wa.me/6285188220007"
            target="_blank"
            className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold"
          >
            Pesan Sekarang
          </a>

        </div>

      </div>
    </main>
  );
}