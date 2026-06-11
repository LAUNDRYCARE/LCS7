export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-br from-[#002248] via-[#00366d] to-[#096FDE]"
    >
      <div className="max-w-7xl mx-auto px-6 py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-8">
              ✨ Lebih Dari Sekadar Bersih
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              Laundry 
              <span className="block text-[#64C3F1]">
                Bersih • Wangi • Tepat Waktu
              </span>
            </h1>

            <p className="mt-8 text-xl text-slate-200 leading-relaxed max-w-xl">
              Laundry Care+ menghadirkan layanan laundry modern dengan standar
              kebersihan tinggi, pengerjaan profesional, dan layanan antar jemput
              yang memudahkan aktivitas Anda.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="https://wa.me/6285188218821"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-white text-[#002248] font-semibold hover:scale-105 transition"
              >
                Pesan Sekarang
              </a>

              <a
                href="#layanan"
                className="px-8 py-4 rounded-2xl border border-white/30 text-white hover:bg-white/10 transition"
              >
                Lihat Layanan
              </a>

            </div>

          </div>

          {/* Right */}
          <div className="relative">

            <div className="bg-white rounded-[40px] p-10 shadow-2xl">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-sky-50 rounded-3xl p-6">
                  <div className="text-4xl font-bold text-[#002248]">
                    1000+
                  </div>
                  <div className="text-gray-600 mt-2">
                    Pelanggan Puas
                  </div>
                </div>

                <div className="bg-blue-50 rounded-3xl p-6">
                  <div className="text-4xl font-bold text-[#096FDE]">
                    4 Jam
                  </div>
                  <div className="text-gray-600 mt-2">
                    Express Service
                  </div>
                </div>

                <div className="bg-slate-50 rounded-3xl p-6">
                  <div className="text-4xl font-bold text-[#002248]">
                    Gratis
                  </div>
                  <div className="text-gray-600 mt-2">
                    Antar Jemput
                  </div>
                </div>

                <div className="bg-cyan-50 rounded-3xl p-6">
                  <div className="text-4xl font-bold text-[#64C3F1]">
                    Extra
                  </div>
                  <div className="text-gray-600 mt-2">
                    Detergen & Parfum
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
      <div
  className="
  absolute
  top-[-150px]
  left-[-150px]
  w-[500px]
  h-[500px]
  rounded-full
  bg-[#64C3F1]/20
  blur-[140px]
"
/>

<div
  className="
  absolute
  bottom-[-150px]
  right-[-100px]
  w-[450px]
  h-[450px]
  rounded-full
  bg-[#096FDE]/20
  blur-[120px]
"
/>
    </section>
  );
}
