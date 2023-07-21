import React, { useState, useEffect } from "react";
import "./Pages.css";
import log1 from "../Assets/login.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin=() =>{
    
  }
  return (
    <div className="register">
      <div className="side-img">
        <img src={log1} alt="login-img" />
      </div>
      <div className="login-box">
        <h1>Login</h1>
        <div className="inp-box">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inp-box">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} >Login</button>
      </div>
    </div>
  );
};

export default Login;
