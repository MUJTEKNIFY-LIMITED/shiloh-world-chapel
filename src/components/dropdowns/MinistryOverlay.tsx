import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

type MinistryOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MinistryOverlay = ({ isOpen, onClose }: MinistryOverlayProps) => {
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

  // Even when closed, keep the element in DOM briefly for animation
  return (
    <div
      ref={ref}
      data-open={isOpen}
      className={`absolute top-10 bg-white flex flex-col text-left justify-center px-[23px] py-[18px] gap-5 w-[163px] h-[149px] rounded-[20px] shadow-4xl z-20
        transition-all duration-1000 ease-out transform origin-top
        ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }
      `}
    >
      <NavLink
        to="/gallery"
        className="text-gray-800 hover:text-primary transition-all"
      >
        Gallery
      </NavLink>
      <NavLink
        to="/sermons"
        className="text-gray-800 hover:text-primary transition-all"
      >
        Sermons
      </NavLink>
      <NavLink
        to="/partnerships"
        className="text-gray-800 hover:text-primary transition-all"
      >
        Partnerships
      </NavLink>
    </div>
  );
};

export default MinistryOverlay;
