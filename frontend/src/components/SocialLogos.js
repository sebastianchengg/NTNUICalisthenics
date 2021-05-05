import React from "react";
import "./SocialLogos.css";

export const InstagramLogo = ({ extraCss }) => {
  return (
    <a
      href="https://www.instagram.com/ntnuicalisthenics/"
      target="_blank"
      rel="noreferrer"
      className={extraCss}
    >
      <i className="fab fa-instagram url" />
      </a>
  );
};

export const FacebookLogo = ({ extraCss }) => {
  return (
    <a
      href="https://www.facebook.com/ntnuicalisthenics"
      target="_blank"
      rel="noreferrer"
      className={extraCss}
      aria-hidden="true"
    >
      <i className="fab fa-facebook url" />
    </a>
  );
};

export const MailLogo = ({ extraCss }) => {
  return (
    <button
      onClick={(e) => {
        window.location = "mailto:calisthenics-leder@ntnui.no";
        e.preventDefault();
      }}
      className={`far fa-envelope url mail-logo ${extraCss}`}
    />
  );
};
