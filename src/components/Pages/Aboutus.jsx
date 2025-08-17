import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import abc from "../../assets/Images/abc7.jpg"

const Aboutus = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-12 font-serif">
      {/* Page Title */}
      <div className="text-center mb-10" data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
          About TourDhaam
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your trusted companion for spiritual and cultural journeys across India.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div data-aos="fade-right">
          <img
            src={abc}
            alt="TourDhaam Experience"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div data-aos="fade-left">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At <span className="font-semibold">TourDhaam</span>, we believe
            travel is more than just visiting places — it’s about experiencing
            the soul of a destination. Specializing in pilgrimage tours, we
            connect travelers with sacred sites, cultural heritage, and
            breathtaking landscapes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you're seeking spiritual enlightenment or simply exploring
            India’s timeless beauty, our curated packages ensure a seamless and
            unforgettable journey.
          </p>

          {/* Highlights */}
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Expert local guides & authentic experiences</li>
            <li>Comfortable and safe travel arrangements</li>
            <li>Customizable pilgrimage and cultural packages</li>
            <li>24/7 customer support</li>
          </ul>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-16 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Our mission is to make spiritual and cultural travel accessible,
          enriching, and stress-free. We strive to create journeys that inspire
          the heart, refresh the soul, and leave lasting memories.
        </p>
      </div>
    </section>
  );
};

export default Aboutus;
