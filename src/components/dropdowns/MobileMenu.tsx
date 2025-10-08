import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Handle smooth mount/unmount transition
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 1000); // match duration
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  // Click outside closes menu
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

  if (!isVisible) return null;

  return (
    <div
      ref={ref}
      data-open={isOpen}
      className={`bg-white w-[90%] h-[348px] absolute top-28 left-0 mx-[5%] flex flex-col rounded-[20px] px-[34px] py-[30px] gap-4 font-galano text-[16px] lg:hidden shadow-xl
        transition-all duration-1000 ease-out
        ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }
      `}
      style={{ zIndex: 100 }}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-[700] transition-all duration-1000"
            : "text-black hover:text-primary transition-all duration-1000"
        }
        onClick={onClose}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-[700] transition-all duration-1000"
            : "text-black hover:text-primary transition-all duration-1000"
        }
        onClick={onClose}
      >
        About
      </NavLink>

      <NavLink
        to="/foundation"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-[700] transition-all duration-1000"
            : "text-black hover:text-primary transition-all duration-1000"
        }
        onClick={onClose}
      >
        Foundation Needs
      </NavLink>

      <NavLink
        to="/partnerships"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-[700] transition-all duration-1000"
            : "text-black hover:text-primary transition-all duration-1000"
        }
        onClick={onClose}
      >
        Partnerships & Donations
      </NavLink>

      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-[700] transition-all duration-1000"
            : "text-black hover:text-primary transition-all duration-1000"
        }
        onClick={onClose}
      >
        Gallery
      </NavLink>

      <NavLink
        to="/sermons"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-[700] transition-all duration-1000"
            : "text-black hover:text-primary transition-all duration-1000"
        }
        onClick={onClose}
      >
        Sermons
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-[700] transition-all duration-1000"
            : "text-black hover:text-primary transition-all duration-1000"
        }
        onClick={onClose}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default MobileMenu;
