import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css"; // Importing the Style of the footer 

export function Footer() {
  return (
    <div>
    <span onClick={() => window.scroll(0, 0)} className="footer">
      Project: 🌆 Date Night 💃🕺 Brought to you by:
    </span>
    <h1></h1><Link to='https://github.com/GSchrils'>George Schrils</Link>
    <h1></h1><Link to='https://github.com/Isorym21'>Isory Santana</Link>
    <h1></h1><Link to='https://github.com/BryCor'>Bryan Cortez</Link>
    <h1></h1><Link to='https://github.com/gerardom41'>Gerardo Molina</Link>
    <h1></h1><Link to='https://github.com/WillsPrettyLxzy'>Will Estrada</Link>
    
    </div>
  );
}
