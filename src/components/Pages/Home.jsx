import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/Images/abc1.jpg";
import { samplePackages } from "../Global/TravelList";
import {
  FaClock,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaCheckCircle,
  FaQuoteLeft,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import Searchlist from "../Global/Searchlist";

const HomePage = () => {
  const [packages] = useState(samplePackages);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">


      {/* Hero Banner */}
      <div className="relative">
        <img
          src={Banner}
          alt="Pilgrimage"
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg"
            data-aos="fade-up"
          >
            Explore Spiritual India
          </h1>
          <p
            className="text-sm md:text-xl mb-6 max-w-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Book tours to Varanasi, Ayodhya, Mathura, Prayagraj, and more.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              to="/booktour"
              className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-full font-semibold hover:opacity-90 shadow-lg"
            >
              Book Now
            </Link>
            <Link
              to="/tours"
              className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 shadow-lg"
            >
              View Tours
            </Link>
          </div>
          <div className="mt-4 w-full flex justify-center">
            <Searchlist />
          </div>
        </div>
      </div>

      {/* Popular Tours */}
      <div className="mt-20 px-4 max-w-6xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-10 text-gray-800"
          data-aos="fade-up"
        >
          Popular Tours
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-xl overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-all duration-300 relative"
              data-aos="fade-up"
            >
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${pkg.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full shadow-md">
                  ₹ {pkg.price}
                </span>
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

                <button className=" cursor-pointer mt-4 w-full py-2 rounded-full font-semibold bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md hover:opacity-90">
                   <Link to={`/tours-details/${pkg.id}`} >See Details</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Show More Link - Standout Style */}
        <div className="mt-8 flex justify-center" data-aos="fade-up">
          <Link
            to="/tours"
            className="group text-lg font-semibold text-orange-600 hover:text-orange-800 transition-all duration-300"
          >
            Show more
            <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
              ➜
            </span>
            <span className="block w-0 group-hover:w-full h-[2px] bg-orange-600 transition-all duration-300 mt-1"></span>
          </Link>
        </div>

      </div>

      {/* Testimonials */}
      <div className="mt-20 px-4 max-w-6xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-10 text-gray-800"
          data-aos="fade-up"
        >
          Traveler Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Anjali Sharma",
              review:
                "The trip to Varanasi was life-changing. Everything was so well-organized.",
              avatar:
                "https://randomuser.me/api/portraits/women/68.jpg",
            },
            {
              name: "Rahul Mehta",
              review:
                "Loved the seamless experience and the beautiful ghats of Prayagraj!",
              avatar:
                "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Sita Verma",
              review:
                "Great service and very spiritual journey. Highly recommend!",
              avatar:
                "https://randomuser.me/api/portraits/women/12.jpg",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center relative"
              data-aos="fade-up"
            >
              <FaQuoteLeft className="text-orange-500 text-2xl mb-3 mx-auto" />
              <p className="text-gray-600 mb-4 italic">“{testimonial.review}”</p>
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-orange-500"
              />
              <p className="font-semibold text-orange-600">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
