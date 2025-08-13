import Image from "next/image";
import herodog from "../../../public/hero-dog.webp";
import cat from "../../../public/cat-hero.png";

export default function Hero() {
  return (
    <section className="bg-[#E84c3D] text-white overflow-hidden px-4 relative">
      <div>
        <Image
          src={herodog}
          alt="hero"
          fill
          sizes="100vw"
          className="w-full opacity-60 object-cover lg:hidden"
        />

        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      <div className="container mx-auto relative pt-16 pb-16 md:pb-0">
        <article className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold md:text-4xl leading-10 bottom-1">
              Seu pet merece carinho especial e atenção!
            </h1>
            <p className="lg:text-lg">Seu pet mais feliz</p>

            <div>
              <a
                href="#"
                className="bg-green-500 px-5 py-2 rounded-md flex items-center w-fit font-bold"
              >
                Contato do whatsApp
              </a>
            </div>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white rounded-md px-2 py-1">5%</b>{" "}
                de desconto na primeira compra!
              </p>
              <div className="flex mt-5">
                <div className="w-32 hidden md:block">
                  <Image
                    src={cat}
                    alt="hero"
                    className="objext-fit "
                    quality={100}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative">
            <Image
              src={herodog}
              alt="hero"
              className="objext-fit fill w-120 h-120 "
              sizes="(max-width: 768px) 50vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
