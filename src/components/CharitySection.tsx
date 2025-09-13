import measuredBarIcon from "../assets/icons/measured-bar-icon.svg";
import childrenBgImg from "../assets/images/children-bg-img.jpg";
import donationBgImg from "../assets/images/donation-bg-img.jpg";
import homelessBgImg from "../assets/images/homeless-bg-img.jpg";
import Button from "./ui/Button.tsx";

const CharitySection = () => {
  return (
    <>
      <section className="h-fit lg:h-screen flex flex-col gap-20 px-8 xl:px-24">
        <div className="flex flex-col gap-4 text-center">
          <h5 className="text-xl text-primary font-semibold">CHARITY</h5>
          <p className="text-3xl font-trajan">Shiloh Samaritan Foundation</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-10 xl:gap-20">
          <div
            style={{ backgroundImage: `url(${childrenBgImg})` }}
            className="relative flex flex-col gap-4 bg-cover bg-center w-full h-[520px] rounded-[36px] px-[30px] py-[34px] shadow-2xl"
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
            className="relative flex flex-col gap-4 bg-cover bg-center w-full h-[520px] rounded-[36px] px-[30px] py-[34px] shadow-2xl"
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
            className="relative flex flex-col gap-4 bg-cover bg-center w-full h-[520px] rounded-[36px] px-[30px] py-[34px] shadow-2xl"
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
        </div>
      </section>
    </>
  );
};

export default CharitySection;
