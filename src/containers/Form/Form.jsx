//useState & useEffect will deal with the state handlers
import React from "react";
import { Link } from "react-router-dom";

export function Form() {
  const zipCode = 10470;

  // {
  //   const handleClick = () => {
  //     console.log("this is:", this);
  //   };
  // }
  return (
    <div>
      <h1>Form</h1>

      <form>
        {/* iNPUTS WILL GO HERE */}
        {/* onClick={this.handleClick} */}
        <button>
          <Link to="/dateOptions?zipcode={zipCode}">DATE OPTIONS</Link>
        </button>
      </form>
    </div>
  );
}
