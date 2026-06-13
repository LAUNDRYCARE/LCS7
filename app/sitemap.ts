import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
return [
{
url: "https://soppeng.laundrycare.id",
lastModified: new Date(),
},


{
  url: "https://soppeng.laundrycare.id/harga",
  lastModified: new Date(),
},

{
  url: "https://soppeng.laundrycare.id/layanan",
  lastModified: new Date(),
},

{
  url: "https://soppeng.laundrycare.id/laundry-kiloan-soppeng",
  lastModified: new Date(),
},

{
  url: "https://soppeng.laundrycare.id/laundry-express-soppeng",
  lastModified: new Date(),
},

{
  url: "https://soppeng.laundrycare.id/antar-jemput",
  lastModified: new Date(),
},

{
  url: "https://soppeng.laundrycare.id/faq",
  lastModified: new Date(),
},

{
  url: "https://soppeng.laundrycare.id/tentang-kami",
  lastModified: new Date(),
},

{
  url: "https://soppeng.laundrycare.id/kontak",
  lastModified: new Date(),
},

{
  url: "https://soppeng.laundrycare.id/blog/harga-laundry-soppeng",
  lastModified: new Date(),
},

{
  url: "https://soppeng.laundrycare.id/blog/laundry-kiloan-soppeng",
  lastModified: new Date(),
},

{
  url: "https://soppeng.laundrycare.id/blog/laundry-express-soppeng",
  lastModified: new Date(),
},

{
  url: "https://soppeng.laundrycare.id/blog/laundry-antar-jemput-soppeng",
  lastModified: new Date(),
},

{
  url: "https://soppeng.laundrycare.id/blog/cara-merawat-pakaian-putih",
  lastModified: new Date(),
},

{
  url: "https://soppeng.laundrycare.id/blog/cara-mencuci-bed-cover",
  lastModified: new Date(),
},

];
}
