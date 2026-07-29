import { useNavigate } from "react-router-dom";
import { books } from "../../assets/data/book-data";

const BookSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 lg:py-24 bg-[#f8fafc] px-4 sm:px-6 lg:px-8 border-t border-gray-100">
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

        {/* Books Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, idx) => (
            <div
              key={idx}
              onClick={() => navigate("/book-purchase")}
              className="group bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-center gap-6 cursor-pointer transform hover:-translate-y-1"
            >
              <div className="w-full aspect-[3/4] max-h-[300px] rounded-2xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center p-4">
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
      </div>
    </section>
  );
};

export default BookSection;
