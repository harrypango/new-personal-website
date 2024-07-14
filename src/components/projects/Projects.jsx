import React, { useState, useEffect } from "react";
import "./projects.css";
import Project from "../../containers/project/Project";
import { vanillaProjects } from "./vanillaProjects";
import { reactProjects } from "./reactProjects";
import { wpProjects } from "./wpProjects";
import { useProjectContext } from "../../ProjectContext";

function Projects() {
  const { activeProjectType } = useProjectContext();
  const [projectsToShow, setProjectsToShow] = useState([]);

  useEffect(() => {
    if (activeProjectType === "vanilla") {
      setProjectsToShow(vanillaProjects);
    } else if (activeProjectType === "react") {
      setProjectsToShow(reactProjects);
    } else if (activeProjectType === "wordpress") {
      setProjectsToShow(wpProjects);
    }
  }, [activeProjectType]);

  return (
    <>
      <div className="projects" id="projects">
        <div className="projects__container">
          {projectsToShow.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              type={project.type}
              src={project.src}
              tag={project.tag}
              href={project.href}
              alt={project.alt}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
