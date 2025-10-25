import arrowBackIcon from "../assets/icons/arrows/arrow-back-icon.svg";
import bookCoverImg from "../assets/images/books/book-cover-img.png";
import facebookIcon from "./../assets/icons/social-icons/black-social-icons/black-facebook-icon.svg";
import instagramIcon from "./../assets/icons/social-icons/black-social-icons/black-instagram-icon.svg";
import linkedInIcon from "./../assets/icons/social-icons/black-social-icons/black-linkedin-icon.svg";
import twitterIcon from "./../assets/icons/social-icons/black-social-icons/black-twitter-icon.svg";
import keyboardArrowDown from "../assets/icons/arrows/keyboard_arrow_down.svg";
import flutterwaveIcon from "../assets/icons/flutterwave-icon.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const BookPurchase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="h-fit flex flex-col lg:flex-row lg:justify-center gap-10 px-4 lg:px-20 pt-10 pb-20 lg:py-20">
        <button
          className="flex items-center justify-center w-[47px] h-[47px] p-[11px] border-[3px] border-fifth rounded-[10px] hover:border-black transition-all duration-1000"
          onClick={() => window.history.back()}
        >
          <img src={arrowBackIcon} alt="Arrow Back Icon" />
        </button>
        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-12">
          <img
            src={bookCoverImg}
            alt="Book Cover"
            className="w-[264px] lg:w-[400px] h-[367px] lg:h-[557px]"
          />
          <div className="flex flex-col gap-10 lg:w-[40%]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-4xl max-w-lg font-semibold leading-snug">
                  SUPERNATURAL SPEED
                </p>
                <div className="flex gap-2 text-base">
                  <p className="font-semibold">By</p>
                  <p>PROPHET I.O SAMUEL</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Link
                  to={"#"}
                  className="w-[35px] h-[35px] border border-sixth rounded-[25px] flex items-center justify-center hover:border-black transition-all duration-1000"
                >
                  <img src={facebookIcon} alt="Facebook Icon" />
                </Link>
                <Link
                  to={"#"}
                  className="w-[35px] h-[35px] border border-sixth rounded-[25px] flex items-center justify-center hover:border-black transition-all duration-1000"
                >
                  <img src={instagramIcon} alt="Instagram Icon" />
                </Link>
                <Link
                  to={"#"}
                  className="w-[35px] h-[35px] border border-sixth rounded-[25px] flex items-center justify-center hover:border-black transition-all duration-1000"
                >
                  <img src={twitterIcon} alt="Twitter Icon" />
                </Link>
                <Link
                  to={"#"}
                  className="w-[35px] h-[35px] border border-sixth rounded-[25px] flex items-center justify-center hover:border-black transition-all duration-1000"
                >
                  <img src={linkedInIcon} alt="LinkedIn Icon" />
                </Link>
              </div>
              <p className="text-tertiary text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                maximus nisi pretium neque sodales, id suscipit sapien finibus.
                Nulla dapibus mi in orci elementum, in rhoncus sem mollis.
              </p>
            </div>
            <div className="flex flex-col gap-7">
              <p className="text-4xl font-semibold">₦ 10,000</p>
              <div className="flex items-center gap-10">
                <p className="text-base font-bold">Quantity</p>
                <button className="flex items-center gap-2 rounded-[6px] border border-sixth px-[12px] py-[2px] font-bold hover:border-black transition-all duration-1000">
                  <p>1</p>
                  <img src={keyboardArrowDown} alt="Keyboard Arrow Down Icon" />
                </button>
                {/* <select name="quantity" className="flex items-center justify-center gap-2 border border-sixth rounded-[6px] w-[60px] h-[28px] font-bold" defaultValue="1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select> */}
              </div>
              <button className="w-[274px] h-[47px] border-[3px] border-fifth rounded-[15px] flex items-center justify-center gap-2 font-semibold hover:border-black transition-all duration-1000">
                <p>Pay With Flutterwave</p>
                <img src={flutterwaveIcon} alt="Flutterwave Icon" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BookPurchase;
