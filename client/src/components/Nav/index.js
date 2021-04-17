import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Nav() {
  return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <a className="navbar-brand" href="/">
//         React Reading List
//       </a>
//     </nav>
//   );
// }
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Car Hacks
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/discover"
              className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/selling" ? "nav-link active" : "nav-link"}
            >
              Selling
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
