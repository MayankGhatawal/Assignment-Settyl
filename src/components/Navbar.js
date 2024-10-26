import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">SocialMedia</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/profile" className="text-gray-700 hover:text-blue-500">Profile</Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-500">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
