import { useRef } from "react";
import Hero from "../components/sections/Hero.tsx";
import MissionSection from "../components/sections/MissionSection.tsx";
import ConnectSection from "../components/sections/ConnectSection.tsx";
import CharitySection from "../components/sections/CharitySection.tsx";
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
      {/* 15th Anniversary Promotional Modal */}
      <AnniversaryModal onOpenVideoSection={scrollToAnniversaryVideo} />

      <main className="flex flex-col min-h-screen bg-white">
        <Hero />
        
        {/* 15th Anniversary Prominent Feature Section */}
        <div ref={anniversarySectionRef}>
          <AnniversarySection />
        </div>

        <MissionSection />

        {/* Surface Prophetic Media, Healings & Sermons */}
        <MinistryMediaSection />

        <ConnectSection />
        <CharitySection />
        <PrayerRequestSection />
        <BookSection />
        <EventsSection />
        <TestimonialSection />
        <DownloadAppSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
