import Hero from "../components/Hero";
import { accounts } from "../assets/data/accounts-data";
import flutterwaveIcon from "../assets/icons/flutterwave-icon.svg";
import Footer from "../components/Footer";

const Partnerships = () => {
  return (
    <>
      <Hero />
      <section className="h-fit bg-white flex flex-col gap-12 xl:gap-20 mt-16 mb-24 xl:mb-32 mx-4">
        <div className="flex flex-col gap-4 text-center">
          <h5 className="text-xl text-primary font-semibold">OUR ACCOUNTS</h5>
          <p className="text-3xl font-trajan">Donate To Shiloh Foundation</p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {accounts.map((account) => (
            <div
              key={account.account}
              className="flex flex-col gap-2 text-center rounded-[16px] py-[21px] px-[22px] border-[3px] border-secondary"
            >
              <h6 className="text-xl text-primary font-semibold">
                {account.bank}
              </h6>
              <p className="font-semibold text-3xl text-gray-950 leading-normal">
                {account.account}
              </p>
            </div>
          ))}
        </div>
        <button className="flex flex-col xl:flex-row mt-6 xl:mx-auto text-center items-center xl:justify-center rounded-[16px] py-[21px] xl:w-[663px] xl:h-[80px] border-[3px] border-secondary xl:border-primary xl:shadow-inner hover:scale-105 transition-all duration-1000">
          <p className="font-semibold text-3xl text-gray-950">
            Donate With Flutterwave
          </p>
          <img
            src={flutterwaveIcon}
            alt="Flutterwave Icon"
            className="w-[63px]"
          />
        </button>
      </section>
      <Footer />
    </>
  );
};

export default Partnerships;
