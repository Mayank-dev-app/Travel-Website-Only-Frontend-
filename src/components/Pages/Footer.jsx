import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">TourDhaam</h2>
          <p className="text-sm">
            Explore sacred destinations with ease. Book your next pilgrimage or tour with us and experience comfort, spirituality, and unforgettable memories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <div className="space-y-2 text-sm flex flex-col">
             <Link to="/" className="hover:text-orange-400 cursor-pointer">Home</Link>
            <Link to="/aboutus" className="hover:text-orange-400 cursor-pointer">About Us</Link>
            <Link to="/tours" className="hover:text-orange-400 cursor-pointer">All Packages</Link>
            <Link to="/contact" className="hover:text-orange-400 cursor-pointer">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> Ayodhya, Uttar Pradesh, India</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><FaEnvelope /> support@tourdhaam.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
          <div className="flex gap-4 text-lg">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer" />
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} TourDhaam. All rights reserved.
      </div>
    </footer>
  );
}
