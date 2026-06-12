import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laundry Antar Jemput Soppeng | Laundry Care+",
  description:
    "Layanan laundry antar jemput di Soppeng yang praktis dan terpercaya.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Laundry Antar Jemput Soppeng
      </h1>

      <p className="text-gray-700 leading-8">
        Laundry Care+ Soppeng menyediakan layanan antar jemput untuk
        memudahkan pelanggan tanpa perlu datang langsung ke outlet.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Keuntungan Layanan Antar Jemput
      </h2>

      <ul className="space-y-3">
        <li>✓ Praktis dan hemat waktu</li>
        <li>✓ Cocok untuk rumah tangga dan kantor</li>
        <li>✓ Proses mudah melalui WhatsApp</li>
        <li>✓ Pelayanan cepat dan ramah</li>
      </ul>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Hubungi Laundry Care+
        </h2>

        <p>
          WhatsApp: 0851-8821-8821
        </p>
      </div>
    </main>
  );
}