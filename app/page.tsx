import Footer from "@/components/Footer";
import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";

import { links } from "@/data/links";

export default function Home() {
  return (
    <main
      className="min-h-screen px-6 py-10"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #EAF6FF 100%)",
      }}
    >
      <div className="mx-auto max-w-md">
        <div className="rounded-[40px] border border-white/40 bg-white/70 p-8 shadow-2xl backdrop-blur-xl">
          <Profile />

          <Stats />

          <div className="space-y-5">
            {links.map((link) => (
              <LinkCard
                key={link.title}
                title={link.title}
                subtitle={link.subtitle}
                href={link.href}
                icon={link.icon}
                primary={link.primary}
              />
            ))}
          </div>

          <Socials />

          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8">
              Layanan Populer Laundry Care+ Soppeng
            </h2>

            <div className="grid gap-6">
              <a
                href="/harga"
                className="border rounded-xl p-6 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">
                  Harga Laundry Soppeng
                </h3>

                <p className="mt-2 text-gray-600">
                  Informasi harga laundry kiloan, express dan satuan.
                </p>
              </a>

              <a
                href="/layanan"
                className="border rounded-xl p-6 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">
                  Layanan Laundry Soppeng
                </h3>

                <p className="mt-2 text-gray-600">
                  Berbagai layanan laundry terbaik di Kabupaten Soppeng.
                </p>
              </a>

              <a
                href="/laundry-kiloan-soppeng"
                className="border rounded-xl p-6 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">
                  Laundry Kiloan Soppeng
                </h3>

                <p className="mt-2 text-gray-600">
                  Laundry kiloan bersih, wangi dan rapi siap pakai.
                </p>
              </a>

              <a
                href="/laundry-express-soppeng"
                className="border rounded-xl p-6 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">
                  Laundry Express Soppeng
                </h3>

                <p className="mt-2 text-gray-600">
                  Pengerjaan cepat untuk kebutuhan mendesak.
                </p>
              </a>

              <a
                href="/antar-jemput"
                className="border rounded-xl p-6 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">
                  Laundry Antar Jemput Soppeng
                </h3>

                <p className="mt-2 text-gray-600">
                  Praktis dan hemat waktu dengan layanan antar jemput.
                </p>
              </a>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </main>
  );
}