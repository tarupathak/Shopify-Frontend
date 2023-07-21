import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Components.css";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

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
            <Link to="/login">Login</Link>
          </li>
          <li>
            {auth ? (
              <Link to="/signup" onClick={logout}>
                Logout
              </Link>
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
