import { useRef } from "react";
import Hero from "../components/sections/Hero.tsx";
import MissionSection from "../components/sections/MissionSection.tsx";
import ConnectSection from "../components/sections/ConnectSection.tsx";
import ProphetSection from "../components/sections/ProphetSection.tsx";
import PrayerRequestSection from "../components/sections/PrayerRequestSection.tsx";
import ProphetQuotesSection from "../components/sections/ProphetQuotesSection.tsx";
import BookSection from "../components/sections/BookSection.tsx";
import EventsSection from "../components/sections/EventsSection.tsx";
import TestimonialSection from "../components/sections/TestimonialSection.tsx";
import DownloadAppSection from "../components/sections/DownloadAppSection.tsx";
import Footer from "../components/sections/Footer.tsx";
import AnniversaryModal from "../components/overlays/AnniversaryModal.tsx";
import AnniversarySection from "../components/sections/AnniversarySection.tsx";
import MinistryMediaSection from "../components/sections/MinistryMediaSection.tsx";

const Home = () => {
  const anniversarySectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToAnniversaryVideo = () => {
    const el = document.getElementById("anniversary-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 15th Anniversary Promotional Modal */}
      <AnniversaryModal onOpenVideoSection={scrollToAnniversaryVideo} />

      <main className="flex flex-col min-h-screen bg-white">
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. 15th Anniversary Feature Section */}
        <div ref={anniversarySectionRef}>
          <AnniversarySection />
        </div>

        {/* 3. Ministry Pillars */}
        <MissionSection />

        {/* 4. Recent Encounters & Sermons */}
        <MinistryMediaSection />

        {/* 5. Shiloh International Prayer Line */}
        <ConnectSection />

        {/* 6. About Prophet I.O Samuel (LOCKED & UNCHANGED) */}
        <ProphetSection />

        {/* 7. Need Prayer? Stand in Faith */}
        <PrayerRequestSection />

        {/* 8. Restored Prophet Quotes Section */}
        <ProphetQuotesSection />

        {/* 9. Books & Resources Carousel */}
        <BookSection />

        {/* 10. Upcoming Events (Anniversary First & Event Details Modal) */}
        <EventsSection />

        {/* 11. Testimonies: What God Has Done (Genuine written testimonies) */}
        <TestimonialSection />

        {/* 12. Official Mobile App Section */}
        <DownloadAppSection />
      </main>

      {/* 13. Footer */}
      <Footer />
    </>
  );
};

export default Home;
