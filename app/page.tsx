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
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #EAF6FF 100%)",
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

          <Footer />
        </div>
      </div>
    </main>
  );
}