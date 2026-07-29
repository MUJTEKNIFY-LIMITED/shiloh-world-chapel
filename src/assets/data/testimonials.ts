export type Testimonial = {
  id: string;
  title: string;
  shortText: string;
  fullText: string;
  author: string;
  location?: string;
  videoUrl?: string;
  isVideo?: boolean;
  category?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "mind-blowing-breakthrough",
    title: "MIND-BLOWING BREAKTHROUGH TESTIMONY",
    shortText: "Watch this incredible live testimony of divine intervention, financial release, and supernatural breakthrough experienced through the prophetic ministry at Shiloh Word Chapel.",
    fullText: "Watch this incredible live testimony of divine intervention, financial release, and supernatural breakthrough experienced through the prophetic ministry at Shiloh Word Chapel.",
    author: "TESTIMONY OF TRANSFORMATION",
    videoUrl: "https://web.facebook.com/share/v/1KVw8yBMNs/",
    isVideo: true,
    category: "Supernatural Breakthrough",
  },
  {
    id: "sunday-ezekiel-breakthrough",
    title: "BREAKTHROUGH AFTER EIGHT MONTHS OF FINANCIAL LIMITATION",
    shortText: "For over eight months, Sunday Ezekiel, a Mechanical Engineer specialising in Range Rover and Jaguar vehicles, was without a single job and forced to sell personal belongings...",
    fullText: "For over eight months, Sunday Ezekiel, a Mechanical Engineer specialising in Range Rover and Jaguar vehicles, was without a single job. Life became so difficult that he sold personal belongings, including his phone, just to survive. Whenever a little money came into his hands, it would finish before another opportunity appeared. During his first visit to Shiloh Word Chapel in June 2026, he registered for the Prayer Line. During prayer, Prophet I.O Samuel gave a prophetic word concerning the root of the limitation affecting his finances and prayed for his deliverance. Following the prayer encounter, Sunday testified that his breakthrough began immediately. When he returned home that same Sunday, he discovered missed calls from clients in Benin and Lagos requesting his services. Another opportunity subsequently came from Makurdi. After previously struggling to secure a workshop, a friend also offered him a shop and allowed him to begin using it immediately, with payment deferred until he became financially stable. Since the encounter, he testified that jobs have continued to come consistently and the cycle of financial limitation was broken. To God be all the glory.",
    author: "SUNDAY EZEKIEL",
    location: "Benue State (Resides in Abuja)",
    category: "Financial Breakthrough & Deliverance",
  },
  {
    id: "chimiezie-car-prophecy",
    title: "CAR PROPHECY FULFILLED WITHIN DAYS",
    shortText: "During a prophetic encounter with Prophet I.O Samuel, Chimiezie Emmanuel received the 2026 prophetic sticker 'Dry Bones Shall Rise Again' and a word concerning a car...",
    fullText: "During a prophetic encounter with Prophet I.O Samuel, Chimiezie Emmanuel received the Shiloh Word Chapel 2026 prophetic sticker carrying the declaration: 'Dry Bones Shall Rise Again.' The man of God prophetically told him that he saw a car coming and instructed him to place the sticker in the vehicle when the prophecy was fulfilled. Within approximately ten days, Chimiezie's boss gave him a car. What had been spoken prophetically became a testimony within days. The testimony became another confirmation of the prophetic word released over his life. To God alone be all the glory.",
    author: "CHIMIEZIE EMMANUEL",
    location: "Enugu State (Resides in Abuja)",
    category: "Prophetic Fulfillment",
  },
  {
    id: "ifeanyi-mother-restored",
    title: "MOTHER RESTORED AFTER SEVERE MEDICAL EMERGENCY",
    shortText: "Ifeanyi testified that after his mother had been ill for months, she suffered a severe medical emergency while in hospital and became unresponsive...",
    fullText: "Ifeanyi testified that after his mother had been ill for months, she suffered a severe medical emergency while in hospital and became unresponsive. As her only son, he turned to God in prayer using the ministry's 2026 'Dry Bones Shall Rise Again' sticker and the Blood of Jesus anointing water he had previously received. He testified that after placing the sticker on his mother's chest, praying and ministering the anointing water, she regained consciousness shortly afterwards. He returned to Shiloh Word Chapel to thank God for her restoration. To God be all the glory.",
    author: "IFEANYI CHUKUKA",
    location: "Anambra State (Resides in Abuja)",
    category: "Divine Healing & Restoration",
  },
];
