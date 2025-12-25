import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    setToken(null);
    navigate("/");
  };

  const handleRoomsClick = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("hotel-list").scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>
      <nav className="flex justify-between p-[2rem] bg-black text-white items-center">
        <Link to="/">
          <div>
            <h2 className="font-bold text-2xl ">
              Marokko <span className="text-lime-400">HOTEL</span>
            </h2>
          </div>
        </Link>

        <div className="hidden md:block">
          <ul className="flex justify-between gap-8">
            <Link to="/bookings">
              <li className="font-bold text-lg cursor-pointer hover:text-lime-400">
                Bookings
              </li>
            </Link>
            <li onClick={handleRoomsClick} className="font-bold text-lg cursor-pointer hover:text-lime-400">
              Rooms
            </li>
            <Link to="/contact">
              <li className="font-bold text-lg cursor-pointer hover:text-lime-400">
                Contact
              </li>
            </Link>
            {token ? (
              <li onClick={logout} className="font-bold text-lg cursor-pointer hover:text-lime-400">
                Logout
              </li>
            ) : (
              <>
                <Link to="/login">
                  <li className="font-bold text-lg cursor-pointer hover:text-lime-400">
                    Login
                  </li>
                </Link>
                <Link to="/register">
                  <li className="font-bold text-lg cursor-pointer hover:text-lime-400">
                    Register
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-black text-white">
          <ul className="flex flex-col items-center gap-4 p-4">
          <Link to="/bookings">
              <li className="font-bold text-lg cursor-pointer hover:text-lime-400">
                Bookings
              </li>
            </Link>
            <li onClick={handleRoomsClick} className="font-bold text-lg cursor-pointer hover:text-lime-400">
              Rooms
            </li>
            <Link to="/contact">
              <li className="font-bold text-lg cursor-pointer hover:text-lime-400">
                Contact
              </li>
            </Link>
            {token ? (
              <li onClick={logout} className="font-bold text-lg cursor-pointer hover:text-lime-400">
                Logout
              </li>
            ) : (
              <>
                <Link to="/login">
                  <li className="font-bold text-lg cursor-pointer hover:text-lime-400">
                    Login
                  </li>
                </Link>
                <Link to="/register">
                  <li className="font-bold text-lg cursor-pointer hover:text-lime-400">
                    Register
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
