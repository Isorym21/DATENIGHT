import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//axios will pull information from the API
import axios from "axios";

// Event API

const URL1 = "https://api.nasa.gov/planetary/apod";
const API_KEY1 = "?api_key=0mi6eSYgNcmFw9h8zjAb0O926BYVBPVlJejOQbnw";

// Location API

const URL2 = "https://api.nasa.gov/planetary/apod";
const API_KEY2 = "?api_key=0mi6eSYgNcmFw9h8zjAb0O926BYVBPVlJejOQbnw";

export function DateOptions(props) {
  // State setters
  const [eventData, setEventData] = useState({});
  const [locationData, setLocationData] = useState({});

  // fetching API for EVENTS and using useEffect so it only renders once.
  useEffect(() => {
    const fetchEventData = () => {
      axios
        .get(`${URL1}${API_KEY1}`)
        .then((response) => {
          setEventData(response.data);
          // console.log(response.data);
        })
        .catch((error) => {
          console.log("404!");
        });
    };
    fetchEventData();
  }, []);

  // fetching API for LOCATIONS and using useEffect so it only renders once.
  useEffect(() => {
    const fetchLocationData = () => {
      axios
        .get(`${URL2}${API_KEY2}`)
        .then((response) => {
          setLocationData(response.data);
          // console.log(response.data)
        })
        .catch((error) => {
          console.log("404!");
        });
    };
    fetchLocationData();
  }, []);

  return (
    <div>
      {/* THE DATE OPTIONS WILL APPEAR ON THIS SCREEN. API WILL USE DATA FROM THE FORM AND DISPLAY THE DATE THAT MEETS REQUIREMENTS  */}
      <h1>DateOptions</h1>
      <button>
        <Link to="/FinalDateInfo"> Summary of the date choosen</Link>

        {console.log(eventData.title)}
        {console.log(locationData.explanation)}
      </button>
    </div>
  );
}
