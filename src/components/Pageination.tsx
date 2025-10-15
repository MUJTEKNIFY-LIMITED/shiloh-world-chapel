import arrowRightIcon from "../assets/icons/arrows/arrow-right-icon.svg";
import arrowLeftIcon from "../assets/icons/arrows/arrow-left-icon.svg";
import { useLocation } from "react-router-dom";

type PageinationProps = {
  activePage: number;
  setActivePage: (page: number) => void;
  total: number;
  perPage: number;
};

const Pageination = ({
  activePage,
  setActivePage,
  total,
  perPage,
}: PageinationProps) => {
  const location = useLocation();

  // Calculate total pages
  const totalPages = Math.ceil(total / perPage);

  return (
    <>
      <div
        className={`justify-center gap-8 ${
          location.pathname === "/" ? "flex lg:hidden" : "flex"
        }`}
      >
        <button
          onClick={() => setActivePage(activePage > 1 ? activePage - 1 : 1)}
          disabled={activePage === 1}
        >
          <img
            className={`transition-all duration-300 ${
              activePage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:-translate-x-1"
            }`}
            src={arrowLeftIcon}
            alt="Arrow Left Icon"
          />
        </button>
        <div className="flex gap-3">
          {(() => {
            let start = 1;
            let end = Math.min(totalPages, 4);
            if (activePage > 2 && totalPages > 4) {
              start = Math.max(1, activePage - 1);
              end = Math.min(totalPages, start + 3);
              if (end - start < 3) {
                start = Math.max(1, end - 3);
              }
            }
            return Array.from(
              { length: end - start + 1 },
              (_, i) => start + i
            ).map((num) => (
              <button
                key={num}
                className={`w-[40px] h-[40px] px-[16px] py-[13px] rounded-[7px] flex items-center justify-center font-bold text-xl hover:border hover:border-primary transition-all duration-200 shadow-3xl ${
                  activePage === num
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }`}
                onClick={() => setActivePage(num)}
              >
                <p>{num}</p>
              </button>
            ));
          })()}
        </div>
        <button
          onClick={() =>
            setActivePage(activePage < totalPages ? activePage + 1 : totalPages)
          }
          disabled={activePage === totalPages}
        >
          <img
            className={`transition-all duration-300 ${
              activePage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:translate-x-1"
            }`}
            src={arrowRightIcon}
            alt="Arrow Right Icon"
          />
        </button>
      </div>
    </>
  );
};

export default Pageination;
