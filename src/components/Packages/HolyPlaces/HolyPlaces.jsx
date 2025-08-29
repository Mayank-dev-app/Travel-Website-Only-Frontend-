import { useState, useEffect } from "react";
import { FaClock, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { FiSliders } from "react-icons/fi";
import { useParams, Link } from "react-router-dom";
import FilterBar from "./FilterByLocation";
import abc from "../../../assets/Images/abc4.jpg";
import { HolyPlacespackage } from "../../Global/sampleData";
import HolyPlacesSearch from "./SearchlistforHoly";

export default function HolyPlaces() {
  const [originalPackages] = useState(HolyPlacespackage);
  const [packages, setPackages] = useState(HolyPlacespackage);

  // 🔹 Get param from URL
  const { location } = useParams();
  const decodedLocation = decodeURIComponent(location || "");

  // 🔹 Local Search Query
  const [searchQuery, setSearchQuery] = useState("");

  // 🔹 Filtered Packages
  const [filterTours, setFilterTours] = useState([]);

  // ✅ Apply URL param + Search Query + Filters
  useEffect(() => {
    let filteredData = originalPackages;

    // 1. Agar URL param ho
    if (decodedLocation.trim() !== "") {
      filteredData = filteredData.filter((tour) =>
        tour.location.toLowerCase().includes(decodedLocation.toLowerCase())
      );
    }

    // 2. Agar search query ho
    if (searchQuery.trim() !== "") {
      filteredData = filteredData.filter((tour) =>
        tour.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilterTours(filteredData);
  }, [decodedLocation, searchQuery, originalPackages]);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${abc})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className=" absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative z-10 p-4 sm:p-6 lg:p-10">

        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg">
            Holy Places
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
            Explore the most sacred and spiritual destinations across India. 
            Discover our curated packages to experience divine journeys, 
            cultural richness, and peaceful retreats at holy sites.
          </p>
        </div>


        {/* Filter + Search */}
        <div className="sticky top-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 z-50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <FiSliders className="text-orange-500 text-lg" />
              <FilterBar
                originalPackages={originalPackages}
                setFilterTours={setFilterTours}
              />
            </div>
            <HolyPlacesSearch onSearch={(q) => setSearchQuery(q)} />
          </div>
        </div>

        {/* Package Cards */}
        <div  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filterTours.length > 0 ? (
            filterTours.map((pkg) => (
              <div
                key={pkg.id}
               className="rounded-xl overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                  role="img"
                  aria-label={pkg.location}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h2 className="absolute bottom-2 left-2 text-lg font-bold text-white drop-shadow">
                    {pkg.location}
                  </h2>
                </div>

                <div className="p-4 text-gray-800">
                  <p className="flex items-center gap-2 text-sm">
                    <FaClock className="text-orange-500" /> {pkg.duration}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <FaMapMarkerAlt className="text-orange-500" /> {pkg.location}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {pkg.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1 bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs"
                      >
                        <FaCheckCircle /> {service}
                      </span>
                    ))}
                  </div>
                <div className="w-full flex justify-center">
                  <Link
                    to={`/holytours-details/${pkg.id}`}
                    className="w-full text-center cursor-pointer mt-7 py-2 px-6 rounded-full font-semibold bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md hover:opacity-90"
                  >
                    See Details
                  </Link>
                </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white text-lg col-span-full">
              No packages found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
