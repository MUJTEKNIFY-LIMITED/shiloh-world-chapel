import { useState, useEffect } from "react";
import calenderIcon from "../../assets/icons/calendar-icon.svg";
import clockIcon from "../../assets/icons/clock-icon.svg";
import locationIcon from "../../assets/icons/location-pin-icon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { events } from "../../assets/data/events-data.ts";
import type { EventItem } from "../../assets/data/events-data.ts";
import Pagination from "../Pagination.tsx";

const EventsSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);

  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleOpenDetails = (event: EventItem) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <>
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
                key={event.id || idx}
                className="flex flex-col sm:flex-row items-center rounded-3xl p-5 sm:p-6 bg-gradient-to-l from-white via-slate-50 to-[#DBE2FD]/50 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 gap-6 text-left overflow-hidden min-w-0"
              >
                {/* Event Image */}
                <div className="w-full sm:w-44 h-48 sm:h-44 rounded-2xl overflow-hidden shrink-0 bg-gray-900">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Event Content Container (min-w-0 prevents text overflow) */}
                <div className="flex flex-col gap-3 justify-between flex-1 w-full min-w-0 overflow-hidden">
                  <div className="min-w-0">
                    <h3 className="font-bold text-base sm:text-lg text-[#071b65] font-trajan leading-snug truncate">
                      {event.title}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2 text-xs sm:text-sm text-gray-600 font-sans min-w-0">
                    {event.date && (
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img src={calenderIcon} alt="Calendar" className="w-4 h-4 text-[#D9A229] shrink-0" />
                        <span className="truncate">{event.date}</span>
                      </div>
                    )}
                    {event.time && (
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img src={clockIcon} alt="Clock" className="w-4 h-4 text-[#D9A229] shrink-0" />
                        <span className="truncate">{event.time}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-start gap-2.5 min-w-0">
                        <img src={locationIcon} alt="Location" className="w-4 h-4 text-[#D9A229] shrink-0 mt-0.5" />
                        <span className="line-clamp-2 leading-tight break-words">{event.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => handleOpenDetails(event)}
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
                VIEW ALL EVENTS
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

      {/* EVENT DETAILS MODAL */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)} />

          <div className="relative z-10 w-full max-w-2xl bg-[#071b65] text-white rounded-3xl overflow-hidden shadow-2xl border border-[#D9A229]/40 flex flex-col max-h-[90vh] my-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#040c29]">
              <span className="text-xs font-bold font-trajan text-[#D9A229] uppercase tracking-wider">
                EVENT DETAILS
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto flex flex-col gap-6">
              <div className="w-full aspect-[16/9] max-h-[260px] rounded-2xl overflow-hidden bg-black border border-[#D9A229]/30">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-contain bg-black"
                />
              </div>

              <div className="flex flex-col gap-3 text-left">
                <h3 className="text-xl sm:text-2xl font-bold font-trajan text-white leading-snug">
                  {selectedEvent.title}
                </h3>

                {selectedEvent.description && (
                  <p className="text-xs sm:text-sm text-gray-200 font-sans leading-relaxed">
                    {selectedEvent.description}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs sm:text-sm">
                  {selectedEvent.date && (
                    <div className="flex items-center gap-2">
                      <span className="text-[#D9A229]">📅 Date:</span>
                      <span className="font-semibold text-white">{selectedEvent.date}</span>
                    </div>
                  )}
                  {selectedEvent.time && (
                    <div className="flex items-center gap-2">
                      <span className="text-[#D9A229]">⏰ Time:</span>
                      <span className="font-semibold text-white">{selectedEvent.time}</span>
                    </div>
                  )}
                  {selectedEvent.location && (
                    <div className="flex items-start gap-2 sm:col-span-2">
                      <span className="text-[#D9A229] shrink-0">📍 Location:</span>
                      <span className="font-semibold text-white leading-normal">{selectedEvent.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#040c29] border-t border-white/10 flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#D9A229] hover:bg-[#f5c760] text-[#071b65] font-bold text-xs font-trajan uppercase tracking-wider whitespace-nowrap"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventsSection;
