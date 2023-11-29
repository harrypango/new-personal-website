import React, { createContext, useState, useContext } from "react";

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [activeProjectType, setActiveProjectType] = useState("react");

  const setProjectType = (type) => {
    setActiveProjectType(type);
  };

  return (
    <ProjectContext.Provider value={{ activeProjectType, setProjectType }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext() {
  return useContext(ProjectContext);
}
