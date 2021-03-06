import React from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from "axios"
import "./style.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import swal from '@sweetalert/with-react';

function Navbar() {

  const History = useHistory();

  const logout = () => {
    axios.get("/logout")
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          swal("Logout", "Goodbye Car Hacker. Remember to check your tire pressure!", "success");
          History.push("/")
        }
      })
  }

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
              to="/notes"
              className={window.location.pathname === "/notes" ? "nav-link active" : "nav-link"}
            >
              Notes
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>


        </ul>

        <button className="btn-sm btn-danger" onClick={logout}>Log Out</button>
      </div>
    </nav>

  );
}
export default Navbar;
