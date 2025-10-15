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
      <section className="flex flex-col items-center gap-12 lg:gap-28 mt-20 lg:mt-32 mb-24 xl:mb-32 mx-4 lg:mx-24">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
        {images.map((image) => (
          <img src={image.image} alt="An Image" className="w-[196px] lg:w-[287px] h-[131px] lg:h-[191px] rounded-[5px]"/>
        ))}
        </div>
        <Pageination
          activePage={activePage}
          setActivePage={setActivePage}
          total={images.length}
          perPage={8}
        />
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
