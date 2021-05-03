import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import headerIMG from "../../images/welcome.gif"

function Header({ children }) {
  return (
    <div
      style={{ clear: "both", paddingTop: 0, textAlign: "center" }}
      className="header"
    >
      {children}

      <img className="header" src={headerIMG} alt="header.."></img>

      <button className="signup btn" src="">
        <Link
          activeStyle={{ color: "#FFFFFF", textDecoration: "none" }}
          to="/signup"
          className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
        >
          Sign Up
              </Link>
      </button>

      <button className="login btn">
        <Link activeStyle={{ color: "#FFFFFF", textDecoration: "none" }}
          to="/login"
          className={window.location.pathname === "/login"}
        >
          Login
            </Link>
      </button>
    </div>

  );
}

export default Header;
