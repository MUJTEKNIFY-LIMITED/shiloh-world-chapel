import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/icons/chimalogo4.svg";
import hamburgerIcon from "../assets/icons/hamburger-icon.svg";
import britishFlagIcon from "../assets/icons/british-flag-icon.svg";
import italianFlagIcon from "../assets/icons/italian-flag-icon.svg";
import russianFlagIcon from "../assets/icons/russian-flag-icon.svg";
import frenchFlagIcon from "../assets/icons/french-flag-icon.svg";
import germanFlagIcon from "../assets/icons/german-flag-icon.svg";
import spanishFlagIcon from "../assets/icons/spanish-flag-icon.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="relative px-6 lg:px-28 py-4 flex justify-between items-center z-20">
        <img src={logo} alt="Logo" className="w-16 lg:w-28" />

        {/* Mobile Menu Icon */}
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
        >
          <img src={hamburgerIcon} alt="Menu" />
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          ref={dropdownRef}
          className={`bg-white w-[90%] h-[348px] absolute top-28 left-0 mx-[5%] flex flex-col rounded-[20px] px-[34px] py-[30px] gap-4 font-galano text-[16px] ${
            isOpen ? "block" : "hidden"
          } lg:hidden`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-[700] transition-all duration-1000"
                : "hover:text-blue-600 transition-all duration-1000"
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-[700] transition-all duration-1000"
                : "hover:text-blue-600 transition-all duration-1000"
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/foundation"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-[700] transition-all duration-1000"
                : "hover:text-blue-600 transition-all duration-1000"
            }
            onClick={() => setIsOpen(false)}
          >
            Foundation Needs
          </NavLink>
          <NavLink
            to="/partnerships"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-[700] transition-all duration-1000"
                : "hover:text-blue-600 transition-all duration-1000"
            }
            onClick={() => setIsOpen(false)}
          >
            Partnerships & Donations
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-[700] transition-all duration-1000"
                : "hover:text-blue-600 transition-all duration-1000"
            }
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/sermons"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-[700] transition-all duration-1000"
                : "hover:text-blue-600 transition-all duration-1000"
            }
            onClick={() => setIsOpen(false)}
          >
            Sermons
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-[700] transition-all duration-1000"
                : "hover:text-blue-600 transition-all duration-1000"
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 font-galano text-[16px]">
          <NavLink
            to="/"
            className="text-white hover:text-primary transition-all duration-1000"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:text-primary transition-all duration-1000"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/foundation"
            className="text-white hover:text-primary transition-all duration-1000"
            onClick={() => setIsOpen(false)}
          >
            FOUNDATION NEEDS
          </NavLink>
          <NavLink
            to="/partnerships"
            className="text-white flex items-center justify-center transition-all duration-1000 gap-2 group hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            MINISTRY
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 text-white group-hover:text-primary transition-all duration-1000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </NavLink>
          <NavLink
            to="/contact"
            className="text-white hover:text-primary transition-all duration-1000"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </NavLink>
        </div>

        <div className="relative hidden lg:flex lg:gap-4">
          <button
            ref={buttonRef}
            onClick={() => {
              setIsOpen(!isOpen);
              return;
            }}
            className="flex items-center gap-2"
          >
            <img src={britishFlagIcon} alt="Language" className="w-6 h-6" />
            <div className="flex items-center gap-1 group">
              <p className="text-white group-hover:text-primary transition-all duration-1000">
                ENG
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-white group-hover:text-primary transition-all duration-1000"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 text-white hover:text-primary transition-all duration-1000"
            >
              <circle
                cx="11"
                cy="11"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="21"
                y1="21"
                x2="16.65"
                y2="16.65"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
          <div
            ref={dropdownRef}
            className={`absolute top-20 -left-6 flex flex-col bg-white w-[163px] h-[260px] rounded-[20px] px-6 justify-center gap-4 font-galano transition-all duration-1000 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex gap-3 items-center">
              <img src={italianFlagIcon} alt="Italian" />
              <p>ITA</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src={russianFlagIcon} alt="Russian" />
              <p>RUS</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src={spanishFlagIcon} alt="Spanish" />
              <p>ESP</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src={germanFlagIcon} alt="German" />
              <p>GER</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src={frenchFlagIcon} alt="French" />
              <p>FRA</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
