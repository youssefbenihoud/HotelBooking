import React from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ logout, toggleSidebar }) => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
            <button className="md:hidden mr-4" onClick={toggleSidebar}>
                <FaBars />
            </button>
            <h1 className="text-xl">Admin Panel</h1>
        </div>
      <button onClick={logout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Logout
      </button>
    </div>
  );
};

export default Navbar;