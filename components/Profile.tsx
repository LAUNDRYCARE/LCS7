import Image from "next/image";

export default function Profile() {
return ( <div className="mb-10 text-center"> <div className="mb-6 flex justify-center"> <div className="rounded-[36px] bg-white p-3 shadow-2xl"> <Image
         src="/logo.png"
         alt="Laundry Care+"
         width={115}
         height={115}
         priority
         className="rounded-[28px]"
       /> </div> </div>

  <h1 className="text-4xl font-bold text-[#002248]">
    Laundry Care+ Soppeng
  </h1>

<div className="mt-6 text-center">
  <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
    Buka Setiap Hari
  </p>

  <p className="mt-2 text-xl font-semibold text-[#096FDE]">
    07.00 – 22.00
  </p>
</div>
    <p className="mt-3 text-gray-500">
    Bersih • Wangi • Tepat Waktu
  </p>

  <p className="mt-5 text-sm text-gray-400">
    Laundry kiloan, satuan, dan express dengan standar pelayanan C.A.R.E.+
  </p>
</div>

);
}
