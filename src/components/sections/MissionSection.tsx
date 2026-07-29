import React from "react";
import { useNavigate } from "react-router-dom";

const MissionSection: React.FC = () => {
  const navigate = useNavigate();

  const pillars = [
    {
      title: "PROPHECY",
      subtitle: "Divine Direction & Guidance",
      description:
        "Receiving divine direction and revealing God's mind through the prophetic grace upon the ministry.",
      icon: (
        <svg className="w-8 h-8 text-[#D9A229]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "PRAYER",
      subtitle: "The Arena of Fire",
      description:
        "A place where burdens are brought before God and lives encounter His transforming power.",
      icon: (
        <svg className="w-8 h-8 text-[#D9A229]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      title: "HEALING & DELIVERANCE",
      subtitle: "Restoration & Freedom",
      description:
        "Witnessing lives restored, captives set free and families transformed through the power of Jesus Christ.",
      icon: (
        <svg className="w-8 h-8 text-[#D9A229]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 text-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase font-bold text-[#D9A229] tracking-widest font-trajan bg-[#071b65]/5 px-4 py-1.5 rounded-full">
            WHAT WE CARRY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-trajan text-[#071b65]">
            Ministry Pillars & Expressions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl font-sans">
            Shiloh Word Chapel is committed to raising a prayerful, empowered generation through apostolic truth and prophetic encounters.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl bg-[#f8fafc] border border-gray-100 hover:border-[#D9A229]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center gap-4 cursor-default transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#071b65] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="font-bold text-lg text-[#071b65] font-trajan uppercase tracking-wide">
                {p.title}
              </h3>
              <span className="text-xs font-semibold text-[#D9A229] uppercase tracking-wider font-trajan -mt-2">
                {p.subtitle}
              </span>
              <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-2">
          <button
            onClick={() => navigate("/about")}
            className="px-8 py-3.5 rounded-full bg-[#071b65] hover:bg-[#0c288d] text-white font-bold text-xs sm:text-sm uppercase tracking-wider font-trajan shadow-lg transition-all whitespace-nowrap"
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
