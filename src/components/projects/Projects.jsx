import React from "react";
import "./projects.css";
import Project from "../../containers/project/Project";
import hyperweb from "../../assets/hyperweb.png";
import bankly from "../../assets/bankly.png";
import bankist from "../../assets/bankist.png";
import weatherly from "../../assets/weather.png";
import calculator from "../../assets/calculator.png";
import modernai from "../../assets/modernai.png";

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
            title="Modern AI"
            type="Modern Project"
            src={modernai}
            tag="In  Progress"
            href="https://modern-ai-hp.netlify.app/"
          />
          <Project
            title="Bankly"
            type="Bank App"
            src={bankly}
            tag="Completed"
            href="https://bankly-h.netlify.app/"
          />
          <Project
            title="Bankist"
            type="Simulated Bank App"
            src={bankist}
            tag="Completed"
            href="https://bankist-h.netlify.app/"
          />
          <Project
            title="Weatherly"
            type="Weather App"
            src={weatherly}
            tag="Completed"
            href="https://weatherly-app-h.netlify.app/"
          />
          <Project
            title="Calculator"
            type="Calculator App"
            src={calculator}
            tag="Completed"
            href="https://simple-calculator-h.netlify.app/"
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
