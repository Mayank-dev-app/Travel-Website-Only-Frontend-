import React, { useState } from "react";
import { FaCalendarAlt, FaMoneyBillWave, FaEdit, FaTrash } from "react-icons/fa";

export default function UserDashboard() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      tour: "Varanasi Spiritual Tour",
      date: "2025-08-15",
      price: 4999,
      status: "Confirmed",
    },
    {
      id: 2,
      tour: "Ayodhya Ram Janmabhoomi Tour",
      date: "2025-09-05",
      price: 3999,
      status: "Pending",
    },
  ]);

  const [payments] = useState([
    { id: 1, date: "2025-07-25", amount: 4999, method: "UPI" },
    { id: 2, date: "2025-07-30", amount: 3999, method: "Credit Card" },
  ]);

  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      setBookings(bookings.filter((b) => b.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-orange-700 mb-6 text-center">
          🛕 Your Dashboard
        </h1>

        {/* Booked Tours */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            <FaCalendarAlt className="inline-block mr-2 text-orange-500" />
            Booked Tours
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b last:border-0 py-3"
                >
                  <div>
                    <p className="font-semibold">{booking.tour}</p>
                    <p className="text-sm text-gray-600">
                      Date: {booking.date} | Status:{" "}
                      <span
                        className={
                          booking.status === "Confirmed"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }
                      >
                        {booking.status}
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-3 mt-2 sm:mt-0">
                    <button className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-400">
                      <FaEdit /> Reschedule
                    </button>
                    <button
                      onClick={() => handleCancel(booking.id)}
                      className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400"
                    >
                      <FaTrash /> Cancel
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No bookings found.</p>
            )}
          </div>
        </section>

        {/* Payment History */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            <FaMoneyBillWave className="inline-block mr-2 text-green-500" />
            Payment History
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            {payments.length > 0 ? (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">Date</th>
                    <th className="p-2">Amount</th>
                    <th className="p-2">Method</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((pay) => (
                    <tr key={pay.id} className="border-b last:border-0">
                      <td className="p-2">{pay.date}</td>
                      <td className="p-2">₹{pay.amount}</td>
                      <td className="p-2">{pay.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-600">No payments found.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
