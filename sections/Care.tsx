import {
  Sparkles,
  Target,
  ShieldCheck,
  Zap,
  HeartHandshake,
} from "lucide-react";

export default function Care() {
  const values = [
    {
      icon: Sparkles,
      symbol: "C",
      title: "Clean",
      subtitle: "Bersih Maksimal",
      desc: "Setiap pakaian diproses dengan standar kebersihan tinggi menggunakan deterjen dan parfum premium untuk menghasilkan cucian yang bersih, segar, dan nyaman digunakan.",
    },

    {
      icon: Target,
      symbol: "A",
      title: "Accurate",
      subtitle: "Tepat & Teliti",
      desc: "Setiap pesanan diperiksa dan diproses dengan perhatian terhadap detail untuk memastikan hasil yang sesuai dengan harapan pelanggan.",
    },

    {
      icon: ShieldCheck,
      symbol: "R",
      title: "Reliable",
      subtitle: "Dapat Diandalkan",
      desc: "Komitmen kami adalah memberikan layanan yang konsisten, menjaga kualitas, dan menyelesaikan pesanan tepat waktu.",
    },

    {
      icon: Zap,
      symbol: "E",
      title: "Efficient",
      subtitle: "Cepat & Efisien",
      desc: "Proses kerja yang terorganisir memungkinkan pesanan selesai sesuai estimasi tanpa mengurangi kualitas hasil cucian.",
    },

    {
      icon: HeartHandshake,
      symbol: "+",
      title: "Plus",
      subtitle: "Lebih Dari Sekadar Bersih",
      desc: "Kami memberikan nilai tambah melalui pelayanan ramah, kualitas premium, standar higienis, serta layanan antar jemput untuk kenyamanan pelanggan.",
    },
  ];

  return (
    <section
      id="care"
      className="bg-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="text-[#096FDE] font-semibold uppercase tracking-[0.3em]">
            Filosofi Brand
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-bold text-[#002248]">
            C.A.R.E.+
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-relaxed">
            C.A.R.E.+ bukan sekadar nama, tetapi komitmen kami dalam
            memberikan layanan laundry yang bersih, tepat, dapat
            diandalkan, efisien, dan selalu memberikan lebih bagi setiap
            pelanggan.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                bg-slate-50
                rounded-[32px]
                p-10
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                duration-300"
              >

                <div className="flex items-center justify-between">

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#096FDE]/10
                    flex
                    items-center
                    justify-center"
                  >
                    <Icon
                      size={30}
                      className="text-[#096FDE]"
                    />
                  </div>

                  <div className="text-5xl font-bold text-[#64C3F1]">
                    {item.symbol}
                  </div>

                </div>

                <h3 className="mt-8 text-3xl font-bold text-[#002248]">
                  {item.title}
                </h3>

                <h4 className="mt-3 text-[#096FDE] font-semibold">
                  {item.subtitle}
                </h4>

                <p className="mt-6 text-gray-600 leading-8">
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