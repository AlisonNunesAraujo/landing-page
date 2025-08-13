export default function Footer() {
  return (
    <section className="bg-gray-800 text-white py-4">
        <h2 className="text-5xl font-bold px-5  text-white text-center mb-7 ">Pet Shop</h2>
      <div className="flex items-center gap-4 justify-center mb-6">
        <a
          href="#"
          className="bg-green-500 px-5 py-2 rounded-md flex items-center w-fit font-normal gap-2 "
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
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">© 2025 Your Company. All rights reserved.</p>
        <p className="text-xs">Follow us on social media</p>
      </footer>
    </section>
  );
}
