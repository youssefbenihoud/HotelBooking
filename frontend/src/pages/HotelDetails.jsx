import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const HotelDetails = () => {
  const { id } = useParams();
  const { rooms } = useContext(RoomContext);
  const { token, url } = useContext(AuthContext);
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const room = rooms.find((room) => room._id === id);

  if (!room) {
    return <div>Room not found</div>;
  }

  const { name, description, price, image } = room;

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!token) {
      toast.error("You must be logged in to book a room.");
      return;
    }

    const reservationData = {
      room: room._id,
      ...bookingData,
    };

    try {
      const response = await axios.post(
        `${url}/api/reservation/create`,
        reservationData,
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Room booked successfully!");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Booking failed.");
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Room Image */}
          <div>
            <img src={image} alt={name} className="rounded-lg shadow-lg w-full" />
          </div>

          {/* Room Details & Booking Form */}
          <div>
            <h2 className="text-4xl font-bold mb-4">{name}</h2>
            <p className="text-2xl text-lime-500 font-semibold mb-6">
              ${price} / night
            </p>
            <p className="text-gray-600 mb-8">{description}</p>

            {/* Booking Form */}
            <form
              onSubmit={handleBooking}
              className="bg-gray-100 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-6">Book Your Stay</h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="date"
                    value={bookingData.checkIn}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, checkIn: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-md outline-none border border-gray-300 focus:border-lime-500"
                    required
                  />
                  <input
                    type="date"
                    value={bookingData.checkOut}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        checkOut: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-md outline-none border border-gray-300 focus:border-lime-500"
                    required
                  />
                </div>
                <input
                  type="number"
                  placeholder="Number of Guests"
                  min="1"
                  value={bookingData.guests}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, guests: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-md outline-none border border-gray-300 focus:border-lime-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-lime-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-lime-600 transition"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelDetails;

