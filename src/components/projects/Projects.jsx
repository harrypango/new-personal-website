import React from "react";
import "./projects.css";
import Project from "../../containers/project/Project";
import { vanillaProjects } from "./vanillaProjects";
import { reactProjects } from "./reactProjects";
import { wpProjects } from "./wpProjects";
import { useProjectContext } from "../../ProjectContext";

function Projects() {
  const { activeProjectType } = useProjectContext();

  let projectsToShow = [];
  if (activeProjectType === "vanilla") {
    projectsToShow = vanillaProjects;
  } else if (activeProjectType === "react") {
    projectsToShow = reactProjects;
  } else if (activeProjectType === "wordpress") {
    projectsToShow = wpProjects;
  }
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
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
