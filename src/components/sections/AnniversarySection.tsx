import React, { useState } from "react";
import anniversaryVideo from "../../assets/images/new_media/Annivasary Video.mp4";
import anniversaryFlyer from "../../assets/images/new_media/Annivasary Flyer.jpg";
import { isAnniversaryActive } from "../overlays/AnniversaryModal";
import MediaPlayerModal from "../overlays/MediaPlayerModal";
import type { SermonItem } from "../../assets/data/sermons-data";

const AnniversarySection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<SermonItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  if (!isAnniversaryActive()) return null;

  const handlePlayVideoModal = () => {
    setSelectedVideo({
      id: "anniversary-video-portrait",
      title: "Prophet I.O Samuel — 15th Anniversary Invitation",
      speaker: "Prophet I.O Samuel",
      date: "29th–31st July 2026",
      category: "Encouraging Words",
      videoUrl: anniversaryVideo,
      image: anniversaryFlyer,
      isPortrait: true,
      description: "Prophet I.O Samuel invites you to Shiloh Word Chapel 15th Anniversary: There Shall Be Showers of Blessings.",
    });
    setIsVideoModalOpen(true);
  };

  return (
    <>
      <section
        id="anniversary-section"
        className="relative py-16 lg:py-24 bg-gradient-to-br from-[#040c29] via-[#071b65] to-[#0a2072] text-white overflow-hidden border-y border-[#D9A229]/30"
      >
        {/* Background Subtle Accent */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D9A229]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* PORTRAIT VIDEO FRAME (Uncropped, Portrait Orientation Preserved) */}
            <div className="w-full lg:w-5/12 flex justify-center shrink-0">
              <div className="relative w-full max-w-xs sm:max-w-sm aspect-[9/16] max-h-[580px] bg-black rounded-3xl overflow-hidden border-4 border-[#D9A229]/60 shadow-2xl group">
                <video
                  src={anniversaryVideo}
                  poster={anniversaryFlyer}
                  controls
                  playsInline
                  className="w-full h-full object-contain bg-black"
                />
                
                {/* Overlay Play Affordance Button */}
                <button
                  onClick={handlePlayVideoModal}
                  className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex flex-col items-center justify-center pointer-events-auto cursor-pointer"
                  aria-label="Expand video in popup"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D9A229] group-hover:bg-[#f5c760] text-[#071b65] flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="mt-3 px-3 py-1 rounded-full bg-black/60 text-xs font-bold text-white font-trajan tracking-wider whitespace-nowrap border border-white/20">
                    Expand Video
                  </span>
                </button>
              </div>
            </div>

            {/* INVITATION CONTENT & EVENT DETAILS */}
            <div className="w-full lg:w-7/12 flex flex-col gap-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9A229]/20 border border-[#D9A229]/50 text-[#D9A229] text-xs font-bold font-trajan uppercase tracking-widest w-fit mx-auto lg:mx-0">
                <span>🔥 15th Anniversary Special Announcement</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-trajan tracking-tight leading-tight">
                15 Years Of God's Faithfulness
              </h2>

              <p className="text-[#D9A229] text-lg sm:text-xl font-bold font-trajan uppercase tracking-wider">
                THERE SHALL BE SHOWERS OF BLESSINGS
              </p>

              <p className="text-sm sm:text-base text-gray-200 font-sans leading-relaxed max-w-2xl">
                Prophet I.O Samuel and the entire Shiloh Word Chapel family warmly invite you to 3 glorious days of prophetic declarations, miracle healings, deliverance, and powerful praise as we mark 15 years of divine impact.
              </p>

              {/* Event Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-left">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1">
                  <span className="text-xs uppercase font-bold text-[#D9A229] font-trajan">DATES</span>
                  <span className="text-sm font-semibold text-white font-sans">29th – 31st July 2026</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1">
                  <span className="text-xs uppercase font-bold text-[#D9A229] font-trajan">TIME</span>
                  <span className="text-sm font-semibold text-white font-sans">3:00 PM Daily</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1">
                  <span className="text-xs uppercase font-bold text-[#D9A229] font-trajan">LOCATION</span>
                  <span className="text-sm font-semibold text-white font-sans">Apo Mechanic, Abuja</span>
                </div>
              </div>

              {/* CTAs — Single-line button text */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
                <button
                  onClick={handlePlayVideoModal}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#D9A229] hover:bg-[#f5c760] text-[#071b65] font-bold text-xs sm:text-sm font-trajan uppercase tracking-wider shadow-xl transition-all whitespace-nowrap"
                >
                  WATCH INVITATION
                </button>
                <a
                  href="#connect-section"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm font-trajan uppercase tracking-wider border border-white/30 transition-all text-center whitespace-nowrap"
                >
                  REQUEST PRAYER
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Video Modal */}
      <MediaPlayerModal
        item={selectedVideo}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
};

export default AnniversarySection;
