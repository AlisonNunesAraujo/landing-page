"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const depoimentos = [
  {
    content:
      "O Dr. Marcos foi extremamente atencioso na consulta do meu cachorro. Explicou tudo com paciência e deixou meu pet super calmo.",
    role: "cliente",
    author: "Carla Mendes",
  },
  {
    content:
      "Profissional incrível! Identificou o problema do meu gato rapidamente e iniciou o tratamento na mesma hora.",
    role: "cliente",
    author: "Roberto Lima",
  },
  {
    content:
      "Muito competente e cuidadoso. Meu coelho estava nervoso, mas o Dr. Marcos soube lidar com muita calma.",
    role: "cliente",
    author: "Fernanda Rocha",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollNext() {
    emblaApi?.scrollNext();
  }
  function scrollPrev() {
    emblaApi?.scrollPrev();
  }
  return (
    <section className="py-4 px-4  bg-[#FFe449]">
      <h2 className="text-4xl font-bold px-5 mb-2.5 text-center">
        Depoimentos
      </h2>

      <div className="relative mx-auto max-w-4xl">
        <div className="overflow-hidden " ref={emblaRef}>
          <div className="flex">
            {depoimentos.map((depoimentos, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 ">
                <article className="bg-[#1e293b] text-white rounded-lg px-5 h-full py-4 mb-4 space-y-4 flex flex-col">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">
                      {depoimentos.author}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm select-none ml-4 ">
                    {depoimentos.content}
                  </p>
                  <div className="flex items-center gap-2 border-t border-gray-700 mb-3 pt-2">
                    <span className="text-sm ml-4">{depoimentos.role}</span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
        <button
          className="bg-white shadow-lg flex items-center justify-center 
          rounded-full w-10 h-10 absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1"
          onClick={scrollPrev}
        >
          <ChevronLeft />
        </button>
        <button
          className="bg-white shadow-lg flex items-center justify-center 
          rounded-full w-10 h-10 absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-full right-1"
          onClick={scrollNext}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
