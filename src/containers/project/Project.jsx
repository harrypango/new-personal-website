import React from "react";
import "./project.css";

function Project({ title, type, src, tag, href }) {
  return (
    <>
      <div className="projects__container-project">
        <a href={href} target="_blank">
          <img src={src} />
        </a>
        <div className="projects__container-details">
          <div className="projects__container-details_left">
            <h3>{title}</h3>
            <p>{type}</p>
          </div>
          <div className="projects__container-details_tag">
            <p>{tag}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
