import React from 'react';
import './style.css';

function Jumbotron () {
   return (
  <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Click the Character!</h1>
    <h3 className="lead">Click on an image to earn points, but don't click on any more than once!</h3>
  </div>
</div>
);
}

export default Jumbotron;