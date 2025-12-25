import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { token, url } = useContext(AuthContext);

  const fetchBookings = async () => {
    if (!token) return;
    try {
      const response = await axios.post(`${url}/api/reservation/list`, {}, { headers: { token } });
      if (response.data.success) {
        setBookings(response.data.data);
      } else {
        toast.error("Error fetching bookings");
      }
    } catch (error) {
      toast.error("Error fetching bookings");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [token]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">My Bookings</h2>

      {/* Mobile View - Card Layout */}
      <div className="md:hidden space-y-4">
        {bookings.map((booking) => (
          <div key={booking._id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={booking.room?.image} alt={booking.room?.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{booking.room?.name}</h3>
            <div className="text-sm text-gray-600">
              <p><span className="font-semibold">Check-in:</span> {new Date(booking.checkIn).toLocaleDateString()}</p>
              <p><span className="font-semibold">Check-out:</span> {new Date(booking.checkOut).toLocaleDateString()}</p>
              <p><span className="font-semibold">Guests:</span> {booking.guests}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Table Layout */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Room Details</th>
              <th className="py-2 px-4 border-b">Check-in</th>
              <th className="py-2 px-4 border-b">Check-out</th>
              <th className="py-2 px-4 border-b">Guests</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td className="py-2 px-4 border-b">
                  <div className="flex items-center space-x-3">
                    <img src={booking.room?.image} alt={booking.room?.name} className="w-16 h-16 object-cover rounded-md" />
                    <span>{booking.room?.name}</span>
                  </div>
                </td>
                <td className="py-2 px-4 border-b">{new Date(booking.checkIn).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{new Date(booking.checkOut).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{booking.guests}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
