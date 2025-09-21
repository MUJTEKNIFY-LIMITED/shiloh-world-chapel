
// import Footer from "../components/Footer";
import Hero from "../components/Hero"; 
import MissionSection from "../components/MissionSection.tsx";
import ConnectSection from "../components/ConnectSection.tsx";
import CharitySection from "../components/CharitySection.tsx";
// import PrayerRequestSection from "../components/PrayerRequestSection.tsx";
import BookSection from "../components/BookSection.tsx";
import EventsSection from "../components/EventsSection.tsx";

const Home = () => {
  return (
    <>
      <main className="h-screen flex flex-col gap-12">
        <Hero />
        <MissionSection />
        <ConnectSection />
        <CharitySection />
        {/* <PrayerRequestSection /> */}
        <BookSection />
        <EventsSection />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
