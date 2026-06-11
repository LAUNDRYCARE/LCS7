import {
  Shirt,
  Sparkles,
  Clock3,
  Package,
  Footprints,
  BedDouble,
  Home,
  Truck,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Shirt,
      title: "Laundry Kiloan",
      desc: "Pencucian harian dengan hasil bersih, wangi, dan rapi.",
    },
    {
      icon: Sparkles,
      title: "Laundry Satuan",
      desc: "Perawatan khusus untuk pakaian favorit dan item premium.",
    },
    {
      icon: Clock3,
      title: "Express Service",
      desc: "Layanan cepat untuk kebutuhan mendesak dengan kualitas terbaik.",
    },
    {
      icon: Package,
      title: "Cuci Lipat",
      desc: "Pakaian dicuci dan dilipat rapi sehingga siap disimpan.",
    },
    {
      icon: Footprints,
      title: "Sepatu",
      desc: "Pembersihan sepatu dengan metode yang aman dan higienis.",
    },
    {
      icon: BedDouble,
      title: "Bed Cover & Selimut",
      desc: "Perawatan menyeluruh untuk menjaga kebersihan dan kenyamanan.",
    },
    {
      icon: Home,
      title: "Karpet & Boneka",
      desc: "Pembersihan menyeluruh agar tetap bersih, segar, dan higienis.",
    },
    {
      icon: Truck,
      title: "Gratis Antar Jemput",
      desc: "Nikmati layanan antar jemput tanpa biaya tambahan di area tertentu.",
    },
  ];

  return (
    <section
      id="layanan"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-sky-500 font-semibold uppercase tracking-wider">
            Layanan Kami
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#002248]">
            Solusi Laundry Lengkap
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-lg">
            Laundry Care+ menghadirkan layanan profesional dengan standar
            kebersihan tinggi, proses yang aman, dan hasil yang konsisten.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#096FDE]/10 flex items-center justify-center mb-6 group-hover:bg-[#096FDE] transition">
                  <Icon
                    size={30}
                    className="text-[#096FDE] group-hover:text-white transition"
                  />
                </div>

                <h3 className="text-xl font-bold text-[#002248] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}