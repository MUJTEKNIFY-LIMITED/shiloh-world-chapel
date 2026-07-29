import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import nigerianFlagIcon from "../../assets/icons/flags/nigerian-flag-icon.svg";
import mexicanFlagIcon from "../../assets/icons/flags/mexican-flag-icon.svg";
import argentineFlagIcon from "../../assets/icons/flags/argentine-flag-icon.svg";
import americanFlagIcon from "../../assets/icons/flags/american-flag-icon.svg";
import dutchFlagIcon from "../../assets/icons/flags/dutch-flag-icon.svg";
import australianFlagIcon from "../../assets/icons/flags/australian-flag-icon.svg";
import playIcon from "../../assets/icons/play-icon.svg";
import womanOnRed from "../../assets/images/banners/main-banner3.jpg";
import whatsappBgImg from "../../assets/images/social-media-backgrounds/whatsapp-bg-img.jpg";
import whatsappIcon from "../../assets/icons/social-icons/white-social-icons/white-whatsapp-icon.svg";
import linkedinIcon from "../../assets/icons/social-icons/white-social-icons/white-linkedin-icon.svg";
import facebookBgImg from "../../assets/images/social-media-backgrounds/facebook-bg-img.jpg";
import facebookIcon from "../../assets/icons/social-icons/white-social-icons/white-facebook-icon.svg";
import youtubeBgImg from "../../assets/images/social-media-backgrounds/youtube-bg-img.jpg";
import youtubeIcon from "../../assets/icons/social-icons/white-social-icons/white-youtube-icon.svg";
import twitterBgImg from "../../assets/images/banners/main-banner2.jpg";
import twitterIcon from "../../assets/icons/social-icons/white-social-icons/white-twitter-icon.svg";
import instagramBgImg from "../../assets/images/social-media-backgrounds/instagram-bg-img.jpg";
import instagramIcon from "../../assets/icons/social-icons/white-social-icons/white-instagram-icon.svg";
import MediaPlayerModal from "../overlays/MediaPlayerModal";
import type { SermonItem } from "../../assets/data/sermons-data";

const ConnectSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"prayerline" | "watch" | "socials">("prayerline");
  const [selectedVideo, setSelectedVideo] = useState<SermonItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleWatchNow = () => {
    setSelectedVideo({
      id: "shiloh-tv-live",
      title: "SHILOH LOVE TV — Live Service & Prayerline",
      speaker: "Prophet I.O Samuel",
      date: "Live Stream",
      category: "Sermons",
      videoUrl: "https://web.facebook.com/share/v/187TdUemH4/",
      image: womanOnRed,
      description: "Experience divine restoration and live prophetic prayer with Prophet I.O Samuel.",
    });
    setIsVideoModalOpen(true);
  };

  return (
    <>
      <section id="connect-section" className="py-16 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 text-center">
          {/* Header */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs uppercase font-bold text-[#D9A229] tracking-widest font-trajan bg-[#071b65]/5 px-4 py-1.5 rounded-full">
              GLOBAL PRAYERLINE & CONNECT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-trajan text-[#071b65]">
              SHILOH INTERNATIONAL PRAYER LINE
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl font-sans">
              Distance is not a barrier. Connect with us in faith and let Prophet I.O Samuel and the prayer team stand with you for divine breakthrough.
            </p>
          </div>

          {/* MOBILE & DESKTOP SINGLE ROW HORIZONTAL SCROLLING TABS */}
          <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center justify-start sm:justify-center gap-3 min-w-max px-2">
              <button
                onClick={() => setActiveTab("prayerline")}
                className={`px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold font-trajan tracking-wider uppercase transition-all whitespace-nowrap ${
                  activeTab === "prayerline"
                    ? "bg-[#071b65] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                PRAYERLINE & PARTNERS
              </button>
              <button
                onClick={() => setActiveTab("watch")}
                className={`px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold font-trajan tracking-wider uppercase transition-all whitespace-nowrap ${
                  activeTab === "watch"
                    ? "bg-[#071b65] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                WATCH LIVE TV
              </button>
              <button
                onClick={() => setActiveTab("socials")}
                className={`px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold font-trajan tracking-wider uppercase transition-all whitespace-nowrap ${
                  activeTab === "socials"
                    ? "bg-[#071b65] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                OUR SOCIAL MEDIA
              </button>
            </div>
          </div>

          {/* Main Card Container */}
          <div className="w-full rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-[#071b65] via-[#0b2685] to-[#040c29] text-white shadow-2xl border border-[#D9A229]/40 min-h-[420px] flex items-center justify-center">
            
            {/* Tab 1: Prayerline & Partners */}
            {activeTab === "prayerline" && (
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full text-left">
                <div className="flex flex-col gap-6 lg:w-1/2">
                  <h3 className="text-2xl sm:text-3xl font-bold font-trajan text-[#D9A229] leading-tight">
                    SHILOH PRAYERLINE ALL AROUND THE WORLD
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans">
                    Receive 1-on-1 prophetic direction, prayerline booking, and deliverance services wherever you are globally. Submit your prayer requests or join our international partnership family today.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => navigate("/partnerships")}
                      className="px-6 py-3 rounded-full bg-[#D9A229] hover:bg-[#f5c760] text-[#071b65] font-bold text-xs sm:text-sm font-trajan uppercase tracking-wider shadow-lg transition-all whitespace-nowrap"
                    >
                      REGISTER FOR PRAYER
                    </button>
                    <button
                      onClick={() => navigate("/about")}
                      className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm font-trajan uppercase tracking-wider border border-white/30 transition-all whitespace-nowrap"
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>

                {/* Country Flags Grid (Clean Typography / No Text Overflow) */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { flag: nigerianFlagIcon, country: "Nigeria" },
                    { flag: americanFlagIcon, country: "U.S.A" },
                    { flag: mexicanFlagIcon, country: "Mexico" },
                    { flag: dutchFlagIcon, country: "Netherlands" },
                    { flag: argentineFlagIcon, country: "Argentina" },
                    { flag: australianFlagIcon, country: "Australia" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm gap-1.5 text-center min-w-0"
                    >
                      <img src={item.flag} alt={`${item.country} Flag`} className="h-5 sm:h-6 w-auto shrink-0" />
                      <span className="text-[10px] sm:text-xs font-bold font-trajan uppercase text-white truncate w-full px-1">
                        {item.country}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Watch Live TV */}
            {activeTab === "watch" && (
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full text-left">
                <div className="flex flex-col gap-6 lg:w-1/2">
                  <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-bold uppercase tracking-wider font-trajan w-fit">
                    🔴 BROADCASTING LIVE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-trajan text-white leading-tight">
                    SHILOH LOVE TV & LIVE STREAM
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans">
                    Experience live Sunday services, midweek prophetic encounters, and miracle prayerlines with Prophet I.O Samuel broadcast live from Apo Mechanic, Abuja.
                  </p>
                  <div>
                    <button
                      onClick={handleWatchNow}
                      className="px-8 py-3.5 rounded-full bg-[#D9A229] hover:bg-[#f5c760] text-[#071b65] font-bold text-xs sm:text-sm font-trajan uppercase tracking-wider shadow-xl transition-all whitespace-nowrap"
                    >
                      WATCH NOW
                    </button>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 relative aspect-video rounded-2xl overflow-hidden border-2 border-[#D9A229]/40 bg-black flex items-center justify-center group cursor-pointer" onClick={handleWatchNow}>
                  <img src={womanOnRed} alt="Shiloh Love TV Broadcast" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <img src={playIcon} alt="Play" className="w-16 h-16 shadow-2xl group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Our Social Media */}
            {activeTab === "socials" && (
              <div className="flex flex-col items-center gap-8 w-full">
                <h3 className="text-xl sm:text-2xl font-bold font-trajan text-white">
                  CONNECT WITH SHILOH WORD CHAPEL ON SOCIAL MEDIA
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
                  {[
                    { icon: whatsappIcon, bg: whatsappBgImg, label: "WhatsApp", link: "https://web.facebook.com/shilohwordchapel" },
                    { icon: facebookIcon, bg: facebookBgImg, label: "Facebook", link: "https://web.facebook.com/shilohwordchapel" },
                    { icon: youtubeIcon, bg: youtubeBgImg, label: "YouTube", link: "https://web.facebook.com/shilohwordchapel" },
                    { icon: instagramIcon, bg: instagramBgImg, label: "Instagram", link: "https://web.facebook.com/shilohwordchapel" },
                    { icon: twitterIcon, bg: twitterBgImg, label: "X / Twitter", link: "https://web.facebook.com/shilohwordchapel" },
                    { icon: linkedinIcon, bg: womanOnRed, label: "LinkedIn", link: "https://web.facebook.com/shilohwordchapel" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative h-28 rounded-2xl overflow-hidden border border-white/20 shadow-lg group flex flex-col items-center justify-center gap-2 p-3"
                    >
                      <img src={social.bg} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
                      <img src={social.icon} alt={social.label} className="relative z-10 w-7 h-7" />
                      <span className="relative z-10 text-[11px] font-bold font-trajan text-white uppercase tracking-wider">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Video Modal */}
      <MediaPlayerModal
        item={selectedVideo}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
};

export default ConnectSection;
