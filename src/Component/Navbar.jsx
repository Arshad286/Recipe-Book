
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Recipe Book</Link>
      <ul className="navbar-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
