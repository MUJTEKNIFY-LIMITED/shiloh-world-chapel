import facebookIcon from "../../assets/icons/social-icons/blue-social-icons/blue-facebook-icon.svg";
import instagramIcon from "../../assets/icons/social-icons/blue-social-icons/blue-instagram-icon.svg";
import twitterIcon from "../../assets/icons/social-icons/blue-social-icons/blue-twitter-icon.svg";
import youtubeIcon from "../../assets/icons/social-icons/blue-social-icons/blue-youtube-icon.svg";
import callIcon from "../../assets/icons/call.svg";
import mailIcon from "../../assets/icons/mail.svg";
import locationPinIcon from "../../assets/icons/location-pin-icon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#071b65] flex flex-col gap-12 pt-16 pb-6 text-white border-t border-[#D9A229]/30">
      <div className="flex flex-col xl:flex-row gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full justify-between">
        
        {/* Ministry Info & Social Links */}
        <div className="flex flex-col gap-6 max-w-md">
          <h4 className="font-bold text-2xl font-trajan text-[#D9A229]">Shiloh Word Chapel</h4>
          <p className="text-xs sm:text-sm text-gray-200 font-sans leading-relaxed">
            Shiloh Word Chapel is a prophetic ministry committed to prayer, the Word, healing, deliverance and transforming lives through the power of Jesus Christ.
          </p>
          <div className="flex gap-3">
            <a
              href="https://web.facebook.com/shilohwordchapel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[#D9A229] transition-colors shadow"
              aria-label="Facebook"
            >
              <img className="w-4 h-4" src={facebookIcon} alt="Facebook" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[#D9A229] transition-colors shadow"
              aria-label="Instagram"
            >
              <img className="w-4 h-4" src={instagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[#D9A229] transition-colors shadow"
              aria-label="Twitter"
            >
              <img className="w-4 h-4" src={twitterIcon} alt="Twitter" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[#D9A229] transition-colors shadow"
              aria-label="YouTube"
            >
              <img className="w-4 h-4" src={youtubeIcon} alt="YouTube" />
            </a>
          </div>
        </div>

        {/* Support & Quick Links */}
        <div className="flex flex-col gap-4">
          <h5 className="text-lg font-bold font-trajan text-[#D9A229]">Quick Links</h5>
          <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-200 font-sans">
            <Link to="/about" className="hover:text-[#D9A229] transition-colors">About Prophet I.O Samuel</Link>
            <Link to="/foundation" className="hover:text-[#D9A229] transition-colors">Samaritan Foundation</Link>
            <Link to="/partnerships" className="hover:text-[#D9A229] transition-colors">Partnerships & Giving</Link>
            <Link to="/sermons" className="hover:text-[#D9A229] transition-colors">Sermons & Prophecies</Link>
            <Link to="/events" className="hover:text-[#D9A229] transition-colors">Events & Services</Link>
            <Link to="/privacy" className="hover:text-[#D9A229] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#D9A229] transition-colors">Terms & Conditions</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h5 className="text-lg font-bold font-trajan text-[#D9A229]">Contact Ministry</h5>
          <div className="flex flex-col gap-4 text-xs sm:text-sm text-gray-200 font-sans">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                <img src={callIcon} alt="Phone" className="w-4 h-4" />
              </div>
              <a href="tel:+2347030000004" className="hover:text-[#D9A229] transition-colors">+234 703 000 0004 / +234 813 197 8946</a>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                <img src={mailIcon} alt="Email" className="w-4 h-4" />
              </div>
              <a href="mailto:samueliykejesus@gmail.com" className="hover:text-[#D9A229] transition-colors">samueliykejesus@gmail.com</a>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                <img src={locationPinIcon} alt="Location" className="w-4 h-4" />
              </div>
              <span className="leading-snug max-w-xs">
                Along New Kabusa Express Road, Apo Mechanic Village, Abuja, Nigeria.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-4 text-center text-xs text-gray-400 pt-6 border-t border-white/10">
        <span className="font-trajan font-semibold text-gray-300">Powered By MUJTEKNIFY</span>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>Copyright © SHILOH WORD CHAPEL. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span>•</span>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
