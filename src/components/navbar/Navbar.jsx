import React, { useState } from "react";
import "./navbar.css";
import menuLogo from "../../assets/menuLogo.svg";
import logo from "../../assets/logo.svg";
import cv from "../../assets/cv.pdf";

function Navbar() {
  const [activeLinks, setActiveLinks] = useState([false, true, false]);

  function activate(index) {
    const newActiveLinks = activeLinks.map((link, i) =>
      i === index ? true : false
    );
    setActiveLinks(newActiveLinks);
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__links">
          <a
            href="https://github.com/harrypango"
            target="_blank"
            onClick={() => activate(0)}
            className={activeLinks[0] ? "active-link" : ""}
          >
            GitHub
          </a>
          <a
            href={cv}
            target="_blank"
            onClick={() => activate(1)}
            className={activeLinks[1] ? "active-link" : ""}
          >
            My CV
          </a>
          <a
            href="https://www.linkedin.com/in/hari-pango/"
            target="_blank"
            onClick={() => activate(2)}
            className={activeLinks[2] ? "active-link" : ""}
          >
            LinkedIn
          </a>
        </div>
        <div className="navbar__menu-icon">
          <p>Menu</p>
          <img src={menuLogo} alt="menuLogo" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
