import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/about">Pupster App</Link>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link
            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link
            className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            to="/discover">Discover</Link>
        </li>
        <li className="nav-item">
          <Link
            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            to="/search">Search</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar;