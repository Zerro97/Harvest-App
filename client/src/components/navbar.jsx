import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Harvest</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/sermons" className="nav-link">Sermons</Link>
            </li>

            <li className="navbar-item">
              <Link to="/audios" className="nav-link">Audios</Link>
            </li>

            <li className="navbar-item">
              <Link to="/announcement" className="nav-link">Announcement</Link>
            </li>

            <li className="navbar-item">
              <Link to="/reimbursement" className="nav-link">Reimbursement</Link>
            </li>
          </ul>

          <div className="navbar-item ml-auto">
            <Link to="/login" className="nav-link">Log In</Link>
          </div>
          <div className="navbar-item">
            <Link to="/signup" className="nav-link">Sign Up</Link>
          </div>
        </div>
      </nav>
    );
  }
}