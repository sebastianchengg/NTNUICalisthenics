import React from "react";
import "./LinkButton.css";
import { Link } from "react-router-dom";

export const InternalButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  extraCss,
  href,
  target,
}) => {
  //Only two possible styles and sizes
  const STYLES = ["btn-primary", "btn-outline"];
  const SIZES = ["btn-medium", "btn-large"];

  //"btn-primary" style is default if nothing is specified
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  //"btn-medium" style is default if nothing is specified
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${extraCss}`}
      onClick={onClick}
      type={type}
      href={href}
      target={target}
    >
      {children}
    </button>
  );
};

//Button to link internally on the site
export const LinkButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  url,
  extraCss,
}) => {
  return (
    <Link to={url} className="btn-mobile">
      <InternalButton
        children={children}
        type={type}
        onClick={onClick}
        buttonStyle={buttonStyle}
        buttonSize={buttonSize}
        extraCss={extraCss}
      />
    </Link>
  );
};

//Button to link to an external site
export const LinkButtonOutside = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  extraCss,
  href,
  target,
}) => {
  return (
    <a href={href} target={target}>
      <InternalButton
        children={children}
        type={type}
        onClick={onClick}
        buttonStyle={buttonStyle}
        buttonSize={buttonSize}
        extraCss={extraCss}
        href={href}
        target={target}
      />
    </a>
  );
};
