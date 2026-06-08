"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Berapa minimal cucian?",
      a: "Minimal cucian 3 kg.",
    },

    {
      q: "Berapa lama proses pengerjaan?",
      a: "Reguler 2-3 hari dan Express 4 jam.",
    },

    {
      q: "Apakah tersedia layanan antar jemput?",
      a: "Ya, tersedia layanan pickup dan delivery.",
    },

    {
      q: "Apakah menerima laundry satuan?",
      a: "Ya, kami menerima laundry satuan.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-[#002248]">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-5">

          {faqs.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-slate-200 p-8"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center"
              >

                <span className="font-semibold text-left text-[#002248]">
                  {item.q}
                </span>

                <ChevronDown />

              </button>

              {open === index && (

                <p className="mt-6 text-gray-600 leading-8">
                  {item.a}
                </p>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}