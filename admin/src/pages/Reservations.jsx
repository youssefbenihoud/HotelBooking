import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const url = "http://localhost:4000";
  const token = localStorage.getItem('token');
  const headers = { token };

  const fetchReservations = async () => {
    try {
      const response = await axios.get(`${url}/api/reservation/list-all`, { headers });
      if (response.data.success) {
        setReservations(response.data.data);
      } else {
        toast.error("Error fetching reservations");
      }
    } catch (error) {
      toast.error("Error fetching reservations");
    }
  };

  const handleRemoveReservation = async (reservationId) => {
    if (window.confirm("Are you sure you want to remove this reservation?")) {
      try {
        const response = await axios.post(`${url}/api/reservation/remove`, { id: reservationId }, { headers });
        if (response.data.success) {
          toast.success("Reservation removed successfully");
          fetchReservations();
        } else {
          toast.error("Error removing reservation");
        }
      } catch (error) {
        toast.error("Error removing reservation");
      }
    }
  };

  useEffect(() => {
    if(token) {
        fetchReservations();
    }
  }, [token]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reservations</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">User</th>
              <th className="py-2 px-4 border-b">Room</th>
              <th className="py-2 px-4 border-b">Check-in</th>
              <th className="py-2 px-4 border-b">Check-out</th>
              <th className="py-2 px-4 border-b">Guests</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation._id}>
                <td className="py-2 px-4 border-b">{reservation.user?.name}</td>
                <td className="py-2 px-4 border-b">{reservation.room?.name}</td>
                <td className="py-2 px-4 border-b">{new Date(reservation.checkIn).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{new Date(reservation.checkOut).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{reservation.guests}</td>
                <td className="py-2 px-4 border-b">
                  <button onClick={() => handleRemoveReservation(reservation._id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservations;
