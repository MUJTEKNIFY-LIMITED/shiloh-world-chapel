import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/icons/chimalogo4.svg";
import hamburgerIcon from "../assets/icons/hamburger-Icon.svg";
import blueHamburgerIcon from "../assets/icons/blue-hamburger-icon.svg";
import britishFlagIcon from "../assets/icons/flags/british-flag-icon.svg";
import MinistryOverlay from "./overlays/MinistryOverlay";
import LanguageOverlay from "./overlays/LanguageOverlay";
import MobileMenu from "./overlays/MobileMenu";
const NavBar = () => {
  const location = useLocation();
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
      <nav
        className={`relative flex justify-between items-center z-20 ${
          location.pathname === "/sermon-media-player"
            ? "mt-4 mx-8 md:mx-10 lg:mx-16 xl:mx-24"
            : null
        }`}
      >
        <img
          src={logo}
          alt="Logo"
          className="w-[82px] lg:w-[108px] h-[79px] lg:h-[102px]"
        />

        {/* Mobile Menu Icon */}
        <button onClick={toggleMobile} className="lg:hidden">
          <img
            src={`${
              location.pathname === "/sermon-media-player"
                ? blueHamburgerIcon
                : hamburgerIcon
            }`}
            alt="Menu"
          />
        </button>

        {/* Mobile Menu Dropdown */}

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        ></MobileMenu>

        {/* Desktop Menu */}

        <div className="hidden lg:flex gap-8">
          <NavLink
            to="/"
            className={`hover:text-primary hover:scale-105 transition-all duration-1000 ${
              location.pathname === "/sermon-media-player"
                ? "text-primary"
                : "text-white"
            }`}
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={`hover:text-primary hover:scale-105 transition-all duration-1000 ${
              location.pathname === "/sermon-media-player"
                ? "text-primary"
                : "text-white"
            }`}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/foundation"
            className={`hover:text-primary hover:scale-105 transition-all duration-1000 ${
              location.pathname === "/sermon-media-player"
                ? "text-primary"
                : "text-white"
            }`}
          >
            FOUNDATION NEEDS
          </NavLink>
          <div>
            <button
              onClick={toggleMinistry}
              className={`relative flex items-center justify-center transition-all duration-1000 gap-2 group hover:text-primary hover:scale-105 ${
                location.pathname === "/sermon-media-player"
                  ? "text-primary"
                  : "text-white"
              }`}
            >
              MINISTRY
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-4 h-4 group-hover:text-primary group-hover:scale-105 transition-all duration-1000 ${
                  location.pathname === "/sermon-media-player"
                    ? "text-primary"
                    : "text-white"
                }`}
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
            className={`hover:text-primary hover:scale-105 transition-all duration-1000 ${
              location.pathname === "/sermon-media-player"
                ? "text-primary"
                : "text-white"
            }`}
          >
            CONTACT
          </NavLink>
        </div>

        <div className="relative hidden lg:flex lg:gap-4">
          <button onClick={toggleLanguage} className="flex items-center gap-2">
            <img src={britishFlagIcon} alt="Language" className="w-6 h-6" />
            <div className="flex items-center gap-1 group">
              <p
                className={`group-hover:text-primary group-hover:scale-105 transition-all duration-1000 ${
                  location.pathname === "/sermon-media-player"
                    ? "text-primary"
                    : "text-white"
                }`}
              >
                ENG
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-4 h-4 group-hover:text-primary group-hover:scale-105 transition-all duration-1000 ${
                  location.pathname === "/sermon-media-player"
                    ? "text-primary"
                    : "text-white"
                }`}
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
              className={`w-5 h-5 hover:text-primary hover:scale-105 transition-all duration-1000 ${
                location.pathname === "/sermon-media-player"
                  ? "text-primary"
                  : "text-white"
              }`}
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
