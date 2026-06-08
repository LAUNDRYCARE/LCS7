export default function Stats() {
  const stats = [
    {
      value: "100.000+",
      label: "Kg Cucian",
    },
    {
      value: "5000+",
      label: "Pelanggan",
    },
    {
      value: "99%",
      label: "Tepat Waktu",
    },
    {
      value: "4.9★",
      label: "Rating",
    },
  ];

  return (
    <section className="relative -mt-20 pb-28 px-6 z-20">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.label}
              className="
              bg-white/10
              backdrop-blur-2xl
              border border-white/10
              rounded-[32px]
              p-12
              text-center
              shadow-2xl
              hover:-translate-y-2
              hover:border-[#64C3F1]
              duration-300"
            >
              <h2
                className="
                text-5xl
                font-bold
                text-[#64C3F1]"
              >
                {item.value}
              </h2>

              <p
                className="
                mt-4
                text-lg
                text-slate-300"
              >
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}