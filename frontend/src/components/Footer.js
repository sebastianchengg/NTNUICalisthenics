import React from "react";
import "./Footer.css";
import { InstagramLogo, FacebookLogo, MailLogo } from "./SocialLogos";

export const Footer = () => {
  var currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-container">
        <div className="social-container">
          <div className="creator-container">{currentYear + " - Calisthenics IT-crew"}</div>
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
