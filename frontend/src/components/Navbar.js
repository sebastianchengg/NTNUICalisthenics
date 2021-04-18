import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LinkButton } from "../components/LinkButton";
import "./Navbar.css";
import logo from "../images/logo.png";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img className="logo" src={logo} />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            About
          </Link>
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            Apply
          </Link>
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            FAQ
          </Link>
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            Contact
          </Link>
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            Leaderboard
          </Link>
        </ul>
      </nav>
    </>
  );
};
