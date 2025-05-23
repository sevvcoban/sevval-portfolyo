import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="profile-photo">
        <img src="/assets/profile.png" alt="Profil" />
      </div>
      <h2>Merhaba, Ben Şevval Çoban</h2>
      <p>Bilgisayar Mühendisliği Öğrencisi</p>
    </div>
  );
} 