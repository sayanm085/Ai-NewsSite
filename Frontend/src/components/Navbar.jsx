import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          WordCrafts Clone
        </Link>
        <nav className="space-x-6">
          <NavLink to="/" className="text-gray-600 hover:text-gray-900" end>Home</NavLink>
          <NavLink to="/articles" className="text-gray-600 hover:text-gray-900">Articles</NavLink>
          <NavLink to="/categories" className="text-gray-600 hover:text-gray-900">Categories</NavLink>
        </nav>
      </div>
    </header>
  );
}
