import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import "./style.css";
import pic from "../../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Welcome() {



  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">


      <a class="navbar-brand d-lg-none" href="#"></a>
      <a className="navbar-brand" href="/"></a>


      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


      <div class="collapse navbar-collapse justify-content-between" id="navbarToggle">

   
        <a class="navbar-brand d-none d-lg-block" href="#"><img className="logo" src={pic} alt="logo.."></img></a>



        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/signup"
              className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link>
          </li>


        </ul>
      </div>
    </nav>
    

    

  );
}
export default Welcome;