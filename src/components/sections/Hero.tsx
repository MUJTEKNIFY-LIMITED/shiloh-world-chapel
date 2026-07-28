import NavBar from "../NavBar";
import Button from "../ui/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

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

  // Check prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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
      }, 5000); // Cinematic 5-second slide duration
      return () => clearInterval(interval);
    }
  }, [location.pathname]);

  let heroContent;
  if (location.pathname === "/about") {
    heroContent = (
      <div className="relative flex flex-col gap-8 px-6 my-auto items-center justify-center text-center text-white lg:h-fit z-10">
        <div className="flex gap-2 items-center text-sm">
          <button onClick={() => navigate("/")} className="hover:text-[#D9A229] transition-colors">Home</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 -rotate-90"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <p className="text-[#D9A229]">About</p>
        </div>
        <h1 className="uppercase font-trajan font-bold text-5xl lg:text-6xl tracking-wider">About Us</h1>
      </div>
    );
  } else if (location.pathname === "/foundation") {
    heroContent = (
      <div className="relative flex flex-col gap-8 px-6 my-auto items-center justify-center text-center text-white lg:h-fit z-10">
        <div className="flex gap-2 items-center text-sm">
          <button onClick={() => navigate("/")} className="hover:text-[#D9A229] transition-colors">Home</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 -rotate-90"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <p className="text-[#D9A229]">Foundation Needs</p>
        </div>
        <h1 className="uppercase font-trajan font-bold text-4xl lg:text-5xl leading-tight">
          Shiloh Samaritan Foundation
        </h1>
      </div>
    );
  } else if (location.pathname === "/partnerships") {
    heroContent = (
      <div className="relative flex flex-col gap-8 px-6 my-auto items-center justify-center text-center text-white lg:h-fit z-10">
        <div className="flex gap-2 items-center text-sm">
          <button onClick={() => navigate("/")} className="hover:text-[#D9A229] transition-colors">Home</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 -rotate-90"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <p className="text-[#D9A229]">Partnerships</p>
        </div>
        <h1 className="uppercase font-trajan font-bold text-4xl lg:text-5xl leading-tight">
          Partnerships & Giving
        </h1>
      </div>
    );
  } else if (location.pathname === "/gallery") {
    heroContent = (
      <div className="relative flex flex-col gap-8 px-6 my-auto items-center justify-center text-center text-white lg:h-fit z-10">
        <div className="flex gap-2 items-center text-sm">
          <button onClick={() => navigate("/")} className="hover:text-[#D9A229] transition-colors">Home</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 -rotate-90"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <p className="text-[#D9A229]">Gallery</p>
        </div>
        <h1 className="uppercase font-trajan font-bold text-5xl lg:text-6xl">Ministry Gallery</h1>
      </div>
    );
  } else if (location.pathname === "/sermons") {
    heroContent = (
      <div className="relative flex flex-col gap-8 px-6 my-auto items-center justify-center text-center text-white lg:h-fit z-10">
        <div className="flex gap-2 items-center text-sm">
          <button onClick={() => navigate("/")} className="hover:text-[#D9A229] transition-colors">Home</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 -rotate-90"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <p className="text-[#D9A229]">Sermons & Media</p>
        </div>
        <h1 className="uppercase font-trajan font-bold text-4xl lg:text-6xl leading-tight">
          Prophetic Words & Sermons
        </h1>
      </div>
    );
  } else if (location.pathname === "/events") {
    heroContent = (
      <div className="relative flex flex-col gap-8 px-6 my-auto items-center justify-center text-center text-white lg:h-fit z-10">
        <div className="flex gap-2 items-center text-sm">
          <button onClick={() => navigate("/")} className="hover:text-[#D9A229] transition-colors">Home</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 -rotate-90"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <p className="text-[#D9A229]">Events</p>
        </div>
        <h1 className="uppercase font-trajan font-bold text-5xl lg:text-6xl">Events & Programs</h1>
      </div>
    );
  } else if (location.pathname === "/contact") {
    heroContent = (
      <div className="relative flex flex-col gap-8 px-6 my-auto items-center justify-center text-center text-white lg:h-fit z-10">
        <div className="flex gap-2 items-center text-sm">
          <button onClick={() => navigate("/")} className="hover:text-[#D9A229] transition-colors">Home</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 -rotate-90"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <p className="text-[#D9A229]">Contact</p>
        </div>
        <h1 className="uppercase font-trajan font-bold text-5xl lg:text-6xl">Contact Us</h1>
      </div>
    );
  } else {
    // HOMEPAGE HERO CONTENT
    heroContent = (
      <div className="relative flex flex-col gap-6 items-center justify-center text-center lg:h-fit z-10 max-w-4xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-[#D9A229]/60 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#D9A229] animate-pulse"></span>
          <span className="text-xs sm:text-sm font-semibold uppercase text-[#D9A229] font-trajan tracking-widest">
            Prophetic Ministry • Deliverance • Healing
          </span>
        </div>
        <h1 className="uppercase text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-snug lg:leading-normal font-trajan tracking-wide drop-shadow-md">
          Welcome To Shiloh Word Chapel
        </h1>
        <p className="text-base sm:text-lg text-white/90 font-light max-w-2xl leading-relaxed">
          Led by Prophet I.O Samuel — A house of prayer, prophetic direction, miracle healings, and life transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Button
            variant="outlinePrimary"
            onClick={() => navigate("/partnerships")}
          >
            Partner With Us
          </Button>
          <a
            href="#connect-section"
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm font-trajan uppercase border border-white/30 transition-all flex items-center justify-center gap-2"
          >
            Submit Prayer Request
          </a>
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
    <header className="relative w-full overflow-hidden bg-[#040c29]">
      {/* Background Image Container */}
      {location.pathname === "/" ? (
        // Homepage Continuous Autoplay Slider with Cinematic Transitions
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
        // Inner pages static hero image
        <div className="absolute inset-0 w-full h-full">
          <img
            src={staticBackground}
            alt="Shiloh Word Chapel Background"
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}

      {/* Dark Overlay Gradient for maximum text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#040c29]"></div>

      {/* Main Header Content */}
      <div
        className={`relative z-10 flex flex-col h-fit gap-16 lg:gap-24 px-6 md:px-12 lg:px-20 xl:px-28 pt-8 lg:pt-4 ${
          location.pathname !== "/" ? "pb-24 lg:pb-36" : "pb-20 lg:pb-24"
        }`}
      >
        <NavBar />
        <div className="flex flex-col gap-12">
          {heroContent}

          {/* Minimalist Progress Bar for Homepage Slider */}
          {location.pathname === "/" && (
            <div className="w-full max-w-xs mx-auto flex items-center gap-1.5 z-20 mt-4">
              {heroSliderImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 focus:outline-none ${
                    activeIndex === idx
                      ? "w-8 bg-[#D9A229]"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Hero;
