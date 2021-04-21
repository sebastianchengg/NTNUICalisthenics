import React from "react";
import "./TextSection.css";

export const TextSection = ({ title, text }) => {
  return (
    <>
      <div className="text-section-container">
        <div className="text-section-title">{title}</div>
        <div className="text-section-text">{text}</div>
      </div>
    </>
  );
};
