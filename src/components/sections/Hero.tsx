import NavBar from "../NavBar";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import MediaPlayerModal from "../overlays/MediaPlayerModal";
import type { SermonItem } from "../../assets/data/sermons-data";

import slider1 from "../../assets/images/new_media/Slider 1.jpg";
import slider2 from "../../assets/images/new_media/Slider 2.jpg";
import slider3 from "../../assets/images/new_media/Slider 3.jpg";
import slider4 from "../../assets/images/new_media/Slider 4.jpg";
import slider5 from "../../assets/images/new_media/Slider 5.jpg";
import slider6 from "../../assets/images/new_media/Slider 6.jpg";
import slider7 from "../../assets/images/new_media/Slider 7.jpg";
import slider8 from "../../assets/images/new_media/Slider 8.jpg";
import slider9 from "../../assets/images/new_media/Slider 9.jpg";
import slider10 from "../../assets/images/new_media/Slider 10.jpg";

import mainBanner1 from "../../assets/images/banners/main-banner1.jpg";
import mainBanner2 from "../../assets/images/banners/main-banner2.jpg";
import mainBanner3 from "../../assets/images/banners/main-banner3.jpg";

import aboutPageHeroBackground from "../../assets/images/about-page-hero-bg.jpg";
import foundationPageHeroBackground from "../../assets/images/social-media-backgrounds/whatsapp-bg-img.jpg";
import partnershipsHeroBackground from "../../assets/images/partnerships-hero-bg.jpg";
import galleryHeroBackground from "../../assets/images/gallery-hero-bg.jpg";

