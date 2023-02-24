//useState & useEffect will deal with the state handlers
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

export function Form() {
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
          console.log(response.data);
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
    <main>
	  <section>
    <form action="#" class="form">
			<fieldset>
				<legend>Whats Your Date?</legend>
				<div class="input-group">
					<label for="datetype" class="label">Date Type? </label>
					<select name="" id="datetype">
						<option value="movies">Movies</option>
						<option value="park">Park</option>
					</select>
					<input id="datetype" placeholder="Ex: Movies, Park" type="text" class="input"></input>
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

				<div class="input-group">
					<label for="zipcode" class="label">Zip Code? </label>
					<input id="zipcode" type="" class="input" autocomplete placeholder="Ex: 10000"></input>
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

				<div class="input-group">
					<label for="day" class="label">What day of the week? </label>
					<select name="" id="day">
						<option value="monday">Monday</option>
						<option value="tuesday">Tuesday</option>
						<option value="wednesday">Wednesday</option>
						<option value="thursday">Thursday</option>
						<option value="friday">Friday</option>
						<option value="saturday">Saturday</option>
						<option value="Sunday">Sunday</option>
					</select>
					{/* <input id="day" type="day" class="input" placeholder="Monday - Sunday"></input>
					<span class="error-message"></span> */}
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

				<div class="input-group">
					<label for="time" class="label">What time does your Date start? </label>
					<input id="time" type="time" class="input" placeholder="Ex: 8:00 PM"></input>
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
				</fieldset>

			{/* <input type="submit" value="Create account"></input> */}
			<button>
          <Link
            to="/dateOptions"
            state={{ eventData: { eventData }, locationData: { locationData } }}
          >
            DATE OPTIONS
          </Link>
        </button>
			{/* <footer>
				<p>Already have an account? <a href="#">Sign in</a></p>
			</footer> */}
		</form>
    </section>
</main>
  );
}