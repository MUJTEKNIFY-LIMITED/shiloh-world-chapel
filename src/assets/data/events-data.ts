import anniversaryFlyer from "../../assets/images/new_media/Annivasary Flyer.jpg";
import eventImg1 from "../../assets/images/events/event-img-1.jpg";
import eventImg2 from "../../assets/images/events/event-img-2.jpg";
import eventImg3 from "../../assets/images/events/event-img-3.jpg";

export type EventItem = {
  id: string;
  image: string;
  title: string;
  date?: string;
  time?: string;
  location?: string;
  description?: string;
  overlay?: boolean;
};

export const events: EventItem[] = [
  {
    id: "anniversary-15th",
    image: anniversaryFlyer,
    title: "15TH ANNIVERSARY: THERE SHALL BE SHOWERS OF BLESSINGS",
    date: "29th – 31st July 2026",
    time: "3:00 PM Daily W.A.T",
    location: "Shiloh Word Chapel, Along New Kabusa Express Road, Apo Mechanic Village, Abuja",
    description: "Join Prophet I.O Samuel and the global family of Shiloh Word Chapel for 3 explosive days of prophetic declarations, miracle healings, deliverance, and praise as we mark 15 years of divine faithfulness.",
    overlay: false,
  },
  {
    id: "sunday-service",
    image: eventImg1,
    title: "S.W.C SUNDAY PROPHETIC SERVICE",
    date: "Every Sunday",
    time: "9:00 AM W.A.T",
    location: "Shiloh Word Chapel, Along New Kabusa Express Road, Apo Mechanic Village, Abuja",
    description: "Experience explosive worship, prophetic words of knowledge, healing prayerlines, and deliverance every Sunday with Prophet I.O Samuel.",
    overlay: false,
  },
  {
    id: "holy-ghost-wonder",
    image: eventImg2,
    title: "HOLY GHOST WONDER SERVICE",
    date: "Midweek Encounters",
    time: "3:00 PM W.A.T",
    location: "Shiloh Word Chapel, Along New Kabusa Express Road, Apo Mechanic Village, Abuja",
    description: "A specialized midweek service for intense intercession, supernatural deliverance, and words of wisdom.",
    overlay: false,
  },
  {
    id: "weep-no-more",
    image: eventImg3,
    title: "WEEP NO MORE PROPHETIC CRUSADE",
    date: "Special Outreach",
    time: "4:00 PM W.A.T",
    location: "Nibo Civic Center, Awka South LGA, Anambra State",
    description: "Prophetic outreach crusade bringing divine comfort, miraculous healing, and breakthrough to the afflicted.",
    overlay: false,
  },
];
