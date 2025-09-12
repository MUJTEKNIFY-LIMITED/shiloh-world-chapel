import Button from "./ui/Button.tsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import nigerianFlagIcon from "../assets/icons/nigerian-flag-icon.svg";
import mexicanFlagIcon from "../assets/icons/mexican-flag-icon.svg";
import argentineFlagIcon from "../assets/icons/argentine-flag-icon.svg";
import americanFlagIcon from "../assets/icons/american-flag-icon.svg";
import dutchFlagIcon from "../assets/icons/dutch-flag-icon.svg";
import australianFlagIcon from "../assets/icons/australian-flag-icon.svg";
import playIcon from "../assets/icons/play-icon.svg";
import manOnWhite from "../assets/images/man-on-white.jpg";
import manOnBlue from "../assets/images/man-on-blue.jpg";
import womanOnRed from "../assets/images/main-banner3.jpg";
import whatsappBgImg from "../assets/images/whatsapp-bg-img.jpg";
import whatsappIcon from "../assets/icons/social-icons/whatsapp-icon.svg";
import linkedinIcon from "../assets/icons/social-icons/linkedin-icon.svg";
import facebookBgImg from "../assets/images/facebook-bg-img.jpg";
import facebookIcon from "../assets/icons/social-icons/facebook-icon.svg";
import youtubeBgImg from "../assets/images/youtube-bg-img.jpg";
import youtubeIcon from "../assets/icons/social-icons/youtube-icon.svg";
import twitterBgImg from "../assets/images/main-banner2.jpg";
import twitterIcon from "../assets/icons/social-icons/twitter-icon.svg";
import instagramBgImg from "../assets/images/instagram-bg-img.jpg";
import instagramIcon from "../assets/icons/social-icons/instagram-icon.svg";

