import React from "react";
import "./projects.css";
import hyperweb from "../../assets/hyperweb.png";
import bankly from "../../assets/bankly.png";
import bankist from "../../assets/bankist.png";
import calculator from "../../assets/calculator.png";

function Projects() {
  return (
    <>
      <div className="projects">
        <div className="projects__container">
          <div>
            <img src={hyperweb} />
            <p>Web Agency</p>
          </div>
          <div>
            <img src={bankly} />
            <p>Bankly App</p>
          </div>

          <div>
            <img src={bankist} />
            <p>Bankist App</p>
          </div>

          <div>
            <img src={calculator} />
            <p>Calculator App</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
