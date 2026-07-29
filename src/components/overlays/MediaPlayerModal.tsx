import React, { useEffect, useState } from "react";
import type { SermonItem } from "../../assets/data/sermons-data";

interface MediaPlayerModalProps {
  item: SermonItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const MediaPlayerModal: React.FC<MediaPlayerModalProps> = ({ item, isOpen, onClose }) => {
  const [embedFailed, setEmbedFailed] = useState(false);

  useEffect(() => {
    setEmbedFailed(false);
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const isPortrait = item.isPortrait || item.videoUrl?.includes("Annivasary Video");

  const getEmbedUrl = (url: string) => {
    if (!url) return "";
    if (url.includes("facebook.com") || url.includes("fb.watch") || url.includes("web.facebook")) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=1280&autoplay=true`;
    }
    return url;
  };

  const isFacebook = item.videoUrl?.includes("facebook") || item.videoUrl?.includes("fb.");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div
        className={`relative z-10 w-full bg-[#071b65] rounded-3xl overflow-hidden shadow-2xl border border-[#D9A229]/40 flex flex-col ${
          isPortrait ? "max-w-md max-h-[90vh]" : "max-w-4xl max-h-[90vh]"
        }`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#040c29]">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="px-3 py-1 rounded-full bg-[#D9A229] text-[#071b65] text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
              {item.category || "Ministry Media"}
            </span>
            <h3 className="text-white text-sm sm:text-base font-bold font-trajan truncate">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0"
            aria-label="Close video modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video Body Container */}
        <div className="relative w-full bg-black flex-1 flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[360px]">
          {item.videoUrl && !item.videoUrl.startsWith("http") ? (
            /* Native local MP4 video */
            <video
              src={item.videoUrl}
              poster={item.image}
              controls
              autoPlay
              playsInline
              className={`w-full ${isPortrait ? "max-h-[70vh] object-contain" : "aspect-video object-cover"}`}
            />
          ) : isFacebook && !embedFailed ? (
            /* Facebook Video Embed Iframe */
            <div className={`w-full ${isPortrait ? "aspect-[9/16] max-h-[70vh]" : "aspect-video"} relative bg-black`}>
              <iframe
                src={getEmbedUrl(item.videoUrl)}
                title={item.title}
                className="w-full h-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                onError={() => setEmbedFailed(true)}
              />
            </div>
          ) : (
            /* Fallback Card inside modal */
            <div className="flex flex-col items-center justify-center p-8 text-center gap-6 max-w-lg">
              <div className="w-20 h-20 rounded-full bg-[#D9A229]/20 text-[#D9A229] flex items-center justify-center shadow-xl">
                <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold font-trajan text-white">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gray-300 font-sans">
                  This video encounter is hosted officially on Facebook. Click below to watch the full broadcast.
                </p>
              </div>
              <a
                href={item.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#D9A229] hover:bg-[#f5c760] text-[#071b65] font-bold text-xs sm:text-sm uppercase tracking-wider font-trajan shadow-xl transition-all whitespace-nowrap"
              >
                WATCH ON FACEBOOK
              </a>
            </div>
          )}
        </div>

        {/* Modal Footer Description */}
        <div className="px-6 py-4 bg-[#040c29] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/80">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-[#D9A229] font-trajan">{item.speaker || "Prophet I.O Samuel"}</span>
            {item.date && <span>• {item.date}</span>}
          </div>
          {item.videoUrl && item.videoUrl.startsWith("http") && (
            <a
              href={item.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9A229] hover:underline font-semibold flex items-center gap-1 whitespace-nowrap"
            >
              <span>Open Direct Link</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaPlayerModal;
