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
      bg-white/80
      border-b
      border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div>

          <h1 className="text-2xl font-bold text-[#002248]">
            LAUNDRY
            <span className="text-[#096FDE]"> CARE+</span>
          </h1>

        </div>

        <nav className="hidden md:flex gap-10">

          <a href="#beranda">Beranda</a>

          <a href="#layanan">Layanan</a>

          <a href="#care">Keunggulan</a>

          <a href="#faq">FAQ</a>

          <a href="#kontak">Kontak</a>

        </nav>

      </div>
    </header>
  );
}