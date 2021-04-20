import React from "react";
import "./BackgroundPicture.css";

export const MainPicture = (props) => {
  return (
    <>
      <div className="main-picture-container" />
      <div className="photographer">{props.photographer}</div>
    </>
  );
};
