import Hero from "../components/sections/Hero";
import CharitySection from "../components/sections/CharitySection";
import Footer from "../components/sections/Footer";

const Foundation = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-12 lg:gap-24 px-4 md:px-0 mt-16 mb-24 xl:mb-32 mx-4 lg:mx-24">
        <CharitySection />
      </div>
      <Footer />
    </>
  );
};

export default Foundation;
