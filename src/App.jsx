import React from "react";
import { Navbar, Header, Projects, Footer } from "./components";
import "./App.css";
import { ProjectProvider } from "./ProjectContext";

function App() {
  return (
    <>
      <div>
        <ProjectProvider>
          <Navbar />
          <Header />
          <Projects />
          <Footer />
        </ProjectProvider>
      </div>
    </>
  );
}

export default App;
