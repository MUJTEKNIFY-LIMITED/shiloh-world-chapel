import Gallery1 from "../images/new_media/Gallery 1.jpg";
import Gallery2 from "../images/new_media/Gallery 2.jpg";
import Gallery3 from "../images/new_media/Gallery 3.jpg";
import Gallery6 from "../images/new_media/Gallery 6.jpg";
import Gallery7 from "../images/new_media/Gallery 7.jpg";
import Gallery8 from "../images/new_media/Gallery 8.jpg";
import Gallery10 from "../images/new_media/Gallery 10.jpg";
import Gallery11 from "../images/new_media/Gallery 11.jpg";
import Gallery12 from "../images/new_media/Gallery 12.jpg";
import Gallery13 from "../images/new_media/Gallery 13.jpg";
import Gallery15 from "../images/new_media/Gallery 15.jpg";
import Gallery16 from "../images/new_media/Gallery 16.jpg";
import Gallery17 from "../images/new_media/Gallery 17.jpg";
import Slider9 from "../images/new_media/Slider 9.jpg";
import Slider10 from "../images/new_media/Slider 10.jpg";

export type SermonCategory =
  | "All"
  | "Sermons"
  | "Prophetic Declarations"
  | "Prophecies"
  | "National Prophecies"
  | "Healing"
  | "Deliverance"
  | "Prayerline Encounters"
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
    image: Gallery1,
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
    image: Gallery2,
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
    image: Gallery3,
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
    image: Gallery6,
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
    image: Gallery7,
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
    image: Gallery8,
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
    image: Gallery10,
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
    image: Slider10,
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
    image: Gallery11,
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
    image: Gallery12,
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
    image: Gallery13,
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
    image: Gallery15,
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
    image: Gallery16,
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
    image: Gallery17,
    title: "Mind-Blowing Breakthrough Testimony",
    speaker: "Shiloh Word Chapel Member",
    date: "Testimony of Transformation",
    category: "Testimonies",
    videoUrl: "https://web.facebook.com/share/v/1KVw8yBMNs/",
    featured: true,
    description: "An extraordinary testimony of supernatural breakthrough, divine intervention, and total restoration.",
  },
];
