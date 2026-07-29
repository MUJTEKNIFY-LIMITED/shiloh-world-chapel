import Hero from "../components/sections/Hero";
import CharitySection from "../components/sections/CharitySection";
import Footer from "../components/sections/Footer";

const Foundation = () => {
  return (
    <>
      <Hero />
      <main className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <CharitySection />
      </main>
      <Footer />
    </>
  );
};

export default Foundation;
