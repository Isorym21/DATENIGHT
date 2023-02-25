import React from "react";
import { useLocation, Link } from "react-router-dom";

export function FinalDateInfo() {
  // useLocation to draw put the props from the Form
  const { state } = useLocation();

  // Props from the DateOptions component using {state}
  const dateType = state.dateType.state.dateType.dateType;
  const zipCode = state.zipCode.state.zipCode.zipCode;
  const dayOfWeek = state.dayOfWeek.state.dayOfWeek.dayOfWeek;
  const eventData = state.eventData.eventData;
  // const image =

  console.log(eventData);

  return (
    <div>
      {/* Here we will display the Summary of our date and we can include a button to go back to the home page. */}
      <h1>Final Date Info</h1>

      <div className="dateCard">
        <img src={eventData.url} alt="date summary"></img>
        <h2>Date Title:{dateType}</h2>
        <p>Day of date:{zipCode}</p>
        <p>Location of date:{dayOfWeek}</p>
      </div>

      <button>
        <Link to="/home"> Let's plan the next date!!</Link>
      </button>
    </div>
  );
}
