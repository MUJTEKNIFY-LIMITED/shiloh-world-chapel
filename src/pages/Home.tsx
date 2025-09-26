import Hero from "../components/Hero";
import MissionSection from "../components/MissionSection.tsx";
import ConnectSection from "../components/ConnectSection.tsx";
import CharitySection from "../components/CharitySection.tsx";
// import PrayerRequestSection from "../components/PrayerRequestSection.tsx";
import BookSection from "../components/BookSection.tsx";
import EventsSection from "../components/EventsSection.tsx";
import TestimonialSection from "../components/TestimonialSection.tsx";
import DownloadAppSection from "../components/DownloadAppSection.tsx";
import Footer from "../components/Footer.tsx";

const Home = () => {
  return (
    <>
      <main className="flex flex-col gap-12">
        <Hero />
        <MissionSection />
        <ConnectSection />
        <CharitySection />
        {/* <PrayerRequestSection /> */}
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
