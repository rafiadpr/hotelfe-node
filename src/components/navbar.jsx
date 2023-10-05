import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-black bg-opacity-40 text-white p-4 absolute top-0 w-full">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">Wikusama Hotel</div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/rooms" className="hover:text-gray-300">Rooms</Link>
          </li>
          <li>
            <Link to="/reservations" className="hover:text-gray-300">Reservations</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
