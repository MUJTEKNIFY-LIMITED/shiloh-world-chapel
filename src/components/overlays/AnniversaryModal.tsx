import React, { useState, useEffect } from "react";
import anniversaryFlyer from "../../assets/images/new_media/Annivasary Flyer.jpg";

export const isAnniversaryActive = (): boolean => {
  const expiryDate = new Date("2026-07-31T23:59:59+01:00");
  return new Date() <= expiryDate;
};

interface AnniversaryModalProps {
  onOpenVideoSection?: () => void;
}

const AnniversaryModal: React.FC<AnniversaryModalProps> = ({ onOpenVideoSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isAnniversaryActive()) return;
    const isDismissed = sessionStorage.getItem("shiloh_anniversary_dismissed_v1");
    if (!isDismissed) {
      const timer = setTimeout(() => setIsOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleDismiss();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleDismiss = () => {
    sessionStorage.setItem("shiloh_anniversary_dismissed_v1", "true");
    setIsOpen(false);
  };

  const handleWatchInvitation = () => {
    handleDismiss();
    if (onOpenVideoSection) {
      onOpenVideoSection();
    } else {
      const el = document.getElementById("anniversary-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isOpen || !isAnniversaryActive()) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop overlay */}
      <div className="absolute inset-0" onClick={handleDismiss} aria-hidden="true" />

      {/* Modal Dialog Container */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#071b65] rounded-3xl overflow-hidden shadow-2xl border border-[#D9A229]/50 flex flex-col lg:flex-row text-white my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="anniversary-modal-title"
      >
        {/* Close (X) Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors border border-white/20"
          aria-label="Close anniversary announcement"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* LEFT / HERO FLYER: UNCROPPED (object-fit: contain) */}
        <div className="w-full lg:w-1/2 bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden">
          <img
            src={anniversaryFlyer}
            alt="Shiloh Word Chapel 15th Anniversary Celebration Flyer"
            className="w-full max-h-[45vh] lg:max-h-[75vh] object-contain rounded-xl"
          />
        </div>

        {/* RIGHT: INVITATION CONTENT & ACTION BUTTONS */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between gap-6 overflow-y-auto bg-gradient-to-b from-[#071b65] to-[#040c29]">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9A229]/20 border border-[#D9A229]/50 text-[#D9A229] text-[11px] font-bold uppercase tracking-wider font-trajan w-fit">
              <span>🎉 15th Anniversary Special</span>
            </div>

            <h2 id="anniversary-modal-title" className="text-2xl sm:text-3xl font-bold font-trajan leading-tight text-white">
              15 Years Of God's Faithfulness
            </h2>

            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans">
              Prophet I.O Samuel cordially invites you to the grand 15th Anniversary celebration of Shiloh Word Chapel. Theme: <span className="text-[#D9A229] font-semibold">THERE SHALL BE SHOWERS OF BLESSINGS</span>.
            </p>

            <div className="flex flex-col gap-2 pt-2 border-t border-white/10 text-xs sm:text-sm text-white/90">
              <div className="flex items-center gap-2">
                <span className="text-[#D9A229]">📅 Date:</span>
                <span className="font-semibold">29th – 31st July 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#D9A229]">⏰ Time:</span>
                <span className="font-semibold">3:00 PM Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#D9A229]">📍 Location:</span>
                <span className="font-semibold">Apo Mechanic, Abuja</span>
              </div>
            </div>
          </div>

          {/* Action CTAs — Single-line button text */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
            <button
              onClick={handleWatchInvitation}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#D9A229] hover:bg-[#f5c760] text-[#071b65] font-bold text-xs sm:text-sm font-trajan uppercase tracking-wider shadow-lg transition-all text-center whitespace-nowrap"
            >
              WATCH INVITATION
            </button>
            <button
              onClick={handleDismiss}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm font-trajan uppercase tracking-wider transition-all text-center whitespace-nowrap"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnniversaryModal;
