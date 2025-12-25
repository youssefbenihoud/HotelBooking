import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const url = import.meta.env.VITE_BACKEND_URL;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`${url}/api/message/create`, formData);
        if (response.data.success) {
            toast.success("Message sent successfully!");
            setFormData({ name: '', email: '', message: '' });
        } else {
            toast.error("Error sending message");
        }
    } catch (error) {
        toast.error("Error sending message");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="text-center text-gray-600 mb-6">
          Have any questions or feedback? Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-lime-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-lime-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
