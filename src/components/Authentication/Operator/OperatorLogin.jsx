import { Link } from "react-router-dom";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser, FaBuilding } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";

const TourOperatorSignup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Tour Operator Signup
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Create your account to manage and offer tours
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border-b-2 border-gray-300 pl-10 pr-3 py-2 focus:outline-none focus:border-orange-500 transition"
                required
              />
            </div>
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <div className="relative">
              <FaBuilding className="absolute top-3 left-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="ABC Tours Pvt Ltd"
                className="w-full border-b-2 border-gray-300 pl-10 pr-3 py-2 focus:outline-none focus:border-orange-500 transition"
                required
              />
            </div>
          </div>

          {/* License / Registration Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              License / Registration No.
            </label>
            <div className="relative">
              <HiIdentification className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="LIC-123456"
                className="w-full border-b-2 border-gray-300 pl-10 pr-3 py-2 focus:outline-none focus:border-orange-500 transition"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <MdEmail className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="operator@example.com"
                className="w-full border-b-2 border-gray-300 pl-10 pr-3 py-2 focus:outline-none focus:border-orange-500 transition"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="relative">
              <MdPhone className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full border-b-2 border-gray-300 pl-10 pr-3 py-2 focus:outline-none focus:border-orange-500 transition"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <RiLockPasswordFill
                className="absolute top-3 left-3 text-gray-400"
                size={20}
              />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border-b-2 border-gray-300 pl-10 pr-3 py-2 focus:outline-none focus:border-orange-500 transition"
                required
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition"
          >
            Create Account
          </button>

          {/* Links */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login/user" className="text-orange-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default TourOperatorSignup;
