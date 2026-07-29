import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Sermons from "./pages/Sermons.tsx";
import Gallery from "./pages/Gallery.tsx";
import Events from "./pages/Events.tsx";
import Contact from "./pages/Contact.tsx";
import Partnerships from "./pages/Partnerships.tsx";
import BookPurchase from "./pages/BookPurchase.tsx";
import Foundation from "./pages/Foundation.tsx";
import SermonMediaPlayer from "./pages/SermonMediaPlayer.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";

const App = () => {
  return (
    <BrowserRouter>
      {/* Global ScrollToTop ensures every new route navigation starts at (0,0) */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/book-purchase" element={<BookPurchase />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/sermon-media-player" element={<SermonMediaPlayer />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;