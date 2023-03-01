//useState & useEffect will deal with the state handlers
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//axios will pull information from the API
import axios from "axios";
import "./Form.css";
import { DateOptions } from "../DateOptions/DateOptions";

// Event API

const url = " https://developer.nps.gov/api/v1";

const query = "/activities/parks?limit=100";

const apiKey = "&api_key=APowRDuJ2HH6X73WS0UjWxo5gaYhGhnoI64YhoTH";

export function Form() {
  //   // State setters
  //   const [eventData, setEventData] = useState({});
  //   const [locationData, setLocationData] = useState({});

  const [dateType, setDateType] = useState();

  const [zipCode, setZipCode] = useState();

  const [dateTitle, setDateTitle] = useState("");
  // State setters
  const [eventData, setEventData] = useState({});

  //   const [toggle, setToggle] = useState(false);

  //   const toggleChecked = () => setToggle((toggle) => !toggle);

  //   OnClick handlers to submit the form with the states
  const onSubmit = (e) => {
    e.preventDefault();
    // toggleChecked();

    setDateType({ dateType });
    setZipCode({ zipCode });
    setDateTitle({ dateTitle });

    setDateType();
    setZipCode();
    setDateTitle("");
  };

  useEffect(() => {
    const fetchEventData = () => {
      axios
        .get(`${url}${query}${apiKey}`)
        .then((response) => {
          setEventData(response.data.data);
          console.log(response.data.data[0]);
          console.log(response.data.data[1]);
          console.log(response.data.data[3]);
        })
        .catch((error) => {
          console.log("404!");
        });
    };
    fetchEventData();
  }, []);

  const arr1 = eventData[0];
  const arr2 = eventData[2];
  const arr3 = eventData[3];

  console.log(eventData[0]?.name);

  return (
    <main>
	  <section>
    <form action="#" class="form">
			<fieldset>
				{/* <legend>Whats Your Date?</legend> */}
				<div class="input-group">
					<label for="datetype" class="label">Date Type? </label>
					<select name="" id="datetype">
						<option value="movies">Movies</option>
						<option value="park">Park</option>
					</select>
					
					<span class="error-message"></span>
					<svg class="icon icon-success hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<title>check-circle</title>
						<g fill="none">
							<path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
						</g>
					</svg>

					<svg class="icon icon-error hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<title>exclamation-circle</title>
						<g fill="none">
							<path d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
						</g>
					</svg>
				</div>

            <div className="inputFields">
              <label for="datetype" class="label">
                Date Type:
              </label>
              <select
                id="datetype"
                placeholder="Ex: Movies, Park"
                type="text"
                class="input"
                value={dateType}
                onChange={(e) => setDateType(e.target.value)}
              >
                <option value="None">-------</option>
                <option value={eventData}>{eventData[0]?.name}</option>
                <option value={eventData[1]?.name}>{eventData[1]?.name}</option>
                <option value={eventData[3]?.name}>{eventData[3]?.name}</option>
              </select>
            </div>

            <div className="inputFields">
              <label for="location" class="label">
                Location:
              </label>
              <select
                id="location"
                type=""
                class="input"
                autocomplete
                placeholder="Ex: New York"
                value={zipCode || ""}
                onChange={(e) => setZipCode(e.target.value)}
              >
                <option value="None">-------</option>
                <option value="NY">New York</option>
                <option value="CA">California</option>
                <option value="FL">Florida</option>
              </select>
            </div>
          </fieldset>

          {/* <input type="submit" value="Create account"></input> */}
          <button onClick={onSubmit}>
            <Link
              to="/dateOptions"
              state={{
                dateType: { dateType },
                zipCode: { zipCode },
                dateTitle: { dateTitle },
                eventData: { eventData },
              }}
            >
              Date Options
            </Link>
          </button>

          {/* {!toggle && <DateOptions />} */}
          {/* 
          {toggle && (
            <DateOptions
              dateType={dateType}
              zipCode={zipCode}
              dayOfWeek={dayOfWeek}
            />
          )}

          <button type="button" onClick={onSubmit}>
            Date Options
          </button> */}
          {/* <footer>
				<p>Already have an account? <a href="#">Sign in</a></p>
			</footer> */}
        </form>
      </section>
    </main>
  );
}
