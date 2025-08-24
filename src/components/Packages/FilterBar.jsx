import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function FilterBar({ packages, setPackages, }) {
  const [sortBy, setSortBy] = useState("");

  const handleSort = (value) => {
    setSortBy(value);
    let sorted = [...packages];
    if (!value) {
      setSortBy(originalPackages); 
      return;
    }

    sorted = sorted.filter((item) => item.catagory === value);

    setPackages(sorted);
  };

  const handleTours = () => {
    setPackages(packages);
  }

  return (
    <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-md border border-gray-200 w-full sm:w-auto">
      <FiFilter className="text-orange-500 text-lg" />
      <label className="font-semibold text-gray-700">Sort by:</label>
      <select
        value={sortBy}
        onChange={(e) => handleSort(e.target.value)}
        className="px-3 py-1 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 cursor-pointer"
      >
        <option value="">-- Places --</option>
        <option value="Religious Places">Holy/Religious Places</option>
        <option value="Adventure & Nature Tourism">Adventure & Nature Tourism</option>
      </select>
    </div>
  );
}
