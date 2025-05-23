import React from "react";
import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import "./SocialLinks.css";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://github.com/sevvcoban" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
    </div>
  );
} 