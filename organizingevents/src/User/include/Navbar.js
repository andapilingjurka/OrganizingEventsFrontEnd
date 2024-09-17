import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import logo from '../images/logo.jpg'; 

const Navbar = () => {
  return (
    <div className="navbar-container"> 
      <div className="navbar-top">
        <img src={logo} alt="Organizing Events Logo" className="logo-home" />
        <div className="icons">
          <i className="bi bi-search"></i>
          <i className="bi bi-bell"></i>
          <i className="bi bi-list"></i>


        </div>
      </div>
      <div className="navbar-bottom">
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/aboutus" className="nav-link">About Us</Link>
          </li>
          <li>
            <Link to="/stafflist" className="nav-link">Staff</Link>
          </li>
          <li>
            <Link to="/eventlist" className="nav-link">Events</Link>
          </li>
          <li>
            <Link to="/restaurantlist" className="nav-link">Restaurants</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
