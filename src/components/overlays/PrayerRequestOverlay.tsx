import cancelIcon from "../../assets/icons/cancel-icon.svg";
import Form from "../Form";
import { useEffect, useRef } from "react";

type PrayerRequestOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PrayerRequestOverlay = ({
  isOpen,
  onClose,
}: PrayerRequestOverlayProps) => {
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

  // Prevent background scrolling when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden={!isOpen}
        onClick={onClose}
        className={`fixed inset-0 bg-black/20
             z-[90] transition-opacity duration-200 ${
               isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
             }`}
      />

      <div
        data-open={isOpen}
        className={`fixed top-0 left-0 flex flex-col max-w-[calc(100%-2rem)] lg:w-[calc(100%-33rem)] h-[100%] gap-4 mx-[1rem] lg:mx-[16.5rem] px-8 lg:px-28 py-8 lg:py-20 rounded-[45px] z-[1000] bg-white overflow-y-auto overflow-x-hidden scrollbar-hide ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col lg:flex-row-reverse gap-6 lg:justify-between lg:items-center">
          <div
            role="button"
            tabIndex={0}
            onClick={onClose}
            onKeyDown={(e) => e.key === "Escape" && onClose()}
            className="w-[47px] h-[47px] p-[11px] flex items-center justify-center rounded-[10px] border-2 border-fifth cursor-pointer hover:scale-110 transition-all duration-1000"
          >
            <img src={cancelIcon} alt="Cancel Icon" />
          </div>
          <div className="flex flex-col w-fit">
            <h5 className="text-primary font-semibold text-[36px] max-w-[35rem]">
              Prayer Request Data Form
            </h5>
            <p className="text-tertiary max-w-[22.8rem] lg:max-w-[36rem]">
              Kindly fill in your details
            </p>
          </div>
        </div>
        <Form />
      </div>
    </>
  );
};

export default PrayerRequestOverlay;