const ConnectSection = () => {
  const navigate = useNavigate();
  const [buttonVariants, setButtonVariants] = useState<
    Array<"primary" | "outline" | "secondary">
  >(["primary", "outline", "outline"]);

  const handleButtonClick = (index: number) => {
    setButtonVariants((prev) =>
      prev.map((_, i) => (i === index ? "primary" : "outline"))
    );
  };

  return (
    <>
      <section className="h-fit xl:h-screen bg-white flex flex-col gap-20 xl:gap-14 px-4 md:px-10 xl:px-20 pb-24">
        <div className="flex flex-col gap-4 text-center">
          <h5 className="text-xl text-primary font-semibold">
            CONNECT WITH US
          </h5>
          <p className="text-3xl font-trajan">Find Us From Around The Globe</p>
        </div>
        <div className="flex flex-col gap-8 xl:gap-20">
          <div className="flex justify-center gap-4 xl:gap-32">
            <Button
              variant={buttonVariants[0]}
              onClick={() => handleButtonClick(0)}
            >
              Our Partners
            </Button>
            <Button
              variant={buttonVariants[1]}
              onClick={() => handleButtonClick(1)}
            >
              Watch Us
            </Button>
            <Button
              variant={buttonVariants[2]}
              onClick={() => handleButtonClick(2)}
            >
              Our Socials
            </Button>
          </div>
          <div className="flex flex-col w-full h-[491px] xl:h-[630px] py-6 md:pt-16 md:pb-10 px-4 md:px-10 rounded-[25px] xl:rounded-[30px] bg-gradient-to-b md:bg-gradient-to-l from-white to-[#DBE2FD] shadow-2xl">
            {/* Partners Section */}

            <div
              className={`${
                buttonVariants[0] === "primary" ? "flex" : "hidden"
              } flex-col gap-4 items-center justify-center xl:gap-16 w-full h-full`}
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4 lg:w-[35%] xl:w-[46%]">
                  <h5 className="text-xl xl:text-[32px] leading-normal font-bold text-primary">
                    SHILOH TV PARTNERS ALL AROUND THE WORLD
                  </h5>
                  <p className="text-tertiary text-xs xl:text-base leading-relaxed">
                    Partnership is about supporting the work of God through your
                    seed and God will bless you in return with lots of
                    blessings, breakthrough and open financial doors. Our
                    partners are blessed with variours spiritual material and
                    access to God divine blessings from the alter of shiloh word
                    chapel. Become a partner today and join the chariot of
                    love...
                  </p>
                  <div className="flex gap-4">
                    <Button variant="shadowPrimary">Online Seed</Button>
                    <Button
                      variant="shadowTertiary"
                      onClick={() => navigate("/about")}
                    >
                      More About Us
                    </Button>
                  </div>
                </div>
                <div className="hidden lg:flex lg:flex-col lg:gap-[20%] lg:justify-center lg:w-[63%] xl:w-[53%] lg:h-full">
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col justify-center items-center bg-white w-[166px] h-[107px] gap-1 rounded-[14px] shadow-2xl">
                      <img src={nigerianFlagIcon} alt="Nigerian Flag" />
                      <p className="text-tertiary uppercase font-bold">
                        Nigeria
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white w-[166px] h-[107px] gap-1 rounded-[14px] shadow-2xl">
                      <img src={americanFlagIcon} alt="American Flag" />
                      <p className="text-tertiary uppercase font-bold">U.S.A</p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white w-[166px] h-[107px] gap-1 rounded-[14px] shadow-2xl">
                      <img src={mexicanFlagIcon} alt="Mexican Flag" />
                      <p className="text-tertiary uppercase font-bold">
                        Mexico
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col justify-center items-center bg-white w-[166px] h-[107px] gap-1 rounded-[14px] shadow-2xl">
                      <img src={dutchFlagIcon} alt="Dutch Flag" />
                      <p className="text-tertiary uppercase font-bold">
                        Netherlands
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white w-[166px] h-[107px] gap-1 rounded-[14px] shadow-2xl">
                      <img src={argentineFlagIcon} alt="Argentine Flag" />
                      <p className="text-tertiary uppercase font-bold">
                        Argentina
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white w-[166px] h-[107px] gap-1 rounded-[14px] shadow-2xl">
                      <img src={australianFlagIcon} alt="Australian Flag" />
                      <p className="text-tertiary uppercase font-bold">
                        Australia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full lg:hidden">
                <img src={nigerianFlagIcon} alt="Nigerian Flag" />
                <img src={mexicanFlagIcon} alt="Mexican Flag" />
                <img src={argentineFlagIcon} alt="Argentine Flag" />
                <img src={americanFlagIcon} alt="American Flag" />
                <img src={dutchFlagIcon} alt="Dutch Flag" />
                <img src={australianFlagIcon} alt="Australian Flag" />
              </div>
              <div className="flex justify-between items-center w-full lg:w-fit lg:gap-20 lg:mx-auto text-center">
                <div className="flex flex-col gap-4 text-primary">
                  <h6 className="text-xs xl:text-base uppercase">Partners</h6>
                  <p className="font-bold text-[32px] xl:text-[64px] font-trajan">
                    1K
                  </p>
                </div>
                <span className="hidden lg:block lg:h-[50%] lg:w-px lg:bg-tertiary"></span>
                <div className="flex flex-col gap-4 text-primary">
                  <h6 className="text-xs xl:text-base uppercase">Seeds</h6>
                  <p className="font-bold text-[32px] xl:text-[64px] font-trajan">
                    200+
                  </p>
                </div>
                <span className="hidden lg:block lg:h-[50%] lg:w-px lg:bg-tertiary"></span>
                <div className="flex flex-col gap-4 text-primary">
                  <h6 className="text-xs xl:text-base uppercase">Volunteers</h6>
                  <p className="font-bold text-[32px] xl:text-[64px] font-trajan">
                    50+
                  </p>
                </div>
                <span className="hidden lg:block lg:h-[50%] lg:w-px lg:bg-tertiary"></span>
                <div className="flex flex-col gap-4 text-primary">
                  <h6 className="text-xs xl:text-base uppercase">Charity</h6>
                  <p className="font-bold text-[32px] xl:text-[64px] font-trajan">
                    5K
                  </p>
                </div>
              </div>
            </div>

            {/* Watch Us Section*/}

            <div
              className={`${
                buttonVariants[1] === "primary" ? "flex" : "hidden"
              } relative flex-col md:flex-row gap-12 items-center md:py-0 md:gap-14 h-full w-full`}
            >
              <div className="flex flex-col gap-4 w-full lg:w-[45%]">
                <h5 className="text-xl xl:text-[32px] leading-normal font-bold text-primary">
                  WE’RE LIVE!
                  <br /> ON SHILOH LOVE TV
                </h5>
                <p className="text-tertiary text-xs xl:text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  maximus nisi pretium neque sodales, id suscipit sapien
                  finibus. Nulla dapibus mi in orci elementum, in rhoncus sem
                  mollis..
                </p>
                <Button variant="hoverShadowPrimary">Watch Now</Button>
              </div>
              <div className="absolute md:relative bottom-0 left-[12%] md:left-0 w-[88%] lg:w-[40%] xl:w-[55%] h-72 xl:h-full flex justify-end">
                <div className="absolute left-[40%] top-[40%] backdrop-blur-xl z-30 rounded-[20px]">
                  <img
                    src={playIcon}
                    alt="Play Icon"
                    className="w-[81px] xl:w-[135px] h-[81px] xl:h-[135px]"
                  />
                </div>
                <div className="absolute w-full h-full">
                  <img
                    src={womanOnRed}
                    alt="Woman On Red"
                    className="absolute bottom-[10%] md:bottom-[20%] z-20 rounded-[20px] xl:rounded-[42px] w-[173px] xl:w-[317px] h-[173px] xl:h-[317px] object-cover shadow-2xl"
                  />
                  <img
                    src={manOnWhite}
                    alt="Man On White"
                    className="absolute right-0 bottom-0 z-10 rounded-[20px] xl:rounded-[42px] w-[157px] xl:w-[318px] h-[146px] xl:h-[296px] object-cover object-left shadow-2xl"
                  />
                  <img
                    src={manOnBlue}
                    alt="Man On Blue"
                    className="absolute right-[15%] md:right-[12%] rounded-[20px] xl:rounded-[42px] w-[141px] xl:w-[249px] h-[140px] xl:h-[248px] object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Our Socials Section */}

            <div
              className={`${
                buttonVariants[2] === "primary" ? "flex" : "hidden"
              } flex-col gap-12 items-center justify-center py-8 xl:gap-20 h-full w-full`}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[56px] md:gap-x-[110px] gap-y-[53px] md:gap-y-[107px]">
                <div
                  className="relative flex items-center justify-center h-[83px] xl:h-[174px] w-[128px] xl:w-[268px] rounded-[15px] xl:rounded-[20px] bg-cover bg-center border-[3px] border-white shadow-2xl"
                  style={{ backgroundImage: `url(${whatsappBgImg})` }}
                >
                  <div className="absolute inset-0 rounded-[15px] bg-black bg-opacity-45"></div>
                  <img
                    src={whatsappIcon}
                    alt="WhatsApp Icon"
                    className="z-10 w-[33px] xl:w-[57px] h-[33px] xl:h-[57px]"
                  />
                </div>
                <div
                  className="relative flex items-center justify-center h-[83px] xl:h-[174px] w-[128px] xl:w-[268px] rounded-[15px] xl:rounded-[20px] bg-cover bg-center border-[3px] border-white shadow-2xl"
                  style={{ backgroundImage: `url(${womanOnRed})` }}
                >
                  <div className="absolute inset-0 rounded-[15px] bg-black bg-opacity-45"></div>
                  <img
                    src={linkedinIcon}
                    alt="Linkedin Icon"
                    className="z-10 w-[33px] xl:w-[57px] h-[33px] xl:h-[57px]"
                  />
                </div>
                <div
                  className="relative flex items-center justify-center h-[83px] xl:h-[174px] w-[128px] xl:w-[268px] rounded-[15px] xl:rounded-[20px] bg-cover bg-center border-[3px] border-white shadow-2xl"
                  style={{ backgroundImage: `url(${facebookBgImg})` }}
                >
                  <div className="absolute inset-0 rounded-[15px] bg-black bg-opacity-45"></div>
                  <img
                    src={facebookIcon}
                    alt="Facebook Icon"
                    className="z-10 w-[33px] xl:w-[57px] h-[33px] xl:h-[57px]"
                  />
                </div>
                <div
                  className="relative flex items-center justify-center h-[83px] xl:h-[174px] w-[128px] xl:w-[268px] rounded-[15px] xl:rounded-[20px] bg-cover bg-center border-[3px] border-white shadow-2xl"
                  style={{ backgroundImage: `url(${youtubeBgImg})` }}
                >
                  <div className="absolute inset-0 rounded-[15px] bg-black bg-opacity-45"></div>
                  <img
                    src={youtubeIcon}
                    alt="Youtube Icon"
                    className="z-10 w-[33px] xl:w-[57px] h-[33px] xl:h-[57px]"
                  />
                </div>
                <div
                  className="relative flex items-center justify-center h-[83px] xl:h-[174px] w-[128px] xl:w-[268px] rounded-[15px] xl:rounded-[20px] bg-cover bg-center border-[3px] border-white shadow-2xl"
                  style={{ backgroundImage: `url(${twitterBgImg})` }}
                >
                  <div className="absolute inset-0 rounded-[15px] bg-black bg-opacity-45"></div>
                  <img
                    src={twitterIcon}
                    alt="Twitter Icon"
                    className="z-10 w-[33px] xl:w-[57px] h-[33px] xl:h-[57px]"
                  />
                </div>
                <div
                  className="relative flex items-center justify-center h-[83px] xl:h-[174px] w-[128px] xl:w-[268px] rounded-[15px] xl:rounded-[20px] bg-cover bg-center border-[3px] border-white shadow-2xl"
                  style={{ backgroundImage: `url(${instagramBgImg})` }}
                >
                  <div className="absolute inset-0 rounded-[15px] bg-black bg-opacity-45"></div>
                  <img
                    src={instagramIcon}
                    alt="Instagram Icon"
                    className="z-10 w-[33px] xl:w-[57px] h-[33px] xl:h-[57px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConnectSection;
