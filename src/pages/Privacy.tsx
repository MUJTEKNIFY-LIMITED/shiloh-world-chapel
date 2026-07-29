import Hero from "../components/sections/Hero";
import Footer from "../components/sections/Footer";

const Privacy = () => {
  return (
    <>
      <Hero />
      <main className="py-16 lg:py-24 bg-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col gap-8 text-gray-800 font-sans">
        <div className="flex flex-col gap-3 text-center">
          <span className="text-xs uppercase font-bold text-[#D9A229] tracking-widest font-trajan bg-[#071b65]/5 px-4 py-1.5 rounded-full w-fit mx-auto">
            INFORMATIONAL POLICY
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-trajan text-[#071b65]">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 font-sans">
            Last Updated: July 2026
          </p>
        </div>

        <div className="flex flex-col gap-6 text-sm sm:text-base leading-relaxed bg-[#f8fafc] p-6 sm:p-10 rounded-3xl border border-gray-200">
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold font-trajan text-[#071b65]">1. Overview</h2>
            <p>
              Shiloh Word Chapel respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how information collected through prayer request forms, contact inquiries, and partnership registration is handled.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold font-trajan text-[#071b65]">2. Information Collection & Use</h2>
            <p>
              We collect information voluntarily submitted by visitors, including name, phone number, prayer requests, and contact details. This information is used strictly for pastoral prayer support, ministry communication, and event notifications.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold font-trajan text-[#071b65]">3. Confidentiality of Prayer Requests</h2>
            <p>
              All prayer requests submitted to Shiloh Word Chapel are kept strictly confidential within the intercessory prayer team led by Prophet I.O Samuel.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold font-trajan text-[#071b65]">4. Contact Us</h2>
            <p>
              If you have questions regarding this policy, please reach out via email to <a href="mailto:samueliykejesus@gmail.com" className="text-[#071b65] font-semibold underline">samueliykejesus@gmail.com</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
