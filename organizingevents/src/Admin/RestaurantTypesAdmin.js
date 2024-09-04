import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./include/Navbar";
import Sidebar from "./include/Sidebar";
import { useNavigate } from "react-router-dom";

function RestaurantTypesAdmin() {
  const [toggle, setToggle] = useState(true);

  const navigate = useNavigate();
  const Toggle = () => {
    setToggle(!toggle);
  };

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [restaurantTypes, setRestaurantTypes] = useState([]);
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
    setDescription("");
  };

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    try {
      const result = await axios.get(
        "https://localhost:7137/api/RestaurantTypes/GetAllList"
      );
      setRestaurantTypes(result.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function save(restaurantType) {
    restaurantType.preventDefault();
    try {
      await axios.post("https://localhost:7137/api/RestaurantTypes/Add", {
        name: name,
        description: description,
      });
      showAlert("The restaurant type has been successfully registered!", "alert-success");
      setId("");
      setName("");
      setDescription("");
      setIsFormVisible(false);
      Load();
    } catch (err) {
      showAlert(`Error: ${err}`, "alert-danger");
    }
  }

  async function editRestaurantTypes(restaurantTypes) {
    setName(restaurantTypes.name);
    setDescription(restaurantTypes.description);
    setId(restaurantTypes.id);
    setIsFormVisible(true);
  }

  async function deleteRestaurantTypes(id) {
    try {
      await axios.delete(`https://localhost:7137/api/RestaurantTypes/Delete/${id}`);
      showAlert("The restaurant type has been successfully deleted!", "alert-success");
      setId("");
      setName("");
      setDescription("");
      Load();
    } catch (err) {
      showAlert(`Error: ${err}`, "alert-danger");
    }
  }

  async function update(restaurantType) {
    restaurantType.preventDefault();
    try {
      const restaurantType = restaurantTypes.find((p) => p.id === id);
      await axios.put(
        `https://localhost:7137/api/RestaurantTypes/Update/${restaurantType.id}`,
        {
          id: restaurantType.id,
          name: name,
          description: description,
        }
      );
      showAlert("The restaurant type has been successfully edited!", "alert-success");
      setId("");
      setName("");
      setDescription("");
      setIsFormVisible(false); 
      Load();
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

  /////////////////////////////////////////////////////////
  
}

export default RestaurantTypesAdmin;