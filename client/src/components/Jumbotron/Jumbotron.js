import React from "react";
import "./style.css";
import headerIMG from "../../images/welcome.gif"

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    
    </div>
  );
}

export default Jumbotron;
