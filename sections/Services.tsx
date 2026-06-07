export default function Services() {
  return (
    <section id="layanan" className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white mb-16">
          Layanan Kami
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-slate-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Laundry Kiloan
            </h3>
            <p className="text-gray-400">
              Cuci, kering, setrika dan packing.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Laundry Satuan
            </h3>
            <p className="text-gray-400">
              Selimut, bed cover dan boneka.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Cuci Sepatu
            </h3>
            <p className="text-gray-400">
              Perawatan sepatu profesional.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Antar Jemput
            </h3>
            <p className="text-gray-400">
              Praktis tanpa keluar rumah.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}