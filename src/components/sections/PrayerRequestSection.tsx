import unionLeft2 from "../../assets/images/Union4.png";
import unionRight2 from "../../assets/images/Union3.png";
import prophetImg from "../../assets/images/new_media/Prophet 1.jpg";
import { useState } from "react";
import PrayerRequestOverlay from "../overlays/PrayerRequestOverlay";

const PrayerRequestSection = () => {
  const [isPrayerRequestOpen, setIsPrayerRequestOpen] = useState(false);

  const togglePrayerRequest = () => {
    setIsPrayerRequestOpen((open) => !open);
  };

  return (
    <>
      <section className="py-16 lg:py-24 bg-white px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Decorative Image Frame */}
          <div className="relative flex items-center justify-center w-full lg:w-1/2 max-w-md aspect-square">
            <img
              src={unionLeft2}
              alt=""
              className="absolute -left-4 -top-4 w-3/4 opacity-40 pointer-events-none"
            />
            <img
              src={prophetImg}
              alt="Prophet I.O Samuel Praying"
              className="relative z-10 w-4/5 h-4/5 object-cover object-top rounded-3xl shadow-2xl border-4 border-[#D9A229]/40"
            />
            <img
              src={unionRight2}
              alt=""
              className="absolute -right-4 -bottom-4 w-3/4 opacity-40 pointer-events-none"
            />
          </div>

          {/* Right Text & Single-line CTA */}
          <div className="flex flex-col gap-6 lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071b65]/5 text-[#071b65] text-xs font-bold font-trajan tracking-widest uppercase w-fit mx-auto lg:mx-0">
              <span>STAND WITH US IN FAITH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-trajan text-[#071b65] leading-tight">
              Need Prayer? We're Here For You
            </h2>

            <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed max-w-lg">
              No matter what difficulty, sickness, or burden you are facing, you are not alone. Share your prayer request and Prophet I.O Samuel and our intercessory team will stand in faith with you.
            </p>

            <div className="pt-2 flex justify-center lg:justify-start">
              <button
                onClick={togglePrayerRequest}
                className="px-8 py-3.5 rounded-full bg-[#071b65] hover:bg-[#0c288d] text-white font-bold text-xs sm:text-sm uppercase tracking-wider font-trajan shadow-xl transition-all whitespace-nowrap"
              >
                REQUEST PRAYER
              </button>
            </div>
          </div>
        </div>

        <PrayerRequestOverlay
          isOpen={isPrayerRequestOpen}
          onClose={() => setIsPrayerRequestOpen(false)}
        />
      </section>
    </>
  );
};

export default PrayerRequestSection;
