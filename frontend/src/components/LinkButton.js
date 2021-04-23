import React from "react";
import "./LinkButton.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

const InternalButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  extraCss,
  href,
  target,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${extraCss}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

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
