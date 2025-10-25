import facebookIcon from "../../assets/icons/social-icons/blue-social-icons/blue-facebook-icon.svg";
import instagramIcon from "../../assets/icons/social-icons/blue-social-icons/blue-instagram-icon.svg";
import twitterIcon from "../../assets/icons/social-icons/blue-social-icons/blue-twitter-icon.svg";
import youtubeIcon from "../../assets/icons/social-icons/blue-social-icons/blue-youtube-icon.svg";
import callIcon from "../../assets/icons/call.svg";
import mailIcon from "../../assets/icons/mail.svg";
import locationPinIcon from "../../assets/icons/location-pin-icon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary flex flex-col gap-10 xl:gap-32 pt-16 pb-6 text-white">
        <div className="flex flex-col xl:flex-row gap-16 mx-4 xl:mx-16 xl:justify-between">
          <div className="flex flex-col gap-6">
            <h5 className="font-bold text-3xl">Shiloh Word Chapel</h5>
            <p className="xl:max-w-md">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat
              blandit purus ac tempus. Nam elementum est ornare enim consequat,
              quis rutrum tortor pharetra. Fusce vitae nibh
            </p>
            <div className="flex gap-4">
              <Link
                to={"#"}
                className="w-[35px] h-[35px] rounded-[25px] bg-white flex items-center justify-center hover:bg-gray-300 transition-all duration-1000"
              >
                <img
                  className="w-[15px] h-[15px]"
                  src={facebookIcon}
                  alt="Facebook Icon"
                />
              </Link>
              <Link
                to={"#"}
                className="w-[35px] h-[35px] rounded-[25px] bg-white flex items-center justify-center hover:bg-gray-300 transition-all duration-1000"
              >
                <img
                  className="w-[15px] h-[15px]"
                  src={instagramIcon}
                  alt="Instagram Icon"
                />
              </Link>
              <Link
                to={"#"}
                className="w-[35px] h-[35px] rounded-[25px] bg-white flex items-center justify-center hover:bg-gray-300 transition-all duration-1000"
              >
                <img
                  className="w-[15px] h-[15px]"
                  src={twitterIcon}
                  alt="Twitter Icon"
                />
              </Link>
              <Link
                to={"#"}
                className="w-[35px] h-[35px] rounded-[25px] bg-white flex items-center justify-center hover:bg-gray-300 transition-all duration-1000"
              >
                <img
                  className="w-[15px] h-[15px]"
                  src={youtubeIcon}
                  alt="Youtube Icon"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-fit">
            <h6 className="text-2xl font-bold">Our Support</h6>
            <div className="flex flex-col gap-4">
              <Link to={"#"}>Private Policies</Link>
              <Link to={"#"}>Donate Now</Link>
              <Link to={"#"}>Become A Volunteer</Link>
              <Link to={"#"}>Careers</Link>
              <Link to={"#"}>Partnerships</Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h6 className="text-2xl font-bold">Contact</h6>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <div className="w-[35px] h-[35px] rounded-[25px] bg-white flex items-center justify-center">
                  <img src={callIcon} alt="Call Icon" />
                </div>
                <Link to={"+07030000004"}>08131978946</Link>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-[35px] h-[35px] rounded-[25px] bg-white flex items-center justify-center">
                  <img src={mailIcon} alt="Mail Icon" />
                </div>
                <Link to={"shilohworldchapel.org/index.html"}>
                  samueliykejesus@gmail.com
                </Link>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-[35px] h-[35px] rounded-[25px] bg-white flex items-center justify-center">
                  <img src={locationPinIcon} alt="Location Pin Icon" />
                </div>
                <p className="max-w-xs md:max-w-full xl:max-w-xs">
                  ALONG NEW KABUSA EXPRESS ROAD,APO MECHANIC VILLAGE,ABUJA.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 justify-center text-center">
          <h6 className="font-bold">
            Powered By MUJTEKNIFY
          </h6>
          <hr className="w-full h-[0.5px]" />
          <div className="flex flex-col xl:flex-row xl:justify-between xl:px-16 xl:py-6 gap-8">
            <p>
              Copyright © SHILOH WORD CHAPEL. All Rights Reserved by{" "}
              <span className="underline">SHILOH</span>
            </p>
            <div className="flex gap-2 justify-center items-center">
              <p>Terms And Conditions </p>
              <hr className="w-6 h-[0.5px] rotate-90" />
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
