import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10">
      {/* Top Section - Newsletter */}
      <div className="bg-lime-500 py-10 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-black text-center md:text-left">
          <h2 className="text-3xl font-bold">Sign Up for Exclusive Offers</h2>
          <p className="text-lg opacity-80">Get the latest updates and special deals straight to your inbox.</p>
        </div>
        <div className="flex w-full md:w-auto">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="px-4 py-3 rounded-l-md w-full md:w-80 text-black outline-none border border-gray-300 focus:border-black focus:ring-0"
          />
          <button className="bg-black text-white px-6 py-3 rounded-r-md font-semibold hover:bg-gray-800 transition-colors">
            Join Now
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand & Socials */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <h2 className="font-bold text-3xl">
            Marokko <span className="text-lime-400">HOTEL</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Experience luxury and comfort in the heart of Morocco. Your perfect stay awaits you at Marokko Hotel.
          </p>
          <div className="flex gap-4 text-2xl">
            <FaFacebook className="cursor-pointer hover:text-lime-400 transition-colors" />
            <FaInstagram className="cursor-pointer hover:text-lime-400 transition-colors" />
            <FaTwitter className="cursor-pointer hover:text-lime-400 transition-colors" />
            <FaLinkedin className="cursor-pointer hover:text-lime-400 transition-colors" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b-2 border-lime-400 inline-block">Quick Links</h3>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li className="hover:text-lime-400 cursor-pointer transition-colors">Home</li>
            <li className="hover:text-lime-400 cursor-pointer transition-colors">Bookings</li>
            <li className="hover:text-lime-400 cursor-pointer transition-colors">Rooms</li>
            <li className="hover:text-lime-400 cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b-2 border-lime-400 inline-block">Contact Us</h3>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li>123 Luxury Ave, Marrakech, Morocco</li>
            <li>Phone: +212 522 00 00 00</li>
            <li>Email: info@marokkohotel.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-6 border-t border-gray-800 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Marokko HOTEL. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
