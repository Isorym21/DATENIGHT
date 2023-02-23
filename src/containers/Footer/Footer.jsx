import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css"; // Importing the Style of the footer 

export function Footer() {
  return (
    <div>
    <span onClick={() => window.scroll(0, 0)} className="footer">
      Project: 🌆 Date Night 💃🕺 Brought to you by:
    </span>
    <ul className="authorgitlinks">
    <li><Link to='https://github.com/BryCor'>Bryan Cortez</Link></li>
    <li><Link to='https://github.com/WillsPrettyLxzy'>Will Estrada</Link></li>
    <li><Link to='https://github.com/gerardom41'>Gerardo Molina</Link></li>
    <li><Link to='https://github.com/Isorym21'>Isory Santana</Link></li>
    <li><Link to='https://github.com/GSchrils'>George Schrils</Link></li>
    </ul>
    </div>
  );
}
