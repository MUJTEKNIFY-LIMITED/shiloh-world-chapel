import crossIcon from "../../assets/icons/cross-icon.svg";
import streamIcon from "../../assets/icons/stream-icon.svg";
import playButtonArrowhead from "../../assets/icons/play-button-arrowhead.svg";
import appleLogo from "../../assets/icons/apple-logo.svg";
import googlePlay from "../../assets/icons/google-play.svg";
import mobilePhone from "../../assets/images/mobile-phone-img.png";

const DownloadAppSection = () => {
  return (
    <>
      <section className="lg:flex lg:justify-center lg:items-center lg:gap-10 xl:gap-24 mx-4 lg:mx-24 my-32 lg:my-72">
        <div className="flex flex-col w-full h-full xl:w-fit justify-center gap-20">
          <div className="flex flex-col gap-2 text-primary">
            <h2 className="font-semibold text-4xl xl:text-6xl">
              The Official Shiloh Word Chapel App
            </h2>
            <p>Available for download on both apple and android devices</p>
          </div>
          <div className="flex flex-col gap-6 w-fit">
            <div className="flex gap-4 items-center text-primary">
              <div className="w-[54px] h-[54px] rounded-[13px] flex justify-center items-center shadow-5xl">
                <img src={crossIcon} alt="Cross Icon" />
              </div>
              <p>Fully Equipped Bible with daily verses</p>
            </div>
            <div className="flex gap-4 items-center text-primary">
              <div className="w-[54px] h-[54px] rounded-[13px] flex justify-center items-center shadow-5xl">
                <img src={streamIcon} alt="Stream Icon" />
              </div>
              <p>Live content</p>
            </div>
            <div className="flex gap-4 items-center text-primary">
              <div className="w-[54px] h-[54px] rounded-[13px] flex justify-center items-center shadow-5xl">
                <img
                  src={playButtonArrowhead}
                  alt="Play Button Arrowhead Icon"
                />
              </div>
              <p>Exclusive Shiloh World Chapel Content</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex gap-3 w-[196px] xl:w-[255px] h-[50px] xl:h-[58px] items-center rounded-[13px] p-[12px] shadow-5xl hover:-translate-y-2 hover:duration-1000">
              <img
                className="w-[25px] xl:w-[34px] h-[25px] xl:h-[34px]"
                src={appleLogo}
                alt="Apple Logo"
              />
              <div className="flex flex-col text-primary text-left text-xs xl:text-base">
                <p>Available on</p>
                <h3 className="font-semibold">APPLE APP STORE</h3>
              </div>
            </button>
            <button className="flex gap-3 w-[196px] xl:w-[255px] h-[50px] xl:h-[58px] items-center rounded-[13px] p-[12px] shadow-5xl hover:-translate-y-2 hover:duration-1000">
              <img
                className="w-[25px] xl:w-[34px] h-[25px] xl:h-[34px]"
                src={googlePlay}
                alt="Google Play Logo"
              />
              <div className="flex flex-col text-primary text-left text-xs xl:text-base">
                <p>Available on</p>
                <h3 className="font-semibold">GOOGLE PLAY STORE</h3>
              </div>
            </button>
          </div>
        </div>
        <img
          src={mobilePhone}
          alt="Mobile Phone Image"
          className="hidden lg:block lg:w-[518px] lg:h-[681px] lg:object-cover"
        />
      </section>
    </>
  );
};

export default DownloadAppSection;
