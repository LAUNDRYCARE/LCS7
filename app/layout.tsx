import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://laundrycare.id"),

  title: "Laundry Care+ | Lebih Dari Sekadar Bersih",

  description:
    "Layanan laundry premium dengan standar kebersihan tinggi, pengerjaan tepat waktu, dan kualitas terbaik.",

  keywords: [
    "Laundry Care",
    "Laundry Care+",
    "Laundry Makassar",
    "Laundry Soppeng",
    "Laundry Kiloan",
    "Laundry Express",
    "Laundry Antar Jemput",
  ],

  openGraph: {
    title: "Laundry Care+ | Lebih Dari Sekadar Bersih",

    description:
      "Layanan laundry premium dengan standar kebersihan tinggi, pengerjaan tepat waktu, dan kualitas terbaik.",

    url: "https://laundrycare.id",

    siteName: "Laundry Care+",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Laundry Care+",
      },
    ],

    locale: "id_ID",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Laundry Care+ | Lebih Dari Sekadar Bersih",

    description:
      "Layanan laundry premium dengan standar kebersihan tinggi, pengerjaan tepat waktu, dan kualitas terbaik.",

    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}