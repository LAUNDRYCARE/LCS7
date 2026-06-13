import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Cara Mencuci Bed Cover yang Benar | Laundry Care+",
  description:
    "Panduan mencuci bed cover agar tetap bersih, lembut, dan awet digunakan.",
};

export default function CaraMencuciBedCoverPage() {
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

          <h1 className="text-5xl font-bold text-[#002248]">
            Cara Mencuci Bed Cover yang Benar
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Bed cover perlu dicuci secara rutin agar tetap bersih,
            nyaman digunakan, dan bebas dari debu maupun kuman.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-[#002248]">
            1. Periksa Label Perawatan
          </h2>

          <p className="mt-4 text-gray-600 leading-8">
            Sebelum mencuci, perhatikan petunjuk pada label agar
            bahan bed cover tidak rusak.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-[#002248]">
            2. Gunakan Deterjen Secukupnya
          </h2>

          <p className="mt-4 text-gray-600 leading-8">
            Penggunaan deterjen berlebihan dapat meninggalkan residu
            dan membuat kain terasa kasar.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-[#002248]">
            3. Keringkan Dengan Sempurna
          </h2>

          <p className="mt-4 text-gray-600 leading-8">
            Pastikan bed cover benar-benar kering agar tidak lembap
            dan berbau.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-[#002248]">
            4. Cuci Secara Berkala
          </h2>

          <p className="mt-4 text-gray-600 leading-8">
            Disarankan mencuci bed cover setiap beberapa minggu
            untuk menjaga kebersihan dan kenyamanan tidur.
          </p>

          <div className="mt-16 rounded-3xl bg-[#002248] p-10 text-center">

            <h2 className="text-3xl font-bold text-white">
              Tidak Punya Waktu Mencuci Bed Cover?
            </h2>

            <p className="mt-4 text-blue-100">
              Serahkan kepada Laundry Care+ Soppeng.
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