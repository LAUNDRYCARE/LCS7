import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Cara Merawat Pakaian Putih Agar Tetap Cerah | Laundry Care+",
  description:
    "Tips merawat pakaian putih agar tetap bersih, cerah, dan tidak mudah menguning.",
};

export default function CaraMerawatPakaianPutihPage() {
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
            Cara Merawat Pakaian Putih Agar Tetap Cerah
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Pakaian putih membutuhkan perawatan khusus agar tetap
            bersih dan tidak mudah menguning.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-[#002248]">
            1. Pisahkan Dari Pakaian Berwarna
          </h2>

          <p className="mt-4 text-gray-600 leading-8">
            Hindari mencuci pakaian putih bersama pakaian berwarna
            agar tidak terkena luntur.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-[#002248]">
            2. Gunakan Deterjen Berkualitas
          </h2>

          <p className="mt-4 text-gray-600 leading-8">
            Gunakan deterjen yang sesuai untuk menjaga warna putih
            tetap cerah.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-[#002248]">
            3. Jangan Menumpuk Cucian Terlalu Lama
          </h2>

          <p className="mt-4 text-gray-600 leading-8">
            Semakin lama noda dibiarkan, semakin sulit dihilangkan.
          </p>

          <div className="mt-16 rounded-3xl bg-[#002248] p-10 text-center">

            <h2 className="text-3xl font-bold text-white">
              Tidak Punya Waktu Mencuci?
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