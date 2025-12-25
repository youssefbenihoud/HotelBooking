import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({ name: '', description: '', price: '', image: null });
  const [editingRoom, setEditingRoom] = useState(null);
  const url = "http://localhost:4000";
  const token = localStorage.getItem('token');
  const headers = { token };

  const fetchRooms = async () => {
    try {
      const response = await axios.get(`${url}/api/room/list`, { headers });
      if (response.data.success) {
        setRooms(response.data.data);
      } else {
        toast.error("Error fetching rooms");
      }
    } catch (error) {
      toast.error("Error fetching rooms");
    }
  };

  const handleAddRoom = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', newRoom.name);
    formData.append('description', newRoom.description);
    formData.append('price', newRoom.price);
    formData.append('image', newRoom.image);

    try {
      const response = await axios.post(`${url}/api/room/add`, formData, { headers });
      if (response.data.success) {
        toast.success("Room added successfully");
        setNewRoom({ name: '', description: '', price: '', image: null });
        fetchRooms();
      } else {
        toast.error("Error adding room");
      }
    } catch (error) {
      toast.error("Error adding room");
    }
  };

  const handleRemoveRoom = async (roomId) => {
    if (window.confirm("Are you sure you want to remove this room?")) {
      try {
        const response = await axios.post(`${url}/api/room/remove`, { id: roomId }, { headers });
        if (response.data.success) {
          toast.success("Room removed successfully");
          fetchRooms();
        } else {
          toast.error("Error removing room");
        }
      } catch (error) {
        toast.error("Error removing room");
      }
    }
  };

  const handleUpdateRoom = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', editingRoom._id);
    formData.append('name', editingRoom.name);
    formData.append('description', editingRoom.description);
    formData.append('price', editingRoom.price);
    if (editingRoom.image) {
      formData.append('image', editingRoom.image);
    }
  
    try {
      const response = await axios.post(`${url}/api/room/update`, formData, { headers });
      if (response.data.success) {
        toast.success("Room updated successfully");
        setEditingRoom(null);
        fetchRooms();
      } else {
        toast.error("Error updating room");
      }
    } catch (error) {
      toast.error("Error updating room");
    }
  };

  useEffect(() => {
    if(token) {
        fetchRooms();
    }
  }, [token]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add a New Room</h2>
      <form onSubmit={handleAddRoom} className="mb-8 bg-gray-100 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <input type="text" placeholder="Name" value={newRoom.name} onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })} className="w-full p-2 border rounded" required/>
          <input type="number" placeholder="Price" value={newRoom.price} onChange={(e) => setNewRoom({ ...newRoom, price: e.target.value })} className="w-full p-2 border rounded" required/>
        </div>
        <textarea placeholder="Description" value={newRoom.description} onChange={(e) => setNewRoom({ ...newRoom, description: e.target.value })} className="w-full p-2 border rounded mb-4" required></textarea>
        <input type="file" onChange={(e) => setNewRoom({ ...newRoom, image: e.target.files[0] })} className="w-full p-2 border rounded mb-4" required/>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md">Add Room</button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Existing Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room._id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={room.image} alt={room.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{room.name}</h3>
            <p className="text-gray-600">${room.price}</p>
            <div className="flex gap-2 mt-4">
              <button onClick={() => setEditingRoom(room)} className="bg-yellow-500 text-white px-4 py-2 rounded-md">Update</button>
              <button onClick={() => handleRemoveRoom(room._id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Remove</button>
            </div>
          </div>
        ))}
      </div>

      {editingRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Update Room</h2>
            <form onSubmit={handleUpdateRoom}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <input type="text" placeholder="Name" value={editingRoom.name} onChange={(e) => setEditingRoom({ ...editingRoom, name: e.target.value })} className="w-full p-2 border rounded" required/>
                <input type="number" placeholder="Price" value={editingRoom.price} onChange={(e) => setEditingRoom({ ...editingRoom, price: e.target.value })} className="w-full p-2 border rounded" required/>
              </div>
              <textarea placeholder="Description" value={editingRoom.description} onChange={(e) => setEditingRoom({ ...editingRoom, description: e.target.value })} className="w-full p-2 border rounded mb-4" required></textarea>
              <input type="file" onChange={(e) => setEditingRoom({ ...editingRoom, image: e.target.files[0] })} className="w-full p-2 border rounded mb-4" />
              <div className="flex justify-end gap-4">
                <button type="button" onClick={() => setEditingRoom(null)} className="bg-gray-500 text-white px-6 py-2 rounded-md">Cancel</button>
                <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;