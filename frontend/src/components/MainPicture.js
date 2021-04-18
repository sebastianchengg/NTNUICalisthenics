import React from "react";
import "./MainPicture.css";

export const MainPicture = (props) => {
  return (
    <>
      <div className="picture-container"></div>
      <div className="photographer">{props.photographer}</div>
    </>
  );
};
