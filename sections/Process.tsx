import {
  Truck,
  Scale,
  Droplets,
  Wind,
  Shirt,
  ShieldCheck,
  Package,
  House,
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: Truck,
      title: "Pickup",
      desc: "Antar jemput yang praktis.",
    },

    {
      icon: Scale,
      title: "Sortir & Timbang",
      desc: "Pemeriksaan dan penimbangan pakaian.",
    },

    {
      icon: Droplets,
      title: "Pencucian",
      desc: "Menggunakan deterjen premium.",
    },

    {
      icon: Wind,
      title: "Pengeringan",
      desc: "Proses higienis dan aman.",
    },

    {
      icon: Shirt,
      title: "Setrika",
      desc: "Rapi dan siap digunakan.",
    },

    {
      icon: ShieldCheck,
      title: "Quality Control",
      desc: "Pemeriksaan kualitas akhir.",
    },

    {
      icon: Package,
      title: "Packing",
      desc: "Packing rapi dan premium.",
    },

    {
      icon: House,
      title: "Delivery",
      desc: "Siap diambil atau dikirim.",
    },
  ];

  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="text-[#096FDE] font-semibold uppercase tracking-widest">
            Process
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#002248]">
            Proses Laundry Profesional
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Setiap pesanan diproses dengan standar kualitas yang konsisten.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                rounded-3xl
                p-8
                bg-slate-50
                hover:shadow-2xl
                transition
                duration-300"
              >

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

                <h3 className="mt-8 text-2xl font-bold text-[#002248]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
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