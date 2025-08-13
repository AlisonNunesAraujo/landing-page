import Hero from "./_components/hero";
import About from "./_components/about";
import Serviçes from "./_components/services";
import Testimonials from "./_components/testinomeials";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Serviçes />
      <Testimonials />
      <Footer />
    </main>
  );
}
