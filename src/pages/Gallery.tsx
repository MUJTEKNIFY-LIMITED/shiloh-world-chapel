import { useState } from "react";
import Hero from "../components/Hero";
import { images } from "../assets/data/gallery";
import Pagination from "../components/Pagination.tsx";
import Footer from "../components/Footer";

const Gallery = () => {
  const [activePage, setActivePage] = useState(1);
  const perPage = 16;
  const startIdx = (activePage - 1) * perPage;
  const endIdx = startIdx + perPage;
  const paginatedImages = images.slice(startIdx, endIdx);
  return (
    <>
      <Hero />
      <section className="flex flex-col items-center gap-12 lg:gap-28 mt-20 lg:mt-32 mb-24 xl:mb-32 mx-4 lg:mx-24">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
          {paginatedImages.map((image, idx) => (
            <img
              key={idx}
              src={image.image}
              alt={`Gallery ${startIdx + idx}`}
              className="w-[196px] lg:w-[287px] h-[131px] lg:h-[191px] rounded-[5px]"
            />
          ))}
        </div>
        <Pagination
          activePage={activePage}
          setActivePage={setActivePage}
          total={images.length}
          perPage={perPage}
        />
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
