import React, { useEffect, useState } from "react";
import "./navbar.css";
import openMenu from "../../assets/openMenu.svg";
import logo from "../../assets/logo.svg";
import cv from "../../assets/cv.pdf";
import closeMenu from "../../assets/closeMenu.svg";

const Menu = () => {
  const [activeLinks, setActiveLinks] = useState([false, true, false]);

  function activate(index) {
    const newActiveLinks = activeLinks.map((link, i) =>
      i === index ? true : false
    );
    setActiveLinks(newActiveLinks);
  }

  return (
    <>
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
    </>
  );
};

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__links">
          <Menu />
        </div>
        <div className="navbar__menu-icon">
          <img
            src={openMenu}
            alt="openMenu"
            onClick={() => setToggleMenu(true)}
          />
        </div>
      </div>
      {toggleMenu && (
        <div className="overlay">
          <div className="overlay_close">
            <p onClick={() => setToggleMenu(false)}>Close</p>
            <img onClick={() => setToggleMenu(false)} src={closeMenu} />
          </div>
          <div className="overlay_items">
            <Menu />
            <a href="mailto: harry.pango@gmail.com" target="_blank" rel="noreferrer">
              <p>E-mail me!</p>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
