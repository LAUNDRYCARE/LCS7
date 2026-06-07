export default function Stats() {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-slate-900 p-8 rounded-3xl">
            <h2 className="text-4xl font-bold text-blue-400">10.000+</h2>
            <p className="text-gray-400 mt-2">Pelanggan</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl">
            <h2 className="text-4xl font-bold text-blue-400">99%</h2>
            <p className="text-gray-400 mt-2">Tepat Waktu</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl">
            <h2 className="text-4xl font-bold text-blue-400">24 Jam</h2>
            <p className="text-gray-400 mt-2">Express Service</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl">
            <h2 className="text-4xl font-bold text-blue-400">100%</h2>
            <p className="text-gray-400 mt-2">Kepuasan Pelanggan</p>
          </div>

        </div>

      </div>

    </section>
  );
}