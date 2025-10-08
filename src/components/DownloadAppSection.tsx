import crossIcon from "../assets/icons/cross-icon.svg";
import streamIcon from "../assets/icons/stream-icon.svg";
import playButtonArrowhead from "../assets/icons/play-button-arrowhead.svg";
import appleLogo from "../assets/icons/apple-logo.svg";
import googlePlay from "../assets/icons/google-play.svg";
import mobilePhone from "../assets/images/mobile-phone-img.png";

const DownloadAppSection = () => {
  return (
    <>
      <section>
        <div className="xl:flex xl:justify-center xl:items-center xl:gap-32 px-4 md:px-6 lg:px-10 xl:px-24 py-20">
          <div className="flex flex-col w-full xl:w-fit xl:h-fit justify-center items-center gap-16">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-4 text-primary">
                <h2 className="font-semibold text-4xl xl:text-5xl xl:leading-snug">
                  The Official Shiloh Word Chapel App
                </h2>
                <p>Available for download on both apple and android devices</p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-center text-primary">
                  <div className="w-[54px] h-[54px] rounded-[13px] flex justify-center items-center shadow-3xl">
                    <img src={crossIcon} alt="Cross Icon" />
                  </div>
                  <p>Fully Equipped Bible with daily verses</p>
                </div>
                <div className="flex gap-4 items-center text-primary">
                  <div className="w-[54px] h-[54px] rounded-[13px] flex justify-center items-center shadow-3xl">
                    <img src={streamIcon} alt="Stream Icon" />
                  </div>
                  <p>Live content</p>
                </div>
                <div className="flex gap-4 items-center text-primary">
                  <div className="w-[54px] h-[54px] rounded-[13px] flex justify-center items-center shadow-3xl">
                    <img
                      src={playButtonArrowhead}
                      alt="Play Button Arrowhead Icon"
                    />
                  </div>
                  <p>Exclusive Shiloh World Chapel Content</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <button className="flex gap-3 w-[196px] xl:w-[255px] h-[50px] xl:h-[58px] items-center justify-center rounded-[13px] shadow-3xl hover:-translate-y-2 hover:duration-1000">
                <img
                  className="w-[25px] xl:w-[34px] h-[25px] xl:h-[34px]"
                  src={appleLogo}
                  alt="Apple Logo"
                />
                <div className="flex flex-col gap-1 text-primary text-left text-xs xl:text-base">
                  <p>Available on</p>
                  <h3 className="font-semibold">APPLE APP STORE</h3>
                </div>
              </button>
              <button className="flex gap-3 w-[196px] xl:w-[255px] h-[50px] xl:h-[58px] items-center justify-center rounded-[13px] shadow-3xl hover:-translate-y-2 hover:duration-1000">
                <img
                  className="w-[25px] xl:w-[34px] h-[25px] xl:h-[34px]"
                  src={googlePlay}
                  alt="Google Play Logo"
                />
                <div className="flex flex-col gap-1 text-primary text-left text-xs xl:text-base">
                  <p>Available on</p>
                  <h3 className="font-semibold">GOOGLE PLAY STORE</h3>
                </div>
              </button>
            </div>
          </div>
          <img
            src={mobilePhone}
            alt="Mobile Phone Image"
            className="hidden xl:block xl:w-[518px] xl:h-[681px] xl:object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default DownloadAppSection;
