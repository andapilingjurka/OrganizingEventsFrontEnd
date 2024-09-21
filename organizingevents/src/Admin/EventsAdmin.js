import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Navbar from "./include/Navbar";
import Sidebar from "./include/Sidebar";
import { useNavigate } from "react-router-dom";

function EventsAdmin() {
  const [toggle, setToggle] = useState(true);

  const navigate = useNavigate();
  const Toggle = () => {
    setToggle(!toggle);
  };

  const [id, setId] = useState("");
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [themeId, setThemeId] = useState(""); 
  const [eventCategories, setEventCategories] = useState([]);
  const [eventThemes, setEventThemes] = useState([]); 
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


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
    setEventName("");
    setDescription("");
    setImage("");
    setSelectedImage("");
    setPrice("");
    setCategoryId("");
    setThemeId(""); 
  };

  useEffect(() => {
    (async () => {
      await loadEventCategories();
      await loadEventThemes();
      await loadEvents();
    })();
  }, []);

  async function loadEventCategories() {
    try {
      const result = await axios.get(
        "https://localhost:7214/api/EventCategories/GetAllList"
      );
      setEventCategories(result.data);
    } catch (err) {
      console.error("Error loading eventCategories:", err);
    }
  }

  async function loadEventThemes() {
    try {
      const result = await axios.get(
        "https://localhost:7214/api/EventThemes/GetAllList"
      );
      setEventThemes(result.data);
    } catch (err) {
      console.error("Error loading eventThemes:", err);
    }
  }

  async function loadEvents() {
    try {
      const result = await axios.get(
        "https://localhost:7214/api/Events/GetAllList"
      );
      setEvents(result.data);
    } catch (err) {
      console.error("Error loading events:", err);
    }
  }

  const inputFileRef = useRef(null);

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("https://localhost:7214/api/Events/Add", {
        eventName: eventName,
        description: description,
        image: image,
        price: price,
        categoryId: categoryId,
        themeId: themeId, 
      });
      showAlert("The event has been successfully registered!", "alert-success");
      clearForm();
      setIsFormVisible(false);
      loadEvents();
    } catch (err) {
      showAlert(`Error: ${err}`, "alert-danger");
    }
  }

  function clearForm() {
    setId("");
    setEventName("");
    setDescription("");
    setImage("");
    setPrice("");
    setCategoryId("");
    setThemeId(""); 
  
    setSelectedImage(null);
  
    if (inputFileRef.current) {
      inputFileRef.current.value = "";
    }
  }
  

  async function editEvents(event) {
    setEventName(event.eventName);
    setDescription(event.description);
    setImage(event.image);
    setSelectedImage(event.image);
    setPrice(event.price);
    setCategoryId(event.categoryId);
    setThemeId(event.themeId); 
    setId(event.id);
    setIsFormVisible(true);
  }

  async function deleteEvents(eventId) {
    try {
      await axios.delete(`https://localhost:7214/api/Events/Delete?Id=${eventId}`);
      showAlert("The event has been successfully deleted!", "alert-success");
      clearForm();
      loadEvents();
    } catch (err) {
      showAlert(`Error: ${err}`, "alert-danger");
    }
  }
  
  

  async function update(event) {
    event.preventDefault();
    try {
      const event = events.find((p) => p.id === id);
      await axios.put(`https://localhost:7214/api/Events/Update/${event.id}`, {
        id: event.id,
        eventName: eventName,
        description: description,
        image: image,
        price: price,
        categoryId: categoryId,
        themeId: themeId, 
      });
      showAlert("The event has been successfully edited!", "alert-success");
      clearForm();
      setIsFormVisible(false); 
      loadEvents();
    } catch (err) {
      showAlert(`Error: ${err}`, "alert-danger");
    }
  }



  const handleSearch = async () => {
    try {
      const response = await axios.get('https://localhost:7214/api/Events/SearchEvent', {
        params: {
          searchEvent: searchTerm,
        },
      });
      setEvents(response.data);
    } catch (err) {
      console.error("Error searching events:", err);
    }
  };
  


  async function exportEventsToExcel() {
    try {
      const response = await axios.get("https://localhost:7214/api/Events/ExportEventsToExcel", {
        responseType: "blob", // Kjo është e rëndësishme për të pranuar skedarin Excel
      });
  
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Events.xlsx"); // Emri i skedarit
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error exporting events to Excel:", error);
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
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div className="row">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar />
          </div>
        )}

        <div className="col-4 col-md-2"></div>
        <div className="col">
          <Navbar Toggle={Toggle} />
          
          <div className="d-flex justify-content-between align-items-center mt-4 px-5">
            <h4 className="text-dark">Data for Events</h4>
            <button className="btn btn-add d-flex align-items-center" onClick={toggleFormVisibility}>
              <i className="fas fa-plus me-2"></i>
              Add
            </button>
          </div>

 
          {isFormVisible && (
            <div className="container mt-4 text-white align-item-center">
              <form>
                <div className="form-group px-5">
                  <input
                    type="text"
                    className="form-control"
                    id="id"
                    hidden
                    value={id}
                    onChange={(event) => {
                      setId(event.target.value);
                    }}
                  />

                  <label className="label">EventName:</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="eventName"
                    value={eventName}
                    onChange={(event) => {
                      setEventName(event.target.value);
                    }}
                  />
                </div>

                <div className="form-group px-5">
                  <label className="label">Description:</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="description"
                    value={description}
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  />
                </div>
              

                <div className="form-group px-5">
                  <label className="label">Image:</label>
                  <input
                    type="file"
                    ref={inputFileRef}
                    className="form-control mb-3"
                    id="image"
                    onChange={(event) => {
                      setSelectedImage(URL.createObjectURL(event.target.files[0]));
                      setImage("./images/" + event.target.files[0].name);
                    }}
                  />
                  
                  {selectedImage && (
                    <img
                      src={selectedImage}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        maxHeight: "150px",
                        marginTop: "10px",
                      }}
                      alt="SelectedImagePreview"
                    />
                  )}
                </div>

                <div className="form-group px-5">
                  <label className="label">Price:</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="price"
                    value={price}
                    onChange={(event) => {
                      setPrice(event.target.value);
                    }}
                  />
                </div>
            
                <div className="form-group px-5">
                  <label className="label">Category:</label>
                  <select
                    className="form-control mb-3"
                    id="category"
                    value={categoryId}
                    onChange={(event) => setCategoryId(event.target.value)}
                  >
                    <option value="">Select Options</option>
                    {eventCategories.map((eventCategory) => (
                      <option key={eventCategory.id} value={eventCategory.id}>
                        {eventCategory.categoryName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group px-5">
                  <label className="label">Theme:</label>
                  <select
                    className="form-control"
                    id="theme"
                    value={themeId}
                    onChange={(event) => setThemeId(event.target.value)}
                  >
                    <option value="">Select Theme</option>
                    {eventThemes.map((theme) => (
                      <option key={theme.id} value={theme.id}>
                        {theme.themeName}
                      </option>
                    ))}
                  </select>
                </div>


                <div className="mt-3">
                  <button className="btn btn-save" onClick={save}>
                    Save
                  </button>
                  <button
                    className="btn btn-update"
                    onClick={update}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-cancel "
                    onClick={cancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

            <br />


            {isAlertVisible && (
            <div
              className={`alert ${alertType}`}
            >
              {alertMessage}
            </div>
          )}


            <div className="search-event-admin">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control-search me-2"
              />
            <button className="btn btn-search-event me-2" onClick={handleSearch}>Search
              <i className="fas fa-search"></i>
            </button>
            <button className="btn btn-export-excel ms-2" onClick={exportEventsToExcel}>
              Export to Excel
            </button>
            </div>

            <div className="table-responsive m-4 px-4">
              <table className="table border-gray">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">EventName</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">Theme</th> 
                    <th scope="col">Options</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                      <tr key={event.id}>
                        <td>{event.id}</td>
                        <td>{event.eventName}</td>
                        <td className="description-cell">{event.description}</td>
                        <td>
                          <img
                            src={event.image}
                            style={{
                              maxWidth: "100%",
                              height: "auto",
                              maxHeight: "150px",
                            }}
                            alt="EventPhoto"
                          />
                        </td>
                        <td>{event.price}</td>
                        <td>{event.eventCategories.categoryName}</td>
                        <td>{event.eventThemes.themeName}</td> 
                        <td className="options-cell d-flex justify-content-center align-items-center">
                            <button
                              type="button"
                              className="btn btn-edit mx-2 d-flex align-items-center"
                              onClick={() => editEvents(event)}
                            >
                               <i className="fas fa-edit"></i>
                               <span className="ms-2">Edit</span>
                            </button>
                            <button
                              type="button"
                              className="btn btn-delete mx-2 d-flex align-items-center"
                              onClick={() => deleteEvents(event.id)}
                            >
                               <i className="fas fa-trash-alt"></i>
                               <span className="ms-2">Delete</span>
                            </button>
                        </td>
                      </tr>
                  
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
}

export default EventsAdmin;
