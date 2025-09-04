import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// --- Global Components ---
function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Shiloh World Chapel</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-600">
          About
        </Link>
        <Link to="/sermons" className="hover:text-blue-600">
          Sermons
        </Link>
        <Link to="/gallery" className="hover:text-blue-600">
          Gallery
        </Link>
        <Link to="/events" className="hover:text-blue-600">
          Events
        </Link>
        <Link to="/contact" className="hover:text-blue-600">
          Contact
        </Link>
        <Link to="/partnerships" className="hover:text-blue-600">
          Partnerships
        </Link>
        <Link to="/book-purchase" className="hover:text-blue-600">
          Books
        </Link>
        <Link to="/foundation" className="hover:text-blue-600">
          Foundation
        </Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 p-4 text-center mt-8">
      <p className="text-gray-600">
        © {new Date().getFullYear()} Shiloh World Chapel. All rights reserved.
      </p>
    </footer>
  );
}

// --- Page Components ---
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <h1 className="text-3xl font-bold">{title} Page</h1>
  </div>
);

const Home = () => (
  <div>
    <section className="bg-blue-50 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Shiloh World Chapel
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mx-auto">
        Experience faith, community, and transformation. Join us for services,
        events, and spiritual growth.
      </p>
    </section>
    <section className="py-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div className="p-6 bg-white shadow rounded-xl">Hero / Highlights</div>
      <div className="p-6 bg-white shadow rounded-xl">Testimonials</div>
      <div className="p-6 bg-white shadow rounded-xl">Upcoming Events</div>
    </section>
  </div>
);

const About = () => <Placeholder title="About" />;
const Sermons = () => <Placeholder title="Sermons" />;
const Gallery = () => <Placeholder title="Gallery" />;
const Events = () => <Placeholder title="Events" />;
const Contact = () => <Placeholder title="Contact" />;
const Partnerships = () => <Placeholder title="Partnerships" />;
const BookPurchase = () => <Placeholder title="Book Purchase" />;
const Foundation = () => <Placeholder title="Foundation" />;

// --- App ---
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
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
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
