import { useParams } from "react-router-dom";
import { FaClock, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import  AdventureTourspackages  from "../../Global/Advanture"
import { useState } from "react";

export default function AdventureToursDetails() {
  const [tours] = useState(AdventureTourspackages);
  const { id } = useParams();
  const tour = tours.find((t) => String(t.id) === id);

  if (!tour) return <div className="text-center mt-10">Tour not found!</div>;

  return (
  <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">

      {/* Hero Section */}
      <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
          <h1 className="text-4xl sm:text-5xl font-bold">{tour.name}</h1>
          <div className="flex gap-4 mt-2 text-orange-400">
            <p className="flex items-center gap-1"><FaClock /> {tour.duration}</p>
            <p className="flex items-center gap-1"><FaMapMarkerAlt /> {tour.location}</p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="flex flex-wrap gap-2">
        {tour.services.map((service, idx) => (
          <span
            key={idx}
            className="flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
          >
            <FaCheckCircle /> {service}
          </span>
        ))}
      </div>

      {/* Description Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About {tour.location}</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {tour.description}
        </p>
      </div>

      {/* Food Section - Image Right */}
      <div className="flex flex-col sm:flex-row gap-8 items-center bg-white rounded-lg shadow-lg p-6 opacity-0 animate-slideInLeft">
        <div className="sm:w-2/3 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Food</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{tour.Food}</p>
        </div>
        <div className="sm:w-1/3 w-full">
          <img
            src={tour.images[0]}
            alt="Food"
            className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Stay Section - Image Left */}
      <div className="flex flex-col sm:flex-row gap-6 items-center bg-white rounded-lg shadow-lg p-6 opacity-0 animate-slideInLeft">
        <div className="sm:w-1/3 w-full">
          <img
            src={tour.images[1]}
            alt="Stay Options"
            className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="sm:w-2/3 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Options</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{tour.StayOption}</p>
        </div>
      </div>

      {/* Tourist Places Section - Image Right */}
      <div className="flex flex-col sm:flex-row gap-6 items-center bg-white rounded-lg shadow-lg p-6 opacity-0 animate-slideInRight">
        <div className="sm:w-2/3 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Tourist Places</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{tour.StayOption}</p>
        </div>
        <div className="sm:w-1/3 w-full">
          <img
            src={tour.images[2]}
            alt="Famous Places"
            className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Itinerary */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Itinerary</h2>
        <ul className="mt-2 space-y-2 text-gray-700 list-disc list-inside">
          {tour.itinerary.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
