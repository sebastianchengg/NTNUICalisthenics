import React from "react";
import "./LinkButton.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const LinkButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  url,
  extraCss,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={url} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${extraCss}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
