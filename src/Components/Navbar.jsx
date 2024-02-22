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
        {auth ? (
          <ul className="nav">
            <li>
              <Link to="/" className="navItem">Products</Link>
            </li>
            <li>
              <Link to="/add-product" className="navItem">Add Products</Link>
            </li>
            <li>
              <Link to="/profile" className="navItem">Profile</Link>
            </li>

            <li>
              <Link to="/signup" onClick={logout} className="navItem">
                Logout ({JSON.parse(auth).name})
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="nav">
            <li>
              <Link to="/signup" className="navItem">Sign Up</Link>
            </li>
            <li>
              <Link to="/login" className="navItem">Login</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
