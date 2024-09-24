import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import DiscussionForum from "./pages/DiscussionForum";
import Events from "./pages/Events";
import CampusMapLocation from "./pages/CampusMapLocation";
import RoommateListing from "./pages/RoommateListing";
import Header from "./components/Header";

import News from "./components/News";
import Footer from "./components/Footer";
import LoginSignup from "./pages/LoginSignup";

function App() {
  return (
    <Router>
      <Header />
      <div className="flex flex-row bg-bgcolor justify-center">
        <div className="flex text-white min-h-screen  justify-center">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/discussionforum" element={<DiscussionForum />} />
            <Route path="/events" element={<Events />} />
            <Route path="/campusmaplocation" element={<CampusMapLocation />} />
            <Route path="/roommatelisting" element={<RoommateListing />} />
            <Route path="/loginsignup" element={<LoginSignup />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
