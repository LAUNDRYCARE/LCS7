import {
  Truck,
  Clock3,
  Sparkles,
  Flower2,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function AntarJemputPage() {
  return (
    <main
      className="min-h-screen px-6 py-12"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #EAF6FF 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">

        {/* HERO */}
        <section className="rounded-3xl bg-white p-10 shadow-xl">
          <h1 className="text-5xl font-bold text-[#002248]">
            Laundry Antar Jemput Soppeng
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Laundry Care+ Soppeng menyediakan layanan antar jemput yang
            praktis dan cepat. Anda cukup menghubungi kami melalui WhatsApp,
            dan tim kami akan menjemput cucian langsung ke lokasi Anda.
          </p>

          <a
            href="https://wa.me/6285188220007"
            target="_blank"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-green-700"
          >
            <MessageCircle size={22} />
            Pesan Sekarang via WhatsApp
          </a>
        </section>

        {/* KEUNGGULAN */}
        <section className="mt-14">
          <h2 className="text-4xl font-bold text-[#002248] mb-8">
            Mengapa Memilih Layanan Antar Jemput?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <Truck className="text-blue-600" size={40} />
              <h3 className="mt-4 text-2xl font-bold">
                Gratis Antar Jemput
              </h3>
              <p className="mt-3 text-gray-600">
                Praktis tanpa perlu datang ke outlet.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <Clock3 className="text-blue-600" size={40} />
              <h3 className="mt-4 text-2xl font-bold">
                Hemat Waktu
              </h3>
              <p className="mt-3 text-gray-600">
                Cocok untuk pelanggan yang sibuk.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <Sparkles className="text-blue-600" size={40} />
              <h3 className="mt-4 text-2xl font-bold">
                Bersih Maksimal
              </h3>
              <p className="mt-3 text-gray-600">
                Dicuci dengan standar Laundry Care+.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <Flower2 className="text-blue-600" size={40} />
              <h3 className="mt-4 text-2xl font-bold">
                Wangi Tahan Lama
              </h3>
              <p className="mt-3 text-gray-600">
                Pakaian siap dipakai dengan nyaman.
              </p>
            </div>

          </div>
        </section>

        {/* LANGKAH */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold text-[#002248] mb-8">
            Cara Pemesanan
          </h2>

          <div className="grid gap-6 md:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600">1</div>
              <p className="mt-4 font-semibold">
                Hubungi WhatsApp
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600">2</div>
              <p className="mt-4 font-semibold">
                Kami Jemput Cucian
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600">3</div>
              <p className="mt-4 font-semibold">
                Dicuci Secara Standar
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600">4</div>
              <p className="mt-4 font-semibold">
                Diantar Kembali
              </p>
            </div>

          </div>
        </section>

        {/* AREA */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold text-[#002248] mb-8">
            Area Layanan
          </h2>

          <div className="rounded-3xl bg-white p-10 shadow-lg">

            <div className="space-y-5 text-lg">

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" />
                Lalabata
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" />
                Cabbenge
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" />
                Marioriawa
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" />
                Marioriwawo
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" />
                Liliriaja
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl bg-[#002248] p-12 text-center shadow-2xl">

          <h2 className="text-4xl font-bold text-white">
            Siap Laundry Hari Ini?
          </h2>

          <p className="mt-5 text-blue-100 text-lg">
            Nikmati layanan antar jemput Laundry Care+ Soppeng
            tanpa perlu keluar rumah.
          </p>

          <a
            href="https://wa.me/6285188220007"
            target="_blank"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-600 px-10 py-5 text-lg font-bold text-white shadow-xl hover:bg-green-700"
          >
            <MessageCircle size={24} />
            Pesan Sekarang
          </a>

        </section>

      </div>
    </main>
  );
}