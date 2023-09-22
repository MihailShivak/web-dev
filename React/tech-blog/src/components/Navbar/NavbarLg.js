import React from "react";
import "../../style/navbar.css";
import logo from "../../res/_ .png";

export default function NavbarLg() {
  return (
    <div className="NavbarLg">
      <nav className="body navbar navbar-expand-lg navbar-dark mx-2">
        <div className="py-1">
          <a className="logo navbar-brand p-0" href="">
            <img src={logo} alt="logo" width={60}></img>
          </a>
        </div>
        <div className="navbar-collapse px-1">
          <ul className="menu-container navbar-nav">
            <li className="nav-item">
              <a className="link-active nav-link active">Home</a>
            </li>
            <li className="nav-item">
              <a className="link nav-link">About</a>
            </li>
            <li className="nav-item">
              <a className="link nav-link">Support</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
