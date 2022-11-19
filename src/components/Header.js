import React, { useState } from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
function Header() {
  // for the mobile view
  const [showMenu, setShowMenu] = useState(false);

  function navigationLinks() {
    const list = (
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/job">MY JOB</NavLink>
        </li>
        <li>
          <NavLink to="/payment">MY PAYMENT</NavLink>
        </li>
        <li>
          <NavLink to="/offerletter">MY OFFERLETTER</NavLink>
        </li>
        <li>
          <NavLink to="/certificate">MY CERTIFICATE</NavLink>
        </li>
      </ul>
    );
    return list;
  }
  return (
    <>
      <nav className="navBar">
        <div className="navContainer">
          <div className="logoContainer">
            <img src="https://digipplus.com/static/homepage/imgs/digipplus-logo-70x70.38a25d5cef0d.png" />
            <h4>DIGIPLUS</h4>
          </div>
          <div className="navLinkContainer">{navigationLinks()}</div>

          <div className="profileContainer">
            <div className="profileImage">
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                <img src="https://cdn-icons-png.flaticon.com/512/2922/2922601.png" />
              </NavLink>
              <img />
            </div>
          </div>
          <div className="mobileMenu">
            <i
              class="fa-solid fa-bars"
              onClick={() => setShowMenu(!showMenu)}
            ></i>
          </div>
        </div>
      </nav>
      {showMenu && (
        <div className="sliderMenu">
          {navigationLinks()}
          <ul>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                PROFILE
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
