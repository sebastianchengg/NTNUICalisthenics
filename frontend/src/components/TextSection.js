import React from "react";
import "./TextSection.css";

//Component to use if a section of text is needed
export const TextSection = ({ title, text, children }) => {
  return (
    <>
      <div className="text-section-container">
        <div className="text-section-title">{title}</div>
        {text || children ? (
          <div className="text-section-text">
            {text}
            {children}
          </div>
        ) : null}
      </div>
    </>
  );
};
