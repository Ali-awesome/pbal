export const metadata = {
  title: "PBAL - An AGRO Based Company",
  description: "Organic Food & Agriculture Platform",
};

export default function HomePage() {
  return (
    <main>
      <section
        id="home"
        className="relative pt-32 pb-20 bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: "url('/images/Hero.avif')" }}
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row my-auto">
          <div className="md:w-2/3 mb-10 md:mb-0 hero">
            <p className="md:text-2xl font-bold bg-no-repeat bg-[url('/images/Underline.png')] custom-bg">
              Original & Natural
            </p>
            <div className="text-5xl md:text-7xl static font-bold text-[#F7C35F] my-6 grid gap-4 font-[Livvic]">
              Rooted in Land
            </div>
            <div className="text-5xl md:text-7xl static font-bold text-white my-6 grid gap-4 font-[Livvic]">
              Raised by Water
            </div>
            <p className="mb-6 text-xl font-normal custom-bg">
              Connecting Farmers, Fishers, and the Future.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
