import { useState } from "react";
import Hero from "../components/Hero";
import { images } from "../assets/data/gallery";
import Pageination from "../components/Pageination";
import Footer from "../components/Footer";

const Gallery = () => {
  const [activePage, setActivePage] = useState(1);

  return (
    <>
      <Hero />
      <section className="flex flex-col items-center gap-12 xl:gap-28 px-4 md:px-6 lg:px-10 xl:px-24 pt-20 xl:pt-32 pb-28 xl:pb-32">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8">
        {images.map((image) => (
          <img src={image.image} alt="An Image" className="w-[196px] xl:w-[287px] h-[131px] xl:h-[191px] rounded-[5px]"/>
        ))}
        </div>
        <Pageination activePage={activePage} setActivePage={setActivePage} />
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
