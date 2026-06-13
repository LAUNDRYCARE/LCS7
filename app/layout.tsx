import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
metadataBase: new URL("https://soppeng.laundrycare.id"),

title: "Laundry Care+ Soppeng | Laundry Kiloan & Express",

description:
"Laundry Care+ Soppeng melayani laundry kiloan, express, satuan, dan antar jemput. Buka setiap hari pukul 07.00–22.00.",

keywords: [
"Laundry Soppeng",
"Laundry Kiloan Soppeng",
"Laundry Express Soppeng",
"Laundry Antar Jemput Soppeng",
"Laundry Care Soppeng",
],

icons: {
icon: "/favicon.ico",
shortcut: "/favicon.ico",
apple: "/favicon.ico",
},

openGraph: {
title: "Laundry Care+ Soppeng",

description:
  "Laundry kiloan, express, dan antar jemput dengan standar C.A.R.E.+",

url: "https://soppeng.laundrycare.id",

siteName: "Laundry Care+ Soppeng",

images: [
  {
    url: "/logo.png",
    width: 512,
    height: 512,
    alt: "Laundry Care+ Soppeng",
  },
],

locale: "id_ID",
type: "website",

},
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return ( <html lang="id"><body>
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
"@context": "https://schema.org",
"@type": "DryCleaningOrLaundry",


          name: "Laundry Care+ Soppeng",

          image: "https://soppeng.laundrycare.id/logo.png",

          url: "https://soppeng.laundrycare.id",

          telephone: "+6285188220007",

          priceRange: "Rp4.000 - Rp20.000",

          address: {
            "@type": "PostalAddress",
            addressLocality: "Jl. Malaka Raya, Soppeng",
            addressRegion: "Sulawesi Selatan",
            addressCountry: "ID",
          },

          openingHours: "Mo-Su 07:00-22:00",

          areaServed: [
            "Lalabata",
            "Cabbenge",
            "Marioriawa",
            "Marioriwawo",
            "Liliriaja",
          ],

          sameAs: [
            "https://instagram.com/laundrycare.id",
          ],
        }),
      }}
    />

    {children}
  </body>
</html>


);
}