import arrowRightIcon from "../assets/icons/arrows/arrow-right-icon.svg";
import arrowLeftIcon from "../assets/icons/arrows/arrow-left-icon.svg";

type PageinationProps = {
  activePage: number;
  setActivePage: (page: number) => void;
};

import { books } from "../assets/data/book-data";

const Pageination = ({ activePage, setActivePage }: PageinationProps) => {
  return (
    <>
      <div className="flex justify-center gap-8">
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
        <div className="flex gap-4">
          {(() => {
            const total = books.length;
            let start = 1;
            let end = 4;
            if (activePage > 2 && total > 4) {
              start = Math.max(1, activePage - 1);
              end = Math.min(total, start + 3);
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
            setActivePage(
              activePage < books.length ? activePage + 1 : books.length
            )
          }
          disabled={activePage === books.length}
        >
          <img
            className={`transition-all duration-300 ${
              activePage === books.length
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
