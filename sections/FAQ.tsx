export default function FAQ() {
  return (
    <section id="faq" className="py-24">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white mb-16">
          Pertanyaan Umum
        </h2>

        <div className="space-y-6">

          <div className="bg-slate-900 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white">
              Berapa minimal laundry?
            </h3>

            <p className="text-gray-400 mt-4">
              Minimal laundry kiloan adalah 3 kg.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white">
              Apakah tersedia antar jemput?
            </h3>

            <p className="text-gray-400 mt-4">
              Ya, tersedia layanan antar jemput untuk area tertentu.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white">
              Berapa lama pengerjaan?
            </h3>

            <p className="text-gray-400 mt-4">
              Normal 2-3 hari, tersedia juga layanan express.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}