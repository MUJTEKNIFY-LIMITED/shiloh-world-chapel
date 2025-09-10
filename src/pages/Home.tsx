
// import Footer from "../components/Footer";
import Hero from "../components/Hero"; 
import MissionSection from "../components/MissionSection";

const Home = () => {
  return (
    <>
      <main className="h-screen flex flex-col bg-green-700">
        <Hero />
        <MissionSection />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
