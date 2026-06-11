import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: "Laundry Care+ Soppeng | Laundry Kiloan & Express",

description:
"Laundry Care+ Soppeng melayani laundry kiloan, satuan, dan express. Gratis antar jemput. Buka setiap hari pukul 07.00–22.00.",

keywords: [
"Laundry Soppeng",
"Laundry Care Soppeng",
"Laundry kiloan Soppeng",
"Laundry express Soppeng",
"Laundry antar jemput Soppeng",
],

icons: {
icon: "/favicon.ico",
shortcut: "/favicon.ico",
apple: "/favicon.ico",
},

openGraph: {
title: "Laundry Care+ Soppeng",
description:
"Laundry kiloan, satuan, dan express dengan standar C.A.R.E.+",
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
return (
  <html lang="id">
    <body>{children}</body>
  </html>
);
}
