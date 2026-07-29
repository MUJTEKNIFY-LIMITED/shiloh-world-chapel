import { useState } from "react";
import { testimonials } from "../../assets/data/testimonials";
import testimonyImg from "../../assets/images/new_media/Testimony.png";
import MediaPlayerModal from "../overlays/MediaPlayerModal";
import type { SermonItem } from "../../assets/data/sermons-data";

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeMediaItem, setActiveMediaItem] = useState<SermonItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeTestimony = testimonials[activeIndex];

  const handleOpenTestimonyVideo = (videoUrl?: string, title?: string) => {
    if (!videoUrl) return;
    setActiveMediaItem({
      id: "video-testimony-modal",
      title: title || "Mind-Blowing Breakthrough Testimony",
      speaker: "Shiloh Word Chapel Member",
      date: "Testimony of Transformation",
      category: "Testimonies",
      videoUrl: videoUrl,
      image: testimonyImg,
      description: "An extraordinary testimony of supernatural breakthrough, divine intervention, and total restoration.",
    });
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-16 lg:py-24 bg-white px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col gap-10 text-center">
          {/* Header */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs uppercase font-bold text-[#D9A229] tracking-widest font-trajan bg-[#071b65]/5 px-4 py-1.5 rounded-full">
              TESTIMONIES OF TRANSFORMATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-trajan text-[#071b65]">
              WHAT GOD HAS DONE
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl font-sans">
              Real testimonies of healing, deliverance, restoration and breakthrough through the power of Jesus Christ.
            </p>
          </div>

          {/* Featured Testimony Card */}
          <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#071b65] via-[#0b2685] to-[#040c29] text-white shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center gap-8 lg:gap-12 border border-[#D9A229]/40">
            {/* Background Decorative Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D9A229]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Left: 16:9 Video Thumbnail Frame */}
            {activeTestimony.isVideo ? (
              <div
                onClick={() => handleOpenTestimonyVideo(activeTestimony.videoUrl, activeTestimony.title)}
                className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden border-2 border-[#D9A229]/50 shadow-xl cursor-pointer group aspect-video bg-black shrink-0"
              >
                <img
                  src={testimonyImg}
                  alt={activeTestimony.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#D9A229] group-hover:bg-[#f5c760] text-[#071b65] flex items-center justify-center shadow-xl group-hover:scale-110 transition-all">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="mt-3 px-3.5 py-1 rounded-full bg-black/70 text-xs font-bold text-white font-trajan tracking-wider whitespace-nowrap border border-white/20">
                    WATCH TESTIMONY
                  </span>
                </div>
              </div>
            ) : (
              <div className="hidden lg:flex w-1/3 flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 text-center shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#D9A229]/20 text-[#D9A229] flex items-center justify-center text-3xl font-bold font-trajan mb-2">
                  “
                </div>
                <span className="text-xs uppercase tracking-widest text-[#D9A229] font-bold font-trajan whitespace-nowrap">VERIFIED ACCOUNT</span>
              </div>
            )}

            {/* Right: Content & Single-line CTA */}
            <div className="flex-1 flex flex-col text-left gap-4">
              {activeTestimony.category && (
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9A229] font-trajan">
                  {activeTestimony.category}
                </span>
              )}
              <h3 className="text-xl sm:text-2xl font-bold font-trajan leading-tight text-white">
                “{activeTestimony.title}”
              </h3>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans">
                {activeTestimony.text}
              </p>
              <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs sm:text-sm font-bold text-[#D9A229] font-trajan">
                  — {activeTestimony.author}
                </span>
                {activeTestimony.videoUrl && (
                  <button
                    onClick={() => handleOpenTestimonyVideo(activeTestimony.videoUrl, activeTestimony.title)}
                    className="px-5 py-2.5 rounded-full bg-[#D9A229] hover:bg-[#f5c760] text-[#071b65] font-bold text-xs font-trajan uppercase tracking-wider transition-all whitespace-nowrap w-fit"
                  >
                    WATCH TESTIMONY
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Carousel Buttons */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 flex-wrap">
            {testimonials.map((t, idx) => (
              <button
                key={t.id || idx}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeIndex === idx
                    ? "bg-[#071b65] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                {t.isVideo ? "📹 Video Testimony" : `Testimony ${idx + 1}`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* In-App Video Player Lightbox */}
      <MediaPlayerModal
        item={activeMediaItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default TestimonialSection;
