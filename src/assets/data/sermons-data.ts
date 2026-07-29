import Prophet1 from "../images/new_media/Prophet 1.jpg";
import Prophet2 from "../images/new_media/Prophet 2.jpg";
import Prophet3 from "../images/new_media/Prophet 3.jpg";
import Prophet4 from "../images/new_media/Prophet 4.jpg";
import Prophet5 from "../images/new_media/Prophet 5.jpg";
import Prophet6 from "../images/new_media/Prophet 6.jpg";
import Prophet7 from "../images/new_media/Prophet 7.jpg";
import Prophet10 from "../images/new_media/Prophet 10.jpg";
import Prophet12 from "../images/new_media/Prophet 12.jpg";
import Prophet13 from "../images/new_media/Prophet 13.webp";
import ProphetCharm from "../images/new_media/Prophet Charm.jpg";
import ProphetDeclaration from "../images/new_media/Prophet declaration.jpg";
import ProphetOctopus from "../images/new_media/Prophet Octopus.jpg";
import TestimonyImg from "../images/new_media/Testimony.png";
import Slider9 from "../images/new_media/Slider 9.jpg";

export type SermonCategory =
  | "All"
  | "Sermons"
  | "Prophetic Declarations"
  | "Prophecies"
  | "National Prophecies"
  | "Healing"
  | "Deliverance"
  | "Testimonies"
  | "Encouraging Words";

export type SermonItem = {
  id: string;
  image: string;
  title: string;
  speaker: string;
  date: string;
  category: SermonCategory;
  videoUrl: string;
  featured?: boolean;
  description?: string;
  isPortrait?: boolean;
};

export const ministryCategories: SermonCategory[] = [
  "All",
  "Sermons",
  "Prophetic Declarations",
  "Prophecies",
  "National Prophecies",
  "Healing",
  "Deliverance",
  "Testimonies",
  "Encouraging Words",
];

