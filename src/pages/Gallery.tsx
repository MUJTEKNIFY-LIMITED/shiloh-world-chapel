import { useState, useEffect } from "react";
import Hero from "../components/sections/Hero.tsx";
import { images } from "../assets/data/gallery";
import Pagination from "../components/Pagination.tsx";
import Footer from "../components/sections/Footer.tsx";

const Gallery = () => {
  const [activePage, setActivePage] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const perPage = 12;
  const startIdx = (activePage - 1) * perPage;
  const endIdx = startIdx + perPage;
  const paginatedImages = images.slice(startIdx, endIdx);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(startIdx + index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  return (
    <>
      <Hero />
      <section className="py-16 lg:py-24 bg-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs uppercase font-bold text-[#D9A229] tracking-widest font-trajan bg-[#071b65]/5 px-4 py-1.5 rounded-full">
              DOCUMENTED MOMENTS OF GLORY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-trajan text-[#071b65]">
              Shiloh Word Chapel Gallery
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl font-sans">
              Capturing moments of prophecy, miraculous healings, deliverance encounters, and joyful worship.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {paginatedImages.map((item, idx) => (
              <div
                key={item.id || idx}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gray-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-left">
                  <span className="text-xs font-bold font-trajan text-white truncate">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-[#D9A229] uppercase font-trajan font-semibold">
                    Click to Enlarge
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Pagination
            activePage={activePage}
            setActivePage={setActivePage}
            total={images.length}
            perPage={perPage}
          />
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="absolute inset-0" onClick={handleCloseLightbox} />

          {/* Controls & Dialog */}
          <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-4">
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between px-4 text-white text-xs sm:text-sm font-trajan">
              <span>
                {lightboxIndex + 1} / {images.length} — {images[lightboxIndex].title}
              </span>
              <button
                onClick={handleCloseLightbox}
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                aria-label="Close image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Main Image View */}
            <div className="relative w-full max-h-[75vh] flex items-center justify-center bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                src={images[lightboxIndex].image}
                alt={images[lightboxIndex].title}
                className="max-h-[75vh] max-w-full object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors border border-white/30 shadow-lg"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors border border-white/30 shadow-lg"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Gallery;
