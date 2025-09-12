import auctionLogo from "../assets/icons/auction.svg";
import visionLogo from "../assets/icons/vision.svg";
import goalLogo from "../assets/icons/goal.svg";

const MissionSection = () => {
  return (
    <>
      <section className="h-fit lg:h-screen bg-white flex flex-col text-center text-base gap-20 px-6 pb-24 lg:pb-48">
        <div className="flex flex-col gap-4">
          <h5 className="text-xl text-primary font-semibold">SWC MINISTRY</h5>
          <p className="text-3xl font-trajan">The Arena Of Fire And Favour</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-28 lg:gap-10">
          <div className="flex flex-col gap-4 text-center items-center">
            <img
              className="w-[60px] h-[60px]"
              src={auctionLogo}
              alt="Auction"
            />
            <div className="flex flex-col gap-2">
              <h6 className="font-bold text-primary text-2xl">Our Mandate</h6>
              <p className="text-tertiary text-center text-base">
                Raise Me A Generation That Will Change Nations And Posses The
                Land Through The Acts Of Faith (Hebrew 11)
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-center items-center">
            <img className="w-[60px] h-[60px]" src={visionLogo} alt="Vision" />
            <div className="flex flex-col gap-2">
              <h6 className="font-bold text-primary text-2xl">Our Vision</h6>
              <p className="text-tertiary text-center text-base">
                Soul, soul, soul for eternity....
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-center items-center">
            <img className="w-[60px] h-[60px]" src={goalLogo} alt="Goal" />
            <div className="flex flex-col gap-2">
              <h6 className="font-bold text-primary text-2xl">Our Mission</h6>
              <p className="text-tertiary text-center text-base">
                To spread the good news of love, healing and deliverance all
                over the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionSection;
