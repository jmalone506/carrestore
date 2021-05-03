import React from "react";
import "./style.css";


function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 260, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
