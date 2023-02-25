import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
//axios will pull information from the API
import axios from "axios";

// Event API

const URL1 = "https://api.nasa.gov/planetary/apod";
const API_KEY1 = "?api_key=0mi6eSYgNcmFw9h8zjAb0O926BYVBPVlJejOQbnw";

// Location API

const URL2 = "https://api.nasa.gov/planetary/apod";
const API_KEY2 = "?api_key=0mi6eSYgNcmFw9h8zjAb0O926BYVBPVlJejOQbnw";

export function DateOptions({ dateType, zipCode, dayOfWeek }) {
  // useLocation to draw put the props from the Form
  const { state } = useLocation();

  // console.log(state);

  // console.log(state.dateType.dateType);
  // console.log(state.zipCode);
  // console.log(state.dayOfWeek);

  // State setters
  const [eventData, setEventData] = useState({});
  const [locationData, setLocationData] = useState({});
  const [dateOptions, setDateOptiona] = useState([]);

  // // INFO PASSED DOWN FROM PROPS
  // useEffect(() => {
  //   const queryParams = new URLSearchParams(window.location.search);
  //   const flow = queryParams.get("zipcode");

  //   console.log("zipcode", flow);
  // }, []);

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
      <h1>Date Options</h1>

      <div className="dateCard">
        <img alt="" src={eventData.url}></img>
        <div className="dateInfo">
          <h1>{eventData.title}</h1>
          <p>{locationData.explanation}</p>
        </div>
      </div>

      <button>
        <Link
          to="/FinalDateInfo"
          state={{
            dateType: { state },
            zipCode: { state },
            dayOfWeek: { state },
            eventData: { eventData },
          }}
        >
          {" "}
          Summary of the date choosen
        </Link>
      </button>
    </div>
  );
}
