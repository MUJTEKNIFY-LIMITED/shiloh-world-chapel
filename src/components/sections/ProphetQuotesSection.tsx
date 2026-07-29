import React, { useState, useEffect } from "react";
import prophetImg from "../../assets/images/new_media/Prophet 12.jpg";

export type ProphetQuote = {
  id: string;
  quote: string;
  context: string;
  year?: string;
};

export const genuineQuotes: ProphetQuote[] = [
  {
    id: "quote-1",
    quote: "Dry Bones Shall Rise Again! No matter how dead the situation appears in your life, when God's prophetic word enters, restoration begins immediately.",
    context: "2026 Prophetic Declaration",
    year: "2026",
  },
  {
    id: "quote-2",
    quote: "There Shall Be Showers of Blessings! God is not a man that He should lie. What He has spoken over your destiny will surely manifest.",
    context: "15th Anniversary Prophetic Theme",
    year: "2026",
  },
  {
    id: "quote-3",
    quote: "Seek God first. When your priority aligns with the Kingdom, supernatural increase and divine protection automatically follow.",
    context: "Kingdom Priority Teaching",
    year: "Encouraging Word",
  },
  {
    id: "quote-4",
    quote: "Slowly but surely! Understand God's process and timing. Elevation without divine foundation leads to collapse, but steady growth under grace endures.",
    context: "Prophetic Direction",
    year: "Encouraging Word",
  },
];

const ProphetQuotesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % genuineQuotes.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + genuineQuotes.length) % genuineQuotes.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % genuineQuotes.length);
  };

  const current = genuineQuotes[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#040c29] via-[#071b65] to-[#0a2072] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden border-y border-[#D9A229]/30">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#D9A229]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14 relative z-10">
        {/* Left: Prophet Image Frame */}
        <div className="w-full lg:w-5/12 flex justify-center shrink-0">
          <div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border-4 border-[#D9A229]/50 shadow-2xl bg-black group">
            <img
              src={prophetImg}
              alt="Prophet I.O Samuel"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040c29] via-transparent to-transparent flex items-end p-5">
              <div>
                <span className="text-xs uppercase font-bold text-[#D9A229] font-trajan tracking-widest block">
                  PROPHETIC WORDS OF WISDOM
                </span>
                <span className="text-sm font-bold font-trajan text-white">Prophet I.O Samuel</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quote Display & Manual Navigation */}
        <div className="w-full lg:w-7/12 flex flex-col justify-between gap-6 text-center lg:text-left min-h-[280px]">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9A229]/20 border border-[#D9A229]/40 text-[#D9A229] text-xs font-bold font-trajan uppercase tracking-wider w-fit mx-auto lg:mx-0">
              <span>{current.context}</span>
            </div>

            {/* Quote Mark */}
            <div className="text-4xl sm:text-5xl font-serif text-[#D9A229] leading-none select-none">
              “
            </div>

            {/* Animated Quote Text */}
            <blockquote className="text-lg sm:text-2xl font-serif italic text-white/95 leading-relaxed font-sans min-h-[100px] transition-all duration-500">
              {current.quote}
            </blockquote>

            <div className="pt-2 text-xs sm:text-sm font-bold text-[#D9A229] font-trajan">
              — PROPHET I.O SAMUEL
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-white/10">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
              aria-label="Previous quote"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Subtle Slide Counter */}
            <span className="text-xs font-trajan text-gray-300 tracking-wider">
              {currentIndex + 1} / {genuineQuotes.length}
            </span>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
              aria-label="Next quote"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProphetQuotesSection;
