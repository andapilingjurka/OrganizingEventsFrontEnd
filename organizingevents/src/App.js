// App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Admin/ProtectedRoute"; // Importo ProtectedRoute
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
import FeedbackAdmin from "./Admin/FeedbackAdmin";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Home from "./User/Home/Home";
import AboutUs from "./User/AboutUs/aboutus";
import RestaurantList from "./User/Restaurants/RestaurantList";
import RestaurantDetails from "./User/Restaurants/RestaurantDetails";
import EventList from "./User/Events/EventList";
import EventDetails from "./User/Events/EventDetails";
import StaffList from "./User/Staff/StaffList";
import AddFeedback from "./User/Home/AddFeedback";
import Contact from "./User/Contact/Contact";
import UserReservation from "./User/UserReservations/UserReservation";
import PaymentForm from "./User/Payment/PaymentForm";
<<<<<<< HEAD
import PredictParticipants from "./Admin/PredictParticipants";

=======
import UserProfile from "./User/UserProfile/UserProfile";
>>>>>>> f72d6f66e6a0dfcebd36a9cc245a669e2fe28c69

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Part - Rrugë të mbrojtura me role */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={['1', '2']}> {/* '1' për SuperAdmin dhe '2' për MOD */}
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/eventsAdmin"
          element={
            <ProtectedRoute allowedRoles={['1', '2']}>
              <EventsAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/eventThemesAdmin"
          element={
            <ProtectedRoute allowedRoles={['1', '2']}>
              <EventThemesAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/eventCategoriesAdmin"
          element={
            <ProtectedRoute allowedRoles={['1', '2']}>
              <EventCategoriesAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/restaurantTypesAdmin"
          element={
            <ProtectedRoute allowedRoles={['1', '2']}>
              <RestaurantTypesAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/restaurantsAdmin"
          element={
            <ProtectedRoute allowedRoles={['1', '2']}>
              <RestaurantsAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/staffAdmin"
          element={
            <ProtectedRoute allowedRoles={['1', '2']}>
              <StaffAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contactAdmin"
          element={
            <ProtectedRoute allowedRoles={['1', '2']}>
              <ContactAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute allowedRoles={['1', '2']}>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reservations"
          element={
            <ProtectedRoute allowedRoles={['1', '2']}>
              <Reservations />
            </ProtectedRoute>
          }
        />
        <Route
          path="/feedbackAdmin"
          element={
            <ProtectedRoute allowedRoles={['1', '2']}>
              <FeedbackAdmin />
            </ProtectedRoute>
          }
        />
        
<<<<<<< HEAD
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
        <Route path="/predictParticipants" element={<PredictParticipants/>}/>

          {/*User Part*/}
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/restaurantlist" element={<RestaurantList/>} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/eventlist" element={<EventList />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/stafflist" element={<StaffList />} />
          <Route path="/addfeedback" element={<AddFeedback />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservationForUser" element = {<UserReservation/>}/>
          <Route path="/predictParticipants" element={<PredictParticipants/>}/>

          <Route path="/paymentform" element = {<PaymentForm/>}/>
=======
        {/* Login and Register */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Part - Rrugë të mbrojtura për përdoruesit e loguar */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute requiresAuth> {/* Kjo kontrollon nëse është i loguar */}
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/eventlist"
          element={
            <ProtectedRoute requiresAuth> {/* Kjo kontrollon nëse është i loguar */}
              <EventList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/event/:id"
          element={
            <ProtectedRoute requiresAuth> {/* Kjo kontrollon nëse është i loguar */}
              <EventDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/restaurantlist"
          element={
            <ProtectedRoute requiresAuth> {/* Kjo kontrollon nëse është i loguar */}
              <RestaurantList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/restaurant/:id"
          element={
            <ProtectedRoute requiresAuth> {/* Kjo kontrollon nëse është i loguar */}
              <RestaurantDetails />
            </ProtectedRoute>
          }
        />
>>>>>>> f72d6f66e6a0dfcebd36a9cc245a669e2fe28c69

        {/* Rrugët e tjera të përdoruesve */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/stafflist" element={<StaffList />} />
        <Route path="/addfeedback" element={<AddFeedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservationForUser" element={<UserReservation />} />
        <Route path="/paymentform" element={<PaymentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
