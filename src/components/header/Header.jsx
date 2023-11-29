import React, { useState } from "react";
import reactLogo from "../../assets/react.svg";
import { useProjectContext } from "../../ProjectContext";
import "./header.css";

function Header() {
  const { setProjectType } = useProjectContext();

  const handleProjectClick = (projectType) => {
    setProjectType(projectType);
  };
  const [activeLinks, setActiveLinks] = useState([false, true, false]);

  function activate(index) {
    const newActiveLinks = activeLinks.map((link, i) =>
      i === index ? true : false
    );
    setActiveLinks(newActiveLinks);
  }
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
            <a
              className={
                activeLinks[0] ? "project-link" : "project-link-nonactive"
              }
              onClick={() => {
                activate(0);
                handleProjectClick("vanilla");
              }}
            >
              VanillaJS
            </a>
            <a
              className={
                activeLinks[1] ? "project-link" : "project-link-nonactive"
              }
              onClick={() => {
                activate(1);
                handleProjectClick("react");
              }}
            >
              ReactJS
            </a>
            <a
              className={
                activeLinks[2] ? "project-link" : "project-link-nonactive"
              }
              onClick={() => {
                activate(2);
                handleProjectClick("wordpress");
              }}
            >
              Wordpress
            </a>
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
