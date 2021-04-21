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
  return (
    <>
      <div className={`picture-container half ${url}`}>
        {titleText ? <div className="title title-fade-in">{titleText}</div> : null}
        <div className="photographer">{photographer}</div>
      </div>
    </>
  );
};
