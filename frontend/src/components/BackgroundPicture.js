import React from "react";
import "./BackgroundPicture.css";

export const smoothAnimation = () => {
  function show() {
    document.body.classList.add("js-loading");
    document.body.classList.remove("js-loading");
  }

  document.body.classList.add("js-loading");

  window.addEventListener("click", show);
  window.addEventListener("load", show);
};

export const MainPicture = ({ url, photographer }) => {
  smoothAnimation();

  return (
    <>
      <div className={`picture-container ${url}`}>
        <div className="photographer">{photographer}</div>
      </div>
    </>
  );
};

export const HalfPicture = ({ url, photographer, titleText }) => {
  smoothAnimation();

  return (
    <>
      <div className={`picture-container half ${url}`}>
        {titleText ? <div className="title fade-in">{titleText}</div> : null}
        <div className="photographer">{photographer}</div>
      </div>
    </>
  );
};
