import { useState, useEffect } from "react";
import { FaClock, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { FiSliders } from "react-icons/fi";
import { useParams, Link } from "react-router-dom";
import AdventureTourspackages from "../../Global/Advanture";
import abc from "../../../assets/Images/abc4.jpg";
import AdventureSearch from "./SearchlistForAdventur";
import TourFilterPage from "./FiletrByLocation";

export default function AdventureTours() {
  const [originalPackages] = useState(AdventureTourspackages);
  const [packages, setPackages] = useState(AdventureTourspackages);

  const { location } = useParams();
  const decodedLocation = decodeURIComponent(location || "");

  const [filterTours, setFilterTours] = useState([]);

  // 🔹 Filter by URL param
  useEffect(() => {
    let filteredData = packages;

    if (decodedLocation.trim() !== "") {
      filteredData = filteredData.filter((tour) =>
        tour.location.toLowerCase().includes(decodedLocation.toLowerCase())
      );
    }

    setFilterTours(filteredData);
  }, [decodedLocation, packages]);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${abc})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 p-4 sm:p-6 lg:p-10">
        {/* 🔹 Heading + Description */}
        <div className="text-center text-white mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif mb-3 sm:mb-4">
            Adventure Tours
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base lg:text-lg">
            Experience thrilling adventures across breathtaking destinations.
            From trekking the mountains to exploring hidden trails, we bring you
            packages that ignite your spirit of adventure.
          </p>
        </div>

        {/* 🔹 Filter + Search */}
        <div className="sticky top-20 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
            {/* Filter Icon */}
            <div className="flex items-center gap-2">
              <FiSliders className="text-orange-500 text-lg" />
              <span className="font-semibold text-gray-700 text-sm sm:text-base">
                Filters
              </span>
            </div>

            {/* Location Filter */}
            <TourFilterPage
              originalPackages={originalPackages}
              setFilterTours={setFilterTours}
            />

            {/* Search Box */}
            <div className="w-full sm:w-72">
              <AdventureSearch
                onSearch={(query) =>
                  setPackages(
                    query
                      ? originalPackages.filter((pkg) =>
                          pkg.location
                            .toLowerCase()
                            .includes(query.toLowerCase())
                        )
                      : originalPackages
                  )
                }
              />
            </div>
          </div>
        </div>

        {/* 🔹 Package Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filterTours.length > 0 ? (
            filterTours.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-xl overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-all duration-300"
              >
                {/* Image */}
                <div
                  className="h-40 sm:h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h2 className="absolute bottom-2 left-2 text-base sm:text-lg font-bold text-white drop-shadow">
                    {pkg.name}
                  </h2>
                </div>

                {/* Info */}
                <div className="p-4 text-gray-800">
                  <p className="flex items-center gap-2 text-xs sm:text-sm">
                    <FaClock className="text-orange-500" /> {pkg.duration}
                  </p>
                  <p className="flex items-center gap-2 text-xs sm:text-sm mt-1">
                    <FaMapMarkerAlt className="text-orange-500" /> {pkg.location}
                  </p>

                  {/* Services */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {pkg.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1 bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-[10px] sm:text-xs"
                      >
                        <FaCheckCircle className="text-xs" /> {service}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="w-full flex justify-center">
                    <Link
                      to={`/adventure-details/${pkg.id}`}
                      className="w-full text-center cursor-pointer mt-7 py-2 px-6 rounded-full font-semibold bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md hover:opacity-90"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white text-base sm:text-lg">
              No packages found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
