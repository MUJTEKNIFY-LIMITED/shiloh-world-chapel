import React from "react";
import { useNavigate } from "react-router-dom";
import prophetImg from "../../assets/images/new_media/Prophet 10.jpg";

const ProphetSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 lg:py-24 bg-white px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left: Prophet Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border-4 border-[#D9A229]/40 shadow-2xl bg-gray-900 group">
            <img
              src={prophetImg}
              alt="Prophet I.O Samuel — General Overseer Shiloh Word Chapel"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040c29]/90 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase font-bold text-[#D9A229] font-trajan tracking-widest">
                GENERAL OVERSEER & FOUNDER
              </span>
              <h3 className="text-2xl font-bold font-trajan text-white">
                PROPHET I.O SAMUEL
              </h3>
            </div>
          </div>
        </div>

        {/* Right: Dignified Biography */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071b65]/5 text-[#071b65] text-xs font-bold font-trajan tracking-widest uppercase w-fit mx-auto lg:mx-0">
            <span>PROPHETIC & APOSTOLIC LEADERSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-trajan text-[#071b65] tracking-tight leading-tight">
            About Prophet I.O Samuel
          </h2>

          <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
            Prophet I.O Samuel is an apostolic voice, prophetic vessel, and General Overseer of Shiloh Word Chapel worldwide. Called by God to preach the uncompromised Word, minister deliverance, and raise an army of believers operating in divine favour.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-2">
            <div className="p-4 rounded-2xl bg-[#f8fafc] border border-gray-200">
              <span className="text-xs uppercase font-bold text-[#071b65] font-trajan">MINISTRY VISION</span>
              <p className="text-xs text-gray-600 font-sans mt-1">Reclaiming destinies and establishing God's kingdom through prayer and prophecy.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#f8fafc] border border-gray-200">
              <span className="text-xs uppercase font-bold text-[#071b65] font-trajan">GLOBAL REACH</span>
              <p className="text-xs text-gray-600 font-sans mt-1">Ministering to thousands across continents via live services and international prayerlines.</p>
            </div>
          </div>

          <div className="pt-2 flex justify-center lg:justify-start">
            <button
              onClick={() => navigate("/about")}
              className="px-8 py-3.5 rounded-full bg-[#071b65] hover:bg-[#0c288d] text-white font-bold text-xs sm:text-sm uppercase tracking-wider font-trajan shadow-lg transition-all whitespace-nowrap"
            >
              LEARN MORE
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProphetSection;
