import React from "react";
import "./SocialLogos.css";

export const InstagramLogo = ({ extraCss }) => {
  return (
    <a
      href="https://www.instagram.com/ntnuicalisthenics/"
      target="_blank"
      rel="noreferrer"
      className={`fab fa-instagram url ${extraCss}`}
    />
  );
};

export const FacebookLogo = ({ extraCss }) => {
  return (
    <a
      href="https://www.facebook.com/ntnuicalisthenics"
      target="_blank"
      rel="noreferrer"
      className={`fab fa-facebook url ${extraCss}`}
    />
  );
};

export const MailLogo = ({ extraCss, eMail }) => {
  if (eMail) {
    return (
      <a
        onClick={(e) => {
          window.location = `mailto:${eMail}`;
          e.preventDefault();
        }}
        className={`far fa-envelope url ${extraCss}`}
      />
    );
  }
  return <></>;
};
