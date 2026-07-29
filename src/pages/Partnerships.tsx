import { useState } from "react";
import Hero from "../components/sections/Hero";
import flutterwaveIcon from "../assets/icons/flutterwave-icon.svg";
import Footer from "../components/sections/Footer";

type AccountItem = {
  bank: string;
  accountNumber: string;
  accountName: string;
  currency: string;
};

const bankAccounts: AccountItem[] = [
  {
    bank: "ZENITH BANK",
    accountNumber: "1012768582",
    accountName: "Shiloh Word Chapel",
    currency: "NGN (Naira)",
  },
  {
    bank: "FIDELITY BANK (USD)",
    accountNumber: "5250099601",
    accountName: "Shiloh Word Chapel",
    currency: "USD ($)",
  },
  {
    bank: "FIDELITY BANK",
    accountNumber: "4011088706",
    accountName: "Shiloh Word Chapel",
    currency: "NGN (Naira)",
  },
  {
    bank: "FIRST BANK",
    accountNumber: "3079061370",
    accountName: "Shiloh Word Chapel",
    currency: "NGN (Naira)",
  },
];

const Partnerships = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (accountNumber: string, idx: number) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <>
      <Hero />
      <main className="py-16 lg:py-24 bg-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-16">
        {/* Why Partnership Matters */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase font-bold text-[#D9A229] tracking-widest font-trajan bg-[#071b65]/5 px-4 py-1.5 rounded-full">
            COVENANT PARTNERSHIP & GIVING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-trajan text-[#071b65]">
            Partnering With Shiloh Word Chapel
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
            Your seed and partnership support global media broadcasts on Shiloh Love TV, international prayerlines, prophetic outreach crusades, and practical charity to widows and orphans through the Samaritan Foundation.
          </p>
        </div>

        {/* Bank Account Cards Grid */}
        <div className="flex flex-col gap-8">
          <h3 className="text-xl sm:text-2xl font-bold font-trajan text-[#071b65] text-center">
            Official Ministry Bank Accounts
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {bankAccounts.map((acc, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#071b65] via-[#0b2685] to-[#040c29] text-white border border-[#D9A229]/40 shadow-xl flex flex-col justify-between gap-6 relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D9A229] font-trajan block">
                      {acc.currency}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold font-trajan text-white mt-1">
                      {acc.bank}
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#D9A229] shrink-0">
                    🏦
                  </div>
                </div>

                <div className="flex flex-col gap-2 p-4 rounded-2xl bg-white/10 border border-white/10">
                  <span className="text-[11px] text-gray-300 font-sans uppercase tracking-wider">Account Name</span>
                  <span className="text-sm font-bold font-trajan text-white">{acc.accountName}</span>
                </div>

                <div className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-black/40 border border-[#D9A229]/50">
                  <div>
                    <span className="text-[10px] text-gray-400 font-sans uppercase tracking-wider block">Account Number</span>
                    <span className="text-xl sm:text-2xl font-mono font-bold text-[#D9A229] tracking-wider">
                      {acc.accountNumber}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(acc.accountNumber, idx)}
                    className="px-4 py-2 rounded-xl bg-[#D9A229] hover:bg-[#f5c760] text-[#071b65] text-xs font-bold font-trajan uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0"
                  >
                    {copiedIndex === idx ? (
                      <span className="text-green-950 font-bold">COPIED!</span>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Payment Flutterwave Option */}
        <div className="rounded-3xl p-8 bg-[#f8fafc] border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 max-w-3xl mx-auto w-full">
          <div className="flex flex-col text-center sm:text-left gap-1">
            <h4 className="text-lg font-bold font-trajan text-[#071b65]">Online Giving via Flutterwave</h4>
            <p className="text-xs text-gray-600 font-sans">Secure online debit/credit card payments & international card giving.</p>
          </div>
          <button className="px-6 py-3.5 rounded-2xl bg-[#071b65] hover:bg-[#0c288d] text-white font-bold text-xs sm:text-sm font-trajan uppercase tracking-wider shadow-md transition-all flex items-center gap-3 shrink-0 whitespace-nowrap">
            <span>DONATE ONLINE</span>
            <img src={flutterwaveIcon} alt="Flutterwave" className="h-5 w-auto" />
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Partnerships;
