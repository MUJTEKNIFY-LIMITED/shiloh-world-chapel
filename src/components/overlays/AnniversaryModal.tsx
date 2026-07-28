import React, { useState, useEffect } from "react";
import anniversaryFlyer from "../../assets/images/new_media/Annivasary Flyer.jpg";

export const isAnniversaryActive = (): boolean => {
  // Expiry timestamp: July 31, 2026, 23:59:59 WAT (UTC+1)
  const expiryDate = new Date("2026-07-31T23:59:59+01:00");
  return new Date() <= expiryDate;
};

type AnniversaryModalProps = {
  onOpenVideoSection?: () => void;
};

const AnniversaryModal: React.FC<AnniversaryModalProps> = ({ onOpenVideoSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only show if anniversary is active and user has not dismissed it in this session
    if (!isAnniversaryActive()) return;

    const dismissed = sessionStorage.getItem("shiloh_anniversary_dismissed_v1");
    if (!dismissed) {
      // Small delay for smooth entry after initial render
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("shiloh_anniversary_dismissed_v1", "true");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen || !isAnniversaryActive()) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="anniversary-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full max-w-xl bg-[#06123b] border-2 border-[#D9A229]/60 rounded-3xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[90vh]">
        {/* Top bar with close control */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#040c29] border-b border-[#D9A229]/30">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9A229] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D9A229] font-trajan">
              15th Anniversary Invitation
            </span>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D9A229]"
            aria-label="Close anniversary pop-up"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-5 sm:p-6 flex flex-col gap-5">
          {/* Main Visual - Flyer */}
          <div className="relative rounded-2xl overflow-hidden border border-[#D9A229]/30 shadow-lg group">
            <img
              src={anniversaryFlyer}
              alt="Shiloh Word Chapel 15th Anniversary - There Shall Be Showers of Blessings"
              className="w-full h-auto object-cover max-h-[420px] transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Program Text Info */}
          <div className="text-center flex flex-col gap-2">
            <h2
              id="anniversary-modal-title"
              className="text-2xl sm:text-3xl font-bold font-trajan text-white tracking-wide leading-tight"
            >
              THERE SHALL BE SHOWERS OF BLESSINGS
            </h2>
            <p className="text-sm sm:text-base text-[#D9A229] font-medium uppercase tracking-widest font-trajan">
              Celebrating 15 Years of God's Faithfulness
            </p>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-xs sm:text-sm bg-[#040d2d] p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#D9A229]/20 flex items-center justify-center text-[#D9A229] shrink-0">
                  📅
                </div>
                <div>
                  <div className="text-white/60 text-[11px] uppercase font-bold">Dates</div>
                  <div className="font-semibold text-white">29th — 31st July 2026</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#D9A229]/20 flex items-center justify-center text-[#D9A229] shrink-0">
                  ⏰
                </div>
                <div>
                  <div className="text-white/60 text-[11px] uppercase font-bold">Time</div>
                  <div className="font-semibold text-white">3:00 PM Daily</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 sm:col-span-2">
                <div className="w-8 h-8 rounded-lg bg-[#D9A229]/20 flex items-center justify-center text-[#D9A229] shrink-0">
                  📍
                </div>
                <div>
                  <div className="text-white/60 text-[11px] uppercase font-bold">Location & Host</div>
                  <div className="font-semibold text-white">
                    Apo Mechanic by African Medical Centre of Excellence, Abuja.
                  </div>
                  <div className="text-xs text-[#D9A229]">Host: Prophet I.O Samuel</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-1">
            {onOpenVideoSection && (
              <button
                onClick={() => {
                  handleClose();
                  onOpenVideoSection();
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D9A229] to-[#f5c760] text-[#06123b] font-bold text-sm sm:text-base hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Watch Prophet's Invitation</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            )}
            <button
              onClick={handleClose}
              className="py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base border border-white/20 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnniversaryModal;
