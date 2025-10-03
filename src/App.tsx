import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Sermons from "./pages/Sermons.tsx";
import Gallery from "./pages/Gallery.tsx";
import Events from "./pages/Events.tsx";
import Contact from "./pages/Contact.tsx";
import Partnerships from "./pages/Partnerships.tsx";
import BookPurchase from "./pages/BookPurchase.tsx";
import Foundation from "./pages/Foundation.tsx";


const App = () =>  {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;