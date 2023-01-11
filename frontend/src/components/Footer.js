import React from "react";
import "./Footer.css";
import { InstagramLogo, FacebookLogo, MailLogo } from "./SocialLogos";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="social-container">
          <div className="creator-container">2023 — Calisthenics IT-crew</div>
          <InstagramLogo extraCss="spacing icon-scaling" />
          <FacebookLogo extraCss="spacing icon-scaling" />
          <MailLogo
            extraCss="icon-scaling"
            eMail={"calisthenics-leder@ntnui.no"}
          />
        </div>
      </div>
    </>
  );
};
