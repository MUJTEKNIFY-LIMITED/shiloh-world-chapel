import unionLeft1 from "../../assets/images/Union1.png";
import unionRight1 from "../../assets/images/Union2.png";
import unionLeft2 from "../../assets/images/Union4.png";
import unionRight2 from "../../assets/images/Union3.png";
import manOnBlue from "../../assets/images/man-on-blue.jpg";
import { useState } from "react";
import PrayerRequestOverlay from "../overlays/PrayerRequestOverlay";

const PrayerRequestSection = () => {
  const [isPrayerRequestOpen, setIsPrayerRequestOpen] = useState(false);

  const togglePrayerRequest = () => {
    setIsPrayerRequestOpen((open) => !open);
  };

  return (
    <>
      <section className="h-fit bg-white flex flex-col lg:flex-row lg:items-center gap-20 xl:gap-14 pb-24 lg:pb-60 mt-40 lg:mt-80 mx-4 md:mx-6 lg:mx-10 xl:mx-24">
        <div className="relative flex h-[399.81px] lg:h-[521.27px] lg:w-[523px]">
          <img
            src={`${window.innerWidth < 1024 ? unionLeft1 : unionLeft2}`}
            alt=""
            className="absolute -left-[4.5%] lg:-left-[6%] -top-[4.5%] lg:-top-[3.5%]"
          />
          <img
            src={manOnBlue}
            alt=""
            className="absolute top-[25.5%] lg:top-[24%] left-[24%] w-[200px] lg:w-[271px] h-[200px] lg:h-[269px] rounded-[20px] shadow-5xl"
          />
          <img
            src={`${window.innerWidth < 1024 ? unionRight1 : unionRight2}`}
            alt=""
            className="absolute -right-[4%] lg:-right-[11.5%] -bottom-[18.5%] lg:-bottom-[14%]"
          />
        </div>
        <div className="flex flex-col gap-6 lg:gap-10">
          <div className="flex flex-col w-fit">
            <h5 className="text-primary font-semibold text-[40px] lg:text-[60px] max-w-[35rem]">
              Need Prayer? We’re Here For You
            </h5>
            <p className="max-w-[22.8rem] lg:max-w-[36rem]">
              No matter what you're facing, you're not alone. Share your request
              and our prayer team will lift you up.
            </p>
          </div>
          <button
            onClick={togglePrayerRequest}
            className="flex items-center justify-center font-bold bg-primary text-white w-[162px] h-[51px] px-[29px] py-[20px] rounded-[33px] shadow-5xl hover:bg-white hover:text-primary transition-all duration-1000"
          >
            Book Now
          </button>
          <PrayerRequestOverlay
            isOpen={isPrayerRequestOpen}
            onClose={() => setIsPrayerRequestOpen(false)}
          ></PrayerRequestOverlay>
        </div>
      </section>
    </>
  );
};

export default PrayerRequestSection;
