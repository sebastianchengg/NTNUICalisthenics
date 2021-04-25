import React from "react";
import "./Footer.css";
import {InstagramLogo, FacebookLogo, MailLogo} from "./SocialLogos";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="social-container">
          <div className="creator-container">2021 — Calisthenics IT-crew</div>
          <InstagramLogo extraCss="spacing"/>
          <FacebookLogo extraCss="spacing"/>
          <MailLogo />
        </div>
      </div>
    </>
  );
};
