
// import Footer from "../components/Footer";
import Hero from "../components/Hero"; 
import MissionSection from "../components/MissionSection";
import ConnectSection from "../components/ConnectSection"

const Home = () => {
  return (
    <>
      <main className="h-screen flex flex-col gap-12">
        <Hero />
        <MissionSection />
        <ConnectSection />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
