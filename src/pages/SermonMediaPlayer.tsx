import NavBar from "../components/NavBar";
import BackButton from "../components/ui/BackButton";
import MediaPlayer from "../components/MediaPlayer";
import Footer from "../components/sections/Footer";
import { useLocation } from "react-router-dom";

const SermonMediaPlayer = () => {
  const location = useLocation();
  // the Sermons page navigates with `state: sermon`
  const sermon = (location.state as any) || null;

  return (
    <>
      <NavBar />
      <main className="flex flex-col md:flex-row gap-8 md:gap-12 px-4 md:px-20 xl:px-36 mt-14">
        <BackButton
          onClick={() => window.history.back()}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              window.history.back();
            }
          }}
        />
        <MediaPlayer
          title={sermon?.title}
          audioSrc={sermon?.audioSrc}
          image={sermon?.image}
          date={sermon?.date}
        />
      </main>
      <Footer />
    </>
  );
};

export default SermonMediaPlayer;
