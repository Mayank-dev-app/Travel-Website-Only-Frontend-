import { useState, useEffect } from "react";
import { FaClock, FaMapMarkerAlt, FaRupeeSign, FaCheckCircle} from "react-icons/fa";
import { FiSliders, FiRefreshCw } from "react-icons/fi";
import FilterBar from "./FilterBar";
import CompareBar from "./CompareBar";
import abc from '../../assets/Images/abc4.jpg';
import { BigsamplePackages } from "../Global/sampleData";
import { useLocation, Link } from "react-router-dom";
import Searchlist from "../Global/Searchlist";
import Navbar from "../Pages/Navbar";

export default function TourPackages() {

  const [originalPackages] = useState(BigsamplePackages); // Original data safe rakhne ke liye
  const [packages, setPackages] = useState(BigsamplePackages); // FilterBar update karega
  const [compareList, setCompareList] = useState([]);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get('search') || '';

  const [filterTours, setFilterTours] = useState([]);

  // Search + Filter Apply
  useEffect(() => {
    let filteredData = packages;

    if (searchTerm.trim() !== "") {
      filteredData = filteredData.filter((tour) =>
        tour.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilterTours(filteredData);
  }, [searchTerm, packages]);

  const handleCompareToggle = (pkg) => {
    if (compareList.some(item => item.id === pkg.id)) {
      setCompareList(compareList.filter(item => item.id !== pkg.id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, pkg]);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${abc})`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative z-10 p-6">
        {/* <h1 className="text-4xl font-bold text-center text-white mb-8">
          Pilgrimage Tour Packages
        </h1> */}


        <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          {/* Left side - FilterBar */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <FiSliders className="text-orange-500 text-lg" />
            <FilterBar packages={originalPackages} setPackages={setPackages}  />

            <Searchlist />
          </div>
        </div>


        {/* Package Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filterTours.length > 0 ? (
            filterTours.map(pkg => (
              <div
                key={pkg.id}
                className="rounded-xl overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h2 className="absolute bottom-2 left-2 text-lg font-bold text-white drop-shadow">
                    {pkg.name}
                  </h2>
                </div>

                <div className="p-4 text-gray-800">
                  <p className="flex items-center gap-2 text-sm">
                    <FaClock className="text-orange-500" /> {pkg.duration}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <FaMapMarkerAlt className="text-orange-500" /> {pkg.location}
                  </p>
                  <p className="flex items-center gap-2 text-sm mb-2">
                    <FaRupeeSign className="text-orange-500" /> {pkg.price}
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

                  <button
                    onClick={() => handleCompareToggle(pkg)}
                    className={`mt-4 w-full py-2 rounded-lg font-semibold ${compareList.some(item => item.id === pkg.id)
                      ? "bg-red-500 text-white"
                      : "bg-orange-500 text-white hover:bg-orange-400"
                      }`}
                  >
                    {compareList.some(item => item.id === pkg.id)
                      ? "Remove from Compare"
                      : "Add to Compare"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white text-lg">No packages found</p>
          )}
        </div>
      </div>

      {compareList.length > 0 && <CompareBar compareList={compareList} />}
    </div>
  );
}
