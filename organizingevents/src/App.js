import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Admin/Dashboard";
import EventThemesAdmin from "./Admin/EventThemesAdmin";
import EventCategoriesAdmin from "./Admin/EventCategoriesAdmin";
import EventsAdmin from "./Admin/EventsAdmin";
import RestaurantTypesAdmin from "./Admin/RestaurantTypesAdmin";
import RestaurantsAdmin from "./Admin/RestaurantsAdmin";
import StaffAdmin from "./Admin/StaffAdmin"; 



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/eventsAdmin" element={<EventsAdmin />} />
        <Route path="/eventThemesAdmin" element={<EventThemesAdmin />} />
        <Route path="/eventCategoriesAdmin" element={<EventCategoriesAdmin />} />
        <Route path="/restaurantTypesAdmin" element={<RestaurantTypesAdmin />} />
        <Route path="/restaurantsAdmin" element={<RestaurantsAdmin />} />
        <Route path="/staffAdmin" element={<StaffAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;