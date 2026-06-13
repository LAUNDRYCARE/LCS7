import { Star } from "lucide-react";

export default function TestimonialSection() {
return ( <section className="mt-16"> <h2 className="mb-8 text-3xl font-bold">
Testimoni Pelanggan </h2>

  <div className="space-y-6">

    <div className="rounded-3xl bg-white p-6 shadow-lg">
      <div className="mb-3 flex text-yellow-500">
        <Star fill="currentColor" />
        <Star fill="currentColor" />
        <Star fill="currentColor" />
        <Star fill="currentColor" />
        <Star fill="currentColor" />
      </div>

      <p className="text-gray-600">
        "Pakaian bersih, wangi, dan hasil setrika sangat rapi."
      </p>
    </div>

    <div className="rounded-3xl bg-white p-6 shadow-lg">
      <div className="mb-3 flex text-yellow-500">
        <Star fill="currentColor" />
        <Star fill="currentColor" />
        <Star fill="currentColor" />
        <Star fill="currentColor" />
        <Star fill="currentColor" />
      </div>

      <p className="text-gray-600">
        "Pelayanan ramah dan pengerjaan cepat."
      </p>
    </div>

  </div>
</section>

);
}
