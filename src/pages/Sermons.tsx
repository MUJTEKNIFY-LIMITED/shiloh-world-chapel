import React, { useState } from "react";
import Hero from "../components/sections/Hero.tsx";
import { sermonViewButton, ministryCategories } from "../assets/data/sermons-data";
import type { SermonCategory, SermonItem } from "../assets/data/sermons-data";
import playButtonArrowhead from "../assets/icons/play-button-arrowhead.svg";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination.tsx";
import Footer from "../components/sections/Footer.tsx";

const Sermons = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<SermonCategory>("All");
  const [activePage, setActivePage] = useState(1);

  // Filter items by active category
  const filteredSermons =
    activeCategory === "All"
      ? sermonViewButton
      : sermonViewButton.filter((item) => item.category === activeCategory);

  // Responsive pagination: 6 per page on mobile, 9 per page on desktop
  const getSermonsPerPage = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      return 9;
    }
    return 6;
  };

  const [sermonsPerPage, setSermonsPerPage] = useState(getSermonsPerPage());

  React.useEffect(() => {
    const handleResize = () => {
      setSermonsPerPage(getSermonsPerPage());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset to page 1 whenever category changes
  const handleCategoryChange = (cat: SermonCategory) => {
    setActiveCategory(cat);
    setActivePage(1);
  };

  const startIdx = (activePage - 1) * sermonsPerPage;
  const endIdx = startIdx + sermonsPerPage;
  const paginatedSermons = filteredSermons.slice(startIdx, endIdx);

  const handleMediaClick = (sermon: SermonItem) => {
    if (sermon.videoUrl && sermon.videoUrl.startsWith("http")) {
      window.open(sermon.videoUrl, "_blank", "noopener,noreferrer");
    } else {
      navigate("/sermon-media-player", { state: sermon });
    }
  };

  return (
    <>
      <Hero />
      <section className="flex flex-col items-center gap-10 lg:gap-14 mt-14 lg:mt-24 mb-24 lg:mb-32 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Category Tabs Header */}
        <div className="flex flex-col items-center text-center gap-4 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold font-trajan text-[#071b65]">
            Prophetic Messages & Media Archive
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl font-sans">
            Select a ministry expression category below to watch prophetic declarations, deliverance services, miracle healings, and life-building sermons.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-4 max-w-4xl">
            {ministryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#071b65] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Media Grid */}
        {paginatedSermons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {paginatedSermons.map((sermon) => (
              <div
                key={sermon.id}
                onClick={() => handleMediaClick(sermon)}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
              >
                {/* Thumbnail Image */}
                <div
                  className="w-full h-52 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${sermon.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#071b65]/90 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {sermon.category}
                  </span>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white text-[#071b65] flex justify-center items-center shadow-2xl group-hover:scale-110 group-hover:bg-[#D9A229] transition-all duration-300">
                      <img src={playButtonArrowhead} alt="Play Icon" className="w-4 h-4 ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex justify-between text-xs text-white/80 font-medium">
                    <span>{sermon.speaker}</span>
                    <span>{sermon.date}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-grow gap-3">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-[#071b65] group-hover:text-[#D9A229] transition-colors leading-snug line-clamp-2">
                      {sermon.title}
                    </h3>
                    {sermon.description && (
                      <p className="text-xs text-gray-600 mt-2 line-clamp-2 font-sans">
                        {sermon.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#071b65]">
                    <span>Watch Video</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-gray-500">
            No media found in this category.
          </div>
        )}

        {/* Pagination */}
        {filteredSermons.length > sermonsPerPage && (
          <Pagination
            activePage={activePage}
            setActivePage={setActivePage}
            total={filteredSermons.length}
            perPage={sermonsPerPage}
          />
        )}
      </section>
      <Footer />
    </>
  );
};

export default Sermons;