// Sequence: NEW SLIDER IMAGES FIRST -> EXISTING BANNER IMAGES SECOND
const heroSliderImages = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
  slider8,
  slider9,
  slider10,
  mainBanner1,
  mainBanner2,
  mainBanner3,
];

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const [selectedVideo, setSelectedVideo] = useState<SermonItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % heroSliderImages.length);
      }, 6000); // Cinematic 6-second continuous autoplay
      return () => clearInterval(interval);
    }
  }, [location.pathname]);

  const handleWatchLive = () => {
    setSelectedVideo({
      id: "live-broadcast",
      title: "Shiloh Word Chapel — Live Service & Broadcast",
      speaker: "Prophet I.O Samuel",
      date: "Live Stream",
      category: "Sermons",
      videoUrl: "https://web.facebook.com/share/v/187TdUemH4/",
      image: slider1,
      description: "Join Prophet I.O Samuel live for powerful prayer, prophetic decrees, and miracle encounters.",
    });
    setIsVideoModalOpen(true);
  };

  let heroContent;
  if (location.pathname === "/about") {
    heroContent = (
      <div className="relative flex flex-col gap-6 px-4 my-auto items-center justify-center text-center text-white z-10">
        <div className="flex gap-2 items-center text-xs sm:text-sm font-semibold uppercase tracking-wider font-trajan">
          <button onClick={() => navigate("/")} className="hover:text-[#D9A229] transition-colors whitespace-nowrap">Home</button>
          <span className="text-[#D9A229]">•</span>
          <span className="text-[#D9A229]">About</span>
        </div>
        <h1 className="uppercase font-trajan font-bold text-4xl sm:text-5xl lg:text-6xl tracking-wider">About Us</h1>
      </div>
    );
  } else if (location.pathname === "/foundation") {
    heroContent = (
      <div className="relative flex flex-col gap-6 px-4 my-auto items-center justify-center text-center text-white z-10">
        <div className="flex gap-2 items-center text-xs sm:text-sm font-semibold uppercase tracking-wider font-trajan">
          <button onClick={() => navigate("/")} className="hover:text-[#D9A229] transition-colors whitespace-nowrap">Home</button>
          <span className="text-[#D9A229]">•</span>
          <span className="text-[#D9A229]">Foundation</span>
        </div>
        <h1 className="uppercase font-trajan font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Shiloh Samaritan Foundation
        </h1>
      </div>
    );
  } else if (location.pathname === "/partnerships") {
    heroContent = (
      <div className="relative flex flex-col gap-6 px-4 my-auto items-center justify-center text-center text-white z-10">
        <div className="flex gap-2 items-center text-xs sm:text-sm font-semibold uppercase tracking-wider font-trajan">
          <button onClick={() => navigate("/")} className="hover:text-[#D9A229] transition-colors whitespace-nowrap">Home</button>
          <span className="text-[#D9A229]">•</span>
          <span className="text-[#D9A229]">Partnerships</span>
        </div>
        <h1 className="uppercase font-trajan font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Partnerships & Giving
        </h1>
      </div>
    );
  } else if (location.pathname === "/gallery") {
    heroContent = (
      <div className="relative flex flex-col gap-6 px-4 my-auto items-center justify-center text-center text-white z-10">
        <div className="flex gap-2 items-center text-xs sm:text-sm font-semibold uppercase tracking-wider font-trajan">
          <button onClick={() => navigate("/")} className="hover:text-[#D9A229] transition-colors whitespace-nowrap">Home</button>
          <span className="text-[#D9A229]">•</span>
          <span className="text-[#D9A229]">Gallery</span>
        </div>
        <h1 className="uppercase font-trajan font-bold text-4xl sm:text-5xl lg:text-6xl">Ministry Gallery</h1>
      </div>
    );
  } else if (location.pathname === "/sermons") {
    heroContent = (
      <div className="relative flex flex-col gap-6 px-4 my-auto items-center justify-center text-center text-white z-10">
        <div className="flex gap-2 items-center text-xs sm:text-sm font-semibold uppercase tracking-wider font-trajan">
          <button onClick={() => navigate("/")} className="hover:text-[#D9A229] transition-colors whitespace-nowrap">Home</button>
          <span className="text-[#D9A229]">•</span>
          <span className="text-[#D9A229]">Sermons & Media</span>
        </div>
        <h1 className="uppercase font-trajan font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight">
          Prophetic Words & Sermons
        </h1>
      </div>
    );
  } else if (location.pathname === "/events") {
    heroContent = (
      <div className="relative flex flex-col gap-6 px-4 my-auto items-center justify-center text-center text-white z-10">
        <div className="flex gap-2 items-center text-xs sm:text-sm font-semibold uppercase tracking-wider font-trajan">
          <button onClick={() => navigate("/")} className="hover:text-[#D9A229] transition-colors whitespace-nowrap">Home</button>
          <span className="text-[#D9A229]">•</span>
          <span className="text-[#D9A229]">Events</span>
        </div>
        <h1 className="uppercase font-trajan font-bold text-4xl sm:text-5xl lg:text-6xl">Events & Programs</h1>
      </div>
    );
  } else if (location.pathname === "/contact") {
    heroContent = (
      <div className="relative flex flex-col gap-6 px-4 my-auto items-center justify-center text-center text-white z-10">
        <div className="flex gap-2 items-center text-xs sm:text-sm font-semibold uppercase tracking-wider font-trajan">
          <button onClick={() => navigate("/")} className="hover:text-[#D9A229] transition-colors whitespace-nowrap">Home</button>
          <span className="text-[#D9A229]">•</span>
          <span className="text-[#D9A229]">Contact</span>
        </div>
        <h1 className="uppercase font-trajan font-bold text-4xl sm:text-5xl lg:text-6xl">Contact Us</h1>
      </div>
    );
  } else {
    // HOMEPAGE HERO CONTENT
    heroContent = (
      <div className="relative flex flex-col gap-6 items-center justify-center text-center z-10 max-w-4xl mx-auto pt-4 sm:pt-8 px-4">
        {/* Ministry Sub-title / Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#D9A229]/60 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#D9A229] animate-pulse"></span>
          <span className="text-xs sm:text-sm font-bold uppercase text-[#D9A229] font-trajan tracking-widest whitespace-nowrap">
            THE ARENA OF FIRE & FAVOUR
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="uppercase text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight font-trajan tracking-wide drop-shadow-lg">
          WELCOME TO SHILOH<br className="hidden sm:inline" /> WORD CHAPEL
        </h1>

        {/* Concise Supporting Copy */}
        <p className="text-sm sm:text-base lg:text-lg text-white/95 font-light max-w-2xl leading-relaxed drop-shadow">
          A place of prayer, prophecy, healing, deliverance and life-transforming encounters with God led by Prophet I.O Samuel.
        </p>

        {/* Primary CTAs — EXACTLY ONE LINE PER BUTTON */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mt-3 flex-wrap">
          <a
            href="#connect-section"
            className="px-6 sm:px-8 py-3.5 rounded-full bg-[#D9A229] hover:bg-[#f5c760] text-[#071b65] font-bold text-xs sm:text-sm font-trajan uppercase tracking-wider shadow-xl transition-all whitespace-nowrap"
          >
            REQUEST PRAYER
          </a>
          <button
            onClick={handleWatchLive}
            className="px-6 sm:px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm font-trajan uppercase tracking-wider border border-white/40 backdrop-blur-md transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <svg className="w-4 h-4 text-[#D9A229]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <span>WATCH LIVE</span>
          </button>
        </div>
      </div>
    );
  }

  // Non-homepage background static image selection
  let staticBackground = mainBanner1;
  if (location.pathname === "/about") staticBackground = aboutPageHeroBackground;
  else if (location.pathname === "/foundation") staticBackground = foundationPageHeroBackground;
  else if (location.pathname === "/partnerships") staticBackground = partnershipsHeroBackground;
  else if (location.pathname === "/gallery") staticBackground = galleryHeroBackground;
  else if (location.pathname === "/sermons") staticBackground = mainBanner2;
  else if (location.pathname === "/contact") staticBackground = mainBanner3;

  return (
    <>
      <header className="relative w-full overflow-hidden bg-[#040c29]">
        {/* Background Slider Container */}
        {location.pathname === "/" ? (
          <div className="absolute inset-0 w-full h-full">
            {heroSliderImages.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  activeIndex === idx ? "opacity-100 z-0" : "opacity-0 -z-10"
                }`}
              >
                <img
                  src={img}
                  alt={`Shiloh Word Chapel Ministry Slide ${idx + 1}`}
                  className={`w-full h-full object-cover object-center ${
                    !prefersReducedMotion && activeIndex === idx
                      ? "animate-kenburns"
                      : ""
                  }`}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="absolute inset-0 w-full h-full">
            <img
              src={staticBackground}
              alt="Shiloh Word Chapel Background"
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}

        {/* Controlled Dark Overlay for High Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-[#040c29]"></div>

        {/* Header Structure */}
        <div
          className={`relative z-10 flex flex-col h-fit gap-12 lg:gap-20 px-4 md:px-12 lg:px-20 xl:px-28 pt-6 lg:pt-4 ${
            location.pathname !== "/" ? "pb-20 lg:pb-28" : "pb-16 lg:pb-20"
          }`}
        >
          <NavBar />
          <div className="flex flex-col gap-8">
            {heroContent}
          </div>
        </div>
      </header>

      {/* Reusable Video Lightbox Modal */}
      <MediaPlayerModal
        item={selectedVideo}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
};

export default Hero;
