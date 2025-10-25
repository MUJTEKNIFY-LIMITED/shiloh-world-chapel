import Hero from "../components/sections/Hero";
import callIcon from "../assets/icons/call.svg";
import mailIcon from "../assets/icons/mail.svg";
import locationPinIcon from "../assets/icons/location-pin-icon.svg";
import manOnWhite from "../assets/images/man-on-white2.jpg";
import Footer from "../components/sections/Footer";
import Form from "../components/Form";

const Contact = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-20 py-28 text-center bg-primary">
          <div className="flex flex-col gap-4 text-white">
            <h5 className="text-xl font-semibold">CONTACT US</h5>
            <p className="text-3xl font-trajan">Let's Connect</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-center lg:px-24 gap-24">
            <div className="flex flex-col gap-8 items-center w-full lg:w-[30%]">
              <div className="w-[135px] h-[135px] rounded-[67.5px] bg-white flex items-center justify-center">
                <img
                  src={callIcon}
                  alt="Call Icon"
                  className="w-[50px] h-[50px]"
                />
              </div>
              <div className="flex flex-col gap-1 text-center text-white">
                <h5 className="font-semibold">PHONE NUMBER</h5>
                <p>
                  +2347030000004 <br /> +2348131978946
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-center w-full lg:w-[30%]">
              <div className="w-[135px] h-[135px] rounded-[67.5px] bg-white flex items-center justify-center">
                <img
                  src={mailIcon}
                  alt="Call Icon"
                  className="w-[50px] h-[50px]"
                />
              </div>
              <div className="flex flex-col gap-1 text-center text-white">
                <h5 className="font-semibold">EMAIL ADDRESS</h5>
                <p>samueliykejesus@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-center w-full lg:w-[30%]">
              <div className="w-[135px] h-[135px] rounded-[67.5px] bg-white flex items-center justify-center">
                <img
                  src={locationPinIcon}
                  alt="Call Icon"
                  className="w-[50px] h-[50px]"
                />
              </div>
              <div className="flex flex-col gap-1 text-center text-white">
                <h5 className="font-semibold">OUR LOCATION</h5>
                <p>
                  ALONG NEW KABUSA EXPRESS ROAD, APO MECHANIC VILLAGE,ABUJA.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse gap-20 lg:gap-10 px-4 lg:px-24 pt-16 lg:pt-48 pb-20 lg:pb-36 items-center bg-white">
          <img
            src={manOnWhite}
            alt="Photo of a man on white"
            className="w-[408px] lg:w-[505px] h-[391px] lg:h-[483px] rounded-[15px] shadow-5xl object-cover"
          />
          <div className="flex flex-col gap-6 w-full lg:w-fit">
            <div className="flex flex-col">
              <h2 className="font-semibold text-primary text-3xl">
                Let's Talk!
              </h2>
              <p className="text-tertiary">
                We are open to your views 24 hours.
              </p>
            </div>
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
