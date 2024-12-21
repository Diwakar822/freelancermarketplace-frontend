import React from 'react';
import { Link } from "react-router-dom";
import "../styles/styles.css";
const Navbar = () => {
    return (
        <div>
             {/* <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav> */}
     <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Freelance Marketplace
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/jobs" className="navbar-link">Jobs</Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">Services</Link>
          </li>
          <li className="navbar-item">
            <Link to="/profile" className="navbar-link">Profils</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Contract" className="navbar-link">Contracts</Link>
          </li>
        </ul>
        <div className="navbar-auth">
          <Link to="/login" className="navbar-button">Login</Link>
          <Link to="/register" className="navbar-button navbar-button-outline">Sign Up</Link>
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Navbar;