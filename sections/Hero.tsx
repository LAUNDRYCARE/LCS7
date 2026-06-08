export default function Hero() {
  return (
    <section
      id="beranda"
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#002248]
      flex
      items-center
      justify-center
      px-6"
    >
      {/* Glow Background */}
      <div className="
      absolute
      w-[600px]
      h-[600px]
      bg-[#096FDE]/20
      rounded-full
      blur-[150px]
      top-[-200px]
      left-[-150px]
      " />

      <div className="
      absolute
      w-[500px]
      h-[500px]
      bg-[#64C3F1]/20
      rounded-full
      blur-[120px]
      bottom-[-150px]
      right-[-100px]
      " />

      <div className="relative max-w-6xl mx-auto text-center">

        <div
          className="
          inline-flex
          px-5
          py-2
          rounded-full
          bg-white/10
          border
          border-white/10
          text-white"
        >
          Premium Laundry Service
        </div>

        <h1
          className="
          mt-8
          text-white
          text-5xl
          md:text-7xl
          font-black
          leading-tight"
        >
          Lebih Dari
          <br />

          <span className="text-[#64C3F1]">
            Sekadar Bersih
          </span>
        </h1>

        <p
          className="
          mt-8
          text-lg
          md:text-xl
          text-slate-300
          max-w-3xl
          mx-auto"
        >
          Pelayanan laundry modern dengan standar kebersihan tinggi,
          pengerjaan tepat waktu, dan kualitas yang konsisten.
        </p>

        <div className="mt-12 flex justify-center gap-5">

          <a
            href="https://wa.me/6285188218821"
            className="
            px-8
            py-4
            rounded-2xl
            bg-[#096FDE]
            text-white
            font-semibold
            hover:bg-[#64C3F1]
            duration-300"
          >
            Pesan Sekarang
          </a>

          <a
            href="#layanan"
            className="
            px-8
            py-4
            rounded-2xl
            border
            border-white/20
            text-white
            hover:bg-white/10
            duration-300"
          >
            Lihat Layanan
          </a>

        </div>

      </div>
    </section>
  );
}