import React from "react";
import { useState } from "react";
import "../../style/navbar.css";
import logo from "../../res/_ .png";
import menuButton from "../../res/play.png";

export default function Navbar_Md() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="Navbar_Md">
      <nav className="body navbar navbar-expand-lg navbar-dark mx-2">
        <div className="container-fluid py-1">
          <a className="logo navbar-brand p-0" href="">
            <img src={logo} alt="logo" width={60}></img>
          </a>
          <div onClick={handleMenuClick}>
            <img src={menuButton} width={20}></img>
          </div>
        </div>
        {showMenu && (
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
        )}
      </nav>
    </div>
  );
}
