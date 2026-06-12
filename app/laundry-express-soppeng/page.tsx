import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laundry Express Soppeng | Laundry Care+",
  description:
    "Layanan laundry express di Soppeng dengan pengerjaan cepat dan hasil maksimal.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Laundry Express Soppeng
      </h1>

      <p className="text-gray-700 leading-8">
        Butuh pakaian bersih dalam waktu singkat?
        Laundry Care+ Soppeng menyediakan layanan laundry express
        dengan pengerjaan cepat tanpa mengurangi kualitas hasil.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Keunggulan Laundry Express
      </h2>

      <ul className="space-y-3">
        <li>✓ Proses cepat</li>
        <li>✓ Hasil bersih maksimal</li>
        <li>✓ Wangi premium</li>
        <li>✓ Rapi siap pakai</li>
      </ul>
    </main>
  );
}