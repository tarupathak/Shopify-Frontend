import React, { useState } from "react";
import "./Pages.css";
import log from "../Assets/login.svg";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const Data=() =>{
    console.warn(name,email,password);
  }

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
        <button onClick={Data}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
