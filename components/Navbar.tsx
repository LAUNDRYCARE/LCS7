export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-white">
          LAUNDRY CARE+
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-300">

          <a href="#beranda">Beranda</a>
          <a href="#layanan">Layanan</a>
          <a href="#faq">FAQ</a>
          <a href="#kontak">Kontak</a>

        </nav>

      </div>

    </header>
  );
}