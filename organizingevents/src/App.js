import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Admin/Dashboard";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
 
      </Routes>
    </Router>
  );
}

export default App;