import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function FilterBar({ originalPackages, setFilterTours }) {
  const [selectedLocation, setSelectedLocation] = useState("");

  // 🔹 Unique locations
  const locations = [...new Set(originalPackages.map((pkg) => pkg.location))];

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedLocation(value);

    if (value === "") {
      setFilterTours(originalPackages); // Reset
    } else {
      const filtered = originalPackages.filter(
        (pkg) => pkg.location.toLowerCase() === value.toLowerCase()
      );
      setFilterTours(filtered);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
      {/* Label with Icon */}
      <div className="flex items-center gap-2 text-gray-700">
        <FaFilter className="text-orange-500 text-lg" />
        <label className="text-sm sm:text-base font-semibold">
          Filter by Location
        </label>
      </div>

      {/* Dropdown with Icon */}
      <div className="relative w-full sm:w-64">
        <MdLocationOn className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
        <select
          value={selectedLocation}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm sm:text-base"
        >
          <option value="">All Locations</option>
          {locations.map((loc, idx) => (
            <option key={idx} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
