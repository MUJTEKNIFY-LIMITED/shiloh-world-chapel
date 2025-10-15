import twitterIcon from "../assets/icons/social-icons/blue-social-icons/blue-twitter-icon.svg";
import facebookIcon from "../assets/icons/social-icons/blue-social-icons/blue-facebook-icon.svg";
import instagramIcon from "../assets/icons/social-icons/blue-social-icons/blue-instagram-icon.svg";
import linkedInIcon from "../assets/icons/social-icons/blue-social-icons/blue-linkedin-icon.svg";
import { useNavigate, Link } from "react-router-dom";
import { books } from "../assets/data/book-data";
import { useState } from "react";
import Pageination from "./Pageination";

const BookSection = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);

  return (
    <>
      <section className="h-fit flex flex-col gap-12 mt-20">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col gap-4 text-center">
            <h5 className="text-xl text-primary font-semibold">OUR BOOKS</h5>
            <p className="text-3xl font-trajan">
              Spiritual Books, By Prophet I.O Samuel
            </p>
          </div>
          <div className="lg:overflow-x-scroll lg:scrollbar-hide">
            <div className="flex justify-center gap-20 w-full lg:w-fit px-10 md:px-16 lg:px-10 xl:px-24 lg:py-20">
              {/* Mobile: Show only the book for the selected page */}

              {books.slice(activePage - 1, activePage).map((book, idx) => (
                <button
                  key={idx}
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
        <Pageination activePage={activePage} setActivePage={setActivePage} />
      </section>
    </>
  );
};

export default BookSection;
