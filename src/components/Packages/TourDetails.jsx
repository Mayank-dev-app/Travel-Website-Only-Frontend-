import { useParams } from "react-router-dom";
import { FaClock, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { samplePackages } from "../Global/TravelList";
import { useState } from "react";

export default function TourDetails() {
  const [tours ] = useState(samplePackages);
  const { id } = useParams();
  const tour = tours.find((t) => String(t.id) === id);

  if (!tour) return <div className="text-center mt-10">Tour not found!</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Hero Section */}
      <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden shadow-lg">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold">{tour.name}</h1>
          <span className="text-lg bg-orange-500 px-3 py-1 rounded-full inline-block mt-2">
            ₹ {tour.price}
          </span>
        </div>
      </div>

      {/* Tour Info */}
      <div className="mt-6 space-y-3 text-gray-700">
        <p className="flex items-center gap-2">
          <FaClock className="text-orange-500" /> {tour.duration}
        </p>
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-orange-500" /> {tour.location}
        </p>

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
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800">About this Tour</h2>
        <p className="mt-2 text-gray-600">{tour.description}</p>
      </div>

      {/* Itinerary */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800">Itinerary</h2>
        <ul className="mt-2 space-y-2 text-gray-600 list-disc list-inside">
          {tour.itinerary.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Booking Button */}
      <div className="mt-8">
        <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-md hover:opacity-90">
          Book Now
        </button>
      </div>
    </div>
  );
}
