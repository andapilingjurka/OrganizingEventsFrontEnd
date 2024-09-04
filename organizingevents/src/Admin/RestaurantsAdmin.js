import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Navbar from "./include/Navbar";
import Sidebar from "./include/Sidebar";
import { useNavigate } from "react-router-dom";

function RestaurantsAdmin() {
  const [toggle, setToggle] = useState(true);

  const navigate = useNavigate();
  const Toggle = () => {
    setToggle(!toggle);
  };

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState("");
  const [restaurantTypesId, setRestaurantTypesId] = useState("");
  const [restaurantTypes, setRestaurantTypes] = useState([]); 
  const [restaurants, setRestaurants] = useState([]);

  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); 
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const cancel = () => {
    setIsFormVisible(false);
    setId("");
    setName("");
    setLocation("");
    setImage("");
    setSelectedImage("");
    setDescription("");
    setRestaurantTypesId("");
  };

  useEffect(() => {
    (async () => {
      await loadRestaurantTypes();
      await loadRestaurants();
    })();
  }, []);


  async function loadRestaurantTypes() {
    try {
      const result = await axios.get(
        "https://localhost:7137/api/RestaurantTypes/GetAllList"
      );
      setRestaurantTypes(result.data);
    } catch (err) {
      console.error("Error loading eventThemes:", err);
    }
  }

  async function loadRestaurants() {
    try {
        const result = await axios.get(
            "https://localhost:7137/api/Restaurants/GetAllList"
        );
        setRestaurants(result.data);
    } catch (err) {
        console.error("Error loading events:", err);
    }
}

  const inputFileRef = useRef(null);

  async function save(restaurant) {
    restaurant.preventDefault();
    try {
      await axios.post("https://localhost:7137/api/Restaurants/Add", {
        name: name,
        location: location,
        image: image,
        description: description,
        restaurantTypesId: restaurantTypesId, 
      });
      showAlert("The restaurant has been successfully registered!", "alert-success");
      clearForm();
      setIsFormVisible(false);
      loadRestaurants();
    } catch (err) {
      showAlert(`Error: ${err}`, "alert-danger");
    }
  }

  function clearForm() {
    setId("");
    setName("");
    setLocation("");
    setImage("");
    setSelectedImage("");
    setDescription("");
    setRestaurantTypesId("");
  
    setSelectedImage(null);
  
    if (inputFileRef.current) {
      inputFileRef.current.value = "";
    }
  }
  

  async function editRestaurants(restaurant) {
    setName(restaurant.name);
    setLocation(restaurant.location);
    setImage(restaurant.image);
    setSelectedImage(restaurant.image);
    setDescription(restaurant.description);
    setRestaurantTypesId(restaurant.restaurantType?.id || ""); 
    setId(restaurant.id);
    setIsFormVisible(true);
  }

  async function deleteRestaurants(restaurantId) {
    try {
      await axios.delete(`https://localhost:7137/api/Restaurants/Delete/${restaurantId}`);
      showAlert("The restaurant has been successfully deleted!", "alert-success");
      clearForm();
      loadRestaurants();
    } catch (err) {
      showAlert(`Error: ${err}`, "alert-danger");
    }
  }
  
  

  async function update(restaurant) {
    restaurant.preventDefault();
    try {
      const restaurant = restaurants.find((p) => p.id === id);
      await axios.put(`https://localhost:7137/api/Restaurants/Update/${restaurant.id}`, {
        id: restaurant.id,
        name: name,
        location: location,
        image: image,
        description: description,
        restaurantTypesId: restaurantTypesId, 
      });
      showAlert("The restaurant has been successfully edited!", "alert-success");
      clearForm();
      setIsFormVisible(false); 
      loadRestaurants();
    } catch (err) {
      showAlert(`Error: ${err}`, "alert-danger");
    }
  }

  function showAlert(message, type) {
    setAlertMessage(message);
    setAlertType(type);
    setIsAlertVisible(true);

    setTimeout(() => {
      setIsAlertVisible(false);
    }, 4000); // Hide the alert after 4 seconds
  }

  

  ///////////////////////////////////////////////////////////////
  
}

export default RestaurantsAdmin;
