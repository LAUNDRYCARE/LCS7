import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FAQ Laundry Care+ Soppeng",
  description:
    "Pertanyaan yang sering diajukan tentang Laundry Care+ Soppeng.",
};

export default function FAQPage() {
  return (
    <main
      className="min-h-screen px-6 py-12"
      style={{
        background: "linear-gradient(180deg,#FFFFFF 0%,#EAF6FF 100%)",
      }}
    >
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold text-[#002248]">
          FAQ Laundry Care+ Soppeng
        </h1>

        <div className="mt-12 space-y-6">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-xl font-bold">
              Berapa harga laundry di Soppeng?
            </h2>

            <p className="mt-3 text-gray-500">
              Harga laundry mulai dari Rp4.000.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-xl font-bold">
              Apakah tersedia layanan express?
            </h2>

            <p className="mt-3 text-gray-500">
              Ya, tersedia layanan laundry express dengan pengerjaan prioritas.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-xl font-bold">
              Apakah tersedia layanan antar jemput?
            </h2>

            <p className="mt-3 text-gray-500">
              Ya, Laundry Care+ Soppeng menyediakan layanan antar jemput.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-xl font-bold">
              Berapa lama pengerjaan laundry?
            </h2>

            <p className="mt-3 text-gray-500">
              Lama pengerjaan tergantung jenis layanan yang dipilih.
            </p>
          </div>
        </div>
      </div>

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Berapa harga laundry di Soppeng?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Harga laundry di Laundry Care+ Soppeng mulai dari Rp4.000.",
                },
              },
              {
                "@type": "Question",
                name: "Apakah tersedia layanan express?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ya, tersedia layanan laundry express dengan pengerjaan prioritas.",
                },
              },
              {
                "@type": "Question",
                name: "Apakah tersedia layanan antar jemput?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ya, Laundry Care+ Soppeng menyediakan layanan antar jemput.",
                },
              },
              {
                "@type": "Question",
                name: "Berapa lama pengerjaan laundry?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Lama pengerjaan tergantung jenis layanan yang dipilih.",
                },
              },
            ],
          }),
        }}
      />
      <Script
  id="breadcrumb-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://soppeng.laundrycare.id",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "FAQ",
          item: "https://soppeng.laundrycare.id/faq",
        },
      ],
    }),
  }}
/>
    </main>
  );
}