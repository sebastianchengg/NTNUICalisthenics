import React from "react";
import "./BackgroundPicture.css";

//Makes the smooth animation of the title
export const SmoothAnimation = () => {

  function show() {
    document.body.classList.remove("js-loading");
  }

  //All eventlisteners needed to avoid all bugs
  window.addEventListener("load", show, { once: true });
  window.addEventListener("click", show, { once: true });
  window.addEventListener("popstate", show, { once: true });
};

//Full size image used on the main page
export const MainPicture = ({ url, photographer }) => {
  SmoothAnimation();

  return (
    <>
      <div className={`picture-container ${url}`}>
        <div className="photographer">{photographer}</div>
      </div>
    </>
  );
};

//Half sized image
export const HalfPicture = ({ url, photographer, titleText }) => {
  return (
    <>
      <div className={`picture-container half ${url}`}>
        {titleText ? <div className="title">{titleText}</div> : null}
        <div className="photographer">{photographer}</div>
      </div>
    </>
  );
};
