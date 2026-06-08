import {
  ShieldCheck,
  Sparkles,
  Clock3,
  Truck,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";

export default function Care() {
  const advantages = [
    {
      icon: ShieldCheck,
      title: "Higienis & Aman",
      desc: "Proses pencucian dengan standar kebersihan tinggi untuk menjaga kualitas pakaian Anda.",
    },
    {
      icon: Sparkles,
      title: "Bersih Maksimal",
      desc: "Menggunakan deterjen dan parfum premium dengan hasil bersih dan wangi tahan lama.",
    },
    {
      icon: Clock3,
      title: "Tepat Waktu",
      desc: "Pengerjaan sesuai estimasi sehingga pakaian siap digunakan saat dibutuhkan.",
    },
    {
      icon: Truck,
      title: "Gratis Antar Jemput",
      desc: "Layanan antar jemput memudahkan aktivitas Anda tanpa harus keluar rumah.",
    },
    {
      icon: HeartHandshake,
      title: "Pelayanan Ramah",
      desc: "Tim Laundry Care+ selalu siap memberikan pelayanan yang cepat dan profesional.",
    },
    {
      icon: BadgeCheck,
      title: "Kualitas Terjamin",
      desc: "Setiap pesanan diproses dengan perhatian dan pemeriksaan kualitas sebelum diserahkan.",
    },
  ];

  return (
    <section
      id="care"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-[#096FDE] font-semibold uppercase tracking-widest">
            C.A.R.E.+
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#002248] mt-4">
            Kenapa Memilih Laundry Care+
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 text-lg leading-relaxed">
            Kami menghadirkan layanan laundry modern dengan kualitas terbaik,
            proses yang higienis, serta pelayanan yang mengutamakan kepuasan pelanggan.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#096FDE]/10 flex items-center justify-center mb-6">

                  <Icon
                    size={30}
                    className="text-[#096FDE]"
                  />

                </div>

                <h3 className="text-2xl font-bold text-[#002248] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}