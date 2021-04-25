import React from "react";
import "./BackgroundPicture.css";

export const SmoothAnimation = () => {
  document.body.classList.add("js-loading");

  function show() {
    document.body.classList.remove("js-loading");
  }

  //All eventlisteners needed to aviod all bugs
  window.addEventListener("load", show, {once: true});
  window.addEventListener("click", show, {once: true});
  window.addEventListener("popstate", show, {once: true});
};

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
