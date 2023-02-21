import React from "react";
import { Link } from "react-router-dom";

export function FinalDateInfo() {
  return (
    <div>
      {/* Here we will display the Summary of our date and we can include a button to go back to the home page. */}
      <h1>FinalDateInfo</h1>
      <button>
        <Link to="/home"> Let's plan the next date!!</Link>
      </button>
    </div>
  );
}
