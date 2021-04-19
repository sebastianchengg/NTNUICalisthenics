import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="social-container">
          <div className="creator-container">2021 — Calisthenics IT-crew</div>
          <a
            href="https://www.instagram.com/ntnuicalisthenics/"
            target="_blank"
            class="fab fa-instagram"
          ></a>
          <a
            href="https://www.facebook.com/ntnuicalisthenics"
            target="_blank"
            class="fab fa-facebook"
          ></a>
        </div>
      </div>
    </>
  );
};
