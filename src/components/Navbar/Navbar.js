import React from "react";
import './Navbar.css'

const Navbar = (props) => (

  <nav className="navbar navbar-light bg-info">
    <span className="navbar-brand mb-0 h1">Clicky Game</span>
    <span className="text-center mb-0 h3">{props.message}</span>
    <span className="navbar-text text-dark font-weight-bold">
      Score: <span>{props.score}</span> <span className="scoreSplit">|</span>
      Top Score: <span>{props.topScore}</span>
    </span>
  </nav>
)
export default Navbar;