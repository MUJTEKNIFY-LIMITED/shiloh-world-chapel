import React, { useState } from "react";
import { sermonViewButton, ministryCategories } from "../../assets/data/sermons-data";
import type { SermonItem, SermonCategory } from "../../assets/data/sermons-data";
import { useNavigate } from "react-router-dom";

const MinistryMediaSection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<SermonCategory>("All");

  const filteredMedia = selectedCategory === "All"
    ? sermonViewButton.slice(0, 6) // Surface top 6 on homepage
    : sermonViewButton.filter((item) => item.category === selectedCategory).slice(0, 6);

  const handleWatch = (item: SermonItem) => {
    if (item.videoUrl.startsWith("http")) {
      window.open(item.videoUrl, "_blank", "noopener,noreferrer");
    } else {
      navigate("/sermon-media-player", { state: item });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc] px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#071b65]/10 text-[#071b65] text-xs font-bold font-trajan tracking-widest uppercase">
            <span>🔥 Prophetic • Healing • Deliverance • The Word</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-trajan text-[#071b65] tracking-tight">
            Recent Ministry Encounters & Sermons
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl font-sans">
            Explore authentic testimonies, documented prophecies, powerful deliverance services, and life-changing sermons by Prophet I.O Samuel.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {ministryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
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

        {/* Media Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              onClick={() => handleWatch(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
            >
              {/* Image Cover */}
              <div className="relative w-full h-52 overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#071b65]/90 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
                  {item.category}
                </span>

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#D9A229] group-hover:bg-[#f5c760] text-[#071b65] flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                    <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex justify-between text-xs text-white/80 font-medium">
                  <span>{item.speaker}</span>
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                <div>
                  <h3 className="font-bold text-lg text-[#071b65] group-hover:text-[#D9A229] transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 font-sans">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex items-center text-xs font-bold text-[#071b65] group-hover:translate-x-1 transition-transform">
                  <span>Watch Video</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate("/sermons")}
            className="py-3.5 px-8 rounded-full bg-[#071b65] hover:bg-[#0c288d] text-white font-bold text-sm uppercase tracking-wider font-trajan shadow-lg transition-all"
          >
            Explore All Media & Sermons ({sermonViewButton.length}+)
          </button>
        </div>
      </div>
    </section>
  );
};

export default MinistryMediaSection;
