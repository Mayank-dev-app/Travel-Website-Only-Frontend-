import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const CustomerLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          USER LOGIN
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Enter your credentials to access your account
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <MdEmail className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="you@example.com"
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
            Login
          </button>

          {/* Links */}
          <div className="flex justify-between text-sm mt-3">
            <a href="/forgot-password" className="text-orange-500 hover:underline">
              Forgot Password?
            </a>
            <Link to="/customer/Create-account" className="text-orange-500 hover:underline">Create Account </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerLogin;
