import measuredBarIcon from "../assets/icons/measured-bar-icon.svg";
import childrenBgImg from "../assets/images/donation-backgrounds/children-bg-img.jpg";
import donationBgImg from "../assets/images/donation-backgrounds/donation-bg-img.jpg";
import homelessBgImg from "../assets/images/donation-backgrounds/homeless-bg-img.jpg";
import roadBgImg from "../assets/images/donation-backgrounds/road-bg-img.png";
import waterBgImg from "../assets/images/donation-backgrounds/water-bg-img.png";
import hospitalBgImg from "../assets/images/donation-backgrounds/hospital-bg-img.png";
import Button from "./ui/Button.tsx";
import { useLocation } from "react-router-dom";

const CharitySection = () => {
  const location = useLocation();

  return (
    <>
      <section className="h-fit flex flex-col gap-10 lg:gap-28 px-4 md:px-6 lg:px-10 xl:px-24">
        {location.pathname === "/" ? (
          <div className="flex flex-col gap-4 text-center">
            <h5 className="text-xl text-primary font-semibold">CHARITY</h5>
            <p className="text-3xl font-trajan">Shiloh Samaritan Foundation</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 text-center">
            <h5 className="text-xl text-primary font-semibold">FOUNDATION</h5>
            <p className="text-3xl font-trajan">The Needs Of Our Foundation</p>
          </div>
        )}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-20 xl:gap-20 px-6 md:px-10 xl:px-0">
          <div
            style={{ backgroundImage: `url(${childrenBgImg})` }}
            className="relative flex flex-col gap-4 bg-cover bg-center w-full xl:w-[360px] h-[520px] rounded-[36px] px-[30px] py-[34px] shadow-4xl"
          >
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-t from-black/90 to-white/0 z-0"></div>
            <div className="relative z-10 flex flex-col justify-end h-full">
              <div className="flex flex-col gap-6 items-center">
                <div className="flex flex-col gap-4">
                  <div className="text-white text-center">
                    <h6 className="font-bold text-xl">
                      Education For Poor Children
                    </h6>
                    <p className="mt-2 text-xs">
                      Our aim is to take the children out of the street and give
                      them a better education that will secure their future.
                    </p>
                  </div>
                  <img src={measuredBarIcon} alt="Measured Bar Icon" />
                  <p className="text-white text-center text-base">
                    <b>$5,000.00</b> out of <b>$500,000.00</b> Raised
                  </p>
                </div>
                <Button variant="secondary">Donate Now</Button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${donationBgImg})` }}
            className="relative flex flex-col gap-4 bg-cover bg-center w-full xl:w-[360px] h-[520px] rounded-[36px] px-[30px] py-[34px] shadow-4xl"
          >
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-t from-black/90 to-white/0 z-0"></div>
            <div className="relative z-10 flex flex-col justify-end h-full">
              <div className="flex flex-col gap-6 items-center">
                <div className="flex flex-col gap-4">
                  <div className="text-white text-center">
                    <h6 className="font-bold text-xl">Donation To The Poor</h6>
                    <p className="mt-2 text-xs">
                      Our aim is to take the children out of the street and give
                      them a better education that will secure their future.
                    </p>
                  </div>
                  <img src={measuredBarIcon} alt="Measured Bar Icon" />
                  <p className="text-white text-center text-base">
                    <b>$5,000.00</b> out of <b>$500,000.00</b> Raised
                  </p>
                </div>
                <Button variant="secondary">Donate Now</Button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${homelessBgImg})` }}
            className="relative flex flex-col gap-4 bg-cover bg-center w-full xl:w-[360px] h-[520px] rounded-[36px] px-[30px] py-[34px] shadow-4xl"
          >
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-t from-black/90 to-white/0 z-0"></div>
            <div className="relative z-10 flex flex-col justify-end h-full">
              <div className="flex flex-col gap-6 items-center">
                <div className="flex flex-col gap-4">
                  <div className="text-white text-center">
                    <h6 className="font-bold text-xl">Help To The Homeless</h6>
                    <p className="mt-2 text-xs">
                      Our aim is to take the children out of the street and give
                      them a better education that will secure their future.
                    </p>
                  </div>
                  <img src={measuredBarIcon} alt="Measured Bar Icon" />
                  <p className="text-white text-center text-base">
                    <b>$5,000.00</b> out of <b>$500,000.00</b> Raised
                  </p>
                </div>
                <Button variant="secondary">Donate Now</Button>
              </div>
            </div>
          </div>
          {location.pathname === "/foundation" && (
            <>
              <div
                style={{ backgroundImage: `url(${roadBgImg})` }}
                className="hidden xl:relative xl:flex xl:flex-col xl:gap-4 xl:bg-cover xl:bg-center w-full xl:w-[360px] xl:h-[520px] xl:rounded-[36px] xl:px-[30px] xl:py-[34px] xl:shadow-4xl"
              >
                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-t from-black/90 to-white/0 z-0"></div>
                <div className="relative z-10 flex flex-col justify-end h-full">
                  <div className="flex flex-col gap-6 items-center">
                    <div className="flex flex-col gap-4">
                      <div className="text-white text-center">
                        <h6 className="font-bold text-xl">
                          Good Road Network
                        </h6>
                        <p className="mt-2 text-xs">
                          Our aim is to take the children out of the street and
                          give them a better education that will secure their
                          future.
                        </p>
                      </div>
                      <img src={measuredBarIcon} alt="Measured Bar Icon" />
                      <p className="text-white text-center text-base">
                        <b>$5,000.00</b> out of <b>$500,000.00</b> Raised
                      </p>
                    </div>
                    <Button variant="secondary">Donate Now</Button>
                  </div>
                </div>
              </div>
              <div
                style={{ backgroundImage: `url(${waterBgImg})` }}
                className="hidden xl:relative xl:flex xl:flex-col xl:gap-4 xl:bg-cover xl:bg-center w-full xl:w-[360px] xl:h-[520px] xl:rounded-[36px] xl:px-[30px] xl:py-[34px] xl:shadow-4xl"
              >
                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-t from-black/90 to-white/0 z-0"></div>
                <div className="relative z-10 flex flex-col justify-end h-full">
                  <div className="flex flex-col gap-6 items-center">
                    <div className="flex flex-col gap-4">
                      <div className="text-white text-center">
                        <h6 className="font-bold text-xl">
                          Access To Pure Water
                        </h6>
                        <p className="mt-2 text-xs">
                          Our aim is to take the children out of the street and
                          give them a better education that will secure their
                          future.
                        </p>
                      </div>
                      <img src={measuredBarIcon} alt="Measured Bar Icon" />
                      <p className="text-white text-center text-base">
                        <b>$5,000.00</b> out of <b>$500,000.00</b> Raised
                      </p>
                    </div>
                    <Button variant="secondary">Donate Now</Button>
                  </div>
                </div>
              </div>
              <div
                style={{ backgroundImage: `url(${hospitalBgImg})` }}
                className="hidden xl:relative xl:flex xl:flex-col xl:gap-4 xl:bg-cover xl:bg-center w-full xl:w-[360px] xl:h-[520px] xl:rounded-[36px] xl:px-[30px] xl:py-[34px] xl:shadow-4xl"
              >
                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-t from-black/90 to-white/0 z-0"></div>
                <div className="relative z-10 flex flex-col justify-end h-full">
                  <div className="flex flex-col gap-6 items-center">
                    <div className="flex flex-col gap-4">
                      <div className="text-white text-center">
                        <h6 className="font-bold text-xl">
                          Hospital Bills And Equipment
                        </h6>
                        <p className="mt-2 text-xs">
                          Our aim is to take the children out of the street and
                          give them a better education that will secure their
                          future.
                        </p>
                      </div>
                      <img src={measuredBarIcon} alt="Measured Bar Icon" />
                      <p className="text-white text-center text-base">
                        <b>$5,000.00</b> out of <b>$500,000.00</b> Raised
                      </p>
                    </div>
                    <Button variant="secondary">Donate Now</Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default CharitySection;
