import React, { useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import dashboard from "./assets/illustration-dashboard.png";
import fb from "./assets/fb.png";
import insta from "./assets/insta.png";
import x from "./assets/x.png";


function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = (e) => {
    e.preventDefault();
    setMessage("");
    if (email.trim() === "") {
      setError("Please enter an email");
      return;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please provide a valid email address");
      } else {
        setError("");
        setMessage(
          "Thank you for registering! We would reach out to you very soon!",
        );
        setEmail("");
      }
    }
  };

  const checkEmail = (e) => {
    const val = e.target.value;
    setEmail(val);
    if (val.trim() === "") {
      setError("");
      setMessage("");
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <h1>
        <span className="launch">We are launching</span> soon!
      </h1>
      <h4 className="subscribe">Subscribe and get notified</h4>

      <div className="inputrow">
        <div className="inputContainer">
          <div>
            <input
              className="inputiya"
              value={email}
              onChange={(e) => checkEmail(e)}
              type="text"
              placeholder="Your email address..."
            />
          </div>
          {error && <p className="err">{error}</p>}
          {message && <p className="mess">{message}</p>}
        </div>

        <div>
          <button onClick={(e) => handleEmail(e)} type="submit" className="btn">
            Notify me
          </button>
        </div>
      </div>

      <div className="dashboard">
        <img src={dashboard} alt="Dashboard" />
      </div>

      <div className="icons">
        <img src={fb} alt="Facebook" />
        <img src={insta} alt="Instagram" />
        <img src={x} alt="X" />
      </div>

      <p className="copyright">© Copyright Ping. All rights reserved.</p>
    </div>
  );
}

export default App;
