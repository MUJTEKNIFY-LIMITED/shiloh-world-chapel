import { useRef } from "react";
import Hero from "../components/sections/Hero.tsx";
import MissionSection from "../components/sections/MissionSection.tsx";
import ConnectSection from "../components/sections/ConnectSection.tsx";
import ProphetSection from "../components/sections/ProphetSection.tsx";
import PrayerRequestSection from "../components/sections/PrayerRequestSection.tsx";
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
      {/* 15th Anniversary Entry Promotional Modal */}
      <AnniversaryModal onOpenVideoSection={scrollToAnniversaryVideo} />

      <main className="flex flex-col min-h-screen bg-white">
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. 15th Anniversary Prominent Feature Section */}
        <div ref={anniversarySectionRef}>
          <AnniversarySection />
        </div>

        {/* 3. Ministry Pillars: Prophecy, Prayer, Healing & Deliverance */}
        <MissionSection />

        {/* 4. Recent Encounters, Prophecies & Sermons */}
        <MinistryMediaSection />

        {/* 5. Shiloh International Prayer Line */}
        <ConnectSection />

        {/* 6. About Prophet I.O Samuel */}
        <ProphetSection />

        {/* 7. Need Prayer? Stand in Faith */}
        <PrayerRequestSection />

        {/* 8. Books & Resources */}
        <BookSection />

        {/* 9. Upcoming Events */}
        <EventsSection />

        {/* 10. Testimonies: What God Has Done */}
        <TestimonialSection />

        {/* 11. Official Mobile App */}
        <DownloadAppSection />
      </main>

      {/* 12. Footer */}
      <Footer />
    </>
  );
};

export default Home;
