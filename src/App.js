import React from "react";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import "./index.css"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Home" element={<Home />}/>
    <Route path="/Project" element={<Project />}/>
    <Route path="/About" element={<About />}/>
    <Route path="/Contact" element={<Contact />}/>
   
   </Routes>
  );
}

export default App;
