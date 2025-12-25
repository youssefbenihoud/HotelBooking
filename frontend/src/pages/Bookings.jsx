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
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      <div className="overflow-x-auto">
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
