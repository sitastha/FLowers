import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo1 from "./Images/logo1.png";
export const NavigationBar = () => (
  <nav
    className="navbar navbar-expand-lg navbar-light "
    style={{ background: "#fff" }}
  >
    <a className="navbar-brand" href="/" style={{ padding: "0 5% 0" }}>
      <img src={logo1} alt="logo" height="50px" width="50px" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" style={{ float: "right" }}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="nav navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about">
            About
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="contact">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="shop">
            Shop
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="portfolio">
            portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="blog">
            blog
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
