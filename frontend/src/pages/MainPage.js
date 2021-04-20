import React from "react";
import { MainPicture } from "../components/BackgroundPicture";
import "./MainPage.css";
import { LinkButton } from "../components/LinkButton";

export const MainPage = () => {
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
