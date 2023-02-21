import React from "react";
import { Link } from "react-router-dom";

export function WelcomeScreen() {
  return (
    <div>
      <h1>Welcome Screen!!</h1>

      <button>
        <Link to="/form"> Let's plan a date!</Link>
      </button>
    </div>
  );
}
