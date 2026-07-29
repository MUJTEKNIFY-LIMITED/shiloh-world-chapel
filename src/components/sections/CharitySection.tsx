import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import photo1 from "../../assets/images/Foundation/1-CrzXCYfI.jpeg";
import photo2 from "../../assets/images/Foundation/2-uefqkD-9.jpeg";
import photo3 from "../../assets/images/Foundation/3-BVb8HlBD.jpeg";
import photo4 from "../../assets/images/Foundation/4-gGVi9zi1.jpeg";
import photo5 from "../../assets/images/Foundation/5-DTQdsRH0.jpeg";
import photo6 from "../../assets/images/Foundation/6-YJvd6L6-.jpeg";
import photoHomeless from "../../assets/images/Foundation/homeless-bg-img-EjY0L0Ua.jpg";

import charityVideo from "../../assets/images/Foundation/Charity Video.mp4";
import swcCharityVideo from "../../assets/images/Foundation/SWC Charity.mp4";

import MediaPlayerModal from "../overlays/MediaPlayerModal";
import type { SermonItem } from "../../assets/data/sermons-data";

const foundationPhotos = [
  { id: "f1", image: photo1, title: "Community Food & Aid Distribution" },
  { id: "f2", image: photo2, title: "Outreach & Widow Support" },
  { id: "f3", image: photo3, title: "Shiloh Samaritan Care Encounter" },
  { id: "f4", image: photo4, title: "Practical Compassion in Action" },
  { id: "f5", image: photo5, title: "Ministering to the Less Privileged" },
  { id: "f6", image: photo6, title: "Charity & Hope Restoration" },
  { id: "f7", image: photoHomeless, title: "Reaching Out to the Vulnerable" },
];

