import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harga Laundry Soppeng | Laundry Care+",
  description:
    "Daftar harga laundry kiloan, express, dan satuan di Laundry Care+ Soppeng.",
};

export default function HargaPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Harga Laundry Soppeng
      </h1>

      <p className="text-gray-700 leading-8">
        Laundry Care+ Soppeng menyediakan layanan laundry kiloan,
        express, dan satuan dengan harga terjangkau serta kualitas
        premium.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Keunggulan Laundry Care+
      </h2>

      <ul className="space-y-3">
        <li>✓ Bersih maksimal</li>
        <li>✓ Wangi tahan lama</li>
        <li>✓ Tepat waktu</li>
        <li>✓ Gratis antar jemput</li>
      </ul>
    </main>
  );
}