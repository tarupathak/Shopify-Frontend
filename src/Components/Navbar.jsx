import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Components.css";

const Navbar = () => {
  const auth = localStorage.getItem("user");
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
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            {auth ? (
              <Link to="/logout">Logout</Link>
            ) : (
              <Link to="/signup">Sign Up</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
