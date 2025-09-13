
// import Footer from "../components/Footer";
import Hero from "../components/Hero"; 
import MissionSection from "../components/MissionSection.tsx";
import ConnectSection from "../components/ConnectSection.tsx";
import CharitySection from "../components/CharitySection.tsx";

const Home = () => {
  return (
    <>
      <main className="h-screen flex flex-col gap-12">
        <Hero />
        <MissionSection />
        <ConnectSection />
        <CharitySection />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
