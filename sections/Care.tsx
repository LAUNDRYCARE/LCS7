export default function Care() {
  const items = [
    {
      title: "Clean",
      symbol: "C",
      desc: "Kebersihan maksimal dengan standar pencucian modern.",
    },
    {
      title: "Accurate",
      symbol: "A",
      desc: "Setiap proses dilakukan secara teliti dan terukur.",
    },
    {
      title: "Reliable",
      symbol: "R",
      desc: "Pelayanan terpercaya dengan kualitas yang konsisten.",
    },
    {
      title: "Efficient",
      symbol: "E",
      desc: "Cepat, efisien, dan tepat waktu.",
    },
    {
      title: "Plus Service",
      symbol: "+",
      desc: "Pelayanan ramah serta perhatian terhadap setiap detail.",
    },
  ];

  return (
    <section
      id="keunggulan"
      className="bg-[#002248] py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-white">
            C.A.R.E.+
          </h2>

          <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
            Filosofi pelayanan yang menjadi standar kualitas
            LAUNDRY CARE+ dalam setiap proses.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item) => (
            <div
              key={item.title}
              className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-10
              hover:border-[#64C3F1]
              hover:-translate-y-2
              duration-300"
            >

              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-[#096FDE]
                flex
                items-center
                justify-center
                text-white
                text-3xl
                font-bold"
              >
                {item.symbol}
              </div>

              <h3
                className="
                mt-8
                text-3xl
                text-white
                font-bold"
              >
                {item.title}
              </h3>

              <p
                className="
                mt-5
                text-slate-300
                leading-8"
              >
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}