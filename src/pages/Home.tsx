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

const Home = () => {
  return (
    <>
      <main className="flex flex-col">
        <Hero />
        <MissionSection />
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
