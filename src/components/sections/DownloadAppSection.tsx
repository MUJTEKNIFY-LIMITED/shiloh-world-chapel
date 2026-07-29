import crossIcon from "../../assets/icons/cross-icon.svg";
import streamIcon from "../../assets/icons/stream-icon.svg";
import playButtonArrowhead from "../../assets/icons/play-button-arrowhead.svg";
import appleLogo from "../../assets/icons/apple-logo.svg";
import googlePlay from "../../assets/icons/google-play.svg";
import mobilePhone from "../../assets/images/mobile-phone-img.png";

const DownloadAppSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#f8fafc] px-4 sm:px-6 lg:px-8 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left: Text & Features & Badges */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2 text-center lg:text-left">
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase font-bold text-[#D9A229] tracking-widest font-trajan bg-[#071b65]/5 px-4 py-1.5 rounded-full w-fit mx-auto lg:mx-0">
              MOBILE EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-trajan text-[#071b65] leading-tight">
              The Official Shiloh Word Chapel App
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-sans">
              Stay connected with daily devotionals, live services, prophetic words, and prayer requests on iOS and Android.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-left max-w-md mx-auto lg:mx-0">
            <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#071b65]/10 flex items-center justify-center shrink-0">
                <img src={crossIcon} alt="Cross" className="w-6 h-6 text-[#071b65]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#071b65] font-sans">Complete Holy Bible with daily prophetic verses</span>
            </div>

            <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#071b65]/10 flex items-center justify-center shrink-0">
                <img src={streamIcon} alt="Stream" className="w-6 h-6 text-[#071b65]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#071b65] font-sans">Live streaming & instant prayerline access</span>
            </div>

            <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#071b65]/10 flex items-center justify-center shrink-0">
                <img src={playButtonArrowhead} alt="Play" className="w-5 h-5 text-[#071b65]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#071b65] font-sans">Exclusive sermon archive & testimony videos</span>
            </div>
          </div>

          {/* Store Badges — Single line labels */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#071b65] text-white hover:bg-[#0c288d] transition-all shadow-md">
              <img src={appleLogo} alt="Apple Store" className="w-7 h-7" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-white/70 uppercase tracking-wider font-sans leading-none">Download on</span>
                <span className="text-xs font-bold font-trajan uppercase tracking-wide whitespace-nowrap">App Store</span>
              </div>
            </button>

            <button className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#071b65] text-white hover:bg-[#0c288d] transition-all shadow-md">
              <img src={googlePlay} alt="Google Play" className="w-7 h-7" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-white/70 uppercase tracking-wider font-sans leading-none">Get it on</span>
                <span className="text-xs font-bold font-trajan uppercase tracking-wide whitespace-nowrap">Google Play</span>
              </div>
            </button>
          </div>
        </div>

        {/* Right: Phone Mockup */}
        <div className="w-full lg:w-1/2 flex justify-center max-w-md">
          <img
            src={mobilePhone}
            alt="Shiloh Word Chapel Official App Preview"
            className="w-full max-h-[520px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default DownloadAppSection;
