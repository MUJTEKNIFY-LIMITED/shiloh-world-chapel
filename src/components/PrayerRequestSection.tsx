// import Button from "./ui/Button.tsx";
import whatsappBgImg from "../assets/images/whatsapp-bg-img.jpg";
import manOnBlue from "../assets/images/man-on-blue.jpg";
import manOnWhite from "../assets/images/man-on-white.jpg";

const PrayerRequestSection = () => {
  return (
    <>
      <section className="h-fit bg-white flex flex-col gap-20 xl:gap-14 px-4 md:px-10 xl:px-20 pb-24">
        <div>
          <div className="relative">
            <div className="relative z-10 rounded-2xl shadow-xl w-64">
              <img src={manOnBlue} className="rounded-2xl" />
            </div>
            <div className="absolute top-0 -left-16 rotate-[-8deg] rounded-2xl shadow-xl w-40 custom-clip">
              <img src={whatsappBgImg} className="rounded-2xl" />
            </div>
            <div className="absolute -bottom-10 -right-16 rotate-6 rounded-2xl shadow-xl w-40 custom-clip">
              <img src={manOnWhite} className="rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrayerRequestSection;