export const sermonViewButton: SermonItem[] = [
  {
    id: "encouraging-words",
    image: Slider9,
    title: "Encouraging Words — Prophet I.O Samuel",
    speaker: "Prophet I.O Samuel",
    date: "Recent Ministry Release",
    category: "Encouraging Words",
    videoUrl: "https://web.facebook.com/share/v/187TdUemH4/",
    featured: true,
    description: "An uplifting prophetic message of hope, strength, and divine direction for your daily walk with God.",
  },
  {
    id: "prophetic-decree",
    image: ProphetDeclaration,
    title: "Prophetic Decree",
    speaker: "Prophet I.O Samuel",
    date: "Live Declaration",
    category: "Prophetic Declarations",
    videoUrl: "https://web.facebook.com/share/v/1CC2QzMPES/",
    featured: true,
    description: "Powerful apostolic and prophetic decrees breaking limitations and establishing God's word over your life.",
  },
  {
    id: "healing-kidney-disease",
    image: Prophet1,
    title: "Prophet I.O Samuel Ministers Healing to 11-Year-Old Boy Battling Kidney Disease",
    speaker: "Prophet I.O Samuel",
    date: "Miracle Healing Service",
    category: "Healing",
    videoUrl: "https://web.facebook.com/share/v/18qecMHkwm/",
    featured: true,
    description: "Witness the miraculous power of God as Prophet I.O Samuel prays for divine healing for a young boy.",
  },
  {
    id: "deliverance-octopus-spirit",
    image: ProphetOctopus,
    title: "Delivered From the Spirit of Octopus",
    speaker: "Prophet I.O Samuel",
    date: "Deliverance Encounter",
    category: "Deliverance",
    videoUrl: "https://web.facebook.com/share/v/14ogKhUJS1c/",
    featured: true,
    description: "An intense deliverance service breaking demonic strongholds and spiritual entanglements through prophetic power.",
  },
  {
    id: "prophecy-world-cup",
    image: Prophet2,
    title: "Prophet I.O Samuel Gave an Accurate Prophecy Concerning the World Cup Final",
    speaker: "Prophet I.O Samuel",
    date: "Prophetic Fulfillment",
    category: "Prophecies",
    videoUrl: "https://web.facebook.com/share/v/1CBEM2KtUi/",
    featured: false,
    description: "Documented global prophecy delivered by Prophet I.O Samuel and verified by international events.",
  },
  {
    id: "prophecy-2023-celebrity",
    image: Prophet3,
    title: "A Prophecy Shared in 2023 Gains Renewed Attention Following Recent Celebrity Tragedies",
    speaker: "Prophet I.O Samuel",
    date: "Prophetic Warning",
    category: "Prophecies",
    videoUrl: "https://web.facebook.com/share/v/1DLN2b1MKA/",
    featured: false,
    description: "Detailed archive of prophetic warnings fulfilled with astounding precision across public figures.",
  },
  {
    id: "deliverance-epilepsy",
    image: Prophet4,
    title: "Deliverance From the Spirit of Epilepsy",
    speaker: "Prophet I.O Samuel",
    date: "Healing & Deliverance",
    category: "Deliverance",
    videoUrl: "https://web.facebook.com/share/v/1CCAyTUovY/",
    featured: false,
    description: "Divine restoration and complete freedom from years of epileptic seizures during prayer service.",
  },
  {
    id: "deliverance-business-charm",
    image: ProphetCharm,
    title: "Prophet I.O Samuel Delivered a Young Man Who Went to a Native Doctor for Business Growth",
    speaker: "Prophet I.O Samuel",
    date: "Breakthrough Deliverance",
    category: "Deliverance",
    videoUrl: "https://web.facebook.com/share/v/1Ciyes4wYd/",
    featured: true,
    description: "Demonic covenants destroyed and genuine financial breakthrough established through Christ.",
  },
  {
    id: "national-prophecy-ambassador",
    image: Prophet5,
    title: "Prophet I.O Samuel Issued a Warning to the Federal Government About Ambassadorial Position",
    speaker: "Prophet I.O Samuel",
    date: "National Prophetic Direction",
    category: "National Prophecies",
    videoUrl: "https://web.facebook.com/share/v/17d9hunszT/",
    featured: true,
    description: "Prophetic council and national warnings issued to governance leaders in Nigeria and Africa.",
  },
  {
    id: "sermon-angels-on-guard",
    image: Prophet6,
    title: "Angels on Guard — Prophet I.O Samuel",
    speaker: "Prophet I.O Samuel",
    date: "Sermon Series",
    category: "Sermons",
    videoUrl: "https://web.facebook.com/share/v/19DardhMn7/",
    featured: false,
    description: "Deep spiritual teaching on angelic ministry, divine protection, and spiritual warfare.",
  },
  {
    id: "sermon-lion-tribe-judah",
    image: Prophet7,
    title: "The Power of the Lion of the Tribe of Judah",
    speaker: "Prophet I.O Samuel",
    date: "Sermon Series",
    category: "Sermons",
    videoUrl: "https://web.facebook.com/share/v/1QCgJjnFnd/",
    featured: false,
    description: "Unveiling the unstoppable dominion and authority of Christ over every circumstance.",
  },
  {
    id: "sermon-seek-god-first",
    image: Prophet10,
    title: "The Ultimate Priority: Seek God First",
    speaker: "Prophet I.O Samuel",
    date: "Kingdom Wisdom",
    category: "Sermons",
    videoUrl: "https://web.facebook.com/share/r/1ELdMkVZpD/",
    featured: false,
    description: "Foundational spiritual truths on aligning your life with the Kingdom of God for supernatural increase.",
  },
  {
    id: "sermon-tattoos-in-body-of-christ",
    image: Prophet12,
    title: "Prophet I.O Samuel Speaking About Tattoos Among Leaders in the Body of Christ",
    speaker: "Prophet I.O Samuel",
    date: "Spiritual Integrity",
    category: "Sermons",
    videoUrl: "https://web.facebook.com/share/v/1MU9NEhsBs/",
    featured: false,
    description: "A frank, biblical doctrine address on consecration, leadership, and purity in modern ministry.",
  },
  {
    id: "sermon-slowly-but-surely",
    image: Prophet13,
    title: "Slowly But Surely — Prophet I.O Samuel",
    speaker: "Prophet I.O Samuel",
    date: "Prophetic Encouragement",
    category: "Sermons",
    videoUrl: "https://web.facebook.com/share/v/1Ehg43Wgpr/",
    featured: false,
    description: "Understanding God's timing, process, and steady elevation without compromising divine principles.",
  },
  {
    id: "testimony-mind-blowing-breakthrough",
    image: TestimonyImg,
    title: "Mind-Blowing Breakthrough Testimony",
    speaker: "Shiloh Word Chapel Member",
    date: "Testimony of Transformation",
    category: "Testimonies",
    videoUrl: "https://web.facebook.com/share/v/1KVw8yBMNs/",
    featured: true,
    description: "An extraordinary testimony of supernatural breakthrough, divine intervention, and total restoration.",
  },
];
