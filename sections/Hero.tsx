export default function Hero() {
  return (
    <section id="beranda" className="min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-7xl font-bold mb-6 text-white">
          LAUNDRY CARE+
        </h1>

        <h2 className="text-4xl text-blue-400 mb-6">
          Lebih Dari Sekadar Bersih
        </h2>

        <p className="text-gray-300 text-xl max-w-2xl mb-10">
          Laundry profesional dengan standar kebersihan tinggi,
          wangi tahan lama, dan layanan antar jemput.
        </p>

        <div className="flex gap-5">

          <button className="bg-blue-600 px-7 py-4 rounded-2xl">
            Pesan Sekarang
          </button>

          <button className="border border-gray-500 px-7 py-4 rounded-2xl">
            Lihat Layanan
          </button>

        </div>

      </div>

    </section>
  );
}