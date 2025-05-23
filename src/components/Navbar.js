import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Şevval Çoban</h1>
      <ul>
        <li><a href="#home">Ana Sayfa</a></li>
        <li><a href="#about">Ben Kimim?</a></li>
        <li><a href="#skills">Neler Yapabilirim?</a></li>
        <li><a href="#portfolio">Portfolyo</a></li>
        <li><a href="#contact">İletişim</a></li>
      </ul>
    </nav>
  );
} 