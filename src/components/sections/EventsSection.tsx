import calenderIcon from "../../assets/icons/calendar-icon.svg";
import clockIcon from "../../assets/icons/clock-icon.svg";
import locationIcon from "../../assets/icons/location-pin-icon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { events } from "../../assets/data/events-data.ts";
import { useState, useEffect } from "react";
import Pagination from "../Pagination.tsx";

const EventsSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);

  const getEventsPerPage = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      return location.pathname === "/events" ? 8 : 4;
    }
    return 4;
  };

  const [eventsPerPage, setEventsPerPage] = useState(getEventsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setEventsPerPage(getEventsPerPage());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [location.pathname]);

  const startIdx = (activePage - 1) * eventsPerPage;
  const endIdx = startIdx + eventsPerPage;
  const paginatedEvents = events.slice(startIdx, endIdx);

  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(events.length / eventsPerPage));
    if (activePage > totalPages) setActivePage(1);
  }, [eventsPerPage, events.length, activePage]);

  return (
    <section
      className={`py-16 lg:py-24 bg-white px-4 sm:px-6 lg:px-8 border-t border-gray-100 ${
        location.pathname === "/" ? "" : "mb-16 lg:mb-24"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10 text-center">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase font-bold text-[#D9A229] tracking-widest font-trajan bg-[#071b65]/5 px-4 py-1.5 rounded-full">
            PROGRAMS & SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-trajan text-[#071b65]">
            Upcoming Events & Services
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl font-sans">
            Join us for divine encounters, prophetic services, and miracle prayerlines at Shiloh Word Chapel.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {paginatedEvents.map((event, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center rounded-3xl p-5 sm:p-6 bg-gradient-to-l from-white via-slate-50 to-[#DBE2FD]/50 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 gap-6 text-left"
            >
              <div className="w-full sm:w-44 h-48 sm:h-44 rounded-2xl overflow-hidden shrink-0 bg-gray-900">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col gap-3 justify-between flex-1 w-full">
                <div>
                  <h3 className="font-bold text-lg text-[#071b65] font-trajan leading-snug">
                    {event.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-2 text-xs sm:text-sm text-gray-600 font-sans">
                  {event.date && (
                    <div className="flex items-center gap-2.5">
                      <img src={calenderIcon} alt="Calendar" className="w-4 h-4 text-[#D9A229]" />
                      <span>{event.date}</span>
                    </div>
                  )}
                  {event.time && (
                    <div className="flex items-center gap-2.5">
                      <img src={clockIcon} alt="Clock" className="w-4 h-4 text-[#D9A229]" />
                      <span>{event.time}</span>
                    </div>
                  )}
                  {event.location && (
                    <div className="flex items-center gap-2.5">
                      <img src={locationIcon} alt="Location" className="w-4 h-4 text-[#D9A229]" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => navigate("/events")}
                    className="px-5 py-2 rounded-full bg-[#071b65] hover:bg-[#0c288d] text-white font-bold text-xs font-trajan uppercase tracking-wider transition-all whitespace-nowrap"
                  >
                    EVENT DETAILS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button for Homepage */}
        {location.pathname === "/" && (
          <div className="flex justify-center mt-2">
            <button
              onClick={() => navigate("/events")}
              className="px-8 py-3.5 rounded-full bg-[#071b65] hover:bg-[#0c288d] text-white font-bold text-xs sm:text-sm uppercase tracking-wider font-trajan shadow-lg transition-all whitespace-nowrap"
            >
              VIEW EVENTS
            </button>
          </div>
        )}

        {/* Pagination on Events Page */}
        {location.pathname === "/events" && events.length > eventsPerPage && (
          <Pagination
            activePage={activePage}
            setActivePage={setActivePage}
            total={events.length}
            perPage={eventsPerPage}
          />
        )}
      </div>
    </section>
  );
};

export default EventsSection;
