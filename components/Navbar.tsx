"use client";

export default function Navbar() {
  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-slate-950/70
      border-b
      border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div>

          <h1 className="text-2xl font-bold text-white">
            LAUNDRY
            <span className="text-amber-400"> CARE+</span>
          </h1>

          <p className="text-xs text-slate-400">
            Lebih Dari Sekadar Bersih
          </p>

        </div>

        <nav className="hidden md:flex gap-10 text-sm text-slate-300">

          <a href="#beranda" className="hover:text-white transition">
            Beranda
          </a>

          <a href="#layanan" className="hover:text-white transition">
            Layanan
          </a>

          <a href="#keunggulan" className="hover:text-white transition">
            Keunggulan
          </a>

          <a href="#faq" className="hover:text-white transition">
            FAQ
          </a>

          <a href="#kontak" className="hover:text-white transition">
            Kontak
          </a>

        </nav>

      </div>
    </header>
  );
}