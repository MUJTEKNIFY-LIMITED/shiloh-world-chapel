import twitterIcon from "../assets/icons/social-icons/blue-social-icons/blue-twitter-icon.svg";
import facebookIcon from "../assets/icons/social-icons/blue-social-icons/blue-facebook-icon.svg";
import instagramIcon from "../assets/icons/social-icons/blue-social-icons/blue-instagram-icon.svg";
import linkedInIcon from "../assets/icons/social-icons/blue-social-icons/blue-linkedin-icon.svg";
import { useNavigate, Link } from "react-router-dom";
import { books } from "../assets/data/book-data";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

const BookSection = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);

  // Responsive pagination: 1 per page on mobile, 9 per page on lg+
  const getBooksPerPage = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      return 9;
    }
    return 1;
  };

  const [booksPerPage, setBooksPerPage] = useState(getBooksPerPage());

  useEffect(() => {
    const handleResize = () => setBooksPerPage(getBooksPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startIdx = (activePage - 1) * booksPerPage;
  const endIdx = startIdx + booksPerPage;
  const paginatedBooks = books.slice(startIdx, endIdx);

  // Ensure activePage is valid when perPage or total books change
  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(books.length / booksPerPage));
    if (activePage > totalPages) setActivePage(1);
  }, [booksPerPage, books.length]);

  return (
    <>
      <section className="h-fit flex flex-col gap-12 mt-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 text-center">
            <h5 className="text-xl text-primary font-semibold">OUR BOOKS</h5>
            <p className="text-3xl font-trajan">
              Spiritual Books, By Prophet I.O Samuel
            </p>
          </div>
          <div className="lg:overflow-x-scroll lg:scrollbar-hide">
            <div className="flex justify-center gap-20 w-full lg:w-fit px-10 md:px-16 lg:px-10 xl:px-24 lg:py-20">
              {/* Mobile: Show only the books for the selected page */}

              {paginatedBooks.map((book, idx) => (
                <button
                  key={startIdx + idx}
                  style={{ backgroundImage: `url(${book.image})` }}
                  className="relative flex lg:hidden flex-col gap-10 bg-cover bg-center w-full lg:w-[360px] h-[520px] lg:h-[515px] rounded-[36px] px-10 py-14 shadow-5xl justify-end border"
                  onClick={() => navigate("/book-purchase")}
                >
                  <div className="absolute inset-0 rounded-[36px] bg-gradient-to-t from-black/80 to-white/0 z-0"></div>
                  <div className="flex flex-col items-center gap-4 z-20">
                    <div className="flex gap-4">
                      <Link
                        to={"#"}
                        className="p-[10px] w-[45px] h-[45px] bg-white rounded-[25px] flex items-center justify-center"
                      >
                        <img
                          src={twitterIcon}
                          className="w-[20px] h-[20px]"
                          alt="Twitter Icon"
                        />
                      </Link>
                      <Link
                        to={"#"}
                        className="p-[10px] w-[45px] h-[45px] bg-white rounded-[25px] flex items-center justify-center"
                      >
                        <img
                          src={facebookIcon}
                          className="w-[20px] h-[20px]"
                          alt="Facebook Icon"
                        />
                      </Link>
                      <Link
                        to={"#"}
                        className="p-[10px] w-[45px] h-[45px] bg-white rounded-[25px] flex items-center justify-center"
                      >
                        <img
                          src={linkedInIcon}
                          className="w-[20px] h-[20px]"
                          alt="LinkedIn Icon"
                        />
                      </Link>
                      <Link
                        to={"#"}
                        className="p-[10px] w-[45px] h-[45px] bg-white rounded-[25px] flex items-center justify-center"
                      >
                        <img
                          src={instagramIcon}
                          className="w-[20px] h-[20px]"
                          alt="Instagram Icon"
                        />
                      </Link>
                    </div>
                    <div className="flex flex-col text-white text-center">
                      <h6 className="font-bold text-xl">{book.title}</h6>
                      <p className="text-base">{book.author}</p>
                    </div>
                  </div>
                </button>
              ))}

              {/* Desktop: Show all books in a row */}
              {books.map((book, idx) => (
                <button
                  key={idx}
                  style={{ backgroundImage: `url(${book.image})` }}
                  className="relative hidden lg:flex lg:flex-col gap-10 bg-cover bg-center w-full lg:w-[360px] h-[520px] lg:h-[515px] rounded-[36px] px-10 py-14 shadow-5xl justify-end border"
                  onClick={() => navigate("/book-purchase")}
                >
                  <div className="absolute inset-0 rounded-[36px] bg-gradient-to-t from-black/80 to-white/0 z-0"></div>
                  <div className="flex flex-col items-center gap-4 z-20">
                    <div className="flex gap-4">
                      <Link
                        to={"#"}
                        className="p-[10px] w-[45px] h-[45px] bg-white rounded-[25px] flex items-center justify-center"
                      >
                        <img
                          src={twitterIcon}
                          className="w-[20px] h-[20px]"
                          alt="Twitter Icon"
                        />
                      </Link>
                      <Link
                        to={"#"}
                        className="p-[10px] w-[45px] h-[45px] bg-white rounded-[25px] flex items-center justify-center"
                      >
                        <img
                          src={facebookIcon}
                          className="w-[20px] h-[20px]"
                          alt="Facebook Icon"
                        />
                      </Link>
                      <Link
                        to={"#"}
                        className="p-[10px] w-[45px] h-[45px] bg-white rounded-[25px] flex items-center justify-center"
                      >
                        <img
                          src={linkedInIcon}
                          className="w-[20px] h-[20px]"
                          alt="LinkedIn Icon"
                        />
                      </Link>
                      <Link
                        to={"#"}
                        className="p-[10px] w-[45px] h-[45px] bg-white rounded-[25px] flex items-center justify-center"
                      >
                        <img
                          src={instagramIcon}
                          className="w-[20px] h-[20px]"
                          alt="Instagram Icon"
                        />
                      </Link>
                    </div>
                    <div className="flex flex-col text-white text-center">
                      <h6 className="font-bold text-xl">{book.title}</h6>
                      <p className="text-base">{book.author}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <Pagination
          activePage={activePage}
          setActivePage={setActivePage}
          total={books.length}
          perPage={booksPerPage}
        />
      </section>
    </>
  );
};

export default BookSection;
