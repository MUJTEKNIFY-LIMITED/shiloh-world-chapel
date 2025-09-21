import book1 from "../assets/images/books/book-1-img.png";
import book2 from "../assets/images/books/book-2-img.png";
import book3 from "../assets/images/books/book-3-img.png";
import twitterIcon from "../assets/icons/social-icons/blue-social-icons/blue-twitter-icon.svg";
import facebookIcon from "../assets/icons/social-icons/blue-social-icons/blue-facebook-icon.svg";
import instagramIcon from "../assets/icons/social-icons/blue-social-icons/blue-instagram-icon.svg";
import linkedInIcon from "../assets/icons/social-icons/blue-social-icons/blue-linkedin-icon.svg";
import arrowRightIcon from "../assets/icons/arrows/arrow-right-icon.svg";
import arrowLeftIcon from "../assets/icons/arrows/arrow-left-icon.svg";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
// import Button from "./ui/Button.tsx";

const BookSection = () => {
  const navigate = useNavigate();

  // Book data array
  const books = [
    {
      title: "SUPERNATURAL SPEED",
      author: "Prophet I.O Samuel",
      image: book1,
    },
    {
      title: "THE SPIRIT OF HALLOWEEN EXPOSED",
      author: "Prophet I.O Samuel",
      image: book2,
    },
    {
      title: "BREAKTHROUGH BY THE BLOOD OF JESUS",
      author: "Prophet I.O Samuel",
      image: book3,
    },
    {
      title: "SUPERNATURAL SPEED",
      author: "Prophet I.O Samuel",
      image: book1,
    },
    {
      title: "THE SPIRIT OF HALLOWEEN EXPOSED",
      author: "Prophet I.O Samuel",
      image: book2,
    },
    {
      title: "BREAKTHROUGH BY THE BLOOD OF JESUS",
      author: "Prophet I.O Samuel",
      image: book3,
    },
  ];

  // State for active page button (1-based index)
  const [activePage, setActivePage] = useState(1);

  return (
    <>
      <section className="h-fit flex flex-col gap-12 px-8 md:px-20 xl:px-0 py-20">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col gap-4 text-center">
            <h5 className="text-xl text-primary font-semibold">OUR BOOKS</h5>
            <p className="text-3xl font-trajan">
              Spiritual Books, By Prophet I.O Samuel
            </p>
          </div>
          <div className="lg:overflow-x-scroll lg:scrollbar-hide">
            <div className="flex justify-center gap-20 w-full lg:w-fit lg:px-28 lg:py-20">
              {/* Mobile: Show only the book for the selected page */}

              {books.slice(activePage - 1, activePage).map((book, idx) => (
                <button
                  key={idx}
                  style={{ backgroundImage: `url(${book.image})` }}
                  className="relative flex lg:hidden flex-col gap-10 bg-cover bg-center w-full lg:w-[360px] h-[520px] lg:h-[515px] rounded-[36px] px-10 py-14 shadow-2xl justify-end border"
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
                  className="relative hidden lg:flex lg:flex-col gap-10 bg-cover bg-center w-full lg:w-[360px] h-[520px] lg:h-[515px] rounded-[36px] px-10 py-14 shadow-2xl justify-end border"
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
        <div className="flex lg:hidden justify-center gap-8">
          <button
            onClick={() => setActivePage((prev) => (prev > 1 ? prev - 1 : 1))}
            disabled={activePage === 1}
          >
            <img
              className={`transition-all duration-300 ${
                activePage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:-translate-x-1"
              }`}
              src={arrowLeftIcon}
              alt="Arrow Left Icon"
            />
          </button>
          <div className="flex gap-4">
            {(() => {
              const total = books.length;
              let start = 1;
              let end = 4;
              if (activePage > 2 && total > 4) {
                start = Math.max(1, activePage - 1);
                end = Math.min(total, start + 3);
                if (end - start < 3) {
                  start = Math.max(1, end - 3);
                }
              }
              return Array.from(
                { length: end - start + 1 },
                (_, i) => start + i
              ).map((num) => (
                <button
                  key={num}
                  className={`w-[40px] h-[40px] rounded-[7px] flex items-center justify-center shadow-2xl hover:border-primary transition-all duration-200 ${
                    activePage === num
                      ? "bg-primary text-white font-bold text-xl px-[16px] py-[13px] border border-primary"
                      : "border text-primary font-bold text-xl"
                  }`}
                  onClick={() => setActivePage(num)}
                >
                  <p>{num}</p>
                </button>
              ));
            })()}
          </div>
          <button
            onClick={() =>
              setActivePage((prev) =>
                prev < books.length ? prev + 1 : books.length
              )
            }
            disabled={activePage === books.length}
          >
            <img
              className={`transition-all duration-300 ${
                activePage === books.length
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:translate-x-1"
              }`}
              src={arrowRightIcon}
              alt="Arrow Right Icon"
            />
          </button>
        </div>
      </section>
    </>
  );
};

export default BookSection;
