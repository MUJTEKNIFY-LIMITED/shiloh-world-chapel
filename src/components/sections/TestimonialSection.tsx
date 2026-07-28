import { useState } from "react";
import { testimonials } from "../../assets/data/testimonials";
import gallery17 from "../../assets/images/new_media/Gallery 17.jpg";

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimony = testimonials[activeIndex];

  const handleTestimonyClick = (videoUrl?: string) => {
    if (videoUrl) {
      window.open(videoUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 text-center">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase font-bold text-[#D9A229] tracking-widest font-trajan bg-[#071b65]/5 px-4 py-1.5 rounded-full">
            Testimonies of Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-trajan text-[#071b65]">
            What God Has Done
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl font-sans">
            Real testimonies of supernatural breakthrough, divine healing, and prophetic fulfillment at Shiloh Word Chapel.
          </p>
        </div>

        {/* Featured Testimony Card */}
        <div className="relative rounded-3xl p-6 sm:p-12 bg-gradient-to-br from-[#071b65] via-[#0b2685] to-[#040c29] text-white shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center gap-8 lg:gap-12 border border-[#D9A229]/30">
          {/* Background Decorative Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D9A229]/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Left: Video / Image Cover if Video Testimony */}
          {activeTestimony.isVideo ? (
            <div
              onClick={() => handleTestimonyClick(activeTestimony.videoUrl)}
              className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden border-2 border-[#D9A229]/40 shadow-xl cursor-pointer group aspect-video bg-black shrink-0"
            >
              <img
                src={gallery17}
                alt={activeTestimony.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#D9A229] group-hover:bg-[#f5c760] text-[#071b65] flex items-center justify-center shadow-xl group-hover:scale-110 transition-all">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="mt-3 px-3 py-1 rounded-full bg-black/60 text-xs font-semibold text-white font-trajan">
                  Watch Video Testimony
                </span>
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex w-1/3 flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="w-16 h-16 rounded-full bg-[#D9A229]/20 text-[#D9A229] flex items-center justify-center text-3xl font-bold font-trajan mb-4">
                “
              </div>
              <span className="text-xs uppercase tracking-widest text-[#D9A229] font-semibold">Verified Account</span>
            </div>
          )}

          {/* Right / Center Content */}
          <div className="flex-1 flex flex-col text-left gap-4">
            {activeTestimony.category && (
              <span className="text-xs font-bold uppercase tracking-wider text-[#D9A229] font-trajan">
                {activeTestimony.category}
              </span>
            )}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-trajan leading-tight text-white">
              “{activeTestimony.title}”
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
              {activeTestimony.text}
            </p>
            <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-sm font-bold text-[#D9A229] font-trajan">
                — {activeTestimony.author}
              </span>
              {activeTestimony.videoUrl && (
                <button
                  onClick={() => handleTestimonyClick(activeTestimony.videoUrl)}
                  className="inline-flex items-center text-xs font-bold text-white hover:text-[#D9A229] transition-colors gap-1"
                >
                  <span>Watch Video Testimony on Facebook</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Carousel / Indicator Buttons */}
        <div className="flex justify-center items-center gap-3">
          {testimonials.map((t, idx) => (
            <button
              key={t.id || idx}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-[#071b65] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              aria-label={`View testimony ${idx + 1}`}
            >
              {t.isVideo ? "📹 Video Testimony" : `Testimony ${idx + 1}`}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
