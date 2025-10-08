import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/icons/chimalogo4.svg";
import hamburgerIcon from "../assets/icons/hamburger-icon.svg";
import britishFlagIcon from "../assets/icons/flags/british-flag-icon.svg";
import MinistryOverlay from "./dropdowns/MinistryOverlay";
import LanguageOverlay from "./dropdowns/languageOverlay";
import MobileMenu from "./dropdowns/MobileMenu";
const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOverlayOpen, setIsLanguageOverlayOpen] = useState(false);
  const [isMinistryOverlayOpen, setIsMinistryOverlayOpen] = useState(false);

  const toggleMobile = () => {
    setIsMobileMenuOpen((open) => !open);
  };
  const toggleLanguage = () => {
    setIsLanguageOverlayOpen((open) => !open);
  };
  const toggleMinistry = () => {
    setIsMinistryOverlayOpen((open) => !open);
  };

  return (
    <>
      <nav className="relative flex justify-between items-center z-20">
        <img
          src={logo}
          alt="Logo"
          className="w-[82px] lg:w-[108px] h-[79px] lg:h-[102px]"
        />

        {/* Mobile Menu Icon */}
        <button onClick={toggleMobile} className="lg:hidden">
          <img src={hamburgerIcon} alt="Menu" />
        </button>

        {/* Mobile Menu Dropdown */}

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        ></MobileMenu>

        {/* Desktop Menu */}

        <div className="hidden lg:flex gap-8 font-galano text-[16px]">
          <NavLink
            to="/"
            className="text-white hover:text-primary transition-all duration-1000"
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:text-primary transition-all duration-1000"
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/foundation"
            className="text-white hover:text-primary transition-all duration-1000"
          >
            FOUNDATION NEEDS
          </NavLink>
          <div>
          <button
            onClick={toggleMinistry}
            className="relative text-white flex items-center justify-center transition-all duration-1000 gap-2 group hover:text-primary"
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
            {/* Ministry Overlay Dropdown */}
            <MinistryOverlay
              isOpen={isMinistryOverlayOpen}
              onClose={() => setIsMinistryOverlayOpen(false)}
            ></MinistryOverlay>
          </button>
          </div>
          <NavLink
            to="/contact"
            className="text-white hover:text-primary transition-all duration-1000"
          >
            CONTACT
          </NavLink>
        </div>

        <div className="relative hidden lg:flex lg:gap-4">
          <button onClick={toggleLanguage} className="flex items-center gap-2">
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
          <LanguageOverlay
            isOpen={isLanguageOverlayOpen}
            onClose={() => setIsLanguageOverlayOpen(false)}
          ></LanguageOverlay>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
