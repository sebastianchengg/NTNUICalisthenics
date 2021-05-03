import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSessionContext } from "../context/session";
import "./Navbar.css";
import Logo from "../images/logo.png";

export const Navbar = () => {
  const session = useSessionContext();
  const [click, setClick] = useState(false);
  const [mobile, setMobile] = useState();
  const [homePage, setHomePage] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //sets variable to define if mobile-layout is needed
  const showMobile = () => {
    if (window.innerWidth <= 960) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  //sets variable to define backgroundcolor transparent/black
  const isHomePage = () => {
    if (window.location.pathname === "/") {
      setHomePage(true);
    } else {
      setHomePage(false);
    }
  };

  useEffect(() => {
    showMobile();
    isHomePage();
  }, [useLocation().pathname]);

  //Checks every time the mouse is clicked to apply changes to navbar
  window.addEventListener("resize", showMobile);

  return (
    <>
      <nav className={homePage ? "navbar" : "navbar not-home"}>
        <NavLink to="/" className="navbar-logo">
          <img className="logo" src={Logo} />
        </NavLink>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu-active" : "nav-menu"}>
          <NavLink
            to="/"
            className={mobile ? "nav-links-mobile" : "nav-links"}
            activeClassName={mobile ? "selected-mobile" : "selected"}
            exact
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>

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
            to="/leaderboard"
            className={mobile ? "nav-links-mobile" : "nav-links"}
            activeClassName={mobile ? "selected-mobile" : "selected"}
            exact
            onClick={closeMobileMenu}
          >
            Leaderboard
          </NavLink>

          <NavLink
            to={session.user ? "/profile" : "/login"}
            className={mobile ? "nav-links-mobile" : "nav-links"}
            activeClassName={mobile ? "selected-mobile" : "selected"}
            exact
            onClick={closeMobileMenu}
          >
            {session.user ? <i className="fas fa-user-circle"></i> : "Login"}
          </NavLink>
          
        </ul>
      </nav>
    </>
  );
};
