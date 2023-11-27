import React from "react";
import "./projects.css";
import Project from "../../containers/project/Project";
import hyperweb from "../../assets/hyperweb.png";
import bankly from "../../assets/bankly.png";
import weatherly from "../../assets/weather.png";
import calculator from "../../assets/calculator.png";

function Projects() {
  return (
    <>
      <div className="projects" id="projects">
        <div className="projects__container">
          <Project
            title="Hyperweb"
            type="Personal Web Agency"
            src={hyperweb}
            tag="Completed"
            href="https://hyperweb.al/"
          />
          <Project
            title="Bankly"
            type="Bank App"
            src={bankly}
            tag="Completed"
            href="https://bankly-h.netlify.app/"
          />
          <Project
            title="Weatherly"
            type="Weather App"
            src={weatherly}
            tag="In Progress"
            href="https://weatherly-app-h.netlify.app/"
          />
          <Project
            title="Calculator"
            type="Calculator App"
            src={calculator}
            tag="In Progress"
            href="https://simple-calculator-h.netlify.app/"
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
