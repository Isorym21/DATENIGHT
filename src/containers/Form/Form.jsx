//useState & useEffect will deal with the state handlers
import React from "react";
import { Link } from "react-router-dom";

export function Form() {
  return (
    <div>
      <h1>Form</h1>

      <form>
        {/* iNPUTS WILL GO HERE */}

        <button>
          <Link to="/dateOptions">DATE OPTIONS</Link>
        </button>
      </form>
    </div>
  );
}
