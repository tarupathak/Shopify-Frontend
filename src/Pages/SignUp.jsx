import React, { useState, useEffect } from "react";
import "./Pages.css";
import log from "../Assets/login.svg";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const Datas = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      navigate("/");
      localStorage.setItem("user",JSON.stringify(result))
    }
    
  };

  return (
    <div className="register">
      <div className="side-img">
        <img src={log} alt="login-img" />
      </div>
      <div className="login-box">
        <h1>Register</h1>
        <div className="inp-box">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <button onClick={Datas}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
