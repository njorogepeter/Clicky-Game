import React from "react";
import './Navbar.css'

const Navbar = (props) => (

  <nav className="navbar navbar-light bg-info">
    <a href="/"className="navbar-brand mb-0 h1">Clicky Game</a>
    <span className="text-center mb-0 h3">{props.message}</span>
    <span className="navbar-text text-white">
      Score: <span>{props.score}</span> <span className="scoreSplit"> | </span>
      Top Score: <span>{props.topScore}</span>
    </span>
  </nav>
)
export default Navbar;