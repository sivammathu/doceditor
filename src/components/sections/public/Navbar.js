import React from "react";
import "./Navbar.css";
import { WiDayLightning } from "react-icons/wi";
import { Link } from "react-router-dom";
import Shiva from "../../../images/shiva.jpeg";

const Navbar = () => {
  return (
    <div
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#7852B2" }}
      // style={{ backgroundColor: "#432372" }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar_icon">
          <WiDayLightning className="d-md-none navbar_logo" />
          <img
            src={Shiva}
            alt=""
            className="img-fluid rounded d-none d-md-inline me-3"
            style={{
              width: "70px",
              height: "100%",
            }}
          />

          <span className="fs-4 page_tlt d-md-none">SDApps</span>
          <span className="fs-4 page_tlt d-none d-md-inline">SmartDocApps</span>
        </Link>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0 pe-3"
            style={{ justifyContent: "flex-end", width: "100%" }}
          >
            <li className="nav-item pe-1">
              <Link className="nav-link navItems" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item pe-1">
              <a
                className="nav-link navItems"
                aria-current="page"
                href="www.google.com"
              >
                Login
              </a>
            </li>
            <li className="nav-item pe-1">
              <a
                className="nav-link navItems"
                aria-current="page"
                href="www.google.com"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
