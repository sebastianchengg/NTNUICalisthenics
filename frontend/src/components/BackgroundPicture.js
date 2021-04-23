import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./BackgroundPicture.css";

export const SmoothAnimation = () => {
  document.body.classList.add("js-loading");

  function show() {
    document.body.classList.add("js-loading");
    document.body.classList.remove("js-loading");
  }

  window.addEventListener("load", show);
  window.addEventListener("click", show);
  window.addEventListener("popstate", show);
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
  SmoothAnimation();

  return (
    <>
      <div className={`picture-container half ${url}`}>
        {titleText ? <div className="title fade-in">{titleText}</div> : null}
        <div className="photographer">{photographer}</div>
      </div>
    </>
  );
};
