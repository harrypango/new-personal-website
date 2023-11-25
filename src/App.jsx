import React from "react";
import { Navbar, Header, Projects, Footer } from "./components";
import "./app.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
