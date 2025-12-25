import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import HotelDetails from "./pages/HotelDetails";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Bookings from "./pages/Bookings";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./context/AuthContext";
import RoomContextProvider from "./context/RoomContext";

const App = () => {
  return (
    <AuthContextProvider>
      <RoomContextProvider>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/room/:id" element={<HotelDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </RoomContextProvider>
    </AuthContextProvider>
  );
};

export default App;
