import React from "react";
import "./Header.css"; // Importing the Style of the header 

export function Header() {
  return (

    <span onClick={() => window.scroll(0, 0)} className="header">
    🌆 Date Night 💃🕺
  </span>
  );
}
