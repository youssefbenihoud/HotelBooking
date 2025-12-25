import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-200 p-4">
      <ul>
        <li>
          <NavLink to="/rooms" className="text-lg font-semibold" activeClassName="text-blue-500">
            Rooms
          </NavLink>
        </li>
        <li>
          <NavLink to="/reservations" className="text-lg font-semibold" activeClassName="text-blue-500">
            Reservations
          </NavLink>
        </li>
        <li>
            <NavLink to="/messages" className="text-lg font-semibold" activeClassName="text-blue-500">
                Messages
            </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;