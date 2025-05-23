import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialLinks />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
