import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function CompareBar({ compareList, onRemove }) {
  const [cheapest, setCheapest] = useState([]);

  const handleCompare = () => {
    if (compareList.length === 0) return;
    const minPrice = Math.min(...compareList.map(pkg => pkg.price));
    const cheapestTours = compareList.filter(pkg => pkg.price === minPrice);
    setCheapest(cheapestTours);
  };

  return (
    <>
      {/* Compare Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t border-gray-200 p-3 sm:p-4 z-50 animate-slide-up">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Selected Packages */}
          <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center sm:justify-start flex-1 overflow-x-auto max-w-full pb-1">
            {compareList.map(pkg => (
              <div
                key={pkg.id}
                className="flex items-center gap-2 px-3 py-1.5 bg-orange-100 text-orange-700 rounded-lg text-xs sm:text-sm font-medium shadow-sm whitespace-nowrap"
              >
                <span className="truncate max-w-[120px] sm:max-w-[150px]">{pkg.name}</span>
                <FaTimes
                  className="cursor-pointer hover:text-red-500 text-xs sm:text-sm"
                  onClick={() => onRemove(pkg)}
                />
              </div>
            ))}
          </div>

          {/* Compare Button */}
          <button
            onClick={handleCompare}
            className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-lg font-semibold shadow-md text-sm sm:text-base whitespace-nowrap"
          >
            Compare Now
          </button>
        </div>
      </div>

      {/* Cheapest Tours Slide-up */}
      {cheapest.length > 0 && (
        <div className="fixed bottom-16 left-0 w-full bg-green-50 border-t border-green-300 shadow-lg p-4 z-50 animate-slide-up">
          <h2 className="text-green-800 font-bold text-lg mb-2">Cheapest Tour(s)</h2>
          <div className="flex flex-wrap gap-4">
            {cheapest.map(pkg => (
              <div
                key={pkg.id}
                className="p-3 bg-white rounded-lg shadow-md border border-green-200 w-full sm:w-auto"
              >
                <h3 className="font-semibold text-gray-800">{pkg.name}</h3>
                <p className="text-gray-600">{pkg.duration}</p>
                <p className="text-green-600 font-bold">₹{pkg.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
