import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Agus",
      text: "Pelayanannya cepat, hasil cucian bersih dan wangi. Sangat memuaskan.",
    },
    {
      name: "Atri",
      text: "Karyawannya ramah, dan cucinya cepat, pokoknya mantapKaryawannya ramah, dan cucinya cepat, pokoknya mantap 👌",
    },
    {
      name: "Rizky",
      text: "Layanan antar jemput sangat membantu. Recommended!",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-[#096FDE] font-semibold uppercase tracking-widest">
            Testimoni
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#002248]">
            Apa Kata Pelanggan Kami
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Kepuasan pelanggan merupakan prioritas utama Laundry Care+.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
            >

              <div className="flex gap-1 mb-6">

                <Star className="fill-yellow-400 text-yellow-400" />
                <Star className="fill-yellow-400 text-yellow-400" />
                <Star className="fill-yellow-400 text-yellow-400" />
                <Star className="fill-yellow-400 text-yellow-400" />
                <Star className="fill-yellow-400 text-yellow-400" />

              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                "{item.text}"
              </p>

              <div>

                <h3 className="font-bold text-[#002248]">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Pelanggan Laundry Care+
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}