const CharitySection: React.FC = () => {
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState<SermonItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePlayLandscapeVideo = () => {
    setActiveVideo({
      id: "foundation-landscape-video",
      title: "Shiloh Samaritan Foundation — Community Outreach Documentary",
      speaker: "Shiloh Samaritan Foundation",
      date: "Outreach Documentary",
      category: "Encouraging Words",
      videoUrl: swcCharityVideo,
      image: photo1,
      isPortrait: false,
      description: "Demonstrating the love of Christ through practical care, food distribution, and community relief.",
    });
    setIsVideoModalOpen(true);
  };

  const handlePlayPortraitVideo = () => {
    setActiveVideo({
      id: "foundation-portrait-video",
      title: "Shiloh Samaritan Foundation — Impact Message",
      speaker: "Shiloh Samaritan Foundation",
      date: "Compassion Message",
      category: "Encouraging Words",
      videoUrl: charityVideo,
      image: photo3,
      isPortrait: true,
      description: "Prophet I.O Samuel and Shiloh Samaritan Foundation touching lives and restoring hope.",
    });
    setIsVideoModalOpen(true);
  };

  const handlePrevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + foundationPhotos.length) % foundationPhotos.length);
  };

  const handleNextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % foundationPhotos.length);
  };

  return (
    <div className="flex flex-col gap-16 lg:gap-24 w-full">
      {/* 1. MISSION / WHY WE SERVE */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <span className="text-xs uppercase font-bold text-[#D9A229] tracking-widest font-trajan bg-[#071b65]/5 px-4 py-1.5 rounded-full w-fit">
            DEMONSTRATING THE LOVE OF CHRIST
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-trajan text-[#071b65] leading-tight">
            Practical Care, Compassion & Community Outreach
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
            The Shiloh Samaritan Foundation is the compassionate outreach arm of Shiloh Word Chapel, dedicated to extending the love of Jesus Christ through practical support, food relief, clothing, shelter assistance, and empowerment to widows, orphans, and less privileged families.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate("/partnerships")}
              className="px-8 py-3.5 rounded-full bg-[#071b65] hover:bg-[#0c288d] text-white font-bold text-xs sm:text-sm font-trajan uppercase tracking-wider shadow-lg transition-all whitespace-nowrap"
            >
              SUPPORT THE FOUNDATION
            </button>
          </div>
        </div>

        {/* Hero Editorial Image Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-gray-900">
            <img src={photo1} alt="Samaritan Outreach" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-gray-900 mt-6">
            <img src={photo2} alt="Community Support" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* 2. VIDEO STORIES (LANDSCAPE 16:9 & PORTRAIT 9:16) */}
      <div className="flex flex-col gap-10 bg-[#f8fafc] p-6 sm:p-10 rounded-3xl border border-gray-200 text-center">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-bold font-trajan uppercase text-[#071b65] bg-[#071b65]/10 px-4 py-1.5 rounded-full">
            DOCUMENTED OUTREACH STORIES
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-trajan text-[#071b65]">
            Foundation Video Documentaries
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl font-sans">
            Watch real footage of the Shiloh Samaritan Foundation touching lives and distributing relief materials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Landscape Video Card (16:9) */}
          <div className="flex flex-col gap-4 text-left">
            <div
              onClick={handlePlayLandscapeVideo}
              className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-[#D9A229]/50 shadow-xl cursor-pointer group bg-black"
            >
              <video src={swcCharityVideo} poster={photo1} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#D9A229] group-hover:bg-[#f5c760] text-[#071b65] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="mt-2 px-3 py-1 rounded-full bg-black/70 text-[11px] font-bold text-white font-trajan tracking-wider whitespace-nowrap border border-white/20">
                  PLAY DOCUMENTARY (16:9)
                </span>
              </div>
            </div>
            <h4 className="font-bold text-base font-trajan text-[#071b65]">Community Relief & Outreach Documentary</h4>
          </div>

          {/* Portrait Video Card (9:16) */}
          <div className="flex flex-col gap-4 items-center text-center">
            <div
              onClick={handlePlayPortraitVideo}
              className="relative w-full max-w-xs aspect-[9/16] max-h-[380px] rounded-2xl overflow-hidden border-2 border-[#D9A229]/50 shadow-xl cursor-pointer group bg-black"
            >
              <video src={charityVideo} poster={photo3} className="w-full h-full object-contain bg-black" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#D9A229] group-hover:bg-[#f5c760] text-[#071b65] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="mt-2 px-3 py-1 rounded-full bg-black/70 text-[11px] font-bold text-white font-trajan tracking-wider whitespace-nowrap border border-white/20">
                  PLAY PORTRAIT MESSAGE
                </span>
              </div>
            </div>
            <h4 className="font-bold text-base font-trajan text-[#071b65]">Samaritan Impact Story</h4>
          </div>
        </div>
      </div>

      {/* 3. FOUNDATION GALLERY WITH LIGHTBOX */}
      <div className="flex flex-col gap-8 text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase font-bold text-[#D9A229] tracking-widest font-trajan bg-[#071b65]/5 px-4 py-1.5 rounded-full">
            OUTREACH PHOTOGRAPHS
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-trajan text-[#071b65]">
            Foundation Outreach Gallery
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foundationPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-900"
            >
              <img src={photo.image} alt={photo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-left">
                <span className="text-xs font-bold font-trajan text-white truncate">{photo.title}</span>
                <span className="text-[10px] text-[#D9A229] font-trajan font-semibold">Click to View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SUPPORT THE FOUNDATION CTA */}
      <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#071b65] via-[#0b2685] to-[#040c29] text-white text-center shadow-2xl flex flex-col items-center gap-6 border border-[#D9A229]/40">
        <h3 className="text-2xl sm:text-4xl font-bold font-trajan text-white">
          HELP US EXTEND THE LOVE OF CHRIST
        </h3>
        <p className="text-xs sm:text-sm text-gray-200 max-w-2xl font-sans leading-relaxed">
          Your partnership enables the Shiloh Samaritan Foundation to provide food, medical support, clothing, and hope to vulnerable families and communities.
        </p>
        <button
          onClick={() => navigate("/partnerships")}
          className="px-8 py-3.5 rounded-full bg-[#D9A229] hover:bg-[#f5c760] text-[#071b65] font-bold text-xs sm:text-sm font-trajan uppercase tracking-wider shadow-xl transition-all whitespace-nowrap"
        >
          SUPPORT THE FOUNDATION
        </button>
      </div>

      {/* Video Modal */}
      <MediaPlayerModal
        item={activeVideo}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* Photo Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />

          <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-4">
            <div className="w-full flex items-center justify-between px-4 text-white text-xs sm:text-sm font-trajan">
              <span>{foundationPhotos[lightboxIndex].title}</span>
              <button onClick={() => setLightboxIndex(null)} className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="relative w-full max-h-[75vh] flex items-center justify-center bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <img src={foundationPhotos[lightboxIndex].image} alt={foundationPhotos[lightboxIndex].title} className="max-h-[75vh] max-w-full object-contain" />

              <button onClick={handlePrevPhoto} className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/30">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
              </button>

              <button onClick={handleNextPhoto} className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/30">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharitySection;
