import eventImg1 from "../assets/images/events/event-img-1.jpg";
import eventImg2 from "../assets/images/events/event-img-2.jpg";
import eventImg3 from "../assets/images/events/event-img-3.jpg";
import calenderIcon from "../assets/icons/calendar-icon.svg";
import clockIcon from "../assets/icons/clock-icon.svg";
import locationIcon from "../assets/icons/location-pin-icon.svg";

const EventsSection = () => {
  // Event data array
  const events = [
    {
      img: eventImg1,
      title: "S.W.C SUNDAY SERVICE",
      date: "Every Sunday",
      time: "9AM W.A.T",
      location:
        "SHILOH WORD CHAPEL, ALONG NEW KABUSA EXPRESS ROAD, APO MECHANIC VILLAGE,ABUJA.",
    },
    {
      img: eventImg2,
      title: "HOLY GHOST WONDER SERVICE",
      date: "September 3rd, 10th, 17th, 21st",
      time: "3PM W.A.T",
      location:
        "SHILOH WORD CHAPEL, ALONG NEW KABUSA EXPRESS ROAD, APO MECHANIC VILLAGE,ABUJA.",
    },
    {
      img: eventImg3,
      title: "WEEP NO MORE",
      date: "November 7th - 9th",
      time: "4PM W.A.T",
      location: "NIBO CIVIC CENTER AWKA SOUTH LGA ANAMBRA",
    },
    {
      img: eventImg2,
      title: "VIEW ALL UPCOMING ANNOUNCEMENTS",
      date: null,
      time: null,
      location: null,
      overlay: true,
    },
  ];

  return (
    <>
      <section className="h-fit lg:h-screen bg-white flex flex-col text-center gap-20 pb-24 lg:pb-48">
        <div className="flex flex-col gap-4 px-6">
          <h5 className="text-xl text-primary font-semibold">EVENTS</h5>
          <p className="text-3xl font-trajan">
            Upcoming Shiloh Word Chapel Events
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-10 lg:gap-x-0 lg:gap-y-20 px-4 lg:px-16">
          {events.map((event, idx) => (
            <div
              key={idx}
              className={`flex w-full lg:w-[535px] h-[289px] lg:h-[341px] rounded-[29px] items-center px-[13px] py-[26px] lg:p-[26px] gap-3 lg:gap-7 bg-gradient-to-l from-white to-[#DBE2FD] shadow-2xl relative overflow-hidden`}
            >
              {event.overlay && (
                <div
                  className="lg:hidden absolute w-[151px] h-[200px] rounded-[8px] z-10 pointer-events-none"
                  style={{ background: "rgba(0,0,0,0.5)" }}
                ></div>
              )}
              <img
                src={event.img}
                alt="Event Image"
                className="w-[151px] lg:w-[253px] h-[200px] lg:h-[289px] rounded-[8px] relative z-0"
              />
              <div
                className={`flex flex-col lg:h-fit gap-2 lg:gap-4 text-left text-primary relative z-20 ${
                  event.overlay ? "justify-center" : ""
                }`}
              >
                <p className="font-bold text-xl lg:text-2xl">{event.title}</p>
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
