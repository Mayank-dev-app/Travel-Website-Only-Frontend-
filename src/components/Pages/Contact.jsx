import React, { useEffect } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section className="bg-gray-50 py-12 px-4 md:px-12 font-serif">
            {/* Page Title */}
            <div className="text-center mb-10" data-aos="fade-up">
                <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                    Contact Us
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We’d love to hear from you! Whether it’s a question, feedback, or a
                    custom trip request, our team is here to help.
                </p>
            </div>

            {/* Contact Info + Form */}
            <div className="grid md:grid-cols-2 gap-10">
                {/* Contact Info */}
                <div
                    className="bg-white p-6 rounded-2xl shadow-lg space-y-6"
                    data-aos="fade-right"
                >
                    <h2 className="text-xl font-bold text-orange-600">Get in Touch</h2>
                    <div className="flex items-center space-x-4">
                        <MdEmail className="text-orange-600" size={24} />
                        <p>support@tourdhaam.com</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <MdPhone className="text-orange-600" size={24} />
                        <p>+91 98765 43210</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <MdLocationOn className="text-orange-600" size={24} />
                        <p>Bulandshahr, Uttar Pradesh, India</p>
                    </div>

                    {/* Map */}
                    <div className="rounded-xl overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7014.2701038493105!2d77.66089847144166!3d28.47547920402828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1754888621689!5m2!1sen!2sin"
                            width="100%"
                            height="200"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    className="bg-white p-6 rounded-2xl shadow-lg space-y-4"
                    data-aos="fade-left"
                >
                    <h2 className="text-xl font-bold text-orange-600">Send Us a Message</h2>

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
