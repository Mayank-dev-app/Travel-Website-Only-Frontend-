import React, { useState, useEffect } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { FaUser, FaChevronDown } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { BsList } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm transition-all"
        data-aos="fade-down"
      >
        <div className="flex items-center justify-between px-4 md:px-6 py-3 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <MdTravelExplore className="text-3xl text-orange-600 group-hover:rotate-12 transition-transform" />
            <h1 className="hidden sm:block text-xl md:text-2xl font-bold text-orange-600 font-serif">
              TourDhaam
            </h1>
          </div>

          {/*For Big Screen {Links} */}
          <div className="hidden md:flex font-bold font-serif text-orange-600 justify-center gap-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/aboutus" className="hover:underline">About us</Link>
            <Link to="/tours" className="hover:underline">Our Packages</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 relative">
            {/* Mobile Menu Icon */}
            <BsList
              size={30}
              color="white"
              className="bg-orange-600 rounded-md font-bold md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            />

            {/* Login Button */}
            <button
              className="hidden sm:flex items-center gap-1 text-gray-700 font-semibold hover:text-orange-600 transition-colors"
              onClick={() => {
                setShowLoginDropdown(!showLoginDropdown);
                setShowRegisterDropdown(false);
              }}
            >
              <FaUser /> Login <FaChevronDown className="text-sm" />
            </button>

            {/* Register Button with Dropdown */}
            <button
              className="hidden sm:flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 active:scale-95 transition-transform duration-200 text-white px-4 py-2 rounded-full font-semibold shadow-md"
              onClick={() => {
                setShowRegisterDropdown(!showRegisterDropdown);
                setShowLoginDropdown(false);
              }}
            >
              Create Account <FaChevronDown className="text-sm" />
            </button>

            {/* Login Dropdown */}
            {showLoginDropdown && (
              <div
                className="absolute right-0 top-12 bg-white shadow-lg rounded-md w-52 z-20"
                data-aos="zoom-in"
              >
                <Link
                  to="/login/administrator"
                  className="block px-4 py-2 hover:bg-orange-100 text-gray-800"
                  onClick={() => setShowLoginDropdown(false)}
                >
                  Administrator
                </Link>
                <Link
                  to="/login/user"
                  className="block px-4 py-2 hover:bg-orange-100 text-gray-800"
                  onClick={() => setShowLoginDropdown(false)}
                >
                  User
                </Link>
              </div>
            )}

            {/* Register Dropdown (only Customer + Tour Operator) */}
            {showRegisterDropdown && (
              <div
                className="absolute right-0 top-12 bg-white shadow-lg rounded-md w-52 z-20"
                data-aos="zoom-in"
              >
                <Link
                  to="/register/customer"
                  className="block px-4 py-2 hover:bg-orange-100 text-gray-800"
                  onClick={() => setShowRegisterDropdown(false)}
                >
                  Customer Account
                </Link>
                <Link
                  to="/register/tour-operator"
                  className="block px-4 py-2 hover:bg-orange-100 text-gray-800"
                  onClick={() => setShowRegisterDropdown(false)}
                >
                  Tour Operator Account
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="h-16"></div>
   
    </>
  );
};

export default Navbar;
