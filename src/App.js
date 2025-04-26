import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import CircleNavbar from './Components/CircleNavbar'; // Import CircleNavbar component
import Hero from "./Components/Home/Hero";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
   
    <div className="App">
      <CircleNavbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
