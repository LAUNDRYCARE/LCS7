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
    <section className="bg-[#002248] pb-32 px-6">

      <div className="max-w-7xl mx-auto">

        <div
          className="
          grid
          md:grid-cols-4
          gap-6"
        >

          {stats.map((item) => (
            <div
              key={item.label}
              className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-10
              text-center
              hover:border-[#64C3F1]
              duration-300"
            >

              <h2
                className="
                text-4xl
                font-bold
                text-[#64C3F1]"
              >
                {item.value}
              </h2>

              <p
                className="
                mt-3
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