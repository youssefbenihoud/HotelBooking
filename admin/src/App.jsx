import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Rooms from './pages/Rooms';
import Reservations from './pages/Reservations';
import Messages from './pages/Messages';
import LoginPage from './pages/LoginPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('token');
  });

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    toast.info("Logged out successfully");
  };

  return (
    <Router>
      <ToastContainer />
      {isLoggedIn ? (
        <>
          <Navbar logout={logout} />
          <div className="flex">
            <Sidebar />
            <div className="flex-1 p-8">
              <Routes>
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="*" element={<Navigate to="/rooms" />} />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;