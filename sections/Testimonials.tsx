export default function Testimonials() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white mb-16">
          Apa Kata Pelanggan Kami
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 p-8 rounded-3xl">
            ⭐⭐⭐⭐⭐
            <p className="text-gray-400 mt-4">
              Hasil cucinya sangat bersih dan wangi.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl">
            ⭐⭐⭐⭐⭐
            <p className="text-gray-400 mt-4">
              Pelayanan cepat dan tepat waktu.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl">
            ⭐⭐⭐⭐⭐
            <p className="text-gray-400 mt-4">
              Antar jemput sangat membantu.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}