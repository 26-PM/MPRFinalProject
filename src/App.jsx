import React from "react";
// import styles from "./App.css";

import LandingPage from "./pages/LandingPage";
import Donation from "./pages/Donation"
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignupPage/Signup";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
    </div>
  );
}

export default App;
