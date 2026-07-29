import Hero from "../components/sections/Hero";
import callIcon from "../assets/icons/call.svg";
import mailIcon from "../assets/icons/mail.svg";
import locationPinIcon from "../assets/icons/location-pin-icon.svg";
import Footer from "../components/sections/Footer";
import Form from "../components/Form";

const Contact = () => {
  const mapAddressQuery = encodeURIComponent("Shiloh Word Chapel, Along New Kabusa Express Road, Apo Mechanic Village, Abuja, Nigeria");
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapAddressQuery}`;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapAddressQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <Hero />
      <main className="py-16 lg:py-24 bg-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Contact Info Header Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-8 rounded-3xl bg-[#f8fafc] border border-gray-200 shadow-sm flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#071b65] flex items-center justify-center text-white shadow-lg">
              <img src={callIcon} alt="Phone" className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-lg font-trajan text-[#071b65]">PHONE NUMBERS</h4>
            <div className="flex flex-col text-xs sm:text-sm text-gray-600 font-sans gap-1">
              <a href="tel:+2347030000004" className="hover:text-[#D9A229] transition-colors">+234 703 000 0004</a>
              <a href="tel:+2348131978946" className="hover:text-[#D9A229] transition-colors">+234 813 197 8946</a>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#f8fafc] border border-gray-200 shadow-sm flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#071b65] flex items-center justify-center text-white shadow-lg">
              <img src={mailIcon} alt="Email" className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-lg font-trajan text-[#071b65]">EMAIL ADDRESS</h4>
            <a href="mailto:samueliykejesus@gmail.com" className="text-xs sm:text-sm text-gray-600 font-sans hover:text-[#D9A229] transition-colors">
              samueliykejesus@gmail.com
            </a>
          </div>

          <div className="p-8 rounded-3xl bg-[#f8fafc] border border-gray-200 shadow-sm flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#071b65] flex items-center justify-center text-white shadow-lg">
              <img src={locationPinIcon} alt="Location" className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-lg font-trajan text-[#071b65]">CHURCH LOCATION</h4>
            <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
              Along New Kabusa Express Road, Apo Mechanic Village, Abuja, Nigeria.
            </p>
          </div>
        </div>

        {/* 2-Column Split: Form (Left) vs Google Maps (Right) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT: Contact Form */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 bg-[#f8fafc] p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase font-bold text-[#D9A229] tracking-widest font-trajan">REACH OUT TO US</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-trajan text-[#071b65]">Send Us A Message</h3>
              <p className="text-xs sm:text-sm text-gray-600 font-sans">
                Our ministry prayer and administrative team will respond to your inquiry promptly.
              </p>
            </div>

            <Form />
          </div>

          {/* RIGHT: Google Maps Location Frame */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 rounded-3xl overflow-hidden bg-gray-900 border border-gray-200 shadow-lg min-h-[400px]">
            <div className="w-full h-full min-h-[380px] relative">
              <iframe
                src={mapEmbedUrl}
                title="Shiloh Word Chapel Location Map"
                className="w-full h-full border-0 min-h-[380px]"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <div className="p-4 bg-[#071b65] text-white flex items-center justify-between gap-4">
              <span className="text-xs font-trajan font-bold truncate">Shiloh Word Chapel — Apo Mechanic, Abuja</span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#D9A229] hover:bg-[#f5c760] text-[#071b65] font-bold text-xs font-trajan uppercase tracking-wider whitespace-nowrap shrink-0"
              >
                OPEN IN MAPS
              </a>
            </div>
          </div>

        </div>

      </main>
      <Footer />
    </>
  );
};

export default Contact;
