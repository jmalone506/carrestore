import React from "react";
import "./style.css";
import headerIMG from "../../images/welcome.gif"

function Header({ children }) {
  return (
    <div
      style={{ clear: "both", paddingTop: 0, textAlign: "center" }}
      className="header"
    >
      {children}
      <img className="header" src={headerIMG} alt="logo.."></img>
    </div>
  );
}

export default Header;
