import italianFlagIcon from "../../assets/icons/flags/italian-flag-icon.svg";
import russianFlagIcon from "../../assets/icons/flags/russian-flag-icon.svg";
import frenchFlagIcon from "../../assets/icons/flags/french-flag-icon.svg";
import germanFlagIcon from "../../assets/icons/flags/german-flag-icon.svg";
import spanishFlagIcon from "../../assets/icons/flags/spanish-flag-icon.svg";
import { useEffect, useRef } from "react";

type LanguageOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LanguageOverlay = ({ isOpen, onClose }: LanguageOverlayProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div
      ref={ref}
      data-open={isOpen}
      className={`absolute top-20 -left-6 flex flex-col bg-white w-[163px] h-[260px] rounded-[20px] px-6 justify-center gap-4 font-galano shadow-2xl z-30
        transition-all duration-1000 ease-out transform origin-top
        ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
      `}
    >
      <div className="flex gap-3 items-center hover:text-primary cursor-pointer transition-all">
        <img src={italianFlagIcon} alt="Italian" className="w-5 h-5" />
        <p>ITA</p>
      </div>

      <div className="flex gap-3 items-center hover:text-primary cursor-pointer transition-all">
        <img src={russianFlagIcon} alt="Russian" className="w-5 h-5" />
        <p>RUS</p>
      </div>

      <div className="flex gap-3 items-center hover:text-primary cursor-pointer transition-all">
        <img src={spanishFlagIcon} alt="Spanish" className="w-5 h-5" />
        <p>ESP</p>
      </div>

      <div className="flex gap-3 items-center hover:text-primary cursor-pointer transition-all">
        <img src={germanFlagIcon} alt="German" className="w-5 h-5" />
        <p>GER</p>
      </div>

      <div className="flex gap-3 items-center hover:text-primary cursor-pointer transition-all">
        <img src={frenchFlagIcon} alt="French" className="w-5 h-5" />
        <p>FRA</p>
      </div>
    </div>
  );
};

export default LanguageOverlay;
