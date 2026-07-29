import Gallery1 from "../images/new_media/Gallery 1.jpg";
import Gallery2 from "../images/new_media/Gallery 2.jpg";
import Gallery3 from "../images/new_media/Gallery 3.jpg";
import Gallery4 from "../images/new_media/Gallery 4.jpg";
import Gallery5 from "../images/new_media/Gallery 5.jpg";
import Gallery6 from "../images/new_media/Gallery 6.jpg";
import Gallery7 from "../images/new_media/Gallery 7.jpg";
import Gallery8 from "../images/new_media/Gallery 8.jpg";
import Gallery9 from "../images/new_media/Gallery 9.jpg";
import Gallery10 from "../images/new_media/Gallery 10.jpg";
import Gallery11 from "../images/new_media/Gallery 11.jpg";
import Gallery12 from "../images/new_media/Gallery 12.jpg";
import Gallery13 from "../images/new_media/Gallery 13.jpg";
import Gallery15 from "../images/new_media/Gallery 15.jpg";
import Gallery16 from "../images/new_media/Gallery 16.jpg";
import Gallery17 from "../images/new_media/Gallery 17.jpg";
import Prophet1 from "../images/new_media/Prophet 1.jpg";
import Prophet2 from "../images/new_media/Prophet 2.jpg";
import Prophet3 from "../images/new_media/Prophet 3.jpg";
import Prophet5 from "../images/new_media/Prophet 5.jpg";
import Prophet6 from "../images/new_media/Prophet 6.jpg";
import Prophet7 from "../images/new_media/Prophet 7.jpg";
import Prophet10 from "../images/new_media/Prophet 10.jpg";
import Prophet12 from "../images/new_media/Prophet 12.jpg";
import Prophet13 from "../images/new_media/Prophet 13.webp";

export type GalleryImage = {
  id: string;
  image: string;
  title: string;
  category?: string;
};

export const images: GalleryImage[] = [
  { id: "g1", image: Gallery1, title: "Prophetic Service & Worship" },
  { id: "g2", image: Gallery2, title: "Deliverance Encounter" },
  { id: "g3", image: Gallery3, title: "Prophet I.O Samuel Ministering" },
  { id: "g4", image: Gallery4, title: "Worship & Praise Atmosphere" },
  { id: "g5", image: Gallery5, title: "Prayer Line & Healing" },
  { id: "g6", image: Gallery6, title: "Shiloh Word Chapel Congregation" },
  { id: "g7", image: Gallery7, title: "Prophetic Word & Decrees" },
  { id: "g8", image: Gallery8, title: "Apostolic Service Encounter" },
  { id: "g9", image: Gallery9, title: "Special Miracle Service" },
  { id: "g10", image: Gallery10, title: "Prophet I.O Samuel Teaching" },
  { id: "g11", image: Gallery11, title: "Anointing & Impartation" },
  { id: "g12", image: Gallery12, title: "Divine Breakthrough Encounters" },
  { id: "g13", image: Gallery13, title: "Shiloh Word Chapel Worshipers" },
  { id: "g15", image: Gallery15, title: "Prophetic Intercession" },
  { id: "g16", image: Gallery16, title: "Glory Service Gathering" },
  { id: "g17", image: Gallery17, title: "Apostolic Grace Encounter" },
  { id: "p1", image: Prophet1, title: "Prophet I.O Samuel Healing Service" },
  { id: "p2", image: Prophet2, title: "Global Prophetic Witness" },
  { id: "p3", image: Prophet3, title: "Prophetic Declaration & Warning" },
  { id: "p5", image: Prophet5, title: "National Prophetic Direction" },
  { id: "p6", image: Prophet6, title: "Angels on Guard Service" },
  { id: "p7", image: Prophet7, title: "Lion of Judah Service" },
  { id: "p10", image: Prophet10, title: "Prophet I.O Samuel Leadership" },
  { id: "p12", image: Prophet12, title: "Ministry Address & Teaching" },
  { id: "p13", image: Prophet13, title: "Prophetic Encouragement" },
];
