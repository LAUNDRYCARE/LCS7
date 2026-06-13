import type { Metadata } from "next";
import { MessageCircle, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Laundry Antar Jemput Soppeng | Laundry Care+",
  description:
    "Laundry antar jemput di Soppeng yang praktis, cepat, dan terpercaya. Hubungi Laundry Care+ Soppeng sekarang.",
};

export default function LaundryAntarJemputBlogPage() {
  return (
    <main
      className="min-h-screen px-6 py-12"
      style={{
        background:
          "linear-gradient(180deg,#FFFFFF 0%,#EAF6FF 100%)",
      }}
    >
      <div className="mx-auto max-w-4xl">

        <article className="rounded-3xl bg-white p-10 shadow-xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold">
            <Truck size={18} />
            ANTAR JEMPUT
          </div>

          <h1 className="mt-6 text-5xl font-bold text-[#002248]">
            Laundry Antar Jemput Soppeng
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tidak sempat datang ke laundry?
            Laundry Care+ Soppeng menyediakan layanan antar jemput
            yang praktis dan nyaman untuk membantu aktivitas Anda.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-[#002248]">
            Keunggulan Layanan Antar Jemput
          </h2>

          <ul className="mt-6 space-y-4 text-gray-600">
            <li>🚚 Praktis tanpa keluar rumah</li>
            <li>⏰ Hemat waktu</li>
            <li>✨ Bersih maksimal</li>
            <li>🌸 Wangi tahan lama</li>
            <li>👔 Rapi siap pakai</li>
          </ul>

          <h2 className="mt-12 text-3xl font-bold text-[#002248]">
            Area Layanan
          </h2>

          <ul className="mt-6 space-y-4 text-gray-600">
            <li>📍 Lalabata</li>
            <li>📍 Cabbenge</li>
            <li>📍 Marioriawa</li>
            <li>📍 Marioriwawo</li>
            <li>📍 Liliriaja</li>
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

        </article>

      </div>
    </main>
  );
}