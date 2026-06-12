import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Laundry Soppeng | Laundry Care+",
  description:
    "Layanan laundry kiloan, express, satuan, dan antar jemput di Soppeng.",
};

export default function LayananPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Layanan Laundry Soppeng
      </h1>

      <p className="text-gray-700 leading-8">
        Laundry Care+ Soppeng menyediakan berbagai layanan untuk
        memenuhi kebutuhan pencucian pakaian Anda.
      </p>

      <div className="mt-10 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">
            Laundry Kiloan
          </h2>
          <p>
            Cocok untuk kebutuhan sehari-hari dengan hasil bersih dan
            wangi.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Laundry Express
          </h2>
          <p>
            Proses lebih cepat untuk kebutuhan mendesak.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Laundry Satuan
          </h2>
          <p>
            Untuk pakaian khusus seperti jaket, selimut, bed cover,
            dan lainnya.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Antar Jemput
          </h2>
          <p>
            Gratis antar jemput area tertentu di Kabupaten Soppeng.
          </p>
        </div>
      </div>
    </main>
  );
}