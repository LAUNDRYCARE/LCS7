export default function CTA() {
  return (
    <section
      className="
      py-32
      bg-gradient-to-r
      from-[#002248]
      via-[#003A78]
      to-[#096FDE]
      text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Siap Menikmati
          <br />

          Laundry Berkualitas?
        </h2>

        <p className="mt-8 text-xl text-slate-200">

          Nikmati layanan laundry profesional dengan hasil bersih,
          wangi, rapi, dan tepat waktu.

        </p>

        <a
          href="https://wa.me/6285188218821"
          target="_blank"
          className="
          inline-flex
          mt-12
          px-10
          py-5
          rounded-2xl
          bg-white
          text-[#002248]
          font-bold
          hover:scale-105
          duration-300"
        >
          Pesan Sekarang
        </a>

      </div>
    </section>
  );
}