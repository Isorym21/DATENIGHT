//useState & useEffect will deal with the state handlers
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { DateOptions } from "../DateOptions/DateOptions";

export function Form() {
  // const zipCode = 10470;

  // State setters for the inputs
  const [dateType, setDateType] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [time, setTime] = useState("");

  // const handleClick = () => {
  //   console.log("this is:", this);
  // };

  // Event handlers for the form
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={handleSubmit}>
        {/* iNPUTS WILL GO HERE */}
        {/* onClick={this.handleClick} */}
        <button type="submit">
          <Link to="/dateOptions?zipcode={zipCode}">Submit Input Values</Link>
          {/* <DateOptions></DateOptions> */}
        </button>
      </form>
    </div>
  );
}
