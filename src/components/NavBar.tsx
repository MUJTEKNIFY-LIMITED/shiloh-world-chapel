import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/icons/chimalogo4.svg";
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

  const isLightNav = location.pathname === "/sermon-media-player";

  return (
    <>
      <nav
        className={`relative flex justify-between items-center z-20 ${
          isLightNav ? "mt-4 mx-8 md:mx-10 lg:mx-16 xl:mx-24" : null
        }`}
      >
        <NavLink to="/">
          <img
            src={logo}
            alt="Shiloh Word Chapel Logo"
            className="w-[82px] lg:w-[108px] h-[79px] lg:h-[102px] hover:opacity-90 transition-opacity"
          />
        </NavLink>

        {/* Modernized Hamburger Menu Trigger */}
        <button
          onClick={toggleMobile}
          className={`lg:hidden w-11 h-11 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 border ${
            isLightNav
              ? "bg-[#071b65]/10 border-[#071b65]/30 hover:bg-[#071b65]/20"
              : "bg-black/40 border-white/30 hover:bg-black/60 backdrop-blur-md"
          }`}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
              isLightNav ? "bg-[#071b65]" : "bg-white"
            } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
              isLightNav ? "bg-[#071b65]" : "bg-white"
            } ${isMobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
              isLightNav ? "bg-[#071b65]" : "bg-white"
            } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>

        {/* Mobile Menu Dropdown */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-trajan text-xs font-bold tracking-wider">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-[#D9A229] transition-colors ${
                isActive ? "text-[#D9A229]" : isLightNav ? "text-primary" : "text-white"
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-[#D9A229] transition-colors ${
                isActive ? "text-[#D9A229]" : isLightNav ? "text-primary" : "text-white"
              }`
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/foundation"
            className={({ isActive }) =>
              `hover:text-[#D9A229] transition-colors ${
                isActive ? "text-[#D9A229]" : isLightNav ? "text-primary" : "text-white"
              }`
            }
          >
            FOUNDATION
          </NavLink>
          <div className="relative">
            <button
              onClick={toggleMinistry}
              className={`flex items-center gap-1.5 hover:text-[#D9A229] transition-colors ${
                isLightNav ? "text-primary" : "text-white"
              }`}
            >
              <span>MINISTRY</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <MinistryOverlay
              isOpen={isMinistryOverlayOpen}
              onClose={() => setIsMinistryOverlayOpen(false)}
            />
          </div>
          <NavLink
            to="/partnerships"
            className={({ isActive }) =>
              `hover:text-[#D9A229] transition-colors ${
                isActive ? "text-[#D9A229]" : isLightNav ? "text-primary" : "text-white"
              }`
            }
          >
            PARTNERSHIPS
          </NavLink>
          <NavLink
            to="/sermons"
            className={({ isActive }) =>
              `hover:text-[#D9A229] transition-colors ${
                isActive ? "text-[#D9A229]" : isLightNav ? "text-primary" : "text-white"
              }`
            }
          >
            SERMONS
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `hover:text-[#D9A229] transition-colors ${
                isActive ? "text-[#D9A229]" : isLightNav ? "text-primary" : "text-white"
              }`
            }
          >
            EVENTS
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `hover:text-[#D9A229] transition-colors ${
                isActive ? "text-[#D9A229]" : isLightNav ? "text-primary" : "text-white"
              }`
            }
          >
            GALLERY
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-[#D9A229] transition-colors ${
                isActive ? "text-[#D9A229]" : isLightNav ? "text-primary" : "text-white"
              }`
            }
          >
            CONTACT
          </NavLink>
        </div>

        {/* Right Language Overlay Controls */}
        <div className="relative hidden lg:flex items-center gap-4">
          <button onClick={toggleLanguage} className="flex items-center gap-2">
            <img src={britishFlagIcon} alt="Language" className="w-5 h-5 rounded-full" />
            <span className={`text-xs font-bold font-trajan ${isLightNav ? "text-primary" : "text-white"}`}>
              ENG
            </span>
          </button>
          <LanguageOverlay
            isOpen={isLanguageOverlayOpen}
            onClose={() => setIsLanguageOverlayOpen(false)}
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
