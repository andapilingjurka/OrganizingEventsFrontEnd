import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserShield, FaHome, FaUsers, FaCalendarDay, FaTag, FaListAlt, FaSignOutAlt, FaUserTie } from "react-icons/fa";  // Import FaUserTie for StaffAdmin
import "../style.css";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar p-2">
      <div className="logo m-1">
        <FaUserShield className="admin-icon" /> {/* Admin icon */}
        <Link
          to="/"
          className={`dashboard-link ${location.pathname === "/" ? "active-link" : ""}`}
        >
          DASHBOARD
        </Link> {/* Dashboard link */}
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <Link
          to="/"
          className={`list-group-item py-2 rounded ${
            location.pathname === "/" ? "active-link" : ""
          }`}
        >
          <FaHome className="fs-5 me-3" /> <span>Home</span>
        </Link>

        <Link
          to="/users"
          className={`list-group-item py-2 rounded ${
            location.pathname === "/users" ? "active-link" : ""
          }`}
        >
          <FaUsers className="fs-5 me-3" /> <span>Users</span>
        </Link>

        <Link
          to="/eventsAdmin"
          className={`list-group-item py-2 rounded ${
            location.pathname === "/eventsAdmin" ? "active-link" : ""
          }`}
        >
          <FaCalendarDay className="fs-5 me-3" /> <span>Events</span>
        </Link>

        <Link
          to="/eventThemesAdmin"
          className={`list-group-item py-2 rounded ${
            location.pathname === "/eventThemesAdmin" ? "active-link" : ""
          }`}
        >
          <FaTag className="fs-5 me-3" /> <span>Event Themes</span>
        </Link>

        <Link
          to="/eventCategoriesAdmin"
          className={`list-group-item py-2 rounded ${
            location.pathname === "/eventCategoriesAdmin" ? "active-link" : ""
          }`}
        >
          <FaListAlt className="fs-5 me-3" /> <span>Event Categories</span>
        </Link>

        <Link
          to="/reservations"
          className={`list-group-item py-2 rounded ${
            location.pathname === "/reservations" ? "active-link" : ""
          }`}
        >
          <FaCalendarDay className="fs-5 me-3" /> <span>Reservations</span>
        </Link>

        {/* Add StaffAdmin Link */}
        <Link
          to="/staffAdmin"
          className={`list-group-item py-2 rounded ${
            location.pathname === "/staffAdmin" ? "active-link" : ""
          }`}
        >
          <FaUserTie className="fs-5 me-3" /> <span>Staff</span>
        </Link>

        <br/>
        <br/>
        <br/>
        <br/>

        {/* Logout Link */}
        <Link
          to="/logout"
          className="list-group-item logout-link py-2 rounded"
        >
          <FaSignOutAlt className="fs-5 me-3" /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
