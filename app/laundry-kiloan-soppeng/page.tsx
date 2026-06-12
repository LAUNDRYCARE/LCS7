import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laundry Kiloan Soppeng | Laundry Care+",
  description:
    "Laundry kiloan terpercaya di Soppeng dengan hasil bersih, wangi, dan rapi.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Laundry Kiloan Soppeng
      </h1>

      <p className="text-gray-700 leading-8">
        Laundry Care+ merupakan pilihan terbaik untuk laundry kiloan
        di Kabupaten Soppeng.
      </p>

      <p className="mt-6 leading-8">
        Dengan proses pencucian modern dan deterjen berkualitas,
        pakaian menjadi lebih bersih, higienis, dan wangi tahan lama.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Mengapa Memilih Laundry Care+?
      </h2>

      <ul className="space-y-3">
        <li>✓ Bersih maksimal</li>
        <li>✓ Wangi tahan lama</li>
        <li>✓ Rapi siap pakai</li>
        <li>✓ Tepat waktu</li>
        <li>✓ Gratis antar jemput</li>
      </ul>
    </main>
  );
}