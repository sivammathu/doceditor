import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { WiDayLightning } from "react-icons/wi";
import Shiva from "../../../images/shiva.jpeg";

const Navbar = () => {
  return (
    <div
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#7852B2" }}
    >
      <div className="container-fluid">
        {/* <Link to="/" className="navbar_icon"> */}
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

        <span className="fs-3 page_tlt d-md-none">SDApps</span>
        <span className="fs-3 page_tlt d-none d-md-inline">SmartDocApps</span>
        {/* </Link> */}

        <button
          class="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0 pe-3"
            style={{ justifyContent: "flex-end", width: "100%" }}
          >
            <li class="nav-item pe-2">
              <a class="nav-link navItems" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item pe-2">
              <a class="nav-link navItems" aria-current="page" href="#">
                Login
              </a>
            </li>
            <li class="nav-item pe-2">
              <a class="nav-link navItems" aria-current="page" href="#">
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
