import childrenBgImg from "../../assets/images/donation-backgrounds/children-bg-img.jpg";
import donationBgImg from "../../assets/images/donation-backgrounds/donation-bg-img.jpg";
import homelessBgImg from "../../assets/images/donation-backgrounds/homeless-bg-img.jpg";
import roadBgImg from "../../assets/images/donation-backgrounds/road-bg-img.png";
import waterBgImg from "../../assets/images/donation-backgrounds/water-bg-img.png";
import hospitalBgImg from "../../assets/images/donation-backgrounds/hospital-bg-img.png";

type Charity = {
  image: string;
  title: string;
  text: string;
};

export const charity: Charity[] = [
  {
    image: childrenBgImg,
    title: "Education For Poor Children",
    text: "Our aim is to take the children out of the street and give them a better education that will secure their future.",
  },
  {
    image: donationBgImg,
    title: "Donation To The Poor",
    text: "Our aim is to take the children out of the street and give them a better education that will secure their future.",
  },
  {
    image: homelessBgImg,
    title: "Help To The Homeless",
    text: "Our aim is to take the children out of the street and give them a better education that will secure their future.",
  },
  {
    image: roadBgImg,
    title: "Good Road Network",
    text: "Our aim is to take the children out of the street and give them a better education that will secure their future.",
  },
  {
    image: waterBgImg,
    title: "Access To Pure Water",
    text: "Our aim is to take the children out of the street and give them a better education that will secure their future.",
  },
  {
    image: hospitalBgImg,
    title: "Hospital Bills And Equipment",
    text: "Our aim is to take the children out of the street and give them a better education that will secure their future.",
  },
];
