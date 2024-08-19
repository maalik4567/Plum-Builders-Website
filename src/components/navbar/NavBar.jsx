import React from "react";
import "../../app/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'


function Navbar() {
  return (
    <nav className="navbar navbar-custom bg-white navbar-expand-lg bg-light navbar-light">
      <a className="navbar-brand" href="#">
        <Image
          id="logo"
          src="/images/Logo2x.jpg"
          alt="Logo"
          draggable="false"
          height="40"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item">
            <a
              className="nav-link mx-2 text-uppercase nav-link-custom"
              href="#!"
            >
              <i className="fas fa-plus-circle pe-2"></i>Countertops
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link mx-2 text-uppercase nav-link-custom"
              href="#!"
            >
              <i className="fas fa-bell pe-2"></i>Architectural
            </a>
          </li>
          <li className="nav-item dropdown">
            <div className="text-uppercase btn-group dropup">
              <button
                type="button"
                className="btn dropdown-toggle nav-link-custom"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-plus-circle pe-2"></i>Commercial
              </button>
              <div className="dropdown-menu">{/* Content */}</div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <div className="text-uppercase btn-group dropup">
              <button
                type="button"
                className="btn dropdown-toggle nav-link-custom"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Stone & Products
              </button>
              <div className="dropdown-menu">{/* Content */}</div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
