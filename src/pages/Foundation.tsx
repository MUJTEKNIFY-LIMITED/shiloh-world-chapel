import Hero from "../components/Hero";
import CharitySection from "../components/CharitySection";
import Pageination from "../components/Pageination";
import Footer from "../components/Footer";
import { useState } from "react";

const Foundation = () => {
  const [activePage, setActivePage] = useState(1);

  return (
    <>
      <Hero />
      <div className="flex flex-col gap-12 lg:gap-24 my-16 lg:my-32">
        <CharitySection />
        <Pageination activePage={activePage} setActivePage={setActivePage} />
      </div>
      <Footer />
    </>
  );
};

export default Foundation;
