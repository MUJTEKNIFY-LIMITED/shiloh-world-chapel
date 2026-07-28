export type Testimonial = {
  id: string;
  title: string;
  text: string;
  author: string;
  videoUrl?: string;
  isVideo?: boolean;
  category?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "mind-blowing-breakthrough",
    title: "MIND-BLOWING BREAKTHROUGH TESTIMONY",
    text: "Watch this incredible live testimony of divine intervention, financial release, and supernatural breakthrough experienced through the prophetic ministry at Shiloh Word Chapel.",
    author: "TESTIMONY OF TRANSFORMATION",
    videoUrl: "https://web.facebook.com/share/v/1KVw8yBMNs/",
    isVideo: true,
    category: "Supernatural Breakthrough",
  },
  {
    id: "healed-of-insanity",
    title: "HEALED OF INSANITY BY DIVINE TOUCH",
    text: "Restoration of mental health and total deliverance from mental affliction following prophetic prayer and laying on of hands during Sunday worship service.",
    author: "FLORENCE NWAIWU, IMO STATE",
    category: "Miracle Healing",
  },
  {
    id: "safe-delivery-leg-ulcer",
    title: "SAFE DELIVERY FROM LEG ULCER VIA PROPHECY",
    text: "Long-standing chronic leg ulcer completely dried up and healed after prophetic word of knowledge and anointed prayerline encounter.",
    author: "MRS OKEKE, ANAMBRA STATE",
    category: "Prophetic Healing",
  },
];
