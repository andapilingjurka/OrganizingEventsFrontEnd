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
import ContactAdmin from './Admin/ContactAdmin';
import Users from "./Admin/Users";
import Reservations from "./Admin/Reservations";
import Login from "./Login/Login";
import Register from "./Register/Register";

import Home from "./User/Home/Home";
import AboutUs from "./User/AboutUs/aboutus";
import RestaurantList from "./User/Restaurants/RestaurantList";
import RestaurantDetails from "./User/Restaurants/RestaurantDetails";
import EventList from "./User/Events/EventList";
import EventDetails from "./User/Events/EventDetails";
import StaffList from "./User/Staff/StaffList";
import FeedbackAdmin from "./Admin/FeedbackAdmin";
import AddFeedback from "./User/Home/AddFeedback";


function App() {
  return (
    <Router>
      <Routes>
        
        {/*Admin Part*/}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/eventsAdmin" element={<EventsAdmin />} />
        <Route path="/eventThemesAdmin" element={<EventThemesAdmin />} />
        <Route path="/eventCategoriesAdmin" element={<EventCategoriesAdmin />} />
        <Route path="/restaurantTypesAdmin" element={<RestaurantTypesAdmin />} />
        <Route path="/restaurantsAdmin" element={<RestaurantsAdmin />} />
        <Route path="/staffAdmin" element={<StaffAdmin />} />
        <Route path="/contactAdmin" element={<ContactAdmin />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reservations" element={<Reservations/>} />
        <Route path="/feedbackAdmin" element={<FeedbackAdmin/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

          {/*User Part*/}
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/restaurantlist" element={<RestaurantList/>} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/eventlist" element={<EventList />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/stafflist" element={<StaffList />} />
          <Route path="/addfeedback" element={<AddFeedback />} />

      </Routes>
    </Router>
  );
}

export default App;