import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h3>Portfolyo</h3>
      <ul>
        <li>
          <strong>Proje 1:</strong> <a href="https://github.com/sevvcoban" target="_blank" rel="noopener noreferrer">Eczacılık Takip Uygulaması</a>
        </li>
        <li>
          <strong>Proje 2:</strong> <a href="https://github.com/sevvcoban" target="_blank" rel="noopener noreferrer">İHA yazılım geliştirme projesi </a>
        </li>
      </ul>
    </div>
  );
} 