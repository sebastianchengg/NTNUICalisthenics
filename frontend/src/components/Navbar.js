import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [mobile, setMobile] = useState();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showMobile = () => {
    if (window.innerWidth <= 960) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    showMobile();
  }, []);

  window.addEventListener("resize", showMobile);

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img className="logo" src={logo} />
        </NavLink>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu-active" : "nav-menu"}>
          <NavLink
            to="/about"
            className={mobile ? "nav-links-mobile" : "nav-links"}
            activeClassName={mobile ? "selected-mobile" : "selected"}
            exact
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/apply"
            className={mobile ? "nav-links-mobile" : "nav-links"}
            activeClassName={mobile ? "selected-mobile" : "selected"}
            exact
            onClick={closeMobileMenu}
          >
            Apply
          </NavLink>
          <NavLink
            to="/faq"
            className={mobile ? "nav-links-mobile" : "nav-links"}
            activeClassName={mobile ? "selected-mobile" : "selected"}
            exact
            onClick={closeMobileMenu}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className={mobile ? "nav-links-mobile" : "nav-links"}
            activeClassName={mobile ? "selected-mobile" : "selected"}
            exact
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
          <NavLink
            to="/leaderboard"
            className={mobile ? "nav-links-mobile" : "nav-links"}
            activeClassName={mobile ? "selected-mobile" : "selected"}
            exact
            onClick={closeMobileMenu}
          >
            Leaderboard
          </NavLink>
        </ul>
      </nav>
    </>
  );
};
