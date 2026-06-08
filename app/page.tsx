import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import Services from "@/sections/Services";
import Care from "@/sections/Care";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
<main className="bg-[#002248]">
      <Navbar />

      <Hero />

      <Stats />
      
      <Care />
      
      <Services />
      
      <Testimonials />
      
      <FAQ />
      
      <Footer />
      
      <WhatsAppButton />
    </main>
  );
}