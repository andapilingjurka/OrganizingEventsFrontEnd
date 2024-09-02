import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Admin/Dashboard";
import EventThemesAdmin from "./Admin/EventThemesAdmin";
import EventCategoriesAdmin from "./Admin/EventCategoriesAdmin";
import EventsAdmin from "./Admin/EventsAdmin";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/eventsAdmin" element={<EventsAdmin />} />
        <Route path="/eventThemesAdmin" element={<EventThemesAdmin />} />
        <Route path="/eventCategoriesAdmin" element={<EventCategoriesAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;