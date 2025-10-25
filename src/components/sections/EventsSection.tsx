import calenderIcon from "../../assets/icons/calendar-icon.svg";
import clockIcon from "../../assets/icons/clock-icon.svg";
import locationIcon from "../../assets/icons/location-pin-icon.svg";
import { useLocation } from "react-router-dom";
import { events } from "../../assets/data/events-data.ts";
import { useState } from "react";
import React from "react";
import Pagination from "../Pagination.tsx";

const EventsSection = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState(1);

  // Responsive pagination: 4 per page on mobile, 9 per page on lg+
  const getEventsPerPage = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      return 10;
    }
    return 4;
  };

  const [eventsPerPage, setEventsPerPage] = useState(getEventsPerPage());

  // Update perPage on resize
  React.useEffect(() => {
    const handleResize = () => {
      setEventsPerPage(getEventsPerPage());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startIdx = (activePage - 1) * eventsPerPage;
  const endIdx = startIdx + eventsPerPage;
  const paginatedEvents = events.slice(startIdx, endIdx);

  // Ensure activePage is valid when per-page or total events change
  React.useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(events.length / eventsPerPage));
    if (activePage > totalPages) setActivePage(1);
  }, [eventsPerPage, events.length]);

  return (
    <>
      <section
        className={`h-fit w-fit bg-white flex flex-col ${
          location.pathname === "/" ? "mt-40" : "mt-20 lg:mt-32 mb-24 lg:mb-28"
        }  mx-4 lg:mx-auto text-center gap-20`}
      >
        <div className="flex flex-col gap-4">
          <h5 className="text-xl text-primary font-semibold">EVENTS</h5>
          <p className="text-3xl font-trajan">
            Upcoming Shiloh Word Chapel Events
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 w-fit">
          {paginatedEvents.map((event, idx) => (
            <div
              key={idx}
              className={`flex w-full xl:w-[535px] h-[289px] xl:h-[341px] rounded-[29px] items-center px-[13px] py-[26px] xl:p-[26px] gap-3 xl:gap-7 bg-gradient-to-l from-white to-[#DBE2FD] shadow-5xl`}
            >
              {event.overlay && (
                <div
                  className="xl:hidden absolute w-[151px] h-[200px] rounded-[8px] z-10 pointer-events-none"
                  style={{ background: "rgba(0,0,0,0.5)" }}
                ></div>
              )}
              <img
                src={event.image}
                alt="Event Image"
                className="w-[151px] xl:w-[253px] h-[200px] xl:h-[289px] rounded-[8px] relative z-0"
              />
              <div
                className={`flex flex-col xl:h-fit gap-2 xl:gap-4 text-left text-primary relative z-20 ${
                  event.overlay ? "justify-center" : ""
                }`}
              >
                <p className="font-bold text-xl xl:text-2xl">{event.title}</p>
                {event.date && (
                  <div className="flex gap-2 items-start">
                    <img src={calenderIcon} alt="Calender Icon" />
                    <p className="text-xs">{event.date}</p>
                  </div>
                )}
                {event.time && (
                  <div className="flex gap-2 items-start">
                    <img src={clockIcon} alt="Clock Icon" />
                    <p className="text-xs">{event.time}</p>
                  </div>
                )}
                {event.location && (
                  <div className="flex gap-2 items-start">
                    <img src={locationIcon} alt="Location Icon" />
                    <p className="text-xs">{event.location}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {location.pathname === "/events" && (
          <Pagination
            activePage={activePage}
            setActivePage={setActivePage}
            total={events.length}
            perPage={eventsPerPage}
          />
        )}
      </section>
    </>
  );
};

export default EventsSection;
