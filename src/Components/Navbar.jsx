import React from "react";
import { Link } from "react-router-dom";
import "./Components.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="left">SHOPIFY</div>
      <div id="right">
        <ul className="nav">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          <li>
            <Link to="/update">Update Products</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
