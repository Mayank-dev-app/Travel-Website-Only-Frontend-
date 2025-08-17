import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function FilterBar({ packages, setPackages,  }) {
  const [sortBy, setSortBy] = useState("");

  const handleSort = (value) => {
    setSortBy(value);
    let sorted = [...packages];

    if (value === "priceLow") sorted.sort((a, b) => a.price - b.price);
    if (value === "priceHigh") sorted.sort((a, b) => b.price - a.price);
    if (value === "below 5000") sorted = sorted.filter((a) => (a.price > 5000));
    if (value === "Max 5000") sorted = sorted.filter((m) => m.price < 5000);

    setPackages(sorted);
  };

const handleTours = () =>{
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
        <option value="">-- Price --</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="below 5000">below 5000</option>
        <option value="Max 5000">Max 5000</option>
      </select>

      {/* Right side - Clear All */}
      <Link
        to="/tours"
        className="flex items-center justify-center gap-2 font-serif font-bold text-white bg-orange-500 rounded-xl px-6 py-2 hover:bg-orange-400 transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
        onClick={handleTours}
      >
        Clear All
      </Link>
    </div>
  );
}
