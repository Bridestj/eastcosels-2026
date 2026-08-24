"use client";

import { useState } from "react";

const questions = [
  {
    question: "What is EASTCOSELS 2026?",
    answer:
      "EASTCOSELS 2026 is the International Conference for South East Students of English and Literary Studies, bringing together students, scholars, researchers and professionals to discuss literature, language and innovation.",
  },

  {
    question: "Where will EASTCOSELS 2026 take place?",
    answer:
      "The conference will hold at the University of Nigeria, Nsukka (UNN), Enugu State, Nigeria.",
  },

  {
    question: "Who can attend the conference?",
    answer:
      "The conference is open to students, lecturers, researchers, Aluminis and international delegates interested in English and Literary Studies.",
  },

  {
    question: "Are there different registration packages?",
    answer:
      "Yes. EASTCOSELS 2026 offers different packages for student delegates, Aluminis and international delegates.",
  },

  {
    question: "Is accommodation provided?",
    answer:
      "Yes, Accommodation is included for registered delegates.",
  },

  {
    question: "Can I submit a research paper?",
    answer:
      "Yes. Research paper presentation opportunities will be available. More details about submission guidelines will be announced.",
  },

  {
    question: "How do I register for EASTCOSELS 2026?",
    answer:
      "Registration details will be provided through the official registration portal on this website.",
  },

  {
    question: "How can I become a sponsor or partner?",
    answer:
      "Organizations interested in sponsoring or partnering with EASTCOSELS 2026 can contact the conference team through the partnership section.",
  },
];


export default function FAQ() {

  const [open, setOpen] = useState<number | null>(null);


  return (

    <section
      id="faq"
      className="bg-white py-24"
    >

      <div className="mx-auto max-w-5xl px-6">


        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Find answers to common questions about registration,
            accommodation, attendance and the conference experience.
          </p>

        </div>



        {/* Questions */}

        <div className="space-y-5">


          {questions.map((item, index) => (

            <div
              key={item.question}
              className="rounded-2xl border border-gray-200 bg-gray-50"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >

                <span className="text-lg font-bold text-gray-900">
                  {item.question}
                </span>


                <span className="text-2xl text-green-600">
                  {open === index ? "−" : "+"}
                </span>


              </button>


              {open === index && (

                <div className="px-6 pb-6 text-gray-600 leading-7">

                  {item.answer}

                </div>

              )}


            </div>

          ))}


        </div>


      </div>

    </section>

  );
}