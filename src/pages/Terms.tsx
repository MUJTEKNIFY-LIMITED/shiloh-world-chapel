import Hero from "../components/sections/Hero";
import Footer from "../components/sections/Footer";

const Terms = () => {
  return (
    <>
      <Hero />
      <main className="py-16 lg:py-24 bg-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col gap-8 text-gray-800 font-sans">
        <div className="flex flex-col gap-3 text-center">
          <span className="text-xs uppercase font-bold text-[#D9A229] tracking-widest font-trajan bg-[#071b65]/5 px-4 py-1.5 rounded-full w-fit mx-auto">
            MINISTRY GUIDELINES
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-trajan text-[#071b65]">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 font-sans">
            Last Updated: July 2026
          </p>
        </div>

        <div className="flex flex-col gap-6 text-sm sm:text-base leading-relaxed bg-[#f8fafc] p-6 sm:p-10 rounded-3xl border border-gray-200">
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold font-trajan text-[#071b65]">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the official Shiloh Word Chapel website, you agree to comply with these terms of service and all applicable laws and regulations.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold font-trajan text-[#071b65]">2. Ministry Content & Media</h2>
            <p>
              All video broadcasts, audio sermons, photographs, books, and written publications are the intellectual property of Shiloh Word Chapel and Prophet I.O Samuel. Media may be shared for non-commercial spiritual encouragement with proper attribution.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold font-trajan text-[#071b65]">3. Partnerships & Giving</h2>
            <p>
              Donations and covenant seeds made to Shiloh Word Chapel or the Shiloh Samaritan Foundation support gospel advancement, community relief, and international prayerline operations.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold font-trajan text-[#071b65]">4. Contact Information</h2>
            <p>
              For inquiries regarding ministry broadcasts or events, contact Shiloh Word Chapel at Apo Mechanic Village, Abuja, Nigeria.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
