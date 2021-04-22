import React, { useState, useEffect } from "react";
import { MainPicture } from "../components/BackgroundPicture";
import "./MainPage.css";
import { LinkButton } from "../components/LinkButton";

export const MainPage = () => {
  document.body.classList.add("js-loading");

  function show() {
    document.body.classList.add("js-loading");
    document.body.classList.remove("js-loading");
  }

  window.addEventListener("click", show);
  window.addEventListener("load", show);

  return (
    <>
      <MainPicture url="url-1" photographer="Foto: Nils Dittrich/NTNUI" />
      <div className="main-text fade-in">
        Master your own bodyweight
        <br />
          <LinkButton
            extraCss="apply-text"
            url="/apply"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Apply now <i className="fas fa-long-arrow-alt-right"></i>
          </LinkButton>
      </div>
    </>
  );
};

export default MainPage;
