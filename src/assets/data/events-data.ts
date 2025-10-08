import eventImg1 from "../../assets/images/events/event-img-1.jpg";
import eventImg2 from "../../assets/images/events/event-img-2.jpg";
import eventImg3 from "../../assets/images/events/event-img-3.jpg";

type Events = {
  image: string;
  title: string;
  date: any;
  time: any;
  location: any;
  overlay: boolean;
};

export const events: Events[] = [
  {
    image: eventImg1,
    title: "S.W.C SUNDAY SERVICE",
    date: "Every Sunday",
    time: "9AM W.A.T",
    location:
      "SHILOH WORD CHAPEL, ALONG NEW KABUSA EXPRESS ROAD, APO MECHANIC VILLAGE,ABUJA.",
    overlay: false,
  },
  {
    image: eventImg2,
    title: "HOLY GHOST WONDER SERVICE",
    date: "September 3rd, 10th, 17th, 21st",
    time: "3PM W.A.T",
    location:
      "SHILOH WORD CHAPEL, ALONG NEW KABUSA EXPRESS ROAD, APO MECHANIC VILLAGE,ABUJA.",
    overlay: false,
  },
  {
    image: eventImg3,
    title: "WEEP NO MORE",
    date: "November 7th - 9th",
    time: "4PM W.A.T",
    location: "NIBO CIVIC CENTER AWKA SOUTH LGA ANAMBRA",
    overlay: false,
  },
  {
    image: eventImg2,
    title: "VIEW ALL UPCOMING ANNOUNCEMENTS",
    date: null,
    time: null,
    location: null,
    overlay: true,
  },
];
