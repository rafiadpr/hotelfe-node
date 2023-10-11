import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./app/Home/Hero.jsx";
import Navbar from "./components/navbar.jsx";
import Stats from "./app/Home/Stats.jsx";
import Review from "./app/Home/Review.jsx";
import ReservationPage from "./app/Reservation/page.jsx";
import RoomsPage from "./app/Rooms/page.jsx";
import RoomType from "./app/Home/RoomType.jsx";
import HistoryPage from "./app/History/page.jsx";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/reservations" element={<ReservationPage />} />
          <Route path="/history" element={<HistoryPage />} />
          {/* Add more routes as needed */}
        </Routes>
        {/* Only display Stats and Review on the homepage */}
        <Routes>
        <Route path="/" element={<>
          <Stats />
          <Review />
          <RoomType />
        </>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
