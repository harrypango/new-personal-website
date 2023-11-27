import React from "react";
import reactLogo from "../../assets/react.svg";
import "./header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <div className="header__container-left">
            <div className="header__container-left_heading">
              <div />
              <p>Hi, my name is Harry</p>
            </div>
            <div className="header__container-profession">
              <h1>I am a Frontend Developer</h1>
            </div>
          </div>

          <div className="header__container-right">
            <div />
            <p>
              My passion is building unique, responsive, and user-friendly web
              apps, while always making sure to meet client expectations and
              standards. Take a closer look at some of my projects below.
            </p>
          </div>
        </div>

        <div className="header__container-footer">
          <div className="header__container-footer_contact">
            <a href="mailto: harry.pango@gmail.com" target="_blank">
              <p>E-mail me!</p>
            </a>
          </div>

          <div className="header__container-footer_projects">
            <a href="#projects">VanillaJS</a>
            <a href="#projects">ReactJS</a>
            <a href="#projects">Wordpress</a>
          </div>

          <div className="header__container-footer_react">
            <a
              href="https://media.tenor.com/CWgfFh7ozHkAAAAC/rick-astly-rick-rolled.gif"
              target="_blank"
            >
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
