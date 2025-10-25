import React, { useState } from "react";
import measuredBarIcon from "../../assets/icons/measured-bar-icon.svg";
import { charity } from "../../assets/data/charity-data.ts";
import Button from "../ui/Button.tsx";
import Pageination from "../Pagination.tsx";
import { useLocation } from "react-router-dom";

const CharitySection = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState(1);

  // Responsive pagination: 4 per page on mobile, 9 per page on lg+
  const getCharityPerPage = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      return location.pathname === "/" ? 3 : 9;
    }
    return 3;
  };

  const [charityPerPage, setCharityPerPage] = useState(getCharityPerPage());

  // Update perPage on resize
  React.useEffect(() => {
    const handleResize = () => {
      setCharityPerPage(getCharityPerPage());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ensure activePage valid when per-page or total charity change
  React.useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(charity.length / charityPerPage));
    if (activePage > totalPages) setActivePage(1);
  }, [charityPerPage, charity.length]);

  const startIdx = (activePage - 1) * charityPerPage;
  const endIdx = startIdx + charityPerPage;
  const paginatedCharity = charity.slice(startIdx, endIdx);

  return (
    <>
      <section
        className={`h-fit flex flex-col ${
          location.pathname === "/"
            ? "mt-44 lg:mt-52 mx-4 lg:mx-24 gap-20 lg:gap-28"
            : "gap-12 lg:gap-32"
        }`}
      >
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
        <div
          className={`grid grid-cols-1 xl:grid-cols-3 gap-20 ${
            location.pathname === "/" ? "px-6" : "px-2"
          } md:px-10 xl:px-0`}
        >
          {paginatedCharity.map((charity) => (
            <div
              style={{ backgroundImage: `url(${charity.image})` }}
              className="relative flex flex-col gap-4 bg-cover bg-center w-full xl:w-[360px] h-[520px] rounded-[36px] px-[30px] py-[34px] shadow-4xl"
            >
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-t from-black/90 to-white/0 z-0"></div>
              <div className="relative z-10 flex flex-col justify-end h-full">
                <div className="flex flex-col gap-6 items-center">
                  <div className="flex flex-col gap-4">
                    <div className="text-white text-center">
                      <h6 className="font-bold text-xl">{charity.title}</h6>
                      <p className="mt-2 text-xs">{charity.text}</p>
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
          ))}
        </div>
        {location.pathname === "/" ? null : (
          <Pageination
            activePage={activePage}
            setActivePage={setActivePage}
            total={charity.length}
            perPage={charityPerPage}
          />
        )}
      </section>
    </>
  );
};

export default CharitySection;
