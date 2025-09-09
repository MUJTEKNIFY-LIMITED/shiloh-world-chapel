import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Partnerships from "./pages/Partnerships";
import BookPurchase from "./pages/BookPurchase";
import Foundation from "./pages/Foundation";


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