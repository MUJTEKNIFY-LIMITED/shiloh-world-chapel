import calenderIcon from "../assets/icons/calendar-icon.svg";
import clockIcon from "../assets/icons/clock-icon.svg";
import locationIcon from "../assets/icons/location-pin-icon.svg";
import { events } from "../assets/data/events-data";

const EventsSection = () => {
  return (
    <>
      <section className="h-fit bg-white flex flex-col text-center gap-20 px-4 md:px-6 lg:px-10 xl:px-24 pb-24 xl:pb-48">
        <div className="flex flex-col gap-4 px-6">
          <h5 className="text-xl text-primary font-semibold">EVENTS</h5>
          <p className="text-3xl font-trajan">
            Upcoming Shiloh Word Chapel Events
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-x-10 xl:gap-y-24 md:px-10 xl:px-0 place-items-center">
          {events.map((event, idx) => (
            <div
              key={idx}
              className={`flex w-full xl:w-[535px] h-[289px] xl:h-[341px] rounded-[29px] items-center px-[13px] py-[26px] xl:p-[26px] gap-3 xl:gap-7 bg-gradient-to-l from-white to-[#DBE2FD] shadow-3xl relative overflow-hidden xl:mx-auto xl:my-auto`}
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
      </section>
    </>
  );
};

export default EventsSection;
