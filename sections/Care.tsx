export default function Care() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white mb-16">
          C.A.R.E+
        </h2>

        <div className="grid md:grid-cols-5 gap-6">

          {["Clean", "Aroma", "Reliable", "Efficient", "Extra Care"].map(
            (item) => (
              <div key={item} className="bg-slate-900 rounded-3xl p-8">
                <h3 className="text-blue-400 text-2xl font-bold mb-3">
                  {item}
                </h3>

                <p className="text-gray-400">
                  Standar pelayanan terbaik Laundry Care+.
                </p>
              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}