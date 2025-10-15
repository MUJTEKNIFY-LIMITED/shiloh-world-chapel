import React, { useState } from "react";
import Hero from "../components/Hero";
import { sermonViewButton } from "../assets/data/sermons-data";
import playButtonArrowhead from "../assets/icons/play-button-arrowhead.svg";
import musicPlayerIcon from "../assets/icons/music-player-icon.svg";
import Pageination from "../components/Pageination";
import Footer from "../components/Footer";

const Sermons = () => {
  const [activePage, setActivePage] = useState(1);

  // Responsive pagination: 4 per page on mobile, 9 per page on lg+
  const getSermonsPerPage = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      return 9;
    }
    return 4;
  };

  const [sermonsPerPage, setSermonsPerPage] = useState(getSermonsPerPage());

  // Update perPage on resize
  React.useEffect(() => {
    const handleResize = () => {
      setSermonsPerPage(getSermonsPerPage());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startIdx = (activePage - 1) * sermonsPerPage;
  const endIdx = startIdx + sermonsPerPage;
  const paginatedSermons = sermonViewButton.slice(startIdx, endIdx);

  return (
    <>
      <Hero />
      <section className="flex flex-col items-center gap-12 lg:gap-28 mt-20 lg:mt-32 mb-24 xl:mb-32 mx-4 lg:mx-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {paginatedSermons.map((sermon, idx) => (
            <div
              key={startIdx + idx}
              className="w-[360px] h-[223px] rounded-[25px] p-2 shadow-5xl flex flex-col gap-4 border-2 border-secondary bg-white"
            >
              <div
                className="w-[341px] h-[149px] rounded-[16px] p-3 flex justify-end items-end bg-cover bg-top"
                style={{ backgroundImage: `url(${sermon.image})` }}
              >
                <div className="flex gap-4">
                  <button className="w-[35px] h-[35px] p-[10px] bg-white rounded-[17.5px] flex justify-center items-center shadow-5xl hover:bg-fourth transition-all duration-700">
                    <img src={playButtonArrowhead} alt="Play Arrowhead Icon" />
                  </button>
                  <button className="w-[35px] h-[35px] p-[10px] bg-white rounded-[17.5px] flex justify-center items-center shadow-5xl hover:bg-fourth transition-all duration-700">
                    <img src={musicPlayerIcon} alt="Play Arrowhead Icon" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col ml-4">
                <h2 className="font-semibold text-xl">{sermon.title}</h2>
                <p className="text-tertiary text-xs">{sermon.date}</p>
              </div>
            </div>
          ))}
        </div>
        <Pageination
          activePage={activePage}
          setActivePage={setActivePage}
          total={sermonViewButton.length}
          perPage={sermonsPerPage}
        />
      </section>
      <Footer />
    </>
  );
};

export default Sermons;
