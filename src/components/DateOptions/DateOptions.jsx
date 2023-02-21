import React from "react";
import { Link } from "react-router-dom";

export function DateOptions() {
  return (
    <div>
      {/* THE DATE OPTIONS WILL APPEAR ON THIS SCREEN. API WILL USE DATA FROM THE FORM AND DISPLAY THE DATE THAT MEETS REQUIREMENTS  */}
      <h1>DateOptions</h1>
      <button>
        <Link to="/FinalDateInfo"> Summary of the date choosen</Link>
      </button>
    </div>
  );
}
