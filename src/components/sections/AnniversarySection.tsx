import React, { useRef, useState } from "react";
import anniversaryVideo from "../../assets/images/new_media/Annivasary Video.mp4";
import anniversaryFlyer from "../../assets/images/new_media/Annivasary Flyer.jpg";
import { isAnniversaryActive } from "../overlays/AnniversaryModal";

const AnniversarySection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // If anniversary has passed, do not render
  if (!isAnniversaryActive()) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="anniversary-section"
      className="relative bg-gradient-to-b from-[#040b24] via-[#071b65] to-[#040b24] text-white py-16 lg:py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9A229]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#071b65]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        {/* Left Side: Video Player */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#D9A229]/40 shadow-2xl bg-black aspect-video group">
            <video
              ref={videoRef}
              poster={anniversaryFlyer}
              controls
              playsInline
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src={anniversaryVideo} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>

            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all cursor-pointer"
                aria-label="Play Anniversary Invitation Video"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#D9A229] hover:bg-[#f5c760] text-[#040b24] flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="mt-4 px-4 py-1.5 rounded-full bg-black/60 border border-[#D9A229]/40 text-xs sm:text-sm font-semibold tracking-wider font-trajan text-white">
                  Watch Prophet's Personal Invitation
                </span>
              </button>
            )}
          </div>
          <p className="text-xs text-white/60 text-center italic">
            Prophet I.O Samuel personally invites you to experience 3 days of prophetic empowerment.
          </p>
        </div>

        {/* Right Side: Text & Event Details */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 self-center lg:self-start px-4 py-1.5 rounded-full bg-[#D9A229]/20 border border-[#D9A229]/50 text-[#D9A229] text-xs font-bold font-trajan tracking-widest uppercase">
            <span>✨ 15th Anniversary Commission Celebration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-trajan leading-tight text-white">
            15 YEARS OF GOD'S FAITHFULNESS
          </h2>

          <p className="text-xl sm:text-2xl font-bold font-trajan text-[#D9A229]">
            THERE SHALL BE SHOWERS OF BLESSINGS
          </p>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans max-w-2xl">
            You are cordially invited to celebrate 15 glorious years of divine impact, prophetic declarations, healings, and supernatural transformations at Shiloh Word Chapel. Come and receive your personal prophetic visitation.
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="bg-[#040d2d]/80 border border-[#D9A229]/30 rounded-2xl p-4 flex flex-col gap-1">
              <span className="text-xs uppercase font-bold text-[#D9A229]">Dates</span>
              <span className="text-lg font-bold text-white font-trajan">29th — 31st July 2026</span>
              <span className="text-xs text-white/60">3 Days Power-Packed Service</span>
            </div>

            <div className="bg-[#040d2d]/80 border border-[#D9A229]/30 rounded-2xl p-4 flex flex-col gap-1">
              <span className="text-xs uppercase font-bold text-[#D9A229]">Daily Time</span>
              <span className="text-lg font-bold text-white font-trajan">3:00 PM Daily</span>
              <span className="text-xs text-white/60">Doors open early</span>
            </div>

            <div className="sm:col-span-2 bg-[#040d2d]/80 border border-[#D9A229]/30 rounded-2xl p-4 flex flex-col gap-1">
              <span className="text-xs uppercase font-bold text-[#D9A229]">Location & Venue</span>
              <span className="text-base font-semibold text-white">
                Apo Mechanic by African Medical Centre of Excellence, Abuja, Nigeria.
              </span>
              <span className="text-xs text-[#D9A229] font-medium mt-1">
                Hosted by: Prophet I.O Samuel
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
            <a
              href="https://web.facebook.com/shilohwordchapel"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-8 rounded-xl bg-[#D9A229] hover:bg-[#f5c760] text-[#040b24] font-bold text-base font-trajan tracking-wider text-center transition-all shadow-xl"
            >
              Join Service Live
            </a>
            <a
              href="#connect-section"
              className="py-3.5 px-8 rounded-xl border border-white/30 hover:bg-white/10 text-white font-semibold text-base font-trajan text-center transition-all"
            >
              Get Directions & Info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnniversarySection;
