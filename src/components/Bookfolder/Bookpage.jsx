import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";

export default function BookingSystem() {
    const [startDate, setStartDate] = useState(null);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [addons, setAddons] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [coupon, setCoupon] = useState("");
    const [availability, setAvailability] = useState("Available");

    const [selectedPlace, setSelectedPlace] = useState("");
    const [selectedPackagePrice, setSelectedPackagePrice] = useState(0);

    const navigate = useNavigate();

    const basePriceAdult = 2000;
    const basePriceChild = 1200;

    const places = [
        { name: "Varanasi", price: 3000 },
        { name: "Ayodhya", price: 2500 },
        { name: "Haridwar", price: 2800 }
    ];

    const addonsList = [
        { name: "VIP Darshan", price: 500 },
        { name: "Special Puja", price: 700 },
        { name: "Extra Sightseeing", price: 1000 },
        { name: "Photography Package", price: 300 }
    ];

    // Pricing & Availability
    useEffect(() => {
        let price =
            adults * basePriceAdult +
            children * basePriceChild +
            addons.reduce((acc, addon) => acc + addon.price, 0) +
            selectedPackagePrice;

        if (startDate) {
            const month = startDate.getMonth() + 1;
            if ([3, 4, 10, 11].includes(month)) {
                price *= 1.2; // Peak season +20%
            }
        }

        if (coupon === "FIRST10") {
            price *= 0.9; // 10% discount
        }

        setTotalPrice(price);

        if (adults + children > 20) {
            setAvailability("Sold Out");
        } else if (adults + children > 10) {
            setAvailability("Almost Full");
        } else {
            setAvailability("Available");
        }
    }, [adults, children, addons, startDate, coupon, selectedPackagePrice]);

    const handleAddonChange = (addon) => {
        if (addons.includes(addon)) {
            setAddons(addons.filter((a) => a !== addon));
        } else {
            setAddons([...addons, addon]);
        }
    };

    const handlePlaceSelect = (placeName) => {
        setSelectedPlace(placeName);
        const place = places.find((p) => p.name === placeName);
        setSelectedPackagePrice(place ? place.price : 0);
    };

    return (
        <div
            className="min-h-screen relative flex items-center justify-center px-4 py-8 
             bg-gradient-to-br from-orange-100 to-orange-200"
        >
            {/* Booking Card */}
            <div
                className="relative z-10 max-w-3xl w-full 
           bg-gradient-to-br from-orange-400/90 via-orange-300/85 to-yellow-300/80
           backdrop-blur-md p-6 rounded-lg shadow-xl"
            >
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-md mb-4 text-center">
                    Book Your Pilgrimage Tour
                </h2>

                <p className="text-white/90 text-center mb-6 font-medium tracking-wide">
                    Secure your journey with blessings and comfort
                </p>

                {/* Select Place */}
                <div className="mb-4">
                    <label className="font-semibold block mb-1">Select Place:</label>
                    <select
                        value={selectedPlace}
                        onChange={(e) => handlePlaceSelect(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="">-- Choose a Place --</option>
                        {places.map((place) => (
                            <option key={place.name} value={place.name}>
                                {place.name} (+₹{place.price})
                            </option>
                        ))}
                    </select>
                </div>

                {/* View Tour Button */}
                {selectedPlace && (
                    <button
                        onClick={() => navigate(`/view-tours/${selectedPlace.toLowerCase()}`)}
                        className="w-full mb-4 bg-blue-500 hover:bg-blue-400 text-white py-2 rounded-md font-semibold"
                    >
                        View Tour for {selectedPlace}
                    </button>
                )}

                {/* Date Picker */}
                <div className="mb-4">
                    <label className="font-semibold block mb-1">Select Date:</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date()}
                        placeholderText="Select your travel date"
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Travelers */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="font-semibold block mb-1">Adults:</label>
                        <input
                            type="number"
                            min="1"
                            value={adults}
                            onChange={(e) => setAdults(Number(e.target.value))}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="font-semibold block mb-1">Children:</label>
                        <input
                            type="number"
                            min="0"
                            value={children}
                            onChange={(e) => setChildren(Number(e.target.value))}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                </div>

                {/* Add-ons */}
                <div className="mb-4">
                    <label className="font-semibold block mb-2">Add-ons:</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {addonsList.map((addon) => (
                            <label
                                key={addon.name}
                                className="flex items-center space-x-2 border p-2 rounded-md bg-white/70"
                            >
                                <input
                                    type="checkbox"
                                    checked={addons.includes(addon)}
                                    onChange={() => handleAddonChange(addon)}
                                />
                                <span>
                                    {addon.name} (+₹{addon.price})
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Coupon */}
                <div className="mb-4">
                    <label className="font-semibold block mb-1">Coupon Code:</label>
                    <input
                        type="text"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder="Enter coupon code"
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Availability & Price */}
                <div className="flex items-center justify-between mb-4">
                    <span
                        className={`font-semibold px-3 py-1 rounded-full text-white ${
                            availability === "Available"
                                ? "bg-green-500"
                                : availability === "Almost Full"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                        }`}
                    >
                        {availability}
                    </span>
                    <span className="text-lg font-bold text-orange-600">
                        Total: ₹{totalPrice}
                    </span>
                </div>

                {/* Booking Summary */}
                {(startDate || selectedPlace) && (
                    <div className="bg-gray-100 p-3 rounded-md mb-4">
                        {selectedPlace && (
                            <p>
                                <strong>Place:</strong> {selectedPlace}
                            </p>
                        )}
                        {startDate && (
                            <p>
                                <strong>Date:</strong> {format(startDate, "dd MMM yyyy")}
                            </p>
                        )}
                        <p>
                            <strong>Travelers:</strong> {adults} Adults, {children} Children
                        </p>
                        {addons.length > 0 && (
                            <p>
                                <strong>Add-ons:</strong> {addons.map((a) => a.name).join(", ")}
                            </p>
                        )}
                        {coupon && (
                            <p>
                                <strong>Coupon:</strong> {coupon}
                            </p>
                        )}
                    </div>
                )}

                {/* Book Button */}
                <button className="cursor-pointer w-full bg-orange-500 hover:bg-orange-400 text-white py-2 rounded-md font-semibold">
                    <Link to="/userDashboard">Confirm Booking</Link>
                </button>
            </div>
        </div>
    );
}
