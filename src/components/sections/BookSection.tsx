import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../../assets/data/book-data";

const BookSection = () => {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);

  const booksPerPageDesktop = 3;

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % books.length);
  };

  // Compute visible books for desktop carousel (wrap-around)
  const visibleBooksDesktop = Array.from({ length: Math.min(booksPerPageDesktop, books.length) }, (_, i) => {
    return books[(startIndex + i) % books.length];
  });

  return (
    <section className="py-16 lg:py-24 bg-[#f8fafc] px-4 sm:px-6 lg:px-8 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 text-center">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase font-bold text-[#D9A229] tracking-widest font-trajan bg-[#071b65]/5 px-4 py-1.5 rounded-full">
            SPIRITUAL RESOURCES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-trajan text-[#071b65]">
            Books By Prophet I.O Samuel
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl font-sans">
            Empower your faith, prayer life, and spiritual walk with anointed books and teachings.
          </p>
        </div>

        {/* DESKTOP CAROUSEL (3 books per view + prev/next controls) */}
        <div className="hidden lg:flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-8 items-stretch">
            {visibleBooksDesktop.map((book, idx) => (
              <div
                key={idx}
                onClick={() => navigate("/book-purchase")}
                className="group bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-center gap-6 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="w-full aspect-[3/4] max-h-[280px] rounded-2xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center p-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                  />
                </div>

                <div className="flex flex-col items-center gap-2 text-center w-full">
                  <h3 className="font-bold text-base text-[#071b65] font-trajan leading-snug group-hover:text-[#D9A229] transition-colors line-clamp-2">
                    {book.title}
                  </h3>
                  <span className="text-xs text-gray-500 font-sans">{book.author}</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/book-purchase");
                  }}
                  className="w-full py-2.5 rounded-full bg-[#071b65] hover:bg-[#0c288d] text-white font-bold text-xs font-trajan uppercase tracking-wider transition-all whitespace-nowrap"
                >
                  PURCHASE BOOK
                </button>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 text-[#071b65] border border-gray-300 shadow flex items-center justify-center transition-colors"
              aria-label="Previous book"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-xs font-trajan text-gray-600 font-semibold">
              {startIndex + 1} of {books.length}
            </span>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 text-[#071b65] border border-gray-300 shadow flex items-center justify-center transition-colors"
              aria-label="Next book"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE HORIZONTAL SWIPE CAROUSEL (1 full book + peek hint of next) */}
        <div className="lg:hidden flex overflow-x-auto gap-5 snap-x snap-mandatory py-4 px-2 scrollbar-hide">
          {books.map((book, idx) => (
            <div
              key={idx}
              onClick={() => navigate("/book-purchase")}
              className="snap-center shrink-0 w-[82vw] max-w-[290px] bg-white rounded-3xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between items-center gap-5 cursor-pointer"
            >
              <div className="w-full aspect-[3/4] max-h-[240px] rounded-2xl overflow-hidden shadow-sm bg-gray-100 flex items-center justify-center p-3">
                <img
                  src={book.image}
                  alt={book.title}
                  className="max-h-full max-w-full object-contain drop-shadow"
                />
              </div>

              <div className="flex flex-col items-center gap-1 text-center w-full">
                <h3 className="font-bold text-sm text-[#071b65] font-trajan leading-tight line-clamp-2">
                  {book.title}
                </h3>
                <span className="text-xs text-gray-500 font-sans">{book.author}</span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/book-purchase");
                }}
                className="w-full py-2.5 rounded-full bg-[#071b65] text-white font-bold text-xs font-trajan uppercase tracking-wider whitespace-nowrap"
              >
                PURCHASE BOOK
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookSection;
