import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaChevronDown } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { BsList } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const [accountDropdownOpen, setaccountDropdownOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm transition-all"
        data-aos="fade-down"
      >
        <div className="flex items-center justify-between px-4 md:px-6 py-3 gap-10">

          {/*----------------- Left Container ------------------ */}
          <div className="flex justify-center items-center gap-7">

            <div className="flex items-center gap-3 relative cursor-pointer">
              {/* Mobile Menu Icon */}
              <BsList
                size={30}
                color="white"
                className="bg-orange-600 rounded-md font-bold lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>

            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <MdTravelExplore className="text-3xl text-orange-600 group-hover:rotate-12 transition-transform" />
              <h1 className=" text-xl md:text-2xl font-bold text-orange-600 font-serif">
                TourBlog
              </h1>
            </div>

            {/*For Big Screen {Links} */}
            <div className="hidden lg:flex font-normal font-serif text-orange-600 justify-center gap-4 ">
              <Link to="/" className="hover:underline focus:bg-amber-100 focus:px-2">Home</Link>
              <Link to="/aboutus" className="hover:underline focus:bg-amber-100 focus:px-2">About us</Link>
              <Link to="/holy-places" className="hover:underline focus:bg-amber-100 focus:px-2">Holy Places</Link>
              <Link to="/adventure/" className="hover:underline focus:bg-amber-100 focus:px-2">Adventure Places</Link>
              <Link to="/contact" className="hover:underline focus:bg-amber-100 focus:px-2 ">Contact</Link>
            </div>
          </div>

          {/* -------------- Right Container ----------------- */}
          <div className="hidden sm:flex justify-center gap-4 relative">
            <button
              className="px-3 flex items-center gap-1 text-gray-700 font-semibold hover:text-orange-600 hover:border-1 hover:rounded-full transition-colors"
              onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
            >
              <FaUser /> Login <FaChevronDown className="text-sm" />
            </button>

            {/* Login Dropdown */}
            {loginDropdownOpen && (
              <div className="absolute left-0 top-10 mt-2 w-60 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                <Link
                  to="/login/user"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                  onClick={() => setLoginDropdownOpen(false)}
                >
                  User
                </Link>
                <Link
                  to="/login/admin"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                  onClick={() => setLoginDropdownOpen(false)}
                >
                  Administrator
                </Link>
              </div>
            )}

            {/* ----------- Register Button ------------ */}
            <button
              className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 active:scale-95 transition-transform duration-200 text-white px-4 py-2 rounded-full font-semibold shadow-md"
              onClick={() => setaccountDropdownOpen(!accountDropdownOpen)}
            >
              Create Account
            </button>

            {accountDropdownOpen && (
              <div className="absolute right-0 top-10 mt-2 w-60 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                <Link
                  to="/register/customer"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                  onClick={() => setaccountDropdownOpen(false)}
                >
                  Customer
                </Link>
                <Link
                  to="/register/tour-operator"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                  onClick={() => setaccountDropdownOpen(false)}
                >
                  Tour-Operator
                </Link>
              </div>
            )}
          </div>
        </div >

        {/*----------------- Mobile Dropdown Menu -------------------- */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md border-t border-orange-200">
            <div className="flex flex-col items-center p-4 font-semibold text-orange-600 space-y-2">

              <Link
                to="/"
                className="w-full hover:bg-orange-100 px-2 py-1 rounded"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/aboutus"
                className="w-full hover:bg-orange-100 px-2 py-1 rounded"
                onClick={() => setMenuOpen(false)}
              >
                About us
              </Link>

              <Link
                to="/holy-places"
                className="w-full hover:bg-orange-100 px-2 py-1 rounded"
                onClick={() => setMenuOpen(false)}
              >
                Holy Places
              </Link>

              <Link
                to="/adventure/"
                className="w-full hover:bg-orange-100 px-2 py-1 rounded"
                onClick={() => setMenuOpen(false)}
              >
                Adventure Places
              </Link>

              <Link
                to="/contact"
                className="w-full hover:bg-orange-100 px-2 py-1 rounded"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>

              {/* ---------------- Mobile Buttons ------------------- */}
              <div className="flex sm:hidden flex-col gap-3 relative ">
                <button
                  className="px-3 py-2 flex items-center gap-1 text-gray-700 font-semibold hover:text-orange-600 hover:outline-1 hover:rounded-full transition-colors"
                  onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
                >
                  <FaUser /> Login <FaChevronDown className="text-sm" />
                </button>

                {/* Mobile Login Dropdown */}
                {loginDropdownOpen && (
                  <div className="absolute left-0 top-7 mt-2 w-full bg-white border border-gray-200 shadow-lg rounded-md z-50">
                    <Link
                      to="/login/user"
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                      onClick={() => setLoginDropdownOpen(false)}
                    >
                      User
                    </Link>
                    <Link
                      to="/login/administrator"
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                      onClick={() => setLoginDropdownOpen(false)}
                    >
                      Administrator
                    </Link>
                  </div>
                )}

                {/* Register Button */}
                <button
                  className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 active:scale-95 transition-transform duration-200 text-white px-4 py-2 rounded-full font-semibold shadow-md"
                  onClick={() => setaccountDropdownOpen(!accountDropdownOpen)}
                >
                  Create Account <FaChevronDown className="text-sm" />
                </button>

                {/* ---------- Register Button Drop Down ------------------------ */}

                {accountDropdownOpen && (
                  <div className="absolute right-0 top-23 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                    <Link
                      to="/register/customer"
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                      onClick={() => setaccountDropdownOpen(false)}
                    >
                      Customer
                    </Link>
                    <Link
                      to="/register/tour-operator"
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                      onClick={() => setaccountDropdownOpen(false)}
                    >
                      Tour-Operator
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header >
      <div className="h-16"></div>
    </>
  )
}

export default Navbar;
