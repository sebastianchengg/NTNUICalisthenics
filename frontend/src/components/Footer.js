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
            rel="noreferrer"
            className="fab fa-instagram spacing url"
          ></a>
          <a
            href="https://www.facebook.com/ntnuicalisthenics"
            target="_blank"
            rel="noreferrer"
            className="fab fa-facebook url"
          ></a>
        </div>
      </div>
    </>
  );
};
