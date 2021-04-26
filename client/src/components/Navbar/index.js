import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import "./style.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Navbar() {



  return (

    <nav className="color-nav navbar navbar-expand-lg">


      <a className="navbar-brand" href="/cars"><img className="logo" src={logo} alt="logo.."></img></a>


      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
      </button>




      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              to="/cars"
              className={
                window.location.pathname === "/cars" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/buying"
              className={window.location.pathname === "/buying" ? "nav-link active" : "nav-link"}
            >
              Buying
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/selling"
              className={window.location.pathname === "/selling" ? "nav-link active" : "nav-link"}
            >
              Selling
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/maintenance"
              className={window.location.pathname === "/maintenance" ? "nav-link active" : "nav-link"}
            >
              Maintenance
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/accessorize"
              className={window.location.pathname === "/accessorize" ? "nav-link active" : "nav-link"}
            >
              Accessorize
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/forum"
              className={window.location.pathname === "/forum" ? "nav-link active" : "nav-link"}
            >
              Forum
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/history"
              className={window.location.pathname === "/history" ? "nav-link active" : "nav-link"}
            >
              Search History
            </Link>
          </li>
          
        </ul>
        
        <button className="btn-danger" >  <Link
          to="/"
          className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}
        >
          Logout
            </Link></button>
      </div>
    </nav>

  );
}
export default Navbar;
