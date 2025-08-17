import React, { useState } from "react";
import { FaUserShield, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import bgImage from "../../../assets/Images/mhadev.avif"; // add your background image here

export default function AdminLogin() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Dummy Check - Replace with backend API
    if (formData.username === "admin" && formData.password === "admin123") {
      alert("Login Successful!");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6 flex items-center justify-center gap-2">
          <FaUserShield /> Admin Login
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="px-3 text-gray-500">
                <FaUserShield />
              </span>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter admin username"
                className="w-full px-3 py-2 outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="px-3 text-gray-500">
                <FaLock />
              </span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-3 py-2 outline-none"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-400 text-white py-2 rounded-lg font-semibold shadow-md"
          >
            Login
          </button>
        </form>

        {/* Back Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Back to{" "}
          <span
            onClick={() => navigate("/")}
            className="text-orange-500 cursor-pointer hover:underline"
          >
            Home
          </span>
        </p>
      </div>
    </div>
  );
}
