import React, { useState } from "react";
import { sermonViewButton, ministryCategories } from "../../assets/data/sermons-data";
import type { SermonItem, SermonCategory } from "../../assets/data/sermons-data";
import { useNavigate } from "react-router-dom";
import MediaPlayerModal from "../overlays/MediaPlayerModal";

const MinistryMediaSection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<SermonCategory>("All");
  const [activeMediaItem, setActiveMediaItem] = useState<SermonItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMedia = selectedCategory === "All"
    ? sermonViewButton.slice(0, 6)
    : sermonViewButton.filter((item) => item.category === selectedCategory).slice(0, 6);

  const handleCardClick = (item: SermonItem) => {
    setActiveMediaItem(item);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-16 lg:py-24 bg-[#f8fafc] px-4 sm:px-6 lg:px-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center gap-3">
            <span className="text-xs font-bold font-trajan tracking-widest uppercase text-[#071b65] bg-[#071b65]/10 px-4 py-1.5 rounded-full">
              🔥 PROPHETIC • HEALING • DELIVERANCE • THE WORD
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-trajan text-[#071b65] tracking-tight">
              Recent Ministry Encounters & Sermons
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl font-sans">
              Explore authentic testimonies, documented prophecies, powerful deliverance services, and life-changing sermons by Prophet I.O Samuel.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {ministryCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-[#071b65] text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-200 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Media Cards Grid (Consistent 16:9 Aspect Ratio Thumbnails) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedia.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
              >
                {/* 16:9 Thumbnail Container */}
                <div className="relative w-full aspect-video overflow-hidden bg-gray-950">
                  {/* Background Blur for portrait images */}
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-md opacity-30 scale-110 pointer-events-none"
                  />
                  {/* Foreground Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 z-30 px-3 py-1 rounded-full bg-[#071b65]/90 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm whitespace-nowrap">
                    {item.category}
                  </span>

                  {/* Central Play Button */}
                  <div className="absolute inset-0 z-30 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#D9A229] group-hover:bg-[#f5c760] text-[#071b65] flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                      <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 z-30 flex justify-between text-xs text-white/90 font-medium">
                    <span className="truncate">{item.speaker}</span>
                    <span className="shrink-0">{item.date}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-[#071b65] group-hover:text-[#D9A229] transition-colors leading-snug line-clamp-2 font-trajan">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-xs text-gray-600 mt-2 line-clamp-2 font-sans">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Card Single-line CTA */}
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#071b65] group-hover:text-[#D9A229] transition-colors">
                    <span className="whitespace-nowrap">WATCH SERMON</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Single-line Button */}
          <div className="flex justify-center mt-2">
            <button
              onClick={() => navigate("/sermons")}
              className="px-8 py-3.5 rounded-full bg-[#071b65] hover:bg-[#0c288d] text-white font-bold text-xs sm:text-sm uppercase tracking-wider font-trajan shadow-lg transition-all whitespace-nowrap"
            >
              VIEW SERMONS
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Media Player Modal */}
      <MediaPlayerModal
        item={activeMediaItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default MinistryMediaSection;
