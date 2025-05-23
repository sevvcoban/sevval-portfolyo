import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mesajınız gönderildi!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <h3>İletişim</h3>

      <div className="contact-info">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>+90 505 044 6603</span>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>cobansevval77@gmail.com</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ad Soyad"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Mail"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Mesaj"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}