import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for your message!");
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows="4"
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
