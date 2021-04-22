import React from "react";
import "./BackgroundPicture.css";


export const MainPicture = ({ url, photographer }) => {
  return (
    <>
      <div className={`picture-container ${url}`}>
        <div className="photographer">{photographer}</div>
      </div>
    </>
  );
};

export const HalfPicture = ({ url, photographer, titleText }) => {
  document.body.classList.add("js-loading");

  function show() {
    document.body.classList.add("js-loading");
    document.body.classList.remove("js-loading");
  }

  window.addEventListener("click", show);
  window.addEventListener("load", show);

  return (
    <>
      <div className={`picture-container half ${url}`}>
        {titleText ? <div className="title fade-in">{titleText}</div> : null}
        <div className="photographer">{photographer}</div>
      </div>
    </>
  );
};
