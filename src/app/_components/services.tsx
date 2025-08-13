"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const Services = [
  {
    title: "Consulta Geral",
    desc: "Atendimento clínico completo para cães e gatos, incluindo avaliação física, escuta cardíaca, verificação de peso, temperatura e orientações sobre cuidados preventivos. Ideal para check-ups regulares ou quando o animal apresenta sintomas de doença.",
    duration: "30 minutos",
    price: 120.0,
  },
  {
    title: "Vacinação",
    desc: "Aplicação de vacinas essenciais para prevenção de doenças, conforme o protocolo indicado para cada espécie e idade. Inclui orientação sobre reforços e cuidados pós-vacina, garantindo a saúde e proteção do seu pet.",
    duration: "20 minutos",
    price: 90.0,
  },
  {
    title: "Banho e Tosa",
    desc: "Serviço completo de higienização, incluindo banho com produtos adequados ao tipo de pelagem, secagem, escovação, corte de unhas e tosa higiênica ou estética. Proporciona bem-estar e saúde para a pele e pelos do seu animal.",
    duration: "1 hora",
    price: 80.0,
  },
  {
    title: "Exames Laboratoriais",
    desc: "Coleta e análise de amostras de sangue, urina e fezes para diagnóstico rápido e preciso de diversas doenças. Indicado tanto para check-ups preventivos quanto para investigação de sintomas apresentados pelo animal.",
    duration: "45 minutos",
    price: 150.0,
  },
  {
    title: "Cirurgia de Castração",
    desc: "Procedimento cirúrgico seguro e realizado com anestesia apropriada para cada animal, visando o controle populacional e prevenção de doenças reprodutivas. Inclui orientações pré e pós-operatórias para uma recuperação tranquila.",
    duration: "2 horas",
    price: 350.0,
  },
];

export default function Serviçes() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(max-width: 768px)": {
        slidesToScroll: 3,
      },
    },
  });

  function scrollNext() {
    emblaApi?.scrollNext();
  }
  function scrollPrev() {
    emblaApi?.scrollPrev();
  }
  return (
    <section className="py-4 px-4 mb-5  bg-[#dbcecc]">
      <h2 className="text-4xl font-bold px-5 mb-2.5">Serviços</h2>

      <div className="relative">
        <div className="overflow-hidden " ref={emblaRef}>
          <div className="flex">
            {Services.map((service, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
              >
                <article className="bg-[#1e293b] text-white rounded-lg px-5 h-full py-4 mb-4 space-y-4 flex flex-col">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <span className="text-lg font-bold">
                      R$ {service.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm select-none ">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 border-t border-gray-700 mb-3 pt-2">
                    <span className="text-sm">{service.duration}</span>
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
          <ChevronLeft  />
        </button>
        <button
          className="bg-white shadow-lg flex items-center justify-center 
          rounded-full w-10 h-10 absolute -translate-y-1/2 -translate-x-1/2 top-1/2 right-0"
          onClick={scrollNext}
        >
          <ChevronRight  />
        </button>
      </div>
    </section>
  );
}
