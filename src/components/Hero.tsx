import NavBar from "./NavBar";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import mainBanner1 from "../assets/images/main-banner1.jpg";
import mainBanner2 from "../assets/images/main-banner2.jpg";
import mainBanner3 from "../assets/images/main-banner3.jpg";

const images = [
  mainBanner1,
  mainBanner2,
  mainBanner3,
];

const Hero = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header
        style={{ backgroundImage: `url(${images[activeIndex]})` }}
        className="relative flex flex-col justify-between pt-6 pb-12 gap-16 h-fit lg:h-screen bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <NavBar />
        <div className="relative flex flex-col gap-4 px-6 items-center justify-center text-center lg:h-screen">
          <h6 className="uppercase text-white text-xs lg:text-sm font-normal font-galano">
            become a part of something great
          </h6>
          <p className="uppercase text-white text-4xl lg:text-6xl max-w-60 lg:max-w-3xl font-semibold leading-loose font-trajan">
            Welcome To Shiloh Word Chapel.
          </p>
          <Button variant="primary" onClick={() => navigate("/partnerships")}>
            Partner Now
          </Button>
        </div>

        {/* Eclipse indicators */}
        <div className="hidden absolute bottom-8 left-1/2 -translate-x-1/2 lg:flex gap-3 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-4 h-4 rounded-full focus:outline-none transition-all duration-300 ${
                activeIndex === idx ? "bg-primary" : "bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </header>
    </>
  );
};

export default Hero;
