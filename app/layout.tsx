import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laundry Care+ | Lebih Dari Sekadar Bersih",
  description: "Laundry Care+ menghadirkan layanan laundry dengan hasil bersih, wangi, rapi, dan tepat waktu. Tersedia layanan antar jemput.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});
<body className={inter.className}></body>