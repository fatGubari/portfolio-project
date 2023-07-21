import React from "react";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Tech from "./Tech";
import Projects from "./Projects";
import Contact from "./Contact";
import Project from "./Project";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    <div className="bg-zinc-800">
      <Navbar />
      <div className="flex flex-col items-center justify-evenly flex-wrap">
        <AboutMe />
        <Tech />
        <Projects Project={Project} />
        <Contact />
        {/* <Routes> */}

        {/* <Route path="/" element={<AboutMe />} />
            <Route path="#Tech" element={<Tech />} />
            <Route path="#Projects" element={<Projects Project={Project} />} />
            <Route path="#Contact" element={<Contact />} /> */}

        {/* </Routes> */}
      </div>
    </div>
  );
}

export default App;
