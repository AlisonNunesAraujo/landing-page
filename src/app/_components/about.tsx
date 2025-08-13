import Image from "next/image";
import about1 from "../../../public/about-1.png";
import about2 from "../../../public/about-2.png";

export default function About() {
  return (
    <section className="py-16 bg-[#dbcecc] ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="relative">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={about1}
              alt="About Image 1"
              fill
              quality={100}
              className="object-cover hover:scale-110 duration-500"
              priority
            />
          </div>

          <div className="absolute w-40 h-40 rounded-3xl right-4 bottom-4 overflow-hidden border-4 border-white">
            <Image
              src={about2}
              alt="About Image 2"
              fill
              quality={100}
              className="object-cover hover:scale-110 duration-500"
              priority
            />
          </div>
        </div>
      

      <div className="space-y-6 font-bold  ">
        <h2 className="text-4xl">SOBRE</h2>
        <p className="text-lg font-normal">
          Somos uma clínica veterinária dedicada a oferecer serviços de cuidados
          veterinários para animais de estimação. Nossa equipe de veterinários e
          profissionais de saúde animal está comprometida em fornecer o melhor
          cuidado para seus amigos peludos.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center gap-2 font-semibold">
            - Atendimento de qualidade para animais de estimação
          </li>
          <li className="flex items-center gap-2 font-semibold">
            - Atendimento de qualidade para animais de estimação
          </li>
          <li className="flex items-center gap-2 font-semibold">
            - Atendimento de qualidade para animais de estimação
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="bg-green-500 px-5 py-2 rounded-md flex items-center w-fit font-normal gap-2 hover:scale-105 duration-200 "
          >
            WhatsApp
          </a>
          <a
            href="#"
            className=" px-5 py-2 rounded-md flex items-center w-fit font-normal gap-2 "
          >
            Localização
          </a>
        </div>

      </div>
      
      </div>
    </section>
  );
}
