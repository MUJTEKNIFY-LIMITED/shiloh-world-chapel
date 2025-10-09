import NavBar from "./NavBar";
import Button from "./ui/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import mainBanner1 from "../assets/images/banners/main-banner1.jpg";
import mainBanner2 from "../assets/images/banners/main-banner2.jpg";
import mainBanner3 from "../assets/images/banners/main-banner3.jpg";
import aboutPageHeroBackground from "../assets/images/about-page-hero-bg.jpg";
import foundationPageHeroBackground from "../assets/images/social-media-backgrounds/whatsapp-bg-img.jpg";
import partnershipsHeroBackground from "../assets/images/partnerships-hero-bg.jpg";
import galleryHeroBackground from "../assets/images/gallery-hero-bg.jpg";
import sermonsPageHeroBackground from "../assets/images/man-on-white.jpg";

const images = [mainBanner1, mainBanner2, mainBanner3];

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (location.pathname === "/") {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, 4000); // Change every 4 seconds
      return () => clearInterval(interval);
    }
  }, [location.pathname]);

  let heroContent;
  if (location.pathname === "/about") {
    heroContent = (
      <div className="relative flex flex-col gap-8 px-6 my-auto items-center justify-center text-center text-white lg:h-fit">
        <div className="flex gap-2 items-center">
          <button onClick={() => navigate("/")}>Home</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 -rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <p>About</p>
        </div>
        <p className="uppercase font-trajan font-bold text-6xl">About</p>
      </div>
    );
  } else if (location.pathname === "/foundation") {
    heroContent = (
      <div className="relative flex flex-col gap-8 px-6 my-auto items-center justify-center text-center text-white lg:h-fit">
        <div className="flex gap-2 items-center">
          <button onClick={() => navigate("/")}>Home</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 -rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <p>Foundation Needs</p>
        </div>
        <p className="uppercase font-trajan font-bold text-5xl leading-normal">
          Shiloh Samaritan Foundation
        </p>
      </div>
    );
  } else if (location.pathname === "/partnerships") {
    heroContent = (
      <div className="relative flex flex-col gap-8 px-6 my-auto items-center justify-center text-center text-white lg:h-fit">
        <div className="flex gap-2 items-center">
          <button onClick={() => navigate("/")}>Home</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 -rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <p>Partnerships</p>
        </div>
        <p className="uppercase font-trajan font-bold text-5xl leading-normal">
          Partnerships & Donations
        </p>
      </div>
    );
  } else if (location.pathname === "/gallery") {
    heroContent = (
      <div className="relative flex flex-col gap-8 px-6 my-auto items-center justify-center text-center text-white lg:h-fit">
        <div className="flex gap-2 items-center">
          <button onClick={() => navigate("/")}>Home</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 -rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <p>Gallery</p>
        </div>
        <p className="uppercase font-trajan font-bold text-5xl leading-normal">
          Gallery
        </p>
      </div>
    );
  } else {
    heroContent = (
      <div className="relative flex flex-col gap-4 items-center justify-center text-center lg:h-fit">
        <h6 className="uppercase text-white font-normal font-galano">
          become a part of something great
        </h6>
        <p className="uppercase text-white text-5xl xl:text-6xl max-w-80 md:max-w-xl xl:max-w-3xl font-semibold leading-loose xl:leading-normal font-trajan">
          Welcome To Shiloh Word Chapel.
        </p>
        <Button
          variant="outlinePrimary"
          onClick={() => navigate("/partnerships")}
        >
          Partner Now
        </Button>
      </div>
    );
  }

  // Set header background based on page
  let headerBackground;
  if (location.pathname === "/about") {
    headerBackground = `url(${aboutPageHeroBackground})`;
  } else if (location.pathname === "/foundation") {
    headerBackground = `url(${foundationPageHeroBackground})`;
  } else if (location.pathname === "/partnerships") {
    headerBackground = `url(${partnershipsHeroBackground})`;
  } else if (location.pathname === "/gallery") {
    headerBackground = `url(${galleryHeroBackground})`;
  } else if (location.pathname === "/sermons") {
    headerBackground = `url(${sermonsPageHeroBackground})`;
  } else {
    headerBackground = `url(${images[activeIndex]})`;
  }

  return (
    <>
      <header
        style={{ backgroundImage: headerBackground }}
        className={`relative flex flex-col h-fit gap-24 lg:gap-40 px-8 md:px-10 lg:px-16 xl:px-24 pt-10 lg:pt-2 ${
          location.pathname !== "/" ? "pb-64 lg:pb-72" : "pb-24"
        } lg:pb-14 bg-cover bg-center`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <NavBar />
        <div className="flex flex-col gap-36">
          {heroContent}
          {/* Eclipse indicators only for home */}
          {location.pathname === "/" && (
            <div className="hidden lg:w-full lg:flex lg:gap-6 lg:justify-center lg:z-20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-5 h-5 rounded-full focus:outline-none transition-all duration-300 ${
                    activeIndex === idx ? "bg-primary" : "bg-white"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Hero;